import { biz, suburbs, img } from '../site.config.mjs';
import { page, ctaBand, breadcrumbNode, faqNode, webPageNode, imgTag, widestVariant, SIZES, ORG_ID } from '../layout.mjs';

const URL = biz.origin + '/';

const cards = [
  { n: '01', href: '/lawn-mowing/', title: 'Lawn Mowing &amp; Edging', src: img.lawn,
    alt: 'Blue Hills team performing professional lawn mowing on a residential property in Pakenham VIC',
    copy: 'Scheduled mowing with crisp edging and a full blower clean-up. Available weekly, fortnightly or monthly.',
    icon: '<path d="M3 8h24M3 15h18M3 22h12"></path>' },
  { n: '02', href: '/acreage-mowing/', title: 'Acreage Mowing', src: img.acreage,
    alt: 'Blue Hills ride-on mower working on an acreage property in Pakenham Upper VIC',
    copy: 'Ride-on mowing for rural and semi-rural properties across Pakenham Upper, Beaconsfield Upper &amp; Narre Warren North.',
    icon: '<circle cx="8" cy="20" r="5"></circle><circle cx="22" cy="22" r="3"></circle><path d="M3 12h16"></path>' },
  { n: '03', href: '/hedge-trimming/', title: 'Hedge Trimming &amp; Reductions', src: img.hedge,
    alt: 'Professional hedge trimming with sharp, clean lines by Blue Hills in Narre Warren VIC',
    copy: 'Sharp lines, healthy growth — formal hedges shaped, reduced, or restored across Narre Warren and surrounds.',
    icon: '<rect x="4" y="9" width="22" height="14"></rect><path d="M10 9v14M16 9v14M22 9v14"></path>' },
  { n: '04', href: '/garden-maintenance/', title: 'Garden Maintenance', src: img.garden,
    alt: 'Blue Hills team performing professional garden maintenance in Berwick VIC',
    copy: 'Regular maintenance, seasonal resets, and pre-sale property presentations across Berwick and Beaconsfield.',
    icon: '<circle cx="15" cy="11" r="7"></circle><path d="M15 18v9"></path>' },
  { n: '05', href: '/weed-control/', title: 'Weed Management &amp; Block Slashing', src: img.weed,
    alt: 'Weed management treatment in garden beds by Blue Hills across South-East Melbourne',
    copy: 'Selective spraying and hand-weeding for lawns and beds, plus block slashing and vegetation management on vacant and overgrown land.',
    icon: '<path d="M15 4l8 10a8 8 0 1 1-16 0z"></path>' },
  { n: '06', href: '/garden-maintenance/#pruning', title: 'Pruning', src: img.homePruning,
    alt: 'Shaped topiary and pruned shrubs framing a home entrance, pruned by Blue Hills',
    copy: 'Structural pruning that keeps gardens looking intentional, not overgrown, plus seasonal pruning.',
    icon: '<circle cx="8" cy="22" r="4"></circle><circle cx="22" cy="22" r="4"></circle><path d="M10 19L22 5M20 19L8 5"></path>' },
  { n: '07', href: '/body-corporate/', title: 'Body Corporate &amp; Commercial', src: img.homeBodyCorp,
    alt: 'Common area lawn and frontage on a body corporate property maintained by Blue Hills',
    copy: 'Strata, body corp, and commercial property maintenance with documented schedules and reliable invoicing.',
    icon: '<rect x="4" y="10" width="10" height="16"></rect><rect x="17" y="4" width="9" height="22"></rect>' }
];

const work = [
  { n: '01', src: img.acreagePortfolio, title: 'Acreage Lawn Mowing', loc: 'Berwick, VIC',
    alt: 'Acreage lawn mowing project completed by Blue Hills in Berwick VIC' },
  { n: '02', src: img.hedgePortfolio, title: 'Hedge Trimming &amp; Reduction', loc: 'Botanic Ridge, VIC',
    alt: 'Hedge trimming and reduction project completed by Blue Hills in Botanic Ridge VIC' },
  { n: '03', src: img.lawn2, title: 'Residential Lawn Care', loc: 'Harkaway, VIC',
    alt: 'Residential lawn mowed with clean stripe lines beside shaped shrubs in Harkaway VIC' },
  { n: '04', src: img.gardenPortfolio, title: 'Garden Maintenance', loc: 'Berwick, VIC',
    alt: 'Garden maintenance project completed by Blue Hills in Berwick VIC' },
  { n: '05', src: img.bc6, title: 'Body Corporate', loc: 'Pakenham, VIC',
    alt: 'Common area lawn in a townhouse court maintained by Blue Hills in Pakenham VIC' },
  { n: '06', src: img.hedge3, title: 'Commercial Grounds Maintenance', loc: 'Braeside, VIC',
    alt: 'Commercial car park screening hedge and grounds maintained by Blue Hills in Braeside VIC' }
];

