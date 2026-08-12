import { biz, services, img } from '../site.config.mjs';
import { page, breadcrumbNode, webPageNode } from '../layout.mjs';

const URL = biz.origin + '/thank-you/';

/* Conversion confirmation page. Noindex — it should never appear in search
   results, and it doubles as the destination GoHighLevel and Google Ads can
   use as a conversion trigger. */
const body = `  <section class="hero hero--page">
    <div class="hero__skew" aria-hidden="true"></div>
    <div class="shell hero__inner">
      <div class="stack" style="gap:26px;max-width:760px">
        <span class="thanks-tick" aria-hidden="true">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 12.5l5 5L20 6.5"></path>
          </svg>
        </span>
        <p class="eyebrow eyebrow--rule">Request Received</p>
        <h1 class="h1" style="font-size:clamp(32px,4.2vw,54px)">Thanks — we've got your <span class="accent">quote request.</span></h1>
        <div class="answer-block answer-block--dark">
          <p>Your request is with the Blue Hills team. We read every enquiry and we'll be in touch to arrange your free on-site assessment — usually the same business day.</p>
        </div>
        <p class="small small--light">Need us sooner? Call <a href="${biz.phoneHref}" style="color:#C9A96E;font-weight:700">${biz.phoneDisplay}</a> and speak to us directly.</p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">What Happens Next</p>
        <h2 class="h2">Three steps to a property you <span class="accent">stop thinking about</span></h2>
      </div>
      <div class="steps">
        <div class="step">
          <span class="step__num">01</span>
          <h3 class="h3">We get in touch</h3>
          <p class="small">One of the crew calls or emails to confirm the details and book a time to look at the property. No call centre, no chasing.</p>
        </div>
        <div class="step">
          <span class="step__num">02</span>
          <h3 class="h3">Free on-site assessment</h3>
          <p class="small">We walk the property, check access and note anything that affects the job, then send a fixed price in writing. No obligation.</p>
        </div>
        <div class="step">
          <span class="step__num">03</span>
          <h3 class="h3">You go on the run</h3>
          <p class="small">Say yes and your property joins the recurring schedule for your suburb. We turn up, do the whole job, and invoice monthly.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--sand">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">While You're Here</p>
        <h2 class="h2">Everything else <span class="accent">we do</span></h2>
        <p class="body-copy max-68">Most clients bundle more than one service into the same visit — it's cheaper than booking them separately and one crew stays accountable for the whole property.</p>
      </div>
      <div class="grid-3">
${services.map((s) => `        <a class="svc-card" href="/${s.slug}/" style="padding:30px"><h3 class="h3">${s.short}</h3></a>`).join('\n')}
      </div>
      <div style="margin-top:48px;display:flex;justify-content:center;flex-wrap:wrap;gap:16px">
        <a class="btn btn--ghost" href="/">Back to Home</a>
        <a class="btn btn--ghost" href="/#portfolio">See Our Recent Work</a>
      </div>
    </div>
  </section>`;

export default page({
  slug: 'thank-you',
  active: 'none',
  noindex: true,
  title: 'Thank You | Blue Hills Property Maintenance',
  description: 'Thanks for your quote request. The Blue Hills team will be in touch to arrange your free on-site assessment.',
  image: img.hero,
  bodyHtml: body,
  jsonLd: [
    webPageNode({
      pageUrl: URL,
      title: 'Thank you — quote request received',
      description: 'Confirmation that a Blue Hills Property Maintenance quote request has been received.',
      image: img.hero
    }),
    breadcrumbNode({
      pageUrl: URL,
      items: [{ label: 'Home', href: '/' }, { label: 'Thank You', href: '/thank-you/' }]
    })
  ]
});
