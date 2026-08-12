# Blue Hills Property Maintenance — website

Static marketing site for **Blue Hills Property Maintenance Pty Ltd** (Pakenham VIC),
built from the approved Claude Design brand board. No runtime, no framework, no build
dependencies — the generated HTML in the repo root is the deployable site.

**Production domain:** https://www.bluehillsgpm.com.au (GoDaddy hosting)

---

## Layout

```
/                       index.html          Home
/about/                 about/index.html
/contact/               contact/index.html  Quote form, NAP, map
/lawn-mowing/           service page
/acreage-mowing/        service page
/hedge-trimming/        service page
/garden-maintenance/    service page  (#pruning anchor)
/weed-control/          service page
/body-corporate/        service page
/commercial-property/   service page
404.html                                    Custom not-found page

assets/css/style.css    Complete design system (single stylesheet)
assets/js/site.js       Mobile nav, services dropdown, before/after slider, form
assets/img/*.webp       All photography, optimised (~6 MB total, 36 images)

sitemap.xml  robots.txt  llms.txt  site.webmanifest  favicon.ico  .htaccess

build/                  Generator source (see below)
```

## Editing the site

Do **not** hand-edit the generated `.html` files — they are overwritten on every build.
Change the source under `build/`, then regenerate:

```bash
node build/build.mjs
```

Requires Node 18+. No `npm install` needed.

| File | What lives there |
| --- | --- |
| `build/site.config.mjs` | Business NAP, suburbs, service list, image paths. Single source of truth. |
| `build/layout.mjs` | `<head>`, header, footer, CTA band, JSON-LD graph helpers. |
| `build/pages/home.mjs` | Home page content. |
| `build/pages/about.mjs` | About page content. |
| `build/pages/contact.mjs` | Contact page and quote form. |
| `build/pages/services-data.mjs` | Copy, facts and FAQs for all seven service pages. |
| `build/pages/service-template.mjs` | Shared service page layout. |
| `build/build.mjs` | Writes pages plus sitemap, robots, llms.txt, manifest, `.htaccess`. |

Changing a phone number, email or suburb in `site.config.mjs` updates every page,
every schema block and `llms.txt` in one rebuild.

## Deploying

Upload the repo root (excluding `build/`, `.git/` and `README.md`) to the web root.
`.htaccess` handles HTTPS, the `www` canonical host, trailing-slash URLs, gzip,
cache headers and the 404 document on Apache/cPanel hosting.

## SEO / AEO / GEO

- Unique title, meta description, canonical, Open Graph and Twitter tags per page.
- JSON-LD `@graph` on every page: `LandscapingBusiness` + `LocalBusiness` (NAP, geo,
  18 × `areaServed`, `hasOfferCatalog`, `sameAs`), `WebSite`, `WebPage`,
  `BreadcrumbList`, and per-page `Service`, `FAQPage`, `ImageGallery`, `ContactPoint`.
- Answer-first paragraph under every H1 and a citable "Key facts" table per service
  page, for answer engines and AI overviews.
- `llms.txt` gives AI crawlers a machine-readable business summary; `robots.txt`
  explicitly allows GPTBot, PerplexityBot, ClaudeBot, Google-Extended and friends.
- Descriptive, keyword-bearing image filenames and alt text throughout.
- Accessibility: skip link, landmarks, visible focus rings, keyboard-operable
  navigation and before/after slider, `prefers-reduced-motion` support.

## Address policy

The registered address is the owners' home, so **no street address is published**
anywhere — not in the footer, not on the contact page, and not in the
`PostalAddress` schema. Blue Hills is treated as a service-area business:
suburb, region, `geo` and 18 `areaServed` entries carry the local-search signal.
Google Business Profile should be set to "I deliver goods and services to my
customers" with the address hidden, to stay consistent with the site.

## Known follow-ups

1. **Quote form** currently opens the visitor's mail client (`mailto:`) so no enquiry
   is lost on static hosting. Point it at a real POST endpoint (Formspree, Netlify
   Forms or a GoDaddy PHP handler) when one is available.
2. **Opening hours** were not supplied, so no hours are published or added to
   `openingHoursSpecification`. Add them to `site.config.mjs` and `layout.mjs` once
   confirmed against the Google Business Profile.
3. **Reviews** — no `aggregateRating` is published, since inventing one is a schema
   violation. Once Google reviews are syndicated, add real review data.
4. **Missing photo sets.** Three files in the Drive "Photo Changes" folder could not
   be retrieved (`Hedge Trimming 6 -.jpeg` exceeds the 10 MB connector limit;
   the two "OPENING IMAGE" files time out). No photos were supplied for Garden
   Maintenance, Weed Control or Commercial Property, and no replacement
   before/after transformation pair. Those sections still use design-bundle images.
5. **Duplicate photos.** The Photo Changes set overlapped the design bundle in five
   places — the same photograph supplied twice under different names. Duplicates
   were removed and references consolidated; `scratchpad` perceptual-hash checks
   confirm no page shows the same image twice. Re-run that check when new photos
   land.
