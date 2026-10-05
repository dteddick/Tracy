# CLAUDE.md: TracyMortgageLady.com

Read this first. It is the project brief and the history of the original build conversation, so a new session can pick up exactly where we left off.

**Original chat (open on any device signed in to the same Claude account):**
https://claude.ai/code/session_01LdQirDqNdNXn59E52Tq2ao

**Working branch:** `claude/amazing-planck-mch4a3`

---

## Who the site is for

- **Tracy Freeman**, brand name **"Tracy the Mortgage Lady"**
- Mortgage broker / Mortgage Loan Originator, **NMLS #2174804**
- Company: **Mpire Financial Group LLC, NMLS #2108504**, 120 South Dillard Street, Winter Garden, FL 34787
  - Taken from public listings (Instagram, Facebook, BBB) because the Mpire website was blocked from the build environment. Public listings also show an Orlando office (189 S. Orange Ave Suite 2020, Orlando, FL 32801) and the name "Mpire Financial, LLC". **Tracy still needs to confirm the address and legal name with Mpire.**
- Based in Central Florida. Real estate investor herself. **Former nurse**, and that compassion is a core brand theme.
- Domain: **tracymortgagelady.com** (`CNAME` file already set)

## Rules Tracy gave (do not break these)

- **Phone 352-223-0712 is the ONLY contact info shown on the site.** No email address and no Mpire office phone anywhere on the site.
- Messaging that must stay on the site:
  - "There is no one-size-fits-all loan" / "There are more options for your real estate strategy"
  - **No W-2s and no tax returns** for DSCR, fix and flip and bank statement loans
  - **Ground-up construction loans are available**
  - **DSCR loans go up to 10 units**
  - Tracy can originate **DSCR and fix and flip loans in most states**
- Site must be schema-coded (JSON-LD), mobile-optimized and follow current SEO practice.
- Keep the licensing disclosure, the NMLS Consumer Access links and the Equal Housing Opportunity notice in the footer of every page.
- Don't invent reviews, ratings, rates, LTVs or statistics.

## How the site is built

Static HTML/CSS/JS, hosted on GitHub Pages. No framework.

| Path | Purpose |
|---|---|
| `src/layout.html` | Shared shell: `<head>` SEO/OG tags, header nav, footer disclosures, mobile Call/Text bar |
| `src/pages/*.html` | Page bodies. Each starts with a `<!--meta {...} -->` JSON block (path, title, description, service info) |
| `build.py` | Builds pages to the repo root, generates the JSON-LD `@graph` (FinancialService, Person, Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage from the visible FAQs) and `sitemap.xml` |
| `index.html`, `*/index.html`, `sitemap.xml` | **Generated.** Edit `src/` then run `python3 build.py`. Never hand-edit these |
| `styles.css`, `script.js` | Styles; mobile menu, DSCR calculator, Formspree form submit |
| `assets/` | `tracy-freeman.jpg/.webp` (headshot), `og-image.png` (social share image with photo), favicons |
| `robots.txt`, `site.webmanifest`, `CNAME` | SEO / PWA / custom domain |

Pages: `/`, `/dscr-loans/`, `/fix-and-flip-loans/`, `/ground-up-construction-loans/`, `/bank-statement-loans/`

**Contact form:** Formspree form ID `xbgdjbpy`. Includes a `_subject` and a `_gotcha` honeypot field. It submits with fetch and shows an inline thank-you.

**Before committing:** run `python3 build.py`, then check pages at 390px and 1366px widths: no horizontal scroll, valid JSON-LD, no broken local links. Chromium is at `/opt/pw-browsers/chromium` in cloud sessions.

## Conversation history (summary)

1. **Initial request:** website for Tracy's brand: Central Florida mortgage broker and investor, fix and flip, DSCR and other investor strategies, former nurse. Domain Tracymortgagelady.com. → Built a single-page site: hero, about, loan programs, investor strategies, DSCR calculator, process, FAQ, contact and footer disclosures.
2. **Details + SEO:** Tracy provided her name, NMLS and phone, and asked to look up Mpire's NMLS and address, use only her phone number, and add the messaging listed above plus schema, mobile optimization and SEO. → Restructured into a template + `build.py`, added 4 loan program landing pages, full JSON-LD, OG image, icons, robots/sitemap/manifest and the sticky mobile call bar.
3. **Headshot:** Tracy uploaded her photo. → Cropped and optimized it into `assets/tracy-freeman.*`, placed it in the hero, the Person schema and the OG image.
4. **Formspree:** Tracy created an account and provided form ID `xbgdjbpy`. → Wired up the form. It was verified with a simulated submission, because the cloud environment blocks formspree.io.
5. **GitHub:** pushes were blocked until Tracy reconnected GitHub, then everything was pushed to `claude/amazing-planck-mch4a3`.

## Open to-dos

- [ ] Turn on GitHub Pages (Settings → Pages → deploy from branch, `/ (root)`), set the custom domain, then enable HTTPS
- [ ] DNS at the registrar: A records `@` → 185.199.108.153 / .109.153 / .110.153 / .111.153; CNAME `www` → `dteddick.github.io`
- [ ] After launch: send a test through the contact form and click Formspree's confirmation email
- [ ] Confirm Mpire's address and legal name; have Mpire compliance review the disclosures and program copy
- [ ] Confirm the Central Florida service-area list (cities/counties in `src/pages/index.html` and `COUNTIES` in `build.py`), which was an assumption
- [ ] Google Search Console: verify the site and submit `sitemap.xml`
- [ ] Google Business Profile; then add profile URLs (Google, Facebook, LinkedIn, Instagram) as `sameAs` in `build.py`
- Ideas offered but not started: client reviews section, blog, Spanish-language page
