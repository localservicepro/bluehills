import { biz, suburbs, services, img } from '../site.config.mjs';
import { page, quoteForm, breadcrumbNode, faqNode, webPageNode, ORG_ID } from '../layout.mjs';

const URL = biz.origin + '/contact/';

const faqs = [
  { q: 'How do I get a quote from Blue Hills?', a: 'Call 0411 342 456, email admin@bluehillsgpm.com.au, or send the quote request form on this page. For most jobs we arrange a free on-site assessment, then send a fixed price in writing before any work starts.' },
  { q: 'Is the quote free?', a: 'Yes. On-site assessments and written quotes are free and carry no obligation, for residential, acreage, body corporate and commercial enquiries alike.' },
  { q: 'How quickly can you start?', a: 'Most new residential clients are on a mowing run within about a week of the assessment. One-off clean-ups and hedge jobs depend on current workload. Body corporate and commercial contracts usually start at the beginning of the following month once scope is signed off.' },
  { q: 'What information should I have ready?', a: 'Your suburb, the property type (residential, acreage, body corporate or commercial), roughly what you need done, and how often. A rough block size helps for acreage. If access is restricted by a locked gate or a service window, mention it up front.' },
  { q: 'Do you charge for travel?', a: 'No. There is no travel charge for properties inside our 18-suburb service area. If you are just outside it, ask anyway — we regularly travel further for the right client.' }
];

const body = `  <section class="hero hero--page" style="padding-bottom:80px">
    <div class="hero__skew" aria-hidden="true"></div>
    <div class="shell hero__inner">
      <nav class="crumbs" aria-label="Breadcrumb" style="margin-bottom:28px">
        <ol>
          <li><a href="/">Home</a></li>
          <li><span aria-current="page">Contact</span></li>
        </ol>
      </nav>
      <div class="contact-hero">
        <div class="contact-hero__head">
          <p class="eyebrow eyebrow--rule">Free Quotes — No Obligation</p>
          <h1 class="h1" style="font-size:clamp(30px,3.8vw,50px);margin:20px 0 22px">Get your free <span class="accent">Blue Hills quote</span></h1>
          <div class="answer-block answer-block--dark">
            <p>Send the form and we will be in touch within <strong>48 hours</strong> to organise a free on-site assessment and walkthrough.</p>
          </div>
        </div>

        <div class="form-card form-card--hero contact-hero__form">
          <h2 class="h3" style="font-size:18px;margin-bottom:6px">Tell us about your property</h2>
          <p class="small" style="margin-bottom:22px">The more detail you give us, the more accurate the first response.</p>
          ${quoteForm('contact')}
        </div>

        <div class="contact-hero__extra">
          <ul class="prose-list prose-list--light">
            <li>Free on-site assessment before any work starts</li>
            <li>Fixed per-visit price in writing — no hourly creep</li>
            <li>Established 2017, fully insured, consistent crews</li>
            <li>No travel charge inside the service area</li>
          </ul>
          <p class="small small--light" style="margin-top:22px">Prefer to talk? Call <a href="${biz.phoneHref}" style="color:#C9A96E;font-weight:700">${biz.phoneDisplay}</a> or email <a href="mailto:${biz.email}" style="color:#C9A96E">${biz.email}</a>.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <div class="contact-grid">
        <div>
          <p class="eyebrow" style="margin-bottom:16px">Details</p>
          <h2 class="h2" style="margin-bottom:30px">Get in <span class="accent">touch</span></h2>

          <div class="contact-list">
            <div class="contact-list__item">
              <span class="contact-list__label">Phone</span>
              <a class="contact-list__value" href="${biz.phoneHref}">${biz.phoneDisplay}</a>
            </div>
            <div class="contact-list__item">
              <span class="contact-list__label">Email</span>
              <a class="contact-list__value" href="mailto:${biz.email}">${biz.email}</a>
            </div>
            <div class="contact-list__item">
              <span class="contact-list__label">Based in</span>
              <address class="contact-list__value" style="font-style:normal">${biz.suburb}, ${biz.state}</address>
              <span class="small">We're a mobile service — our crews come to you anywhere in the 18-suburb service area. There's no shopfront to visit.</span>
            </div>
            <div class="contact-list__item">
              <span class="contact-list__label">Business</span>
              <span class="contact-list__value" style="font-size:16px">${biz.legalName}<br><span class="small">Established ${biz.founded} &bull; Fully insured</span></span>
            </div>
            <div class="contact-list__item">
              <span class="contact-list__label">Follow</span>
              <span class="contact-list__value" style="font-size:16px">
                <a href="${biz.facebook}" rel="noopener me">Facebook</a> &nbsp;·&nbsp;
                <a href="${biz.instagram}" rel="noopener me">Instagram</a> &nbsp;·&nbsp;
                <a href="${biz.gmb}" rel="noopener">Google</a>
              </span>
            </div>
          </div>
        </div>

        <div>
          <h2 class="h4" style="margin-bottom:16px">Our service area</h2>
          <iframe
            class="map-frame"
            title="Map of the Blue Hills Property Maintenance service area around Pakenham VIC"
            src="https://www.google.com/maps?q=Pakenham+VIC+3810,+Australia&amp;output=embed"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          <p class="small" style="margin-top:12px"><a href="${biz.gmb}" rel="noopener">Open in Google Maps</a></p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--sand">
    <div class="shell text-center">
      <div class="section-head">
        <p class="eyebrow">Coverage</p>
        <h2 class="h2">Suburbs we <span class="accent">quote in</span></h2>
        <p class="body-copy max-68">No travel charge anywhere inside this area. Just outside it? Ask anyway — we regularly travel further for the right client.</p>
      </div>
      <ul class="grid-tiles">
${suburbs.map((s) => `        <li class="suburb-tile">${s}</li>`).join('\n')}
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="shell shell--narrow">
      <div class="section-head">
        <p class="eyebrow">Answers</p>
        <h2 class="h2">Quoting &amp; booking <span class="accent">questions</span></h2>
      </div>
      <div class="faq">
${faqs.map((f, i) => `        <details${i === 0 ? ' open' : ''}>
          <summary><span class="faq__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>${f.q}</summary>
          <p>${f.a}</p>
        </details>`).join('\n')}
      </div>
    </div>
  </section>`;