const faqs = [
  { q: 'How much does lawn mowing in Pakenham cost?',
    a: 'Standard residential lawn mowing in Pakenham starts at $99+GST per visit for a 2-man crew. Please note clipping removal is not included. Pricing depends on lawn size, frequency, and access. Acreage and commercial properties are quoted on-site so you only pay for the time and equipment your job actually requires.' },
  { q: 'Do you mow acreage properties around Nar Nar Goon and Pakenham Upper?',
    a: 'Yes. Acreage mowing is one of our core services across Nar Nar Goon, Pakenham Upper, Tynong, Guys Hill, and Koo Wee Rup. We use ride-on machinery suited to rural blocks from one to ten-plus acres, including paddocks, fence lines, driveways and house surrounds. Bookings can be monthly or seasonal depending on growth.' },
  { q: 'Can Blue Hills handle body corporate and strata garden maintenance?',
    a: 'Absolutely. We manage body corporate, strata, and owners’ corporation contracts across Pakenham, Berwick, Narre Warren and Officer. Every contract includes a documented service schedule, consistent crew, public liability insurance, and clear monthly invoicing — so committee members and managers always know exactly what was done and when.' },
  { q: 'How often should I schedule lawn mowing in South-East Melbourne?',
    a: 'Most South-East Melbourne lawns thrive on fortnightly mowing from September to May, and monthly visits from June to August. We’ll recommend the right schedule for your grass type and property after a free on-site assessment.' },
  { q: 'Do you offer commercial garden maintenance contracts in Berwick and Narre Warren?',
    a: 'Yes. Blue Hills holds ongoing commercial and industrial property maintenance contracts across Berwick, Narre Warren, Pakenham, and Cranbourne South. We service office parks, retail centres, childcare facilities, and industrial estates — covering mowing, hedging, weed control, garden bed maintenance, and seasonal clean-ups under one consistent provider.' },
  { q: 'What areas around Pakenham do you service?',
    a: 'We service the full South-East Melbourne corridor, extending up to Braeside, including Pakenham, Officer, Nar Nar Goon, Beaconsfield, Berwick, Harkaway, Narre Warren, Narre Warren North, Lysterfield, Botanic Ridge, Devon Meadows, Tynong, Pakenham Upper, Beaconsfield Upper, Cranbourne South, Maryknoll, Guys Hill, and Koo Wee Rup.' }
];

