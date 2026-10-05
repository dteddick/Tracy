// Mobile navigation
const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
links.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

document.querySelectorAll('.year').forEach((el) => { el.textContent = new Date().getFullYear(); });

// DSCR calculator (homepage only)
const dscrForm = document.getElementById('dscr-form');
if (dscrForm) {
  const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  const val = (id) => Math.max(0, parseFloat(document.getElementById(id).value) || 0);

  const calcDSCR = () => {
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
  };
  dscrForm.addEventListener('input', calcDSCR);
  calcDSCR();
}

// Contact form: posts to Formspree once configured; until then, opens a text message to Tracy.
const form = document.getElementById('contact-form');
if (form) {
  const status = document.getElementById('form-status');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    const data = new FormData(form);

    if (form.action.includes('YOUR_FORM_ID')) {
      const msg = `Hi Tracy, this is ${data.get('name')}. I'm interested in a ${data.get('interest')}`
        + (data.get('location') ? ` in ${data.get('location')}` : '')
        + `. ${data.get('message') || ''} My phone: ${data.get('phone')}`;
      status.textContent = 'Opening your messages app… You can also call or text 352-223-0712.';
      window.location.href = `sms:+13522230712?&body=${encodeURIComponent(msg)}`;
      return;
    }

    status.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error();
      form.reset();
      status.textContent = 'Thank you! Tracy will be in touch shortly.';
    } catch {
      status.textContent = 'Something went wrong. Please call or text 352-223-0712.';
    }
  });
}