export default page({
  slug: 'contact',
  active: 'contact',
  title: 'Contact Blue Hills Property Maintenance Pakenham | 0411 342 456',
  description: 'Contact Blue Hills Property Maintenance in Pakenham for a free, no-obligation quote on lawn mowing, acreage mowing, hedge trimming, garden maintenance, weed management and body corporate or commercial grounds care. Call 0411 342 456.',
  keywords: 'contact Blue Hills Property Maintenance, lawn mowing quote Pakenham, garden maintenance quote Berwick, free quote gardener Officer, Pakenham lawn mowing phone number',
  image: img.stripes,
  imageAlt: 'Freshly mowed and edged lawn with clean stripe lines in Officer VIC',
  bodyHtml: body,
  jsonLd: [
    webPageNode({
      pageUrl: URL,
      type: 'ContactPage',
      title: 'Contact Blue Hills Property Maintenance',
      description: 'Free, no-obligation quotes on lawn mowing, garden maintenance and commercial grounds care across South-East Melbourne.',
      image: img.stripes
    }),
    breadcrumbNode({
      pageUrl: URL,
      items: [{ label: 'Home', href: '/' }, { label: 'Contact', href: '/contact/' }]
    }),
    faqNode(URL, faqs),
    {
      '@type': 'ContactPoint',
      '@id': URL + '#contactpoint',
      telephone: biz.phoneE164,
      email: biz.email,
      contactType: 'customer service',
      areaServed: 'AU-VIC',
      availableLanguage: 'English',
      parentOrganization: { '@id': ORG_ID }
    }
  ]
});
