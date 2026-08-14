/* Shared chrome: <head>, header, footer, JSON-LD graph helpers. */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { biz, suburbs, services, img } from './site.config.mjs';

const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

/* The stylesheet is inlined into every page. It costs ~7 KB gzipped per
   document but removes a render-blocking round trip, which PageSpeed measured
   at 170ms on mobile. Minified here rather than kept minified on disk so the
   source stays readable. */
const CSS = fs.readFileSync(path.join(REPO, 'assets/css/style.css'), 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s*([{}:;,>])\s*/g, '$1')
  .replace(/;}/g, '}')
  .replace(/\s+/g, ' ')
  .trim();

/* Real intrinsic dimensions read off disk, so width/height attributes always
   match the file and the browser can reserve the right box (zero CLS). */
const dimCache = new Map();

function readDims(src) {
  const file = path.join(REPO, src.replace(/^\//, ''));
  const b = fs.readFileSync(file);
  if (b.slice(0, 4).toString('ascii') === 'RIFF' && b.slice(8, 12).toString('ascii') === 'WEBP') {
    const fourcc = b.slice(12, 16).toString('ascii');
    if (fourcc === 'VP8X') return { w: (b.readUIntLE(24, 3) & 0xffffff) + 1, h: (b.readUIntLE(27, 3) & 0xffffff) + 1 };
    if (fourcc === 'VP8L') {
      const bits = b.readUInt32LE(21);
      return { w: (bits & 0x3fff) + 1, h: ((bits >> 14) & 0x3fff) + 1 };
    }
    if (fourcc === 'VP8 ') return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
  }
  if (b.slice(1, 4).toString('ascii') === 'PNG') return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  throw new Error('Unsupported image format for dimension read: ' + src);
}

/** Returns ` width="W" height="H"` for an on-disk image, memoised. */
export function dims(src) {
  if (!dimCache.has(src)) dimCache.set(src, readDims(src));
  const d = dimCache.get(src);
  return ` width="${d.w}" height="${d.h}"`;
}

/* ---------------- Responsive images ----------------
   Photography is written to disk as `name-<width>.webp` variants (see
   scratchpad/variants.py). Page code still refers to the logical
   `/assets/img/name.webp`; this resolves that to the real files and emits a
   srcset so a phone downloads a 400 or 640 rather than the 1200. */
const IMG_DIR = path.join(REPO, 'assets/img');
const variantCache = new Map();

function variantsOf(src) {
  if (variantCache.has(src)) return variantCache.get(src);
  const base = path.basename(src).replace(/\.webp$/, '');
  const re = new RegExp('^' + base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '-(\\d+)\\.webp$');
  const found = fs.readdirSync(IMG_DIR)
    .map((f) => { const m = re.exec(f); return m ? { file: '/assets/img/' + f, w: +m[1] } : null; })
    .filter(Boolean)
    .sort((a, b) => a.w - b.w);
  if (!found.length) throw new Error('No width variants on disk for ' + src);
  for (const v of found) v.h = readDims(v.file).h;
  variantCache.set(src, found);
  return found;
}

/** Common `sizes` values, keyed by where the image is used. */
export const SIZES = {
  // half the shell on desktop, full bleed inside the 18px gutters on phones
  hero: '(min-width: 901px) 560px, calc(100vw - 36px)',
  // three-up grid on desktop, two-up on tablet, one-up on phones
  card: '(min-width: 901px) 400px, (min-width: 601px) calc(50vw - 40px), calc(100vw - 36px)'
};

/**
 * Build a responsive <img>. `src` is the logical path; the widest variant
 * becomes the plain src so browsers without srcset still get a real image.
 */
export function imgTag({ src, alt, sizes = SIZES.card, loading = 'lazy', priority = false, cls, style }) {
  const v = variantsOf(src);
  const top = v[v.length - 1];
  const srcset = v.map((x) => `${x.file} ${x.w}w`).join(', ');
  return '<img'
    + (cls ? ` class="${cls}"` : '')
    + ` src="${top.file}"`
    + ` srcset="${srcset}"`
    + ` sizes="${sizes}"`
    + ` alt="${alt}"`
    + ` width="${top.w}" height="${top.h}"`
    + (priority ? ' fetchpriority="high"' : ` loading="${loading}"`)
    + ' decoding="async"'
    + (style ? ` style="${style}"` : '')
    + '>';
}

/** srcset string on its own, for <link rel=preload imagesrcset>. */
export function variantSrcset(src) {
  return variantsOf(src).map((x) => `${x.file} ${x.w}w`).join(', ');
}

/** Widest variant path — for og:image and schema, which need one absolute URL. */
export function widestVariant(src) {
  const v = variantsOf(src);
  return v[v.length - 1].file;
}

export const ORG_ID = biz.origin + '/#business';
export const WEBSITE_ID = biz.origin + '/#website';

export const esc = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ---------------- JSON-LD ---------------- */

export function localBusinessNode() {
  return {
    '@type': ['LandscapingBusiness', 'LocalBusiness'],
    '@id': ORG_ID,
    name: biz.name,
    legalName: biz.legalName,
    alternateName: 'Blue Hills Garden & Property Maintenance',
    url: biz.origin + '/',
    logo: { '@type': 'ImageObject', url: biz.origin + img.logo },
    image: biz.origin + widestVariant(img.hero),
    telephone: biz.phoneE164,
    email: biz.email,
    foundingDate: biz.founded,
    priceRange: biz.priceRange,
    currenciesAccepted: 'AUD',
    slogan: 'Professional grounds maintenance with pride and precision.',
    description:
      'Blue Hills Property Maintenance is a Pakenham-based garden and property maintenance company established in 2017. '
      + 'The team provides lawn mowing, acreage mowing, hedge trimming and reductions, pruning, garden maintenance, garden clean-ups, '
      + 'weed management, block slashing, vegetation management and softscaping for residential, body corporate, strata, commercial and industrial properties across the '
      + 'Pakenham–Berwick corridor in South-East Melbourne.',
    // No streetAddress: service-area business, private residential address.
    address: {
      '@type': 'PostalAddress',
      addressLocality: biz.suburb,
      addressRegion: biz.state,
      postalCode: biz.postcode,
      addressCountry: biz.country
    },
    geo: { '@type': 'GeoCoordinates', latitude: biz.lat, longitude: biz.lng },
    hasMap: biz.gmb,
    areaServed: suburbs.map((s) => ({
      '@type': 'City', name: s, containedInPlace: { '@type': 'State', name: biz.stateFull }
    })),
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: biz.lat, longitude: biz.lng },
      geoRadius: 35000
    },
    knowsAbout: [
      'Lawn mowing', 'Acreage mowing', 'Ride-on mowing', 'Lawn edging', 'Hedge trimming',
      'Hedge reductions', 'Pruning', 'Garden maintenance', 'Garden clean-ups', 'Weed control',
      'Softscaping', 'Body corporate grounds maintenance', 'Strata garden maintenance',
      'Commercial property maintenance', 'Industrial grounds maintenance'
    ],
    sameAs: [biz.facebook, biz.instagram, biz.gmb],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Garden & Property Maintenance Services',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.short, url: biz.origin + '/' + s.slug + '/' }
      }))
    }
  };
}

