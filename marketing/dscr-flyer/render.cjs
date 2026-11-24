// Renders flyer.html to DSCR-Flyer.png (2160x2160) and DSCR-Flyer.pdf.
// Run from the repo root:
//   NODE_PATH=$(npm root -g) node marketing/dscr-flyer/render.cjs "$PWD/marketing/dscr-flyer/flyer.html" "$PWD/marketing/dscr-flyer/DSCR-Flyer"
const { chromium } = require('playwright');
const [html, out] = process.argv.slice(2);
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  const p = await b.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 2 });
  await p.goto('file://' + html, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  const over = await p.evaluate(() => [...document.querySelectorAll('section,footer,.how,.stat')].map(e => [e.className, e.scrollHeight > e.clientHeight + 1, Math.round(e.getBoundingClientRect().bottom)]));
  console.log(JSON.stringify(over));
  await p.screenshot({ path: out + '.png' });
  await p.pdf({ path: out + '.pdf', width: '1080px', height: '1080px', printBackground: true, pageRanges: '1' });
  await b.close();
})();
