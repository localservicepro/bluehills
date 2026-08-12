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
/contact/               contact/index.html  Quote form in hero, NAP, map
/thank-you/             thank-you/index.html  Post-submit confirmation (noindex)
/lawn-mowing/           service page
/acreage-mowing/        service page
/hedge-trimming/        service page
/garden-maintenance/    service page  (#pruning anchor)
/weed-control/          service page
/body-corporate/        service page
/commercial-property/   service page
404.html                                    Custom not-found page

assets/css/style.css    Complete design system (single stylesheet)
assets/js/site.js       Mobile nav, services dropdown, before/after slider,
                        quote modal, quote-form submit + redirect
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

## Quote capture

There is one quote form, defined once as `quoteForm(id)` in `build/layout.mjs`
and rendered in two places:

- **Contact page** — inline in the hero, beside the H1, so a lead meets it
  without scrolling. On mobile it sits directly under the headline.
- **Every other page** — inside `<dialog id="quote-modal">`, opened by any
  element carrying `data-quote-open`.

Every quote CTA is a real `<a href="/contact/">`. The script upgrades those
links into modal triggers, so with JavaScript disabled a visitor simply lands
on the contact page and its inline form — nothing is lost. On the contact page
itself (no modal present) the same CTAs scroll to the form and focus it.

Body sections carry a single quote CTA only; call and email buttons were
removed from page bodies at the client's request. The phone number remains in
the header, the footer, the contact page and the mobile sticky bar.

### GoHighLevel integration

`external-tracking.js` (tracking id `tk_32ff295ccd334631b71115e471523a19`) is
loaded in `<head>` on every page, and the form is built to GHL's capture rules:
rendered in the page DOM inside a real `<form>` (no iframe), no disabled
fields, a native `<button type="submit">`, and `<input type="email"
name="email">` / `<input type="tel" name="phone">` for contact matching.

**Field `name` attributes are the CRM keys. Do not rename them:**

| Field | `name` | GHL token |
| --- | --- | --- |
| Full name | `full_name` | `{{contact.full_name}}` |
| Email | `email` | `{{contact.email}}` |
| Phone | `phone` | `{{contact.phone}}` |
| Service needed | `service_needed` | `{{contact.service_needed}}` |
| Property address | `property_address` | `{{contact.property_address}}` |
| Property size | `property_size` | `{{contact.property_size}}` |
| Job notes | `job_notes` | — |

The form has **no `action` attribute** — it targets the current HTTPS page.
Do not set `action="mailto:..."`: a `mailto:` URL is not "potentially
trustworthy", so Chrome marks the whole form insecure, disables autofill and
shows the visitor *"This form is not secure. Autofill has been turned off."*

**GHL is the only delivery path.** On submit, `site.js` disables the button,
shows "Sending your request…", waits 600ms so the tracker's beacon can go out,
then sends the visitor to `/thank-you/`. There is no email fallback: if Form
Submissions is switched off in GHL, enquiries are lost silently. A `<noscript>`
block points JavaScript-less visitors at the phone number and email.

The handler is written not to interfere with capture: it never calls
`stopPropagation()`, so the submit event still reaches GHL's document-level
listener, and `preventDefault()` only cancels the browser's own navigation.
Keep both properties if you edit it.

Form Analytics and Form Submissions must be enabled in the GHL settings for
this to record anything — that is a dashboard setting, not a code change.

`/thank-you/` is `noindex, follow` and deliberately left out of `sitemap.xml`.
It is also the natural conversion trigger for GHL workflows and Google Ads.

## Address policy

The registered address is the owners' home, so **no street address is published**
anywhere — not in the footer, not on the contact page, and not in the
`PostalAddress` schema. Blue Hills is treated as a service-area business:
suburb, region, `geo` and 18 `areaServed` entries carry the local-search signal.
Google Business Profile should be set to "I deliver goods and services to my
customers" with the address hidden, to stay consistent with the site.

## Known follow-ups

1. **Quote form has no server-side backup.** Delivery depends entirely on the
   GoHighLevel tracker. Confirm a real submission lands in the CRM before relying
   on it, and consider adding a POST endpoint (Formspree, Netlify Forms or a
   GoDaddy PHP handler) as a second copy of every lead.
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