const body = `  <section class="hero">
    <div class="hero__skew" aria-hidden="true"></div>
    <div class="shell hero__inner">
      <div class="grid-2 grid-2--wide">
        <div class="hero__copy">
          <p class="eyebrow eyebrow--rule">Est. 2017 — Pakenham VIC</p>
          <h1 class="h1">Professional lawn mowing &amp; <span class="accent">gardening maintenance</span> in Pakenham</h1>
          <p class="lead lead--light max-56">Set &amp; forget property care across the South-East Melbourne corridor. Professional grounds maintenance with pride and precision, scheduled service, and a finish you'll be proud of — every visit, every season.</p>
          <div class="btn-row">
            <a class="btn btn--brass" href="/contact/" data-quote-open>Free Quote <span class="btn-arrow" aria-hidden="true"></span></a>
            <a class="btn btn--ghost-light" href="#services">Services</a>
          </div>
        </div>
        <div class="hero__media">
          <div class="hero__frame">
            ${imgTag({ src: img.hero, alt: 'Manicured lawn maintained by Blue Hills Property Maintenance in Pakenham VIC', sizes: SIZES.hero, priority: true })}
          </div>
          <div class="fact-card">
            <h2>Trusted across the South East Corridor</h2>
            <dl>
              <div class="fact-row"><dt>Established</dt><dd>2017</dd></div>
              <div class="fact-row"><dt>Suburbs Serviced</dt><dd>18+</dd></div>
              <div class="fact-row"><dt>Service Types</dt><dd>9</dd></div>
              <div class="fact-row"><dt>Insurance</dt><dd aria-label="Fully insured">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M8 12.5l2.5 2.5L16 9.5"></path></svg>
              </dd></div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="about">
    <div class="shell">
      <div class="grid-2 grid-2--copy">
        <div class="stack copy-grid__head" style="gap:22px">
          <p class="eyebrow">Our Approach</p>
          <h2 class="h2">Professional <span class="accent">Grounds Maintenance.</span><br>With Pride &amp; Precision.</h2>
        </div>
        <div class="stack copy-grid__body" style="gap:28px;flex:1.5">
          <div style="display:flex;gap:24px">
            <span aria-hidden="true" style="font-size:72px;line-height:.9;font-family:var(--serif);color:var(--brass);opacity:.5">A</span>
            <p class="lead">Pakenham based team specialising in all round property maintenance including lawn mowing and garden maintenance for home owners and commercial clients. Since 2017, we've built our reputation on consistency, presentation, and turning up when we say we will.</p>
          </div>
          <p class="lead">From quarter-acre suburban blocks in Officer to sprawling acreage in Nar Nar Goon, every property we touch is treated with the same precision. We mow, edge, trim and tidy — so your lawn always looks like the property next door wishes it did.</p>
          <p class="lead">We service residential homes, body corporates, strata-managed estates, and commercial sites across the entire Pakenham—Berwick corridor.</p>
          <p style="padding-top:8px;font-style:italic;color:rgba(26,46,50,.6)">— The Blue Hills Crew, Pakenham VIC</p>
        </div>
      </div>
    </div>
  </section>

  <section class="section section--sand" id="services">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">What We Offer</p>
        <h2 class="h2">Our Garden &amp; <span class="accent">Property Services</span></h2>
        <p class="body-copy max-68">Comprehensive garden and property maintenance services covering every inch of your property — residential, acreage, body corporate, and commercial.</p>
      </div>
      <div class="grid-3">
${cards.map((c) => `        <a class="svc-card" href="${c.href}">
          <div class="svc-card__media">
            ${imgTag({ src: c.src, alt: c.alt })}
            <span class="svc-card__num">${c.n}</span>
          </div>
          <div class="svc-card__body">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" stroke="#C9A96E" stroke-width="2" aria-hidden="true">${c.icon}</svg>
            <h3 class="h3">${c.title}</h3>
            <p class="small">${c.copy}</p>
          </div>
        </a>`).join('\n')}
      </div>
    </div>
  </section>

  <section class="section section--teal">
    <div class="shell">
      <div class="grid-2 align-center">
        <div class="stack" style="gap:26px">
          <p class="eyebrow">Why Blue Hills</p>
          <h2 class="h2">Why South-East <br>Melbourne <span class="accent">Chooses Us</span></h2>
          <p class="muted-light" style="max-width:420px;line-height:1.7">Four reasons our clients book us, recommend us, and stay with us year after year.</p>
        </div>
        <ul class="reasons reasons--dark">
          <li><span class="reasons__num">01</span><div class="reasons__body"><h3 class="h3">Established 2017</h3><p class="small small--light">Nine years of consistent service across Pakenham, Officer, and Berwick.</p></div></li>
          <li><span class="reasons__num">02</span><div class="reasons__body"><h3 class="h3">Set &amp; Forget Scheduling</h3><p class="small small--light">Recurring visits booked in advance. We turn up. You don't have to think about it.</p></div></li>
          <li><span class="reasons__num">03</span><div class="reasons__body"><h3 class="h3">Fully Insured &amp; Equipped</h3><p class="small small--light">Commercial-grade machinery, public liability cover, and trained crew on every job.</p></div></li>
          <li><span class="reasons__num">04</span><div class="reasons__body"><h3 class="h3">Residential to Commercial</h3><p class="small small--light">From a courtyard in Botanic Ridge to a body corp estate in Narre Warren, we scale.</p></div></li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section section--rule">
    <div class="shell">
      <div class="grid-2 align-center">
        <div class="stack" style="gap:26px">
          <p class="eyebrow">Visual Proof</p>
          <h2 class="h2">The Blue Hills <span class="accent">Difference</span></h2>
          <p class="lead">Slide to see the transformation. This Pakenham property was overgrown and neglected — we performed a full seasonal reset, restoring the lawn to its former glory.</p>
          <div class="btn-row">
            <a class="btn btn--ghost" href="#portfolio">View All Transformations</a>
          </div>
        </div>
        <figure style="margin:0">
          <div class="compare" data-compare>
            ${imgTag({ src: img.after, alt: 'After — restored and freshly mowed lawn at a Pakenham property', sizes: SIZES.hero })}
            <div class="compare__before">
              ${imgTag({ src: img.before, alt: 'Before — overgrown and neglected lawn at the same Pakenham property', sizes: SIZES.hero })}
            </div>
            <span class="compare__tag compare__tag--before">Before</span>
            <span class="compare__tag compare__tag--after">After</span>
            <div class="compare__handle">
              <button type="button" class="compare__grip" role="slider" aria-label="Reveal before and after" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50">
                <span aria-hidden="true"></span><span aria-hidden="true"></span>
              </button>
            </div>
          </div>
          <figcaption class="small" style="padding-top:14px">Full seasonal lawn reset, Pakenham VIC — drag the handle to compare before and after.</figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="section" id="portfolio">
    <div class="shell">
      <div class="portfolio-head">
        <div class="stack" style="gap:16px">
          <p class="eyebrow">Selected Projects</p>
          <h2 class="h2">Our Recent Work in <br>Pakenham &amp; Surrounds</h2>
          <p class="body-copy max-60">A snapshot of recent jobs across the Pakenham—Berwick corridor — residential lawns, acreage mowing, hedge work, and commercial property care.</p>
        </div>
        <a class="link-arrow" href="#services">View Full Portfolio <span class="btn-arrow" aria-hidden="true"></span></a>
      </div>
      <div class="grid-3 grid-3--tight">
${work.map((w) => `        <figure class="work-card" style="margin:0">
          ${imgTag({ src: w.src, alt: w.alt })}
          <figcaption>
            <span class="work-card__label">— Project ${w.n}</span>
            <h3 class="h3">${w.title}</h3>
            <p class="work-card__loc">${w.loc.toUpperCase()}</p>
          </figcaption>
        </figure>`).join('\n')}
      </div>
      <div style="margin-top:48px;display:flex;justify-content:center">
        <a class="btn btn--outline-brass" href="#service-area">View Full Service Area Details</a>
      </div>
    </div>
  </section>

  <section class="section section--sand" id="service-area">
    <div class="shell text-center">
      <div class="section-head">
        <p class="eyebrow">Coverage</p>
        <h2 class="h2">Where We Work Across <span class="accent">South-East Melbourne</span></h2>
        <p class="body-copy max-68">Our crews operate daily across the Pakenham—Berwick corridor. If your property falls inside the South-East Melbourne corridor, there is a good chance we are already working in your street.</p>
      </div>
      <ul class="grid-tiles">
${suburbs.map((s) => `        <li class="suburb-tile">${s}</li>`).join('\n')}
      </ul>
    </div>
  </section>

  <section class="section">
    <div class="shell shell--narrow">
      <div class="section-head">
        <h2 class="h2">Common <span class="accent">Questions</span></h2>
      </div>
      <div class="faq">
${faqs.map((f, i) => `        <details${i === 0 ? ' open' : ''}>
          <summary><span class="faq__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>${f.q}</summary>
          <p>${f.a}</p>
        </details>`).join('\n')}
      </div>
    </div>
  </section>

${ctaBand()}`;