export function websiteNode() {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: biz.origin + '/',
    name: biz.name,
    inLanguage: 'en-AU',
    publisher: { '@id': ORG_ID }
  };
}

export function breadcrumbNode(trail) {
  return {
    '@type': 'BreadcrumbList',
    '@id': trail.pageUrl + '#breadcrumb',
    itemListElement: trail.items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      item: biz.origin + it.href
    }))
  };
}

export function faqNode(pageUrl, faqs) {
  return {
    '@type': 'FAQPage',
    '@id': pageUrl + '#faq',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') }
    }))
  };
}

export function webPageNode({ pageUrl, title, description, type = 'WebPage', image, dateModified }) {
  return {
    '@type': type,
    '@id': pageUrl + '#webpage',
    url: pageUrl,
    name: title,
    description,
    inLanguage: 'en-AU',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: image ? { '@type': 'ImageObject', url: biz.origin + widestVariant(image) } : undefined,
    dateModified,
    breadcrumb: { '@id': pageUrl + '#breadcrumb' },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.answer-block', '.faq']
    }
  };
}

/* ---------------- Chrome ---------------- */

function navMarkup(active) {
  const isSvc = services.some((s) => s.slug === active);
  const cur = (slug) => (active === slug ? ' aria-current="page"' : '');
  return `
        <ul class="nav" id="primary-nav">
          <li><a href="/"${cur('home')}>Home</a></li>
          <li><a href="/about/"${cur('about')}>About</a></li>
          <li class="has-dropdown">
            <button type="button" class="nav__trigger" aria-expanded="false" aria-controls="services-menu"${isSvc ? ' aria-current="true"' : ''}>
              Services <span class="nav__caret" aria-hidden="true"></span>
            </button>
            <div class="dropdown" id="services-menu">
              <div class="dropdown__panel">
${services.map((s) => `                <a href="/${s.slug}/"${cur(s.slug)}>${s.nav}</a>`).join('\n')}
              </div>
            </div>
          </li>
          <li><a href="/#service-area">Service Area</a></li>
          <li><a href="/contact/"${cur('contact')}>Contact</a></li>
        </ul>`;
}

