// Build the downloadable PDF version of the DSCR article.
//
// Reads the generated article page (run `python3 build.py` first), wraps the
// <article> body in a print layout and saves assets/what-is-a-dscr-loan.pdf.
//
// Run:  NODE_PATH=$(npm root -g) node build-pdf.js
// Needs Playwright; in cloud sessions Chromium is at /opt/pw-browsers/chromium.
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = __dirname;
const SITE = 'https://tracymortgagelady.com/';
const SRC = path.join(ROOT, 'what-is-a-dscr-loan/index.html');
const OUT = path.join(ROOT, 'assets/what-is-a-dscr-loan.pdf');

const page = fs.readFileSync(SRC, 'utf8');
const article = page.match(/<article[^>]*>([\s\S]*?)<\/article>/)[1]
  .replace(/href="\.\.\//g, `href="${SITE}`)
  .replace(/<a href="\.\.\/#calculator">/g, `<a href="${SITE}#calculator">`);
const headshot = 'data:image/jpeg;base64,' +
  fs.readFileSync(path.join(ROOT, 'assets/tracy-freeman.jpg')).toString('base64');

const html = `<!doctype html>
<html lang="en-US"><head><meta charset="utf-8">
<title>What Is a DSCR Loan? | Tracy the Mortgage Lady</title>
<style>
  @page { size: Letter; margin: 0.7in 0.8in 0.8in; }
  body { font-family: "Inter", "Helvetica Neue", Arial, sans-serif; color: #1f2733; font-size: 11pt; line-height: 1.55; margin: 0; }
  a { color: #1e8a86; text-decoration: none; }
  a[href^="tel:"] { white-space: nowrap; }
  h1, h2 { font-family: Georgia, "Times New Roman", serif; color: #13304f; line-height: 1.2; }
  h1 { font-size: 24pt; margin: 0 0 6pt; }
  h2 { font-size: 14.5pt; margin: 18pt 0 6pt; break-after: avoid; }
  p { margin: 0 0 9pt; }
  .masthead { display: flex; align-items: center; gap: 16pt; padding-bottom: 14pt; margin-bottom: 18pt; border-bottom: 3pt solid #1e8a86; }
  .masthead img { width: 72pt; height: 72pt; border-radius: 50%; object-fit: cover; }
  .brand { font-family: Georgia, serif; color: #13304f; font-size: 13pt; font-weight: bold; }
  .brand em { color: #1e8a86; font-weight: normal; }
  .eyebrow { color: #e8735a; font-size: 8.5pt; font-weight: bold; letter-spacing: .12em; text-transform: uppercase; margin: 0 0 4pt; }
  .byline { color: #5c6878; font-size: 10pt; margin: 0; }
  ul.checks { list-style: none; padding: 0; margin: 0 0 9pt; }
  ul.checks li { padding-left: 18pt; position: relative; margin-bottom: 5pt; break-inside: avoid; }
  ul.checks li::before { content: "\\2713"; position: absolute; left: 0; color: #1e8a86; font-weight: bold; }
  .cta { background: #13304f; color: #fff; border-radius: 8pt; padding: 14pt 18pt; margin-top: 16pt; break-inside: avoid; }
  .cta strong { font-family: Georgia, serif; font-size: 14pt; display: block; }
  .cta a { color: #fff; }
  .disclosures { margin-top: 18pt; padding-top: 10pt; border-top: 1px solid #e4e0d8; color: #5c6878; font-size: 8pt; line-height: 1.45; break-inside: avoid; }
  .disclosures p { margin: 0 0 5pt; }
</style></head>
<body>
  <header class="masthead">
    <img src="${headshot}" alt="Tracy Freeman">
    <div>
      <div class="brand">Tracy <em>the Mortgage Lady</em></div>
      <p class="eyebrow">Investor Guide</p>
      <h1>What Is a DSCR Loan?</h1>
      <p class="byline">A plain-English guide for real estate investors &bull; By Tracy Freeman, NMLS #2174804</p>
    </div>
  </header>
  ${article}
  <div class="cta">
    <strong>Call or text Tracy: <a href="tel:+13522230712">352-223-0712</a></strong>
    <a href="${SITE}">tracymortgagelady.com</a>
  </div>
  <div class="disclosures">
    <p><strong>Tracy Freeman</strong>, Mortgage Loan Originator, NMLS #2174804 &bull; <strong>Mpire Financial Group LLC</strong>, NMLS #2108504 &bull; 120 South Dillard Street, Winter Garden, FL 34787</p>
    <p>This is not a commitment to lend. All loans are subject to credit approval, underwriting guidelines and property eligibility. Programs, rates, terms and conditions are subject to change without notice. Business-purpose investment property loans are available in most states; availability and requirements vary by state. Verify licensing at NMLS Consumer Access: <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/INDIVIDUAL/2174804">Tracy</a> and <a href="https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/2108504">Mpire</a>.</p>
    <p><strong>Equal Housing Opportunity</strong></p>
  </div>
</body></html>`;

(async () => {
  const browser = await chromium.launch(
    fs.existsSync('/opt/pw-browsers/chromium') ? { executablePath: '/opt/pw-browsers/chromium' } : {});
  const tab = await browser.newPage();
  await tab.setContent(html, { waitUntil: 'load' });
  await tab.pdf({
    path: OUT, format: 'Letter', printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: true, headerTemplate: '<span></span>',
    footerTemplate: '<div style="width:100%;font-size:7.5pt;color:#5c6878;text-align:center;font-family:Arial,sans-serif">tracymortgagelady.com &bull; 352-223-0712 &bull; Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
  });
  await browser.close();
  console.log('built', path.relative(ROOT, OUT));
})();
