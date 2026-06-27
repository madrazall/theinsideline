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

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-11-20.acacia',
});

app.use(express.json());
app.use(express.static(__dirname)); // Serve index.html, styles.css, script.js, pages/, assets/

// Create Stripe Checkout Session - supports digi $29 / paper $59 / both $69
app.post('/create-checkout-session', async (req, res) => {
  try {
    const origin = req.headers.origin || `http://localhost:${PORT}`;
    const variant = (req.body && req.body.variant) || 'digi';

    let priceAmount, productName, productDesc, fulfillment;

    if (variant === 'paper') {
      priceAmount = 5900;
      productName = 'Sentence Modification Guide — Print Edition';
      productDesc = 'Physical workbook shipped to you';
      fulfillment = 'mail';
    } else if (variant === 'both') {
      priceAmount = 6900;
      productName = 'Sentence Modification Guide — Digital + Print Bundle';
      productDesc = 'Immediate PDF access + printed copy shipped';
      fulfillment = 'both';
    } else {
      // digi
      priceAmount = 2900;
      productName = 'Sentence Modification Guide — Digital (PDF)';
      productDesc = '69-page workbook with templates, worksheets, forms, and strategy — instant PDF';
      fulfillment = 'download';
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: productName,
              description: productDesc,
            },
            unit_amount: priceAmount,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      metadata: {
        fulfillment,
        productSlug: 'sentence-mod-vol1',
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

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== 'paid') {
      return res.status(403).send('Payment not completed for this session.');
    }

    // The product we care about — allow digi or both
    const meta = session.metadata || {};
    const allowed = (meta.fulfillment === 'download' || meta.fulfillment === 'both') && meta.productSlug === 'sentence-mod-vol1';
    if (!allowed) {
      return res.status(403).send('This session is not authorized for the requested file.');
    }

    // Look for the PDF in downloads/
    const pdfPath = path.join(__dirname, 'downloads', 'sentence-modification-vol1.pdf');

    if (!fs.existsSync(pdfPath)) {
      return res.status(404).send(
        'The PDF is not available yet. Please place your file at downloads/sentence-modification-vol1.pdf'
      );
    }

    res.download(pdfPath, 'Sentence-Modification-Guide-Volume-One.pdf');
  } catch (err) {
    console.error(err);
    res.status(500).send('Could not verify your purchase or serve the file.');
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Inside Line landing server running on http://localhost:${PORT}`);
  console.log('   Open the site, click "Get Volume One", then use test card 4242 4242 4242 4242');
});
