import 'dotenv/config';
import express from 'express';
import Stripe from 'stripe';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4242;

let stripe = null;
if (process.env.STRIPE_SECRET_KEY) {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2024-11-20.acacia',
  });
} else {
  console.warn('⚠️  No STRIPE_SECRET_KEY found in env. Payment endpoints will return errors until configured.');
}

app.use(express.json());
app.use(express.static(__dirname)); // Serve index.html, styles.css, script.js, shop/, blog/, about/, assets/

// Product catalog — add a new entry here for each future volume/product.
const PRODUCTS = {
  vol1: {
    slug: 'sentence-mod-vol1',
    name: 'Inside Line: Volume One — Sentence Modification',
    desc: '69-page workbook with templates, worksheets, forms, and strategy',
    pdfFile: 'sentence-modification-vol1.pdf',
    downloadName: 'Inside-Line-Volume-One-Sentence-Modification.pdf',
    prices: { digi: 2900, paper: 5900, both: 6900 },
  },
  vol2: {
    slug: 'sentence-mod-vol2',
    name: 'Inside Line: Volume Two — Habeas Corpus',
    desc: 'Step-by-step workbook with templates, worksheets, forms, and strategy',
    pdfFile: 'habeas-corpus-vol2.pdf',
    downloadName: 'Inside-Line-Volume-Two-Habeas-Corpus.pdf',
    prices: { digi: 2900, paper: 5900, both: 6900 },
  },
};

// Create Stripe Checkout Session - supports digi / paper / both per product
app.post('/create-checkout-session', async (req, res) => {
  if (!stripe) {
    return res.status(500).json({ error: 'Stripe not configured. Set STRIPE_SECRET_KEY in .env' });
  }
  try {
    const origin = req.headers.origin || `http://localhost:${PORT}`;
    const variant = (req.body && req.body.variant) || 'digi';
    const productKey = (req.body && req.body.product) || 'vol1';
    const product = PRODUCTS[productKey];

    if (!product) {
      return res.status(400).json({ error: `Unknown product "${productKey}"` });
    }

    const priceAmount = product.prices[variant];
    if (!priceAmount) {
      return res.status(400).json({ error: `Unknown variant "${variant}"` });
    }

    const fulfillment = variant === 'paper' ? 'mail' : variant === 'both' ? 'both' : 'download';
    const editionLabel = variant === 'paper' ? 'Print Edition' : variant === 'both' ? 'Digital + Print Bundle' : 'Digital (PDF)';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${product.name} — ${editionLabel}`,
              description: product.desc,
            },
            unit_amount: priceAmount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      metadata: {
        fulfillment,
        productSlug: product.slug,
        variant,
      },
      success_url: `${origin}/pages/thank-you.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ error: 'Failed to create checkout session' });
  }
});

// API to get session info (used by thank-you to show correct message + download button)
app.get('/api/session', async (req, res) => {
  const id = req.query.id;
  if (!id) return res.status(400).json({ error: 'Missing id' });
  if (!stripe) return res.status(500).json({ error: 'Stripe not configured' });
  try {
    const s = await stripe.checkout.sessions.retrieve(id);
    res.json({
      payment_status: s.payment_status,
      metadata: s.metadata || {},
      customer_email: s.customer_details ? s.customer_details.email : null,
    });
  } catch (e) {
    res.status(400).json({ error: 'Could not retrieve session' });
  }
});

// Secure download — verifies payment first
app.get('/download', async (req, res) => {
  const sessionId = req.query.session_id;

  if (!sessionId) {
    return res.status(400).send('Missing session_id');
  }
  if (!stripe) {
    return res.status(500).send('Stripe not configured on server');
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return res.status(403).send('Payment not completed for this session.');
    }

    // Find the product this session paid for
    const meta = session.metadata || {};
    const product = Object.values(PRODUCTS).find((p) => p.slug === meta.productSlug);
    const allowed = (meta.fulfillment === 'download' || meta.fulfillment === 'both') && product;
    if (!allowed) {
      return res.status(403).send('This session is not authorized for the requested file.');
    }

    // Look for the PDF in downloads/
    const pdfPath = path.join(__dirname, 'downloads', product.pdfFile);

    if (!fs.existsSync(pdfPath)) {
      return res.status(404).send(
        `The PDF is not available yet. Please place your file at downloads/${product.pdfFile}`
      );
    }

    res.download(pdfPath, product.downloadName);
  } catch (err) {
    console.error(err);
    res.status(500).send('Could not verify your purchase or serve the file.');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Inside Line landing server running on http://localhost:${PORT}`);
  console.log('   Use a test key in .env for full Stripe flow. Test card: 4242 4242 4242 4242');
});