export function header(active) {
  return `<div class="topbar">
    <div class="shell">
      <span>Established 2017</span>
      <span>Servicing the Pakenham–Berwick corridor</span>
      <span>Free quotes</span>
    </div>
  </div>
  <header class="site-header">
    <div class="site-header__inner">
      <a href="/" class="brand" aria-label="${esc(biz.name)} — home">
        <img src="${img.logo}" alt="${esc(biz.name)} logo"${dims(img.logo)} fetchpriority="high">
        <span class="brand__text">
          <span class="brand__name">Blue Hills</span>
          <span class="brand__tag">Property Maintenance</span>
        </span>
      </a>
      <button type="button" class="nav-toggle" aria-expanded="false" aria-controls="primary-nav" aria-label="Open menu">
        <span class="nav-toggle__bars" aria-hidden="true"><span></span><span></span><span></span></span>
        <span class="nav-toggle__label">Menu</span>
      </button>
      <nav class="site-nav" aria-label="Primary">${navMarkup(active)}
      </nav>
      <div class="header-actions">
        <a class="header-phone" href="${biz.phoneHref}">${biz.phoneDisplay}</a>
        <a class="header-cta" href="/contact/" data-quote-open>Free Quote</a>
      </div>
    </div>
  </header>`;
}

export function footer() {
  return `<footer class="site-footer">
    <div class="shell">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-brand__logo">
            <img src="${img.logo}" alt=""${dims(img.logo)} loading="lazy">
            <span class="footer-brand__name">BLUE HILLS</span>
          </div>
          <p class="small">Garden &amp; Property Maintenance — established 2017 in Pakenham, servicing the South-East Melbourne corridor with set-and-forget reliability.</p>
        </div>
        <div>
          <h2>Services</h2>
          <ul class="footer-list">
${services.map((s) => `            <li><a href="/${s.slug}/">${s.nav}</a></li>`).join('\n')}
          </ul>
        </div>
        <div>
          <h2>Service Area</h2>
          <ul class="footer-list">
${suburbs.slice(0, 7).map((s) => `            <li>${s}</li>`).join('\n')}
            <li><a href="/#service-area">View all 18 suburbs</a></li>
          </ul>
        </div>
        <div>
          <h2>Contact</h2>
          <ul class="footer-list">
            <li><a href="${biz.phoneHref}">${biz.phoneDisplay}</a></li>
            <li><a href="mailto:${biz.email}">${biz.email}</a></li>
            <li>${biz.suburb}, ${biz.state}</li>
            <li>Mobile service — we come to you</li>
            <li><a href="${biz.gmb}" rel="noopener">Find us on Google Maps</a></li>
            <li class="footer-social">
              <a href="${biz.facebook}" rel="noopener me">Facebook</a>
              <a href="${biz.instagram}" rel="noopener me">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; <span data-year>2026</span> ${esc(biz.legalName)}</p>
        <p>${biz.suburb}, ${biz.state} &bull; Established ${biz.founded}</p>
      </div>
    </div>
  </footer>
`;
}

