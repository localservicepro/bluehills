import { biz, suburbs, img } from '../site.config.mjs';
import { page, ctaBand, breadcrumbNode, faqNode, webPageNode, imgTag, SIZES, ORG_ID } from '../layout.mjs';

const URL = biz.origin + '/about/';

const faqs = [
  { q: 'When was Blue Hills Property Maintenance established?', a: 'Blue Hills Property Maintenance Pty Ltd was established in 2017 and is based in Pakenham, Victoria. The business has serviced the Pakenham–Berwick corridor continuously since then.' },
  { q: 'What areas does Blue Hills service?', a: 'Blue Hills services 18 suburbs across South-East Melbourne: Pakenham, Officer, Nar Nar Goon, Beaconsfield, Berwick, Harkaway, Narre Warren, Narre Warren North, Lysterfield, Botanic Ridge, Devon Meadows, Tynong, Pakenham Upper, Beaconsfield Upper, Cranbourne South, Maryknoll, Guys Hill and Koo Wee Rup.' },
  { q: 'What types of property does Blue Hills work on?', a: 'Residential homes and acreage, body corporate and strata common property, and commercial and industrial sites. The same crew standard applies whether the job is a courtyard in Botanic Ridge or a multi-building estate in Narre Warren.' },
  { q: 'Is Blue Hills insured?', a: 'Yes. Public liability insurance is current and applies to every job, residential and commercial. A certificate of currency can be provided to strata managers, facilities managers or commercial clients on request.' },
  { q: 'What services does Blue Hills offer?', a: 'Lawn mowing including acreage, hedge trimming and hedge reductions, general pruning, garden clean-ups, ongoing garden maintenance, weed management, block slashing, vegetation management and softscaping — for residential, body corporate, strata, commercial and industrial clients.' }
];