export default page({
  slug: '',
  active: 'home',
  title: 'Lawn Mowing & Garden Maintenance Pakenham | Blue Hills',
  description: 'Professional lawn mowing and garden maintenance in Pakenham, Officer, Berwick and across South-East Melbourne. Acreage mowing, hedge trimming, weed management, body corporate and commercial grounds care. Established 2017. Free quotes — call 0411 342 456.',
  keywords: 'lawn mowing Pakenham, garden maintenance Pakenham, acreage mowing Pakenham Upper, hedge trimming Berwick, weed control Officer, body corporate garden maintenance Narre Warren, commercial property maintenance South-East Melbourne',
  image: img.hero,
  imageAlt: 'Manicured lawn maintained by Blue Hills Property Maintenance in Pakenham VIC',
  preloadHero: img.hero,
  bodyHtml: body,
  jsonLd: [
    webPageNode({
      pageUrl: URL,
      title: 'Lawn Mowing & Garden Maintenance Pakenham | Blue Hills Property Maintenance',
      description: 'Professional lawn mowing and garden maintenance in Pakenham, Officer, Berwick and across South-East Melbourne.',
      image: img.hero
    }),
    breadcrumbNode({ pageUrl: URL, items: [{ label: 'Home', href: '/' }] }),
    faqNode(URL, faqs),
    {
      '@type': 'ImageGallery',
      '@id': URL + '#portfolio',
      name: 'Recent lawn and garden projects in Pakenham and surrounds',
      about: { '@id': ORG_ID },
      image: work.map((w) => ({
        '@type': 'ImageObject',
        contentUrl: biz.origin + widestVariant(w.src),
        name: w.title.replace(/&amp;/g, '&'),
        description: w.alt,
        contentLocation: { '@type': 'Place', name: w.loc }
      }))
    }
  ]
});