/* ---------------- Quote form ----------------
   One markup source used twice: inline in the contact hero, and inside the
   site-wide modal. `id` namespaces every field so both can coexist. */
export function quoteForm(id, { compact = false } = {}) {
  const f = (n) => `${id}-${n}`;
  // `name` attributes are the GoHighLevel contact field keys and must not be
  // renamed — they are what the CRM matches submissions against:
  //   full_name · email · phone · service_needed · property_address ·
  //   property_size · job_notes
  // No `action` attribute: the form targets the current page, which is HTTPS.
  // Never point this at `mailto:` — that is not a "potentially trustworthy"
  // URL, so Chrome marks the form insecure, disables autofill and warns the
  // visitor. Submissions are captured by the GoHighLevel tracker on the
  // native submit event; site.js then sends the visitor to /thank-you/.
  return `<form class="quote-form" id="${f('form')}" data-quote-form method="post" novalidate>
              <div class="field-row">
                <div class="field">
                  <label for="${f('full_name')}">Full name</label>
                  <input type="text" id="${f('full_name')}" name="full_name" autocomplete="name" required>
                </div>
                <div class="field">
                  <label for="${f('phone')}">Phone</label>
                  <input type="tel" id="${f('phone')}" name="phone" autocomplete="tel" required>
                </div>
              </div>
              <div class="field">
                <label for="${f('email')}">Email</label>
                <input type="email" id="${f('email')}" name="email" autocomplete="email" required>
              </div>
              <div class="field">
                <label for="${f('property_address')}">Property address</label>
                <input type="text" id="${f('property_address')}" name="property_address" autocomplete="street-address" placeholder="Street address and suburb" required>
              </div>
              <div class="field-row">
                <div class="field">
                  <label for="${f('property_size')}">Property size</label>
                  <select id="${f('property_size')}" name="property_size">
                    <option>Courtyard or unit</option>
                    <option>Standard suburban block (up to 700m²)</option>
                    <option>Large block (700–1,000m²)</option>
                    <option>Half acre to 1 acre</option>
                    <option>1–5 acres</option>
                    <option>5+ acres</option>
                    <option>Body corporate or commercial site</option>
                    <option>Not sure</option>
                  </select>
                </div>
                <div class="field">
                  <label for="${f('service_needed')}">Service needed</label>
                  <select id="${f('service_needed')}" name="service_needed">
${services.map((s) => `                    <option>${s.short.replace(/&amp;/g, '&')}</option>`).join('\n')}
                    <option>Garden clean-up / seasonal reset</option>
                    <option>Pruning</option>
                    <option>Softscaping / mulching</option>
                    <option>Multiple services</option>
                  </select>
                </div>
              </div>
              <div class="field">
                <label for="${f('job_notes')}">Job notes</label>
                <textarea id="${f('job_notes')}" name="job_notes"${compact ? ' rows="3"' : ''} placeholder="How often you'd like us, access notes, anything that's been left too long..."></textarea>
              </div>
              <button type="submit" class="btn btn--brass" style="width:100%;justify-content:center">Send Quote Request <span class="btn-arrow" aria-hidden="true"></span></button>
              <noscript>
                <p class="form-note">This form needs JavaScript to send. Please call <a href="${biz.phoneHref}">${biz.phoneDisplay}</a> or email <a href="mailto:${biz.email}">${biz.email}</a> and we'll get straight back to you.</p>
              </noscript>
              <p class="form-note" data-form-status role="status">Free, no obligation. We reply to every enquiry — or call <a href="${biz.phoneHref}">${biz.phoneDisplay}</a> if you'd rather talk it through.</p>
            </form>`;
}

/* Site-wide quote modal. Every body CTA is a real link to /contact/, so the
   page still works with JavaScript off; the script upgrades those links into
   modal triggers. */
