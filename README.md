# TracyMortgageLady.com

Website for **Tracy the Mortgage Lady**, a Central Florida mortgage broker and real estate investor specializing in fix & flip, DSCR, bridge and home purchase loans.

It's a static site (HTML/CSS/JS, no build step). Open `index.html` in a browser to preview.

## Before going live: fill in your details

Search `index.html` for these placeholders and replace them:

| Placeholder | Where |
|---|---|
| `(000) 000-0000` / `+10000000000` / `+1-000-000-0000` | Phone in contact section and structured data |
| `hello@tracymortgagelady.com` | Email (also in `script.js`) |
| `Tracy [Last Name]`, `NMLS #000000` | Footer licensing disclosure (**required for mortgage advertising**) |
| `[Company Name]`, `Company NMLS #000000`, address | Footer |
| "Your photo here" block | Add `assets/tracy.jpg` and swap in the `<img>` shown in the comment |

Have your compliance contact or sponsoring company review the disclosures and loan program descriptions before publishing.

## Contact form

The form falls back to opening the visitor's email app. To receive submissions directly:
1. Create a free form at https://formspree.io
2. Replace `YOUR_FORM_ID` in `index.html` with your form ID.

## Publishing on tracymortgagelady.com (GitHub Pages)

1. Register `tracymortgagelady.com` with a registrar (GoDaddy, Namecheap, Squarespace, etc.).
2. In this repo on GitHub: **Settings → Pages → Deploy from a branch**, pick the branch and `/ (root)`.
3. The `CNAME` file already contains `tracymortgagelady.com`. Enter the same domain under **Custom domain**.
4. At your registrar, add DNS records:
   - `A` records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` for `www` → `<your-github-username>.github.io`
5. Once DNS resolves, tick **Enforce HTTPS**.

Netlify, Cloudflare Pages and Vercel also work: drag-and-drop the folder and point the domain there.
