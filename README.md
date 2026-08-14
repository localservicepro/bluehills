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
/weed-control/          service page  (Weed Management, Block Slashing &
                                       Vegetation Management — see below)
/body-corporate/        service page
/commercial-property/   service page
404.html                                    Custom not-found page

assets/css/style.css    Complete design system (single stylesheet)
assets/js/site.js       Mobile nav, services dropdown, before/after slider,
                        quote modal, quote-form submit + redirect
assets/img/*-<w>.webp   Photography at 400/640/900/1200 widths for srcset
assets/fonts/*.woff2    Self-hosted Lato + Playfair, subset to used glyphs

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
the header, the footer, the contact page and the mobile menu.

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

## Performance

PageSpeed mobile found four real problems; all four are addressed in the build.

**Render-blocking.** The GoHighLevel tracker sat in `<head>` with no `defer`
and held first paint for 3.1s. It now carries `defer` plus a `preconnect`.
`defer` still runs it before `DOMContentLoaded`, so its submit listener is
attached long before anyone can fill in the form — do not change this to
`async`, which would make ordering unpredictable.

**The stylesheet is inlined** into every page at build time from
`assets/css/style.css` (minified in `build/layout.mjs`). It costs ~7 KB
gzipped per document and removes a blocking round trip. Edit the `.css` file,
never the generated HTML.

**Fonts are self-hosted** from `assets/fonts/`, subset to the ~196 characters
the site renders (`scratchpad/subsetfonts.py`). This removes the DNS + TLS +
CSS round trip to Google Fonts before a glyph can start downloading. Three are
preloaded: Playfair 400, Playfair 400 italic and Lato 400 — the faces used in
the H1 and body copy. If you add a weight to the CSS, add the file too or it
silently falls back.

**Images ship as width variants.** `scratchpad/variants.py` writes
`name-400/640/900/1200.webp`; `imgTag()` in `build/layout.mjs` emits the
srcset and page code keeps referring to the logical `name.webp`. The `sizes`
values live in `SIZES` and must match the real CSS layout — if a grid changes,
update them or the browser picks the wrong file. On a 412px phone the hero now
loads the 900 variant at 138 KB instead of the 1200 at 245 KB.

Measured initial mobile load (412px @1.75 DPR, gzipped where applicable):
images 144 KB, fonts 131 KB, third-party JS 81 KB, HTML 17 KB, own JS 3 KB —
**375 KB total**, against roughly 1.1 MB of images alone before this pass.

Two flagged items are third-party and not fixable from here: the tracker's
66 KB of unminified JavaScript, and a 32ms forced reflow attributed to it.

## Copy grids and motion

`.grid-2--copy` pairs a short heading column with a long prose column. Left
alone that leaves a screen-high void under the heading. Three things fix it,
and they interact — change one and check the others:

1. **The heading column is narrower** (`0.82fr 1.18fr` at ≥901px). The prose is
   what the reader came for.
2. **Heading-only columns are sticky**, so the heading tracks the reader down
   the prose instead of sitting above nothing. `align-self: start` is what makes
   this work at all — a stretched grid item is already as tall as the row, so it
   has nowhere to stick to. The rule is scoped
   `:not(:has(.copy-grid__aside))` on purpose: a sticky element can only travel
   the difference between the two column heights, so a column that also carries
   the quote block unsticks a third of the way down, which reads as a glitch.
3. **Service pages fill the column instead** — `.copy-grid__aside` puts a rule,
   a one-line promise and the quote CTA under the heading. Home and About have
   no aside, so they take the sticky path.

Every child of `.copy-grid__head` and `.copy-grid__body` fades up on scroll via
an `IntersectionObserver` in `site.js`, staggered 90ms and capped at four steps.
Two safeguards matter:

- The hidden state is gated on `.js`, set by a tiny inline script in `<head>`
  so the copy never paints and then disappears.
- That same script arms a 2s timer that adds `.reveal-all`; `site.js` clears it
  on run. If `site.js` ever fails to load, the copy appears anyway rather than
  leaving blank columns.

`prefers-reduced-motion: reduce` skips the animation entirely — the copy is
simply visible. `scratchpad/revealtest.mjs` covers all of it, including the
script-blocked and reduced-motion paths.

## Mobile

Breakpoint is 900px. Below it:

- The header is **logo + menu button only** — 69px tall. The topbar, the phone
  number and the Free Quote button are all hidden until the menu is opened,
  because a sticky header eating 125px of a phone screen is a real cost.
- Open state lives on `.site-header.nav-open`, not on the `<ul>`. The `<nav>`
  wrapper carries `order` and `width:100%`; putting those on the inner list
  alone leaves the menu sharing row one with the logo.
- The menu button is also the close button: bars animate to an X and the label
  swaps Menu/Close. The menu also closes on a second tap, on any link tap, on
  a tap outside the header, on Escape, and on resize past 900px.
- Hover-to-open for the services dropdown is wrapped in
  `@media (hover: hover) and (min-width: 901px)`. Without that gate the
  `:hover` rule out-specifies `.is-open` and the submenu will not expand on
  touch.
- There is no sticky bottom call bar.

`scratchpad/mobileaudit.mjs` walks six pages at 360/390/414/768 and fails on
horizontal overflow, elements wider than the viewport, tap targets under 40px,
text under 10px, a header over 90px, and any break in the menu open/close/
submenu behaviour. Run it after touching layout CSS.

Note the 10px uppercase micro-labels (`.svc-card__num`, `.work-card__label`,
`.compare__tag`, `.brand__tag`) are deliberate brand-board styling, which is
why the audit floor is 10px rather than 12px.

## Address policy

The registered address is the owners' home, so **no street address is published**
anywhere — not in the footer, not on the contact page, not on the About page,
and not in the `PostalAddress` schema. Blue Hills is treated as a service-area
business: suburb, region, `geo` and 18 `areaServed` entries carry the
local-search signal. Google Business Profile should be set to "I deliver goods
and services to my customers" with the address hidden, to stay consistent with
the site.

Two suburb-level references to `3810` remain and are deliberate: `postalCode`
in the `PostalAddress` node, and the contact-page map embed, which is centred on
`Pakenham VIC 3810` rather than a property. Neither identifies a dwelling, and
both are load-bearing for local search. Everything else is suburb + state only
(`Pakenham, VIC`).

## Green waste policy

Green waste is **not** automatically taken off site. The copy on
`/garden-maintenance/` and `/hedge-trimming/` says so explicitly, because
claiming otherwise sets an expectation the crew cannot always meet:

- Cuttings, prunings, weeds and leaf litter are **always** raked up, collected
  and cleaned up. The client is never left with a pile.
- Green waste **leaves the property** when removal is stipulated in the
  proposal — quoted in when the volume warrants it.
- On smaller jobs, where appropriate, the client's own green bin is used —
  filled sensibly and **never overfilled**.
- Lawn clipping removal is separately and consistently described as an add-on
  that is not in the $99 visit price.

If you edit either page, keep all four conditions. "All green waste removed"
is the phrasing to avoid.

## Weed page naming

The page at `/weed-control/` is titled **Weed Management, Block Slashing &
Vegetation Management** and covers three things: weed treatment on maintained
properties, slashing of vacant blocks and paddocks, and heavier vegetation
clearing (including council fire-prevention notices).

**The URL slug stays `weed-control`.** It is the indexed URL and `weed control
Pakenham` is still a real search query — the term is retained in `keywords`
and in `llms.txt` citation guidance even though the visible name changed.
Navigation uses the shorter `Weed & Vegetation Management`
(`services[].nav` in `site.config.mjs`); the full name is the H1, the page
title and `schemaName`.

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
5. **Lawn mowing runs entirely on client photography.** All six "Lawn Mowing"
   files from the Drive *Photo Changes* folder are on that page and nothing
   else is: Lawn Mowing 4 is the hero, 5 is the pricing feature shot, and
   1, 2, 3 and 6 are the Recent Work tiles. Both promoted files were
   re-encoded from the originals at 1200px (the first pass had capped them at
   900) — the sources are in the scratchpad `dl/` folder if they need redoing.
6. **No photos for the renamed weed page.** There are no block slashing or
   vegetation management photographs in the supplied sets, so `/weed-control/`
   still uses garden imagery for a page that now sells slashing. A few shots of
   a vacant block before and after a cut would carry that section.
7. **Two amendment rows need the client's wording**, not a guess — see the
   response notes: the "Mow, edge, trim, blow. Weed, shape, remove" line does
   not exist on this build, and "from standard weekly" has no matching source
   text.
8. **Duplicate photos.** The Photo Changes set overlapped the design bundle in five
   places — the same photograph supplied twice under different names. Duplicates
   were removed and references consolidated; `scratchpad` perceptual-hash checks
   confirm no page shows the same image twice. Re-run that check when new photos
   land.