const body = `  <section class="hero hero--page">
    <div class="hero__skew" aria-hidden="true"></div>
    <div class="shell hero__inner">
      <nav class="crumbs" aria-label="Breadcrumb" style="margin-bottom:28px">
        <ol>
          <li><a href="/">Home</a></li>
          <li><span aria-current="page">About</span></li>
        </ol>
      </nav>
      <div class="grid-2 grid-2--wide">
        <div class="hero__copy">
          <p class="eyebrow eyebrow--rule">About Blue Hills</p>
          <h1 class="h1" style="font-size:clamp(34px,4.2vw,56px)">A Pakenham crew who <span class="accent">turn up.</span></h1>
          <div class="answer-block answer-block--dark">
            <p>Blue Hills Property Maintenance Pty Ltd is a Pakenham-based garden and property maintenance company established in <strong>2017</strong>. We provide lawn mowing, acreage mowing, hedge trimming and reductions, pruning, garden maintenance, weed management, block slashing and softscaping to residential, body corporate, strata, commercial and industrial clients across <strong>18 suburbs</strong> in South-East Melbourne.</p>
          </div>
          <div class="btn-row">
            <a class="btn btn--brass" href="/contact/" data-quote-open>Get a Free Quote <span class="btn-arrow" aria-hidden="true"></span></a>
          </div>
        </div>
        <div class="hero__media" style="padding-bottom:0">
          <div class="hero__frame">
            ${imgTag({ src: img.garden, alt: 'The Blue Hills team performing professional garden maintenance in Berwick VIC', sizes: SIZES.hero, priority: true })}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell">
      <div class="grid-2 grid-2--copy">
        <div class="stack copy-grid__head" style="gap:22px">
          <p class="eyebrow">Our Story</p>
          <h2 class="h2">Built on the <span class="accent">boring things</span> that actually matter.</h2>
        </div>
        <div class="stack copy-grid__body" style="gap:24px;flex:1.5">
          <p class="lead">Blue Hills started in 2017 with one ute, one trailer and a straightforward proposition: show up on the day you said you would, do the whole job rather than the visible parts of it, and leave the property cleaner than a homeowner would themselves.</p>
          <p class="lead">Nine years on, that has not changed — it has just scaled. We now run scheduled crews across the Pakenham–Berwick corridor, servicing everything from quarter-acre suburban blocks in Officer to ten-acre rural properties in Pakenham Upper, alongside body corporate estates and commercial sites.</p>
          <p class="lead">What has kept the business growing is not marketing. It is that the same crew comes back, they know your gate code and where the irrigation heads are, and the invoice at the end of the month matches what was agreed at the start.</p>
          <p style="padding-top:8px;font-style:italic;color:rgba(26,46,50,.6)">— The Blue Hills Crew, Pakenham VIC</p>
        </div>
      </div>

      <div style="margin-top:64px">
        <h2 class="h4" style="margin-bottom:20px">Business at a glance</h2>
        <dl class="facts-grid">
          <div><dt>Legal entity</dt><dd>${biz.legalName}</dd></div>
          <div><dt>Established</dt><dd>2017</dd></div>
          <div><dt>Based in</dt><dd>${biz.suburb}, ${biz.state} — mobile service across 18 suburbs, no public shopfront</dd></div>
          <div><dt>Suburbs serviced</dt><dd>18 across South-East Melbourne</dd></div>
          <div><dt>Service lines</dt><dd>Mowing, acreage mowing, hedging, pruning, garden maintenance, clean-ups, weed management, block slashing, vegetation management, softscaping</dd></div>
          <div><dt>Client types</dt><dd>Residential, acreage, body corporate, strata, commercial, industrial</dd></div>
          <div><dt>Insurance</dt><dd>Public liability cover current on every job</dd></div>
          <div><dt>Contact</dt><dd><a href="${biz.phoneHref}">${biz.phoneDisplay}</a> · <a href="mailto:${biz.email}">${biz.email}</a></dd></div>
        </dl>
      </div>
    </div>
  </section>

  <section class="section section--sand">
    <div class="shell">
      <div class="section-head">
        <p class="eyebrow">How We Work</p>
        <h2 class="h2">Four standards we <span class="accent">do not move on</span></h2>
        <p class="body-copy max-68">These are the things clients tell us made them stay, and they are the things we hire and train against.</p>
      </div>
      <div class="grid-3">
        <article class="svc-card" style="padding:34px">
          <span class="reasons__num" aria-hidden="true">01</span>
          <h3 class="h3" style="margin:14px 0 12px">We turn up on the day</h3>
          <p class="small">Your visit is a fixed slot on a recurring run, not something squeezed in. If weather or a breakdown means we cannot make it, you hear from us before you notice — not after.</p>
        </article>
        <article class="svc-card" style="padding:34px">
          <span class="reasons__num" aria-hidden="true">02</span>
          <h3 class="h3" style="margin:14px 0 12px">The whole job, every time</h3>
          <p class="small">Edging and blow-down are part of the mow, not an upsell. Cuttings get raked up and cleared. Nobody leaves a property with one section obviously unfinished because the trailer was full.</p>
        </article>
        <article class="svc-card" style="padding:34px">
          <span class="reasons__num" aria-hidden="true">03</span>
          <h3 class="h3" style="margin:14px 0 12px">The price you were quoted</h3>
          <p class="small">Fixed per-visit pricing agreed before we start. Extra work is quoted and approved first. You should never open an invoice and find something you did not authorise.</p>
        </article>
        <article class="svc-card" style="padding:34px">
          <span class="reasons__num" aria-hidden="true">04</span>
          <h3 class="h3" style="margin:14px 0 12px">Honest advice, including no</h3>
          <p class="small">If a hedge cannot be safely reduced this season, if your block would be better on residential mowing than acreage pricing, or if a job needs an arborist rather than us, we say so.</p>
        </article>
      </div>
    </div>
  </section>

  <section class="section section--teal">
    <div class="shell">
      <div class="grid-2 align-center">
        <div class="stack" style="gap:26px">
          <p class="eyebrow">What We Do</p>
          <h2 class="h2">Ten service lines, <span class="accent">one provider</span></h2>
          <p class="lead muted-light">Most of our clients buy more than one service. Bundling them into a single scheduled visit is cheaper than separate contractors and means one crew is accountable for how the whole property looks.</p>
          <div class="btn-row">
            <a class="btn btn--brass" href="/#services">Browse All Services</a>
          </div>
        </div>
        <ul class="prose-list prose-list--light">
          <li><a href="/lawn-mowing/">Residential lawn mowing and edging</a></li>
          <li><a href="/acreage-mowing/">Acreage and ride-on mowing</a></li>
          <li><a href="/hedge-trimming/">Hedge trimming and hedge reductions</a></li>
          <li><a href="/garden-maintenance/">General pruning</a></li>
          <li><a href="/garden-maintenance/">Garden clean-ups and seasonal resets</a></li>
          <li><a href="/garden-maintenance/">Ongoing garden maintenance</a></li>
          <li><a href="/weed-control/">Weed management and spraying</a></li>
          <li><a href="/weed-control/">Block slashing and vegetation management</a></li>
          <li><a href="/garden-maintenance/">Softscaping, mulching and planting</a></li>
          <li><a href="/body-corporate/">Body corporate, strata, commercial and industrial grounds</a></li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="shell text-center">
      <div class="section-head">
        <p class="eyebrow">Coverage</p>
        <h2 class="h2">The 18 suburbs we <span class="accent">work across</span></h2>
        <p class="body-copy max-68">Blue Hills operates daily across the Pakenham–Berwick corridor and the semi-rural belt to its north and east.</p>
      </div>
      <ul class="grid-tiles">
${suburbs.map((s) => `        <li class="suburb-tile">${s}</li>`).join('\n')}
      </ul>
    </div>
  </section>

  <section class="section section--sand">
    <div class="shell shell--narrow">
      <div class="section-head">
        <p class="eyebrow">Answers</p>
        <h2 class="h2">About Blue Hills — <span class="accent">questions</span></h2>
      </div>
      <div class="faq">
${faqs.map((f, i) => `        <details${i === 0 ? ' open' : ''}>
          <summary><span class="faq__num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>${f.q}</summary>
          <p>${f.a}</p>
        </details>`).join('\n')}
      </div>
    </div>
  </section>

${ctaBand({
  eyebrow: 'Work With Us',
  heading: 'Let\'s Get Your Property on the <span class="accent">Blue Hills Run</span>',
  copy: 'Free on-site assessment, a fixed price in writing, and a crew that shows up. That is the whole offer.',
  cta: 'Request a Quote'
})}`;

