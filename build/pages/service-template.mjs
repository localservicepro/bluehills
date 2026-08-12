import { biz, img } from '../site.config.mjs';
import { page, ctaBand, breadcrumbNode, faqNode, webPageNode, dims, ORG_ID } from '../layout.mjs';

/* Renders a service page from a data object. Every service page carries the
   same AEO/GEO scaffolding: a direct answer block under the H1, a citable
   key-facts table, question-form headings, and FAQPage + Service schema. */
export function servicePage(s) {
  const URL = biz.origin + '/' + s.slug + '/';

  const body = `  <section class="hero hero--page">
    <div class="hero__skew" aria-hidden="true"></div>
    <div class="shell hero__inner">
      <nav class="crumbs" aria-label="Breadcrumb" style="margin-bottom:28px">
        <ol>
          <li><a href="/">Home</a></li>
          <li><a href="/#services">Services</a></li>
          <li><span aria-current="page">${s.crumb}</span></li>
        </ol>
      </nav>
      <div class="grid-2 grid-2--wide">
        <div class="hero__copy">
          <p class="eyebrow eyebrow--rule">${s.eyebrow}</p>
          <h1 class="h1" style="font-size:clamp(34px,4.2vw,56px)">${s.h1}</h1>
          <div class="answer-block answer-block--dark">
            <p>${s.answer}</p>
          </div>
          <div class="btn-row">
            <a class="btn btn--brass" href="/contact/" data-quote-open>Get a Free Quote <span class="btn-arrow" aria-hidden="true"></span></a>
          </div>
        </div>
        <div class="hero__media" style="padding-bottom:0">
          <div class="hero__frame">
            <img src="${s.image}" alt="${s.imageAlt}"${dims(s.image)} fetchpriority="high" decoding="async">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <div class="grid-2 grid-2--copy">
        <div class="stack" style="gap:22px">
          <p class="eyebrow">${s.introEyebrow}</p>
          <h2 class="h2">${s.introHeading}</h2>
        </div>
        <div class="stack" style="gap:24px;flex:1.5">
${s.intro.map((p) => `          <p class="lead">${p}</p>`).join('\n')}
        </div>
      </div>

      <div style="margin-top:64px">
        <h2 class="h4" style="margin-bottom:20px">Key facts</h2>
        <dl class="facts-grid">
${s.facts.map((f) => `          <div><dt>${f.k}</dt><dd>${f.v}</dd></div>`).join('\n')}
        </dl>
      </div>
    </div>
  </section>

  <section class="section section--sand"${s.includedId ? ' id="' + s.includedId + '"' : ''}>
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">What's Included</p>
        <h2 class="h2">${s.includedHeading}</h2>
        <p class="body-copy max-68">${s.includedIntro}</p>
      </div>
      <div class="grid-3">
${s.included.map((it, i) => `        <article class="svc-card" style="padding:34px">
          <span class="reasons__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
          <h3 class="h3" style="margin:14px 0 12px">${it.t}</h3>
          <p class="small">${it.d}</p>
        </article>`).join('\n')}
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <div class="grid-2 align-center">
        <div class="stack" style="gap:26px">
          <p class="eyebrow">${s.processEyebrow || 'How It Works'}</p>
          <h2 class="h2">${s.processHeading}</h2>
          <p class="body-copy">${s.processIntro}</p>
          <div class="btn-row">
            <a class="btn btn--ghost" href="/contact/" data-quote-open>Book Your Free Assessment</a>
          </div>
        </div>
        <ul class="reasons reasons--light">
${s.process.map((p, i) => `          <li><span class="reasons__num">${String(i + 1).padStart(2, '0')}</span><div class="reasons__body"><h3 class="h3">${p.t}</h3><p class="small">${p.d}</p></div></li>`).join('\n')}
        </ul>
      </div>
    </div>
  </section>

  <section class="section section--teal">
    <div class="shell">
      <div class="grid-2 align-center">
        <div class="stack" style="gap:24px">
          <p class="eyebrow">${s.pricingEyebrow || 'Pricing'}</p>
          <h2 class="h2">${s.pricingHeading}</h2>
${s.pricing.map((p) => `          <p class="lead muted-light">${p}</p>`).join('\n')}
          <div class="btn-row">
            <a class="btn btn--brass" href="/contact/" data-quote-open>Request Your Quote</a>
          </div>
        </div>
        <figure style="margin:0">
          <img src="${s.secondImage}" alt="${s.secondImageAlt}"${dims(s.secondImage)} loading="lazy" decoding="async" style="width:100%;height:auto;display:block;box-shadow:0 40px 70px -35px rgba(0,0,0,.6)">
        </figure>
      </div>
    </div>
  </section>

${s.gallery ? `  <section class="section" id="recent-work">
    <div class="shell">
      <div class="portfolio-head">
        <div class="stack" style="gap:16px">
          <p class="eyebrow">Recent Work</p>
          <h2 class="h2">${s.galleryHeading}</h2>
          <p class="body-copy max-60">${s.galleryIntro}</p>
        </div>
        <a class="link-arrow" href="/contact/">Get the same result <span class="btn-arrow" aria-hidden="true"></span></a>
      </div>
      <div class="grid-3 grid-3--tight">
${s.gallery.map((g) => `        <figure class="work-card" style="margin:0;aspect-ratio:4/3">
          <img src="${g.src}" alt="${g.alt}"${dims(g.src)} loading="lazy" decoding="async">
          <figcaption>
            <span class="work-card__label">— ${s.crumb}</span>
            <h3 class="h3">${g.title}</h3>
          </figcaption>
        </figure>`).join('\n')}
      </div>
    </div>
  </section>

` : ''}  <section class="section section--sand">
    <div class="shell text-center">
      <div class="section-head">
        <p class="eyebrow">Coverage</p>
        <h2 class="h2">${s.areaHeading}</h2>
        <p class="body-copy max-68">${s.areaIntro}</p>
      </div>
      <ul class="grid-tiles">
${s.areaSuburbs.map((x) => `        <li class="suburb-tile">${x}</li>`).join('\n')}
      </ul>
      <p class="body-copy" style="margin-top:32px"><a href="/#service-area">See the full Blue Hills service area</a> across South-East Melbourne.</p>
    </div>
  </section>

  <section class="section">
    <div class="shell shell--narrow">
      <div class="section-head">
        <p class="eyebrow">Answers</p>
        <h2 class="h2">${s.faqHeading}</h2>
      </div>
      <div class="faq">
${s.faqs.map((f, i) => `        <details${i === 0 ? ' open' : ''}>
          <summary><span class="faq__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>${f.q}</summary>
          <p>${f.a}</p>
        </details>`).join('\n')}
      </div>
      <div style="margin-top:48px;display:flex;justify-content:center;flex-wrap:wrap;gap:16px">
${s.related.map((r) => `        <a class="btn btn--ghost" href="/${r.slug}/">${r.label}</a>`).join('\n')}
      </div>
    </div>
  </section>

${ctaBand({ eyebrow: 'Get Started', heading: s.ctaHeading, copy: s.ctaCopy, cta: 'Request a Quote' })}`;

  return page({
    slug: s.slug,
    active: s.slug,
    title: s.title,
    description: s.description,
    keywords: s.keywords,
    image: s.image,
    imageAlt: s.imageAlt,
    preloadHero: s.image,
    bodyHtml: body,
    jsonLd: [
      webPageNode({
        pageUrl: URL,
        title: s.title.replace(/&amp;/g, '&'),
        description: s.description,
        image: s.image
      }),
      breadcrumbNode({
        pageUrl: URL,
        items: [
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/#services' },
          { label: s.crumb, href: '/' + s.slug + '/' }
        ]
      }),
      {
        '@type': 'Service',
        '@id': URL + '#service',
        name: s.schemaName,
        serviceType: s.schemaType,
        description: s.answer.replace(/<[^>]+>/g, ''),
        url: URL,
        image: biz.origin + s.image,
        provider: { '@id': ORG_ID },
        areaServed: s.areaSuburbs.map((x) => ({ '@type': 'City', name: x })),
        category: 'Garden and property maintenance',
        offers: {
          '@type': 'Offer',
          priceCurrency: 'AUD',
          availability: 'https://schema.org/InStock',
          url: biz.origin + '/contact/',
          ...(s.offerPrice ? { price: s.offerPrice, priceSpecification: {
            '@type': 'PriceSpecification',
            price: s.offerPrice,
            priceCurrency: 'AUD',
            valueAddedTaxIncluded: false,
            description: s.offerNote
          } } : {})
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: s.schemaName + ' inclusions',
          itemListElement: s.included.map((it) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: it.t.replace(/&amp;/g, '&') }
          }))
        }
      },
      faqNode(URL, s.faqs),
      ...(s.gallery ? [{
        '@type': 'ImageGallery',
        '@id': URL + '#recent-work',
        name: s.galleryHeading.replace(/<[^>]+>/g, ''),
        about: { '@id': URL + '#service' },
        image: s.gallery.map((g) => ({
          '@type': 'ImageObject',
          contentUrl: biz.origin + g.src,
          name: g.title,
          description: g.alt
        }))
      }] : [])
    ]
  });
}
