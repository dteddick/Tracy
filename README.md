# TracyMortgageLady.com

Website for **Tracy Freeman, "Tracy the Mortgage Lady"** (NMLS #2174804), a mortgage broker with Mpire Financial Group LLC (NMLS #2108504).

Static site: HTML, CSS and a little JavaScript. No server needed.

## Structure

| Path | What it is |
|---|---|
| `src/layout.html` | Shared page shell: `<head>` SEO tags, header, footer, licensing disclosures, mobile call bar |
| `src/pages/*.html` | Page content. Each starts with a `<!--meta {...} -->` block (URL, title, description) |
| `build.py` | Builds the pages into the repo root and generates the JSON-LD schema, FAQ schema and `sitemap.xml` |
| `index.html`, `*/index.html`, `sitemap.xml` | **Generated** output. Edit `src/` and rebuild, don't edit these by hand |
| `styles.css`, `script.js`, `assets/` | Styles, menu/calculator/form behavior, icons and social share image |

After editing anything in `src/`, run:

```sh
python3 build.py
```

## Pages

- `/`: home (about, loan programs, no-W-2/no-tax-return comparison, service area, investor strategies, DSCR calculator, FAQ, contact)
- `/dscr-loans/`
- `/fix-and-flip-loans/`
- `/ground-up-construction-loans/`
- `/bank-statement-loans/`

## SEO & schema

- Unique title, meta description, canonical URL, Open Graph and Twitter card tags on every page
- JSON-LD `@graph`: `FinancialService` (the business), `Person` (Tracy, NMLS), `Organization` (Mpire, NMLS), `WebSite`, `WebPage`, `Service` and `BreadcrumbList` on program pages, and `FAQPage` built from the visible FAQs
- `robots.txt` and `sitemap.xml`; one `<h1>` per page; descriptive internal links between programs
- Mobile: responsive layout, sticky Call/Text bar, 16px form inputs (no iOS zoom), tap-friendly buttons

Validate after launch with Google's Rich Results Test and https://validator.schema.org, then submit `sitemap.xml` in Google Search Console.

## To do before launch

- **Photo:** `assets/tracy-freeman.jpg` (+ `.webp`). To replace it, keep the same file names and a roughly 760×800 crop.
- **Contact form:** create a free form at https://formspree.io and replace `YOUR_FORM_ID` in `src/pages/index.html`. Until then, the form opens a text message to Tracy's phone.
- **Google Business Profile:** create or claim one. It's the biggest local SEO factor. Once you have profile links (Google, Facebook, LinkedIn, Instagram), add them as `sameAs` in `build.py`.
- **Compliance review:** have Mpire review the disclosures and program descriptions.

## Publishing on tracymortgagelady.com (GitHub Pages)

1. Register `tracymortgagelady.com`.
2. GitHub repo **Settings → Pages → Deploy from a branch**, choose the branch and `/ (root)`.
3. `CNAME` already contains `tracymortgagelady.com`. Enter it under **Custom domain**.
4. DNS at your registrar:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<github-username>.github.io`
5. Turn on **Enforce HTTPS**.
