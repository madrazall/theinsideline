// Simple checkout handler — only used if a page wires up the dynamic
// /create-checkout-session flow (server.js). Most pages use static
// Stripe Payment Link URLs directly and don't need this file.
async function startCheckout(variant = 'digi', product = 'vol1') {
  const btns = document.querySelectorAll('.checkout-btn');
  btns.forEach(b => {
    b.disabled = true;
    const orig = b.textContent;
    b.dataset.origText = orig;
    b.textContent = 'Connecting to Stripe…';
  });

  try {
    const res = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ variant, product }),
    });

    if (!res.ok) throw new Error('Server error');

    const data = await res.json();

    if (data.url) {
      window.location.href = data.url;
    } else {
      throw new Error(data.error || 'Could not start checkout');
    }
  } catch (err) {
    console.error(err);
    alert('Sorry — we could not start checkout right now. Please make sure the server is running and try again.');
    btns.forEach(b => { 
      b.disabled = false; 
      b.textContent = b.dataset.origText || 'Get Volume One';
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Hero button defaults to digi
  const heroBtn = document.getElementById('checkout-btn');
  if (heroBtn) heroBtn.addEventListener('click', () => startCheckout('digi'));

  // Pricing option buttons
  document.querySelectorAll('[data-variant]').forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.getAttribute('data-variant');
      const p = btn.getAttribute('data-product') || 'vol1';
      startCheckout(v, p);
    });
  });
});