export function quoteModal() {
  return `<dialog class="quote-modal" id="quote-modal" aria-labelledby="quote-modal-title">
    <div class="quote-modal__inner">
      <button type="button" class="quote-modal__close" data-quote-close aria-label="Close quote form">&times;</button>
      <p class="eyebrow">Free Quote — No Obligation</p>
      <h2 class="h2" id="quote-modal-title" style="font-size:clamp(26px,3vw,34px);margin:10px 0 8px">Request your <span class="accent">free quote</span></h2>
      <p class="small" style="margin-bottom:24px">Tell us about the property and we'll come back with a fixed price. Servicing 18 suburbs across South-East Melbourne.</p>
      ${quoteForm('modal', { compact: true })}
    </div>
  </dialog>`;
}

export function ctaBand({
  eyebrow = 'Get Started',
  heading = 'Ready for a Lawn You Don\'t Have to <span class="accent">Think About?</span>',
  copy = 'Set it. Forget it. Come home to a property that always looks cared for. Request your free, no-obligation quote today and we\'ll have a Blue Hills crew assessing your block this week.',
  cta = 'Request a Quote'
} = {}) {
  return `  <section class="cta-band">
    <div class="shell">
      <div class="cta-band__inner">
        <p class="eyebrow">${eyebrow}</p>
        <h2 class="h2 h2--lg">${heading}</h2>
        <p class="lead muted-light">${copy}</p>
        <div class="btn-row" style="justify-content:center">
          <a class="btn btn--brass btn--lg" href="/contact/" data-quote-open>${cta}</a>
        </div>
      </div>
    </div>
    <div class="cta-band__dots" aria-hidden="true"></div>
  </section>`;
}

/* ---------------- Document shell ---------------- */

export function page({
  slug,            // '' for home, else 'about', 'lawn-mowing', ...
  title,
  description,
  keywords,
  image = img.hero,
  imageAlt = 'Blue Hills Property Maintenance crew maintaining a lawn in Pakenham VIC',
  bodyHtml,
  jsonLd = [],
  active,
  preloadHero,
  noindex = false
}) {
  const url = biz.origin + '/' + (slug ? slug + '/' : '');
  const graph = [localBusinessNode(), websiteNode(), ...jsonLd];

  return `<!DOCTYPE html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
${keywords ? `<meta name="keywords" content="${esc(keywords)}">\n` : ''}<link rel="canonical" href="${url}">
<meta name="robots" content="${noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'}">
<meta name="author" content="${esc(biz.legalName)}">
<meta name="geo.region" content="AU-VIC">
<meta name="geo.placename" content="Pakenham, Victoria">
<meta name="geo.position" content="${biz.lat};${biz.lng}">
<meta name="ICBM" content="${biz.lat}, ${biz.lng}">
<meta name="theme-color" content="#1E4D54">

<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(biz.name)}">
<meta property="og:locale" content="en_AU">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${biz.origin}${widestVariant(image)}">
<meta property="og:image:alt" content="${esc(imageAlt)}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${biz.origin}${widestVariant(image)}">

<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/assets/img/favicon-32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">

<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/playfair-400.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/playfair-400italic.woff2" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/assets/fonts/lato-400.woff2" crossorigin>
<style>${CSS}</style>
${preloadHero ? `<link rel="preload" as="image" href="${widestVariant(preloadHero)}" imagesrcset="${variantSrcset(preloadHero)}" imagesizes="${SIZES.hero}" fetchpriority="high">\n` : ''}
<!-- GoHighLevel external tracking (page analytics + form submission capture).
     defer, not blocking: loaded without it this script held up first render by
     ~3.1s on mobile. defer still guarantees it runs before DOMContentLoaded,
     so its document-level submit listener is attached well before anyone can
     fill in the form. -->
<link rel="preconnect" href="https://link.msgsndr.com" crossorigin>
<script defer
  src="https://link.msgsndr.com/js/external-tracking.js"
  data-tracking-id="tk_32ff295ccd334631b71115e471523a19">
</script>

<script type="application/ld+json">
${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2)}
</script>
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${header(active)}
<main id="main">
${bodyHtml}
</main>
${footer()}
${slug === 'contact' ? '' : quoteModal() + '\n'}<script src="/assets/js/site.js" defer></script>
</body>
</html>
`;
}
