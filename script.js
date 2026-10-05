// Mobile navigation
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

document.getElementById('year').textContent = new Date().getFullYear();

// DSCR calculator
const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const val = (id) => Math.max(0, parseFloat(document.getElementById(id).value) || 0);

function calcDSCR() {
  const price = val('c-price');
  const down = Math.min(val('c-down'), 100);
  const rate = val('c-rate') / 100 / 12;
  const n = Math.max(1, Math.round(val('c-term'))) * 12;
  const loan = price * (1 - down / 100);
  const pi = rate === 0 ? loan / n : loan * rate / (1 - Math.pow(1 + rate, -n));
  const pitia = pi + val('c-tax') + val('c-ins') + val('c-hoa');
  const rent = val('c-rent');

  document.getElementById('r-loan').textContent = money.format(loan);
  document.getElementById('r-pitia').textContent = money.format(pitia);

  const dscrEl = document.getElementById('r-dscr');
  const note = document.getElementById('r-note');
  if (pitia <= 0) {
    dscrEl.textContent = '–';
    note.textContent = '';
    return;
  }
  const dscr = rent / pitia;
  dscrEl.textContent = dscr.toFixed(2);
  note.textContent = dscr >= 1.25 ? 'Strong cash flow'
    : dscr >= 1.0 ? 'Meets common minimums'
    : dscr >= 0.75 ? 'May qualify with select lenders'
    : 'Let’s restructure this deal';
}
document.getElementById('dscr-form').addEventListener('input', calcDSCR);
calcDSCR();

// Contact form: sends via Formspree once configured, otherwise falls back to email.
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const data = new FormData(form);

  if (form.action.includes('YOUR_FORM_ID')) {
    const body = `Name: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')}\nInterest: ${data.get('interest')}\n\n${data.get('message')}`;
    window.location.href = `mailto:hello@tracymortgagelady.com?subject=${encodeURIComponent('Website inquiry: ' + data.get('interest'))}&body=${encodeURIComponent(body)}`;
    return;
  }

  status.textContent = 'Sending…';
  try {
    const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error();
    form.reset();
    status.textContent = 'Thank you! Tracy will be in touch shortly.';
  } catch {
    status.textContent = 'Something went wrong. Please call or email instead.';
  }
});