export default page({
  slug: 'about',
  active: 'about',
  title: 'About Blue Hills Property Maintenance | Pakenham Since 2017',
  description: 'Pakenham garden and property maintenance company established 2017, servicing 18 South-East Melbourne suburbs for homes, strata and commercial sites.',
  keywords: 'Blue Hills Property Maintenance, Pakenham garden maintenance company, lawn mowing business Pakenham, about Blue Hills, property maintenance South-East Melbourne',
  image: img.garden,
  imageAlt: 'The Blue Hills team performing professional garden maintenance in Berwick VIC',
  preloadHero: img.garden,
  bodyHtml: body,
  jsonLd: [
    webPageNode({
      pageUrl: URL,
      type: 'AboutPage',
      title: 'About Blue Hills Property Maintenance',
      description: 'Pakenham-based garden and property maintenance company established in 2017, servicing 18 suburbs across South-East Melbourne.',
      image: img.garden
    }),
    breadcrumbNode({
      pageUrl: URL,
      items: [{ label: 'Home', href: '/' }, { label: 'About', href: '/about/' }]
    }),
    faqNode(URL, faqs),
    {
      '@type': 'Organization',
      '@id': URL + '#org',
      name: biz.legalName,
      sameAs: [biz.facebook, biz.instagram, biz.gmb],
      subjectOf: { '@id': URL + '#webpage' },
      mainEntityOfPage: { '@id': ORG_ID }
    }
  ]
});
