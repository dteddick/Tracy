#!/usr/bin/env python3
"""Build the static site.

Each file in src/pages/ starts with a <!--meta {...} --> JSON block, followed by
the page body. Pages are wrapped in src/layout.html and written to the repo
root (index.html, dscr-loans/index.html, ...). Structured data (JSON-LD),
the FAQ schema and sitemap.xml are generated here so they stay in sync with
the visible content.

Run:  python3 build.py
"""
import datetime
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).parent
SITE = "https://tracymortgagelady.com/"
PHONE = "+1-352-223-0712"

# Tracy's public profiles (schema sameAs only; phone stays the only contact shown on the site)
PROFILES = [
    "https://www.facebook.com/tracy.craleyknappfreeman",
]

# "Tracy the Mortgage Lady" brand profiles (FinancialService sameAs)
BRAND_PROFILES = [
    "https://www.instagram.com/tracymortgagelady",
]

ADDRESS = {
    "@type": "PostalAddress",
    "streetAddress": "120 South Dillard Street",
    "addressLocality": "Winter Garden",
    "addressRegion": "FL",
    "postalCode": "34787",
    "addressCountry": "US",
}

COUNTIES = ["Orange", "Seminole", "Osceola", "Lake", "Sumter", "Marion", "Polk",
            "Volusia", "Hernando", "Citrus", "Alachua"]

LOANS = [
    ("DSCR Loan", "dscr-loans/", "MortgageLoan"),
    ("Fix and Flip Loan", "fix-and-flip-loans/", "LoanOrCredit"),
    ("Ground-Up Construction Loan", "ground-up-construction-loans/", "LoanOrCredit"),
    ("Bank Statement Loan", "bank-statement-loans/", "MortgageLoan"),
    ("Bridge Loan", "#loans", "LoanOrCredit"),
    ("Cash-Out Refinance", "#loans", "MortgageLoan"),
    ("Home Purchase Loan (Conventional, FHA, VA, USDA)", "#loans", "MortgageLoan"),
]


def base_graph():
    return [
        {
            "@type": "Organization",
            "@id": SITE + "#mpire",
            "name": "Mpire Financial Group LLC",
            "url": "https://www.mpirefinancialgroup.com/",
            "identifier": {"@type": "PropertyValue", "propertyID": "NMLS", "value": "2108504"},
            "address": ADDRESS,
        },
        {
            "@type": "Person",
            "@id": SITE + "#tracy",
            "name": "Tracy Freeman",
            "alternateName": "Tracy the Mortgage Lady",
            "jobTitle": "Mortgage Loan Originator",
            "description": "Central Florida mortgage broker, real estate investor and former nurse helping investors and home buyers get to the closing table.",
            "url": SITE,
            "telephone": PHONE,
            "image": SITE + "assets/tracy-freeman.jpg",
            "identifier": {"@type": "PropertyValue", "propertyID": "NMLS", "value": "2174804"},
            "worksFor": {"@id": SITE + "#mpire"},
            "sameAs": PROFILES,
            "knowsAbout": ["DSCR loans", "Fix and flip loans", "Ground-up construction loans",
                           "Bank statement loans", "Real estate investing", "BRRRR strategy",
                           "First-time home buyer loans"],
        },
        {
            "@type": "FinancialService",
            "@id": SITE + "#business",
            "name": "Tracy the Mortgage Lady",
            "alternateName": "Tracy Freeman, Mortgage Broker",
            "description": "Mortgage broker offering DSCR loans up to 10 units, fix and flip, ground-up construction and bank statement loans with no W-2s or tax returns, plus home purchase loans in Central Florida.",
            "url": SITE,
            "telephone": PHONE,
            "logo": SITE + "assets/apple-touch-icon.png",
            "image": SITE + "assets/og-image.png",
            "address": ADDRESS,
            "founder": {"@id": SITE + "#tracy"},
            "employee": {"@id": SITE + "#tracy"},
            "parentOrganization": {"@id": SITE + "#mpire"},
            "sameAs": BRAND_PROFILES,
            "areaServed": [{"@type": "AdministrativeArea", "name": f"{c} County, FL"} for c in COUNTIES]
                          + [{"@type": "State", "name": "Florida"}, {"@type": "Country", "name": "United States"}],
            "knowsLanguage": "en",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Loan programs",
                "itemListElement": [
                    {"@type": "Offer", "itemOffered": {"@type": t, "name": n, "url": SITE + p}}
                    for n, p, t in LOANS
                ],
            },
        },
        {
            "@type": "WebSite",
            "@id": SITE + "#website",
            "url": SITE,
            "name": "Tracy the Mortgage Lady",
            "inLanguage": "en-US",
            "publisher": {"@id": SITE + "#business"},
        },
    ]


def strip_tags(s):
    return html.unescape(re.sub(r"<[^>]+>", "", s)).strip()


def faq_schema(body, url):
    qa = re.findall(r"<summary>(.*?)</summary>\s*<p>(.*?)</p>", body, re.S)
    if not qa:
        return None
    return {
        "@type": "FAQPage",
        "@id": url + "#faq",
        "mainEntity": [
            {"@type": "Question", "name": strip_tags(q),
             "acceptedAnswer": {"@type": "Answer", "text": strip_tags(a)}}
            for q, a in qa
        ],
    }


def build():
    layout = (ROOT / "src/layout.html").read_text()
    today = datetime.date.today().isoformat()
    sitemap = []

    for src in sorted((ROOT / "src/pages").glob("*.html")):
        raw = src.read_text()
        m = re.match(r"<!--meta\s*(\{.*?\})\s*-->\n", raw, re.S)
        meta = json.loads(m.group(1))
        body = raw[m.end():].rstrip("\n")
        path = meta["path"]
        url = SITE + path
        root = "../" * path.count("/")

        graph = base_graph()
        page = {
            "@type": "WebPage",
            "@id": url + "#webpage",
            "url": url,
            "name": meta["title"],
            "description": meta["description"],
            "isPartOf": {"@id": SITE + "#website"},
            "about": {"@id": SITE + "#business"},
            "primaryImageOfPage": SITE + "assets/og-image.png",
            "inLanguage": "en-US",
            "dateModified": today,
        }
        graph.append(page)

        if path:
            page["breadcrumb"] = {"@id": url + "#breadcrumb"}
            graph.append({
                "@type": "BreadcrumbList",
                "@id": url + "#breadcrumb",
                "itemListElement": [
                    {"@type": "ListItem", "position": 1, "name": "Home", "item": SITE},
                    {"@type": "ListItem", "position": 2, "name": meta["service"] + "s", "item": url},
                ],
            })
            graph.append({
                "@type": "Service",
                "@id": url + "#service",
                "name": meta["service"],
                "serviceType": meta["service"],
                "description": meta["serviceDesc"],
                "url": url,
                "provider": {"@id": SITE + "#business"},
                "areaServed": {"@type": "Country", "name": "United States"} if meta.get("nationwide")
                              else {"@type": "State", "name": "Florida"},
                "category": "Mortgage and real estate investment financing",
            })

        faq = faq_schema(body, url)
        if faq:
            graph.append(faq)

        schema = json.dumps({"@context": "https://schema.org", "@graph": graph}, indent=2, ensure_ascii=False)
        out = (layout
               .replace("{{schema}}", schema)
               .replace("{{body}}", body)
               .replace("{{title}}", html.escape(meta["title"]))
               .replace("{{description}}", html.escape(meta["description"]))
               .replace("{{url}}", url)
               .replace("{{root}}", root or "./"))
        dest = ROOT / path / "index.html"
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(out)
        sitemap.append((url, meta.get("priority", "0.7")))
        print("built", dest.relative_to(ROOT))

    entries = "\n".join(
        f"  <url><loc>{u}</loc><lastmod>{today}</lastmod><priority>{p}</priority></url>"
        for u, p in sitemap
    )
    (ROOT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"{entries}\n</urlset>\n"
    )
    print("built sitemap.xml")


if __name__ == "__main__":
    build()
