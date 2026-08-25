import { img } from '../site.config.mjs';

const R = {
  lawn: { slug: 'lawn-mowing', label: 'Lawn Mowing' },
  acreage: { slug: 'acreage-mowing', label: 'Acreage Mowing' },
  hedge: { slug: 'hedge-trimming', label: 'Hedge Trimming' },
  garden: { slug: 'garden-maintenance', label: 'Garden Maintenance' },
  weed: { slug: 'weed-control', label: 'Weed & Vegetation Management' },
  body: { slug: 'body-corporate', label: 'Body Corporate' },
  comm: { slug: 'commercial-property', label: 'Commercial Property' }
};

export const serviceData = [

/* ============================ LAWN MOWING ============================ */
{
  slug: 'lawn-mowing',
  crumb: 'Lawn Mowing',
  title: 'Lawn Mowing Pakenham, Officer & Berwick | Blue Hills',
  description: 'Lawn mowing in Pakenham, Officer, Berwick and Narre Warren from $99+GST per visit. Mowing, crisp edging and blower clean-up. Free quote 0411 342 456.',
  keywords: 'lawn mowing Pakenham, lawn mowing Officer, lawn mowing Berwick, lawn mowing Narre Warren, lawn edging Pakenham, mowing service South-East Melbourne',
  eyebrow: 'Residential Lawn Care',
  h1: 'Lawn Mowing in <span class="accent">Pakenham</span> &amp; South-East Melbourne',
  answer: 'Blue Hills provides scheduled residential lawn mowing for home owners across Pakenham, Officer, Berwick, Narre Warren and 14 other South-East Melbourne suburbs. Every visit includes mowing, crisp edging around paths, beds and driveways, and a full blower clean-up. Standard residential lawn mowing starts at <strong>$99+GST per visit</strong> for a two-person crew, and can be booked weekly, fortnightly or monthly.',
  /* Client-supplied "Lawn Mowing" photography only — no stock, no design-bundle
     imagery on this page. Hero and feature shot are Lawn Mowing 5 and 4. */
  image: img.lawn4,
  imageAlt: 'Blue Hills truck and mowing trailer on site at a residential lawn mowing job in Pakenham VIC',
  secondImage: img.lawn5,
  secondImageAlt: 'Wide residential lawn mowed and edged by Blue Hills, with the branded trailer on the driveway',
  offerPrice: '99',
  offerNote: 'From $99 plus GST per visit for a standard residential lawn with a two-person crew. Clippings go into your green bin on site; off-site removal is quoted separately.',
  introEyebrow: 'The Service',
  introHeading: 'A lawn that always looks <span class="accent">freshly done.</span>',
  intro: [
    'A good mow is not just about cutting grass. It is about cut height, blade sharpness, edge definition and clean-up — the four things that separate a lawn that looks maintained from one that just looks cut. Blue Hills has been mowing lawns across the Pakenham–Berwick corridor since 2017, and the same crew that starts on your property is the crew that keeps it.',
    'We set the cut height to suit your grass type and the season. Kikuyu and couch through the warmer months come down harder; buffalo and ryegrass in winter get left longer to protect the crown. Blades are kept sharp so the leaf is cut rather than torn, which is what keeps a lawn green instead of tip-burnt and brown.',
    'Every mow finishes with hard edging along paths, driveways and garden beds, then a blower pass across the hard surfaces so nothing is left behind. We catch on the majority of residential mows and empty the clippings into your green waste bin on site, without overfilling it. Taking them off site instead is quoted separately.'
  ],
  facts: [
    { k: 'Starting price', v: 'From $99 + GST per visit (standard residential lawn, two-person crew)' },
    { k: 'Who we mow for', v: 'Home owners, plus body corporate, strata and commercial sites' },
    { k: 'Before every visit', v: 'An SMS 24 hours ahead with an ETA — recurring clients are on a fixed route' },
    { k: 'Grass clippings', v: 'Caught on most residential mows and emptied into your green bin, never overfilled' },
    { k: 'Frequency', v: 'Weekly, fortnightly or monthly — fortnightly Sep–May is most common' },
    { k: 'Included every visit', v: 'Mowing, hard edging, and a blow-down of garden beds and hard surfaces' },
    { k: 'Main service suburbs', v: 'Pakenham, Officer, Berwick, Narre Warren, Beaconsfield, Botanic Ridge' },
    { k: 'Insurance', v: 'Public liability cover on every job' }
  ],
  includedHeading: 'Every lawn mowing visit, <span class="accent">start to finish</span>',
  includedIntro: 'A professional lawn mowing service in Pakenham from Blue Hills isn\'t a simple push-and-go. One flat visit price covers the full cycle — no line items added on the day, no "that will be extra" surprises.',
  included: [
    { t: 'Mowing to the right height', d: 'Cut height set for your grass type and the season, never scalped. Ride-on or push mower depending on access and lawn size.' },
    { t: 'Hard edging', d: 'Line-trimmed and hard-edged along driveways, paths, fence lines and garden beds so the boundary between lawn and everything else stays sharp.' },
    { t: 'Blow-down &amp; clean-up', d: 'All clippings blown off garden beds and hard surfaces — paths, driveways and entertaining areas. You won\'t need to sweep after a Blue Hills visit. We leave the property as if we weren\'t even there.' },
    { t: 'Trimming around obstacles', d: 'Around trees, letterboxes, clotheslines, garden taps, pool fencing and retaining walls — the spots a mower deck cannot reach.' },
    { t: 'Health check on every visit', d: 'We flag lawn issues we spot — grub damage, dry patches, thatch build-up, drainage problems — before they become expensive.' },
    { t: 'You know when we\'re coming', d: 'Clients receive an SMS 24 hours before service with an ETA. Recurring clients sit on a fixed route, so we arrive when we say we will — not whenever a gap opens up in the day.' }
  ],
  processHeading: 'From first call to <span class="accent">standing appointment</span>',
  processIntro: 'Getting onto the Blue Hills run takes one phone call and one short site visit. Most new residential clients are mowing within a week.',
  process: [
    { t: 'Free on-site assessment', d: 'We walk the property, measure the lawn area, check access and gate widths, and note anything that affects the job — slope, obstacles, dog runs, irrigation heads.' },
    { t: 'Fixed per-visit quote', d: 'You get a written per-visit price and a recommended frequency. No hourly rate creeping up, no charge for travel inside our service area.' },
    { t: 'Locked-in schedule', d: 'Your property joins the fixed route for your suburb, and you get an SMS 24 hours before each visit with an ETA. No wondering which day we might turn up.' },
    { t: 'Set and forget', d: 'We turn up, mow, edge, blow down and go. Invoicing is monthly. If we ever cannot make a scheduled visit, you hear from us first.' }
  ],
  pricingEyebrow: 'What It Costs',
  pricingHeading: 'Honest lawn mowing prices in <span class="accent">Pakenham</span>',
  pricing: [
    'Standard residential lawn mowing for home owners starts at <strong>$99 plus GST per visit</strong> for a two-person crew. We catch on most residential mows and the clippings go into your green bin on site; having them taken off site instead is quoted separately.',
    'The final price depends on three things: total lawn area, how often we visit, and access. A compact Officer courtyard on a fortnightly cycle sits at the bottom of the range. A large Harkaway block on a monthly cycle, where growth has more time to get away, sits higher.',
    'Larger and rural blocks are handled under <a href="/acreage-mowing/" style="color:#C9A96E">acreage mowing</a>, which is quoted on site. Everything is quoted before we start — you will never receive an invoice you have not already agreed to.'
  ],
  areaHeading: 'Lawn mowing across the <span class="accent">Pakenham–Berwick corridor</span>',
  areaIntro: 'Our residential mowing runs cover these suburbs every week. Because we are already in your street, travel is not charged on top.',
  areaSuburbs: ['Pakenham', 'Officer', 'Berwick', 'Narre Warren', 'Narre Warren North', 'Beaconsfield', 'Botanic Ridge', 'Devon Meadows', 'Harkaway', 'Cranbourne South', 'Koo Wee Rup', 'Lysterfield'],
  galleryHeading: 'Recent lawn mowing jobs',
  galleryIntro: 'A snapshot of residential lawns on the Blue Hills run — mowed, edged and blown down on a recurring schedule.',
  gallery: [
    { src: img.lawn1, title: 'Striped lawn, modern home', alt: 'Freshly mowed and striped front lawn at a modern home maintained by Blue Hills' },
    { src: img.lawn2, title: 'Shaped shrubs & stripe lines', alt: 'Residential lawn mowed with clean stripe lines beside shaped garden shrubs' },
    { src: img.lawn3, title: 'Garden lawn & gazebo', alt: 'Mowed garden lawn surrounding a gazebo and flowering shrubs' },
    { src: img.lawn6, title: 'Nature strip & footpath edging', alt: 'Nature strip and footpath mowed and edged by Blue Hills on a residential street' }
  ],
  faqHeading: 'Lawn mowing <span class="accent">questions</span>',
  faqs: [
    { q: 'How much does lawn mowing cost in Pakenham?', a: 'Residential lawn mowing in Pakenham for home owners starts at $99+GST per visit for a two-person crew. Clippings are caught and go into your green bin on site; off-site removal is quoted separately. The exact price depends on lawn size, visit frequency and access. You receive a fixed per-visit price in writing after a free on-site assessment.' },
    { q: 'How often should my lawn be mowed in South-East Melbourne?', a: 'Most South-East Melbourne lawns are best mowed fortnightly from September to May, then monthly from June to August when growth slows. Fast-growing kikuyu on an irrigated block may need weekly mowing through peak spring. We recommend a frequency after seeing your grass type and site.' },
    { q: 'Do you remove the grass clippings?', a: 'We catch on the majority of residential mows, and the clippings go into your green waste bin on site — filled sensibly and never overfilled. That is part of the visit, not an extra. If there is more grass than the bin will take, or you would rather nothing went in it, we can take the clippings off site instead and that is quoted separately. Some clients prefer clippings mulched back into the lawn, which returns nitrogen and moisture to the soil; just tell us which you want.' },
    { q: 'Do I need to be home when you mow?', a: 'No. Once your property is on the run we can service it whether you are home or not, provided we have side gate access. If the gate is locked, let us know the code or leave it unlatched on your service day.' },
    { q: 'What happens if it rains on my scheduled day?', a: 'Mowing a saturated lawn damages the turf and leaves ruts, so we reschedule rather than force it. You are contacted with a new day, usually within the same week. You are never charged for a visit we did not complete.' },
    { q: 'Do you mow both front and back yards?', a: 'Yes. The quoted per-visit price covers the whole property unless you specifically ask us to service only part of it — some clients on larger blocks have us mow the front and the immediate house surrounds only.' },
    { q: 'Will I know when you are coming?', a: 'Yes. Clients receive an SMS 24 hours before service with an ETA, and recurring clients sit on a fixed route for their suburb. We arrive when we say we will rather than whenever a gap opens up in the day, and if weather or a breakdown moves your visit you hear from us first.' },
    { q: 'Can you handle body corporate and commercial lawns as well as residential?', a: 'Yes. Alongside residential lawn mowing for home owners we hold body corporate, strata and commercial grounds contracts across the same suburbs. Common area lawns, entry statements and car park surrounds are mowed and edged on a documented schedule.' },
    { q: 'Do you also edge and whipper snip?', a: 'Yes, on every single visit. Hard edging along driveways, paths and garden beds plus line trimming around obstacles is included in the mowing price, not charged as an extra.' }
  ],
  schemaName: 'Lawn mowing and edging',
  schemaType: 'Lawn Mowing',
  ctaHeading: 'Get Your Lawn on a <span class="accent">Set-and-Forget Schedule</span>',
  ctaCopy: 'Free on-site assessment, fixed per-visit price, and a crew that turns up. Request your lawn mowing quote today.',
  related: [R.acreage, R.garden, R.weed]
},

/* ============================ ACREAGE MOWING ============================ */
{
  slug: 'acreage-mowing',
  crumb: 'Acreage Mowing',
  title: 'Acreage Mowing Pakenham Upper & Nar Nar Goon | Blue Hills',
  description: 'Ride-on acreage mowing across Pakenham Upper, Nar Nar Goon, Tynong and Koo Wee Rup. Paddocks, fence lines and house surrounds. Free quote 0411 342 456.',
  keywords: 'acreage mowing Pakenham Upper, acreage mowing Nar Nar Goon, ride-on mowing Tynong, paddock slashing Koo Wee Rup, rural block mowing South-East Melbourne, acreage lawn mowing Beaconsfield Upper',
  eyebrow: 'Rural & Semi-Rural',
  h1: 'Acreage Mowing in <span class="accent">Pakenham Upper</span> &amp; the Rural Corridor',
  answer: 'Blue Hills mows rural and semi-rural acreage from one to ten-plus acres across Pakenham Upper, Nar Nar Goon, Tynong, Guys Hill, Beaconsfield Upper and Koo Wee Rup. We use ride-on machinery matched to the block, covering paddocks, fence lines, driveway verges, dam surrounds and the maintained house area. Acreage mowing is quoted on site and typically booked monthly or seasonally depending on growth.',
  image: img.acreage,
  imageAlt: 'Blue Hills ride-on mower working on an acreage property in Pakenham Upper VIC',
  secondImage: img.acre2,
  secondImageAlt: 'Large acreage lawn and driveway verges mown and tidied by Blue Hills',
  introEyebrow: 'The Service',
  introHeading: 'Acreage that stays <span class="accent">presentable and safe.</span>',
  intro: [
    'Acreage is a different job to a suburban lawn, and it needs different gear. A push mower on a five-acre block is a full weekend you never get back. Blue Hills runs ride-on machinery suited to open ground, uneven paddock, long grass and the tight sections around sheds, tanks and fence lines.',
    'Most acreage clients want two things: a tidy, maintained zone around the house that looks like a lawn, and the wider paddock kept down so it does not turn into a fire load or a snake habitat over summer. We handle both in the one visit and price them together.',
    'Because growth on a rural block swings hard between seasons, acreage mowing is usually booked as a monthly or seasonal cycle rather than a fixed fortnight. Through the spring flush we come more often. Through a dry January, less. You are quoted per visit, so you are never paying for a mow the grass did not need.'
  ],
  facts: [
    { k: 'Block sizes', v: 'One acre to ten-plus acres, including irregular and sloping blocks' },
    { k: 'Machinery', v: 'Ride-on mowers matched to terrain, plus line trimmers for fence lines and obstacles' },
    { k: 'Typical frequency', v: 'Monthly or seasonal, adjusted to growth rather than a fixed calendar' },
    { k: 'Quoting', v: 'On-site assessment — pricing reflects area, terrain and grass height' },
    { k: 'Core suburbs', v: 'Pakenham Upper, Nar Nar Goon, Tynong, Guys Hill, Beaconsfield Upper, Koo Wee Rup, Maryknoll' },
    { k: 'Also covered', v: 'Fence lines, driveway verges, dam and tank surrounds, shed perimeters' }
  ],
  includedHeading: 'What we cover on an <span class="accent">acreage visit</span>',
  includedIntro: 'A rural block has more than one type of ground. We treat each zone the way it needs to be treated instead of running one pass over everything.',
  included: [
    { t: 'House surrounds', d: 'The maintained zone around the home cut at lawn height and edged, so the house does not look like it is sitting in a paddock.' },
    { t: 'Open paddock', d: 'Ride-on mowing across open ground to keep grass height down, reduce summer fire load and stop the block turning into a weed nursery.' },
    { t: 'Fence lines', d: 'Line trimmed along boundary and internal fencing, where a ride-on cannot reach and where long grass does the most damage over time.' },
    { t: 'Driveway verges', d: 'Both sides of long rural driveways kept clear, which matters for sightlines, for deliveries and for anyone reversing a trailer.' },
    { t: 'Dam, tank and shed surrounds', d: 'The awkward perimeters around infrastructure trimmed back so access stays clear and vegetation does not creep in.' },
    { t: 'Obstacle work', d: 'Around established trees, orchard rows, water troughs, culverts and stock crossings without damaging what is there.' }
  ],
  processHeading: 'How an acreage job <span class="accent">gets booked</span>',
  processIntro: 'Every acreage block is different, so we do not quote them over the phone. A short site visit is faster and gives you a price you can rely on.',
  process: [
    { t: 'On-site walk-through', d: 'We drive or walk the block with you, note the total mowable area, the terrain, the obstacles and where the paddock line sits versus the maintained zone.' },
    { t: 'Zoned quote', d: 'You get a price split by zone so you can see what the house surrounds cost versus the wider paddock, and decide how much you actually want done.' },
    { t: 'Growth-based schedule', d: 'We agree a cycle — usually monthly through the growing season, stretching out over summer dry and winter dormancy.' },
    { t: 'Ongoing adjustment', d: 'If a wet spring pushes growth, we tell you before adding a visit. If the block does not need it, we skip it. You are not locked into mows you do not need.' }
  ],
  pricingEyebrow: 'What It Costs',
  pricingHeading: 'Acreage mowing is <span class="accent">quoted on site</span>',
  pricing: [
    'There is no honest flat rate for acreage. A flat, open four-acre block in Koo Wee Rup and a sloping four-acre block in Pakenham Upper with a dam, an orchard and 400 metres of fence line are completely different jobs, and pricing them the same would mean one of those clients is overpaying.',
    'We price acreage on mowable area, terrain difficulty, obstacle density and how long the grass has been left. Blocks that are on a regular cycle cost less per visit than a once-a-year rescue cut, because the machinery moves faster through shorter grass.',
    'If your block is under roughly a quarter acre, standard <a href="/lawn-mowing/" style="color:#C9A96E">residential lawn mowing</a> is usually the better-value option. We will tell you which one you actually need at the assessment.'
  ],
  areaHeading: 'Acreage mowing across the <span class="accent">rural east</span>',
  areaIntro: 'Our ride-on gear runs through the semi-rural belt north and east of Pakenham every month through the growing season.',
  areaSuburbs: ['Pakenham Upper', 'Nar Nar Goon', 'Tynong', 'Guys Hill', 'Beaconsfield Upper', 'Maryknoll', 'Koo Wee Rup', 'Harkaway', 'Narre Warren North', 'Lysterfield', 'Officer', 'Cranbourne South'],
  galleryHeading: 'Recent acreage mowing jobs',
  galleryIntro: 'Rural and semi-rural blocks across the belt north and east of Pakenham, cut with ride-on machinery.',
  gallery: [
    { src: img.acre5, title: 'Ride-on mower at work', alt: 'Blue Hills ride-on mower working across an acreage lawn' },
    { src: img.acre6, title: 'Zero-turn on open ground', alt: 'Zero-turn ride-on mower on an open acreage property' },
    { src: img.acre4, title: 'Rural outlook', alt: 'Freshly mown acreage lawn with a rural outlook beyond the boundary' },
    { src: img.acre1, title: 'Lawn under gum trees', alt: 'Acreage lawn mowed around established gum trees' }
  ],
  faqHeading: 'Acreage mowing <span class="accent">questions</span>',
  faqs: [
    { q: 'What size properties do you mow?', a: 'We mow rural and semi-rural blocks from around one acre up to ten-plus acres. Below a quarter acre, our standard residential lawn mowing service is usually more cost-effective. Above ten acres, contact us and we will confirm what we can cover in a visit.' },
    { q: 'How much does acreage mowing cost around Pakenham Upper?', a: 'Acreage mowing is quoted after an on-site assessment because terrain, mowable area, obstacles and grass height vary enormously between blocks. Properties on a regular cycle cost less per visit than one-off rescue cuts, because shorter grass means faster machine time.' },
    { q: 'How often does an acreage block need mowing?', a: 'Most acreage in South-East Melbourne is mowed monthly through the September to May growing season, then far less over winter. Wet springs may need an extra pass. We adjust the cycle to actual growth rather than billing a fixed calendar.' },
    { q: 'Do you slash paddocks as well as mow lawns?', a: 'Yes. On most acreage jobs we maintain the house surrounds at lawn height and keep the wider paddock cut down to control fire load and weeds. Both zones are quoted separately so you can choose how much of the block you want maintained.' },
    { q: 'Can you mow around dams, sheds and orchard trees?', a: 'Yes. Ride-on machinery covers the open ground and we line trim the perimeters — fence lines, dam and tank surrounds, shed edges, culverts and around established or orchard trees — so the whole block is finished, not just the easy parts.' },
    { q: 'Will you mow a block that has been left for a year?', a: 'Yes, though a long-neglected block takes more time and is quoted as a rescue cut. Once it is back under control, moving onto a regular cycle is significantly cheaper per visit.' }
  ],
  schemaName: 'Acreage and ride-on mowing',
  schemaType: 'Acreage Mowing',
  ctaHeading: 'Get Your Acreage Back <span class="accent">Under Control</span>',
  ctaCopy: 'Free on-site assessment across Pakenham Upper, Nar Nar Goon, Tynong and the surrounding rural belt. Zoned pricing, no surprises.',
  related: [R.lawn, R.weed, R.garden]
},

/* ============================ HEDGE TRIMMING ============================ */
{
  slug: 'hedge-trimming',
  crumb: 'Hedge Trimming',
  title: 'Hedge Trimming & Reductions Berwick, Pakenham | Blue Hills',
  description: 'Hedge trimming and hedge reductions across Berwick, Narre Warren, Pakenham and Beaconsfield. Formal hedges shaped, overgrown screens restored. 0411 342 456.',
  keywords: 'hedge trimming Berwick, hedge trimming Narre Warren, hedge reduction Pakenham, hedge cutting Beaconsfield, formal hedge shaping South-East Melbourne, overgrown hedge restoration',
  eyebrow: 'Hedges & Screens',
  h1: 'Hedge Trimming &amp; <span class="accent">Reductions</span> in Berwick &amp; Narre Warren',
  answer: 'Blue Hills trims, shapes and reduces hedges across Berwick, Narre Warren, Pakenham, Officer and Beaconsfield. We handle routine maintenance trims on formal hedges, height and width reductions on hedges that have outgrown their space, and restoration cuts on screens that have been left too long. Every cutting is raked out and cleared as part of the job, and green waste is taken off site where your quote includes removal.',
  /* Hero is the client's "Hedge Trimming 6 OPENING IMAGE"; the six numbered
     Hedge Trimming photographs fill the six Recent Work tiles below. */
  image: img.hedgeOpening,
  imageAlt: 'Formal hedges trimmed to square blocks along a driveway in Pakenham VIC by Blue Hills',
  secondImage: img.newHedge1,
  secondImageAlt: 'Long formal hedge run cut to a straight, level face beside a maintained lawn',
  introEyebrow: 'The Service',
  introHeading: 'Sharp lines. <span class="accent">Healthy growth.</span>',
  intro: [
    'A hedge is the most visible thing on most properties, and it is also the thing most likely to be cut badly. Trim too lightly and it thickens outward year after year until it has eaten a metre of your driveway. Trim too hard into bare wood on the wrong species and it never fills back in.',
    'Blue Hills trims to the species. Photinia, viburnum, lilly pilly, murraya, box and conifer all respond differently to how hard and how often they are cut. We work to the growth point that keeps the face dense, taper the sides slightly so light reaches the base, and keep the top true rather than rounded by accident.',
    'For hedges that have already got away, we do staged reductions. Bringing an overgrown screen back in one aggressive cut often kills the face. Taking it back over two or three visits across a season gives the plant time to push new growth and hold the shape you actually wanted.'
  ],
  facts: [
    { k: 'Services', v: 'Maintenance trims, height reductions, width reductions, restoration cuts, shaping' },
    { k: 'Common species', v: 'Photinia, lilly pilly, viburnum, murraya, box, pittosporum, conifer, cypress' },
    { k: 'Cuttings', v: 'Always raked and collected; taken off site where your quote includes green waste removal' },
    { k: 'Typical frequency', v: 'Formal hedges two to three times a year; fast growers may need more' },
    { k: 'Best timing', v: 'Main shaping cut in late spring or early autumn; light tidy-ups any time' },
    { k: 'Height access', v: 'Ladder and pole work for tall screens where safe access allows' }
  ],
  includedHeading: 'What a hedge job <span class="accent">actually involves</span>',
  includedIntro: 'The cut is only part of it. What separates a professional hedge job is the preparation, the line and the clean-up.',
  included: [
    { t: 'Species-appropriate cut', d: 'How hard we cut is set by what the plant is and how it regrows. We do not take a conifer back into bare wood, and we do not baby a photinia that needs a hard trim.' },
    { t: 'True lines', d: 'Faces cut to a straight, level line rather than following the existing bulge. Long runs are strung or sighted so the finish reads straight from the street.' },
    { t: 'Tapered sides', d: 'Sides cut with a slight taper, narrower at the top, so light reaches the base of the hedge and the bottom does not go bare and leggy.' },
    { t: 'Height reduction', d: 'Bringing tall screens down to a workable height, staged over multiple visits where the species needs time to recover.' },
    { t: 'Width reduction', d: 'Reclaiming driveways, paths and fence lines from hedges that have crept outward over several seasons of light trimming.' },
    { t: 'Full clean-up', d: 'Cuttings raked out of beds and off lawns and hard surfaces blown down on every visit. Where your quote includes green waste removal we load it and take it away; on smaller trims we will use your green bin instead if that is appropriate, without overfilling it.' }
  ],
  processHeading: 'How we <span class="accent">approach your hedge</span>',
  processIntro: 'Every hedge gets assessed before a blade touches it. That is what stops a maintenance trim turning into a two-year recovery.',
  process: [
    { t: 'Assess species and condition', d: 'We identify what the hedge is, how much old wood is in it, whether the base is going bare, and how far it can safely be cut this season.' },
    { t: 'Agree the target shape', d: 'You tell us the height and line you want. We tell you honestly whether it can be reached in one visit or needs staging, and what it will look like immediately after.' },
    { t: 'Cut and shape', d: 'Faces and top cut to line, sides tapered, dead and crossing material taken out of the interior where it is restricting airflow.' },
    { t: 'Clear and clean down', d: 'Beds raked out, lawns cleared, paths blown down and every cutting collected. Green waste leaves with us when removal is in your quote, or goes in your green bin on smaller jobs. The hedge should be the only evidence we were there.' }
  ],
  pricingEyebrow: 'What It Costs',
  pricingHeading: 'Hedge pricing depends on <span class="accent">length, height and access</span>',
  pricing: [
    'Hedge work is quoted per job rather than per hour. The three variables that move the price are total run length, finished height, and how much material is coming off — a maintenance trim on a hedge we cut six months ago is a fraction of the cost of a first restoration cut on the same hedge.',
    'Access matters too. A hedge you can walk both sides of is straightforward. A boundary hedge with a two-metre drop on the neighbour side, or a screen against a retaining wall, takes longer and needs more care.',
    'Hedge trimming is often booked alongside <a href="/garden-maintenance/" style="color:#C9A96E">garden maintenance</a> or a scheduled <a href="/lawn-mowing/" style="color:#C9A96E">mowing</a> visit, which is the cheapest way to have it done — the crew is already on site.'
  ],
  areaHeading: 'Hedge trimming across <span class="accent">South-East Melbourne</span>',
  areaIntro: 'We trim hedges throughout the Pakenham–Berwick corridor for homeowners, body corporates and commercial sites alike.',
  areaSuburbs: ['Berwick', 'Narre Warren', 'Narre Warren North', 'Pakenham', 'Officer', 'Beaconsfield', 'Harkaway', 'Botanic Ridge', 'Lysterfield', 'Devon Meadows', 'Beaconsfield Upper', 'Cranbourne South'],
  galleryHeading: 'Recent hedge trimming jobs',
  galleryIntro: 'Formal hedges, boundary screens and car park screening cut to a true line, with every cutting raked up and cleared.',
  gallery: [
    { src: img.hedge1, title: 'Reduction & reshape', alt: 'Established hedge reduced and reshaped to a clean line by Blue Hills' },
    { src: img.hedge2, title: 'Driveway hedges', alt: 'Shaped hedges lining the driveway of a two-storey home after trimming' },
    { src: img.hedge3, title: 'Car park screening', alt: 'Commercial car park screening hedge cut to a level line by Blue Hills' },
    { src: img.hedge4, title: 'Boundary hedge', alt: 'Boundary hedge trimmed square beside a palm and maintained lawn' },
    { src: img.hedge5, title: 'Driveway screen & gate', alt: 'Tall driveway screening hedge trimmed back clear of the entry gate' },
    { src: img.hedge6, title: 'Level boundary run', alt: 'Long boundary hedge trimmed to a level line beside a mown lawn' }
  ],
  faqHeading: 'Hedge trimming <span class="accent">questions</span>',
  faqs: [
    { q: 'When is the best time to trim a hedge in Victoria?', a: 'The main shaping cut is best done in late spring or early autumn, when the plant has enough growing season left to push new growth and close the face. Light tidy-up trims can be done almost any time. Hard reductions are best avoided in the middle of summer heat or deep winter.' },
    { q: 'How often should hedges be trimmed?', a: 'Most formal hedges in South-East Melbourne need two to three trims a year to hold a sharp line. Fast growers such as photinia and lilly pilly on good soil may need three or four. A single annual trim will keep a hedge alive but it will slowly thicken and lose its shape.' },
    { q: 'Can you reduce the height of an overgrown hedge?', a: 'Yes. Height and width reductions are a core part of what we do. Depending on the species and how far it has to come back, we may stage the reduction across two or three visits over a season so the hedge regenerates rather than being left with bare, brown faces.' },
    { q: 'Do you take the hedge cuttings away?', a: 'Cuttings are always raked out of the beds, cleared off lawns and hard surfaces, and collected — you are never left with a pile to deal with. Whether they leave the property depends on your quote. Green waste removal is priced into the job where the volume calls for it, and where that is stipulated in your proposal we take everything away. On smaller trims we will use your own green bin if that is appropriate, filled sensibly and never overfilled. If you would prefer nothing went in your bin, tell us and we will quote removal instead.' },
    { q: 'Will cutting my hedge hard kill it?', a: 'It depends entirely on the species. Photinia, lilly pilly, viburnum and murraya generally reshoot well from old wood. Most conifers and cypress will not reshoot from bare wood, so those can only be trimmed back to green growth. We assess this before cutting and tell you what is safely achievable.' },
    { q: 'Do you trim tall hedges and screens?', a: 'Yes, where safe access allows. We use ladder and pole equipment for taller screens. If a hedge genuinely requires elevated work platform access or crosses into tree work, we will tell you rather than attempt it unsafely.' }
  ],
  schemaName: 'Hedge trimming and hedge reductions',
  schemaType: 'Hedge Trimming',
  ctaHeading: 'Get Your Hedges Back to a <span class="accent">Sharp Line</span>',
  ctaCopy: 'Species-appropriate trimming, honest advice on what is achievable this season, and a full clean-up every visit. Book a free hedge assessment.',
  related: [R.garden, R.lawn, R.body]
},

/* ============================ GARDEN MAINTENANCE ============================ */
{
  slug: 'garden-maintenance',
  crumb: 'Garden Maintenance',
  title: 'Garden Maintenance & Clean-Ups Berwick | Blue Hills',
  description: 'Garden maintenance, pruning and clean-ups across Berwick, Pakenham, Officer and Beaconsfield. Scheduled visits or one-off resets. Free quote 0411 342 456.',
  keywords: 'garden maintenance Berwick, garden maintenance Pakenham, garden clean up Officer, pruning Beaconsfield, softscaping South-East Melbourne, pre-sale garden tidy Narre Warren',
  eyebrow: 'Gardens & Grounds',
  h1: 'Garden Maintenance &amp; <span class="accent">Clean-Ups</span> in Berwick &amp; Pakenham',
  answer: 'Blue Hills provides ongoing garden maintenance, seasonal clean-ups, general pruning and softscaping across Berwick, Pakenham, Officer, Beaconsfield and the surrounding South-East Melbourne suburbs. Work can be booked as a recurring maintenance schedule, a one-off seasonal reset, or a pre-sale presentation tidy before a property goes to market.',
  image: img.garden,
  imageAlt: 'Blue Hills team performing professional garden maintenance in Berwick VIC',
  secondImage: img.newGarden1,
  secondImageAlt: 'Mulched garden beds and a clipped border hedge running along a maintained driveway',
  introEyebrow: 'The Service',
  introHeading: 'Gardens that look <span class="accent">intentional,</span> not overgrown.',
  intro: [
    'The difference between a maintained garden and a neglected one is rarely dramatic. It is edges that have blurred, mulch that has thinned, a few shrubs that have gone shapeless, and weeds that have quietly taken the beds. Six months of that and a garden that was designed well simply stops reading as designed.',
    'Blue Hills keeps gardens on the right side of that line. On a recurring maintenance visit we weed the beds, prune what needs shaping, cut back what has finished flowering, redefine the bed edges, clear leaf litter and debris, and leave the hard surfaces blown down.',
    'For gardens that have already gone past it, we do a full seasonal reset first — a heavy clean-up that brings everything back to a baseline — and then quote an ongoing schedule that keeps it there. Resets are also what most clients book before listing a property, because presentation moves a sale.'
  ],
  facts: [
    { k: 'Service modes', v: 'Recurring maintenance schedule, one-off seasonal reset, or pre-sale presentation tidy' },
    { k: 'Included work', v: 'Bed weeding, pruning, cutting back, edge definition, leaf and debris clearing, blow-down' },
    { k: 'Also available', v: 'Softscaping, mulching, plant replacement, garden bed reshaping' },
    { k: 'Typical frequency', v: 'Monthly or six-weekly for maintained gardens; seasonal for lower-maintenance sites' },
    { k: 'Green waste', v: 'Always collected; removed from site where your proposal includes it, otherwise your green bin — never overfilled' },
    { k: 'Core suburbs', v: 'Berwick, Pakenham, Officer, Beaconsfield, Narre Warren, Harkaway' }
  ],
  includedId: 'pruning',
  includedHeading: 'What a garden maintenance <span class="accent">visit covers</span>',
  includedIntro: 'A maintenance visit is a full pass over the garden, not a spot fix on whatever looks worst that day.',
  included: [
    { t: 'Garden bed weeding', d: 'Beds hand-weeded and, where appropriate, spot-treated so the problem does not simply come back thicker in three weeks.' },
    { t: 'General pruning', d: 'Shrubs and ornamentals shaped, spent flowering wood cut back, dead and crossing material removed to keep plants healthy and in proportion.' },
    { t: 'Bed edge definition', d: 'Crisp, cut edges between lawn and garden beds. It is the single change that makes the biggest visual difference to a tired garden.' },
    { t: 'Leaf and debris clearing', d: 'Leaf litter, fallen branches and seed drop cleared out of beds, off paths, and away from drains and downpipes.' },
    { t: 'Mulch top-ups and softscaping', d: 'Mulch refreshed to suppress weeds and hold moisture; plantings, bed reshaping and other softscaping work quoted as needed.' },
    { t: 'Full site clean-down', d: 'Paths, driveways and entertaining areas blown clear and the garden left tidy. Green waste is taken off site where your proposal includes removal; on smaller visits it goes in your green bin instead, filled sensibly and never overloaded.' }
  ],
  processEyebrow: 'How It Works',
  processHeading: 'Reset first, then <span class="accent">keep it there</span>',
  processIntro: 'Most gardens we take on need one solid clean-up before an ongoing schedule makes sense. After that, maintaining is far cheaper than repeatedly rescuing.',
  process: [
    { t: 'Walk-through and honest assessment', d: 'We go through the garden with you, identify what is worth keeping, what has outgrown its position, and what is simply going to keep causing problems.' },
    { t: 'Seasonal reset', d: 'A full clean-up visit — heavy weeding, hard pruning where needed, edges recut, debris cleared, mulch topped up. This brings the garden back to a baseline.' },
    { t: 'Ongoing schedule', d: 'Monthly or six-weekly maintenance visits that hold the garden at that standard. Priced per visit, and usually run alongside your mowing.' },
    { t: 'Seasonal adjustments', d: 'What gets done shifts through the year — heavier pruning in autumn, weed pressure in spring, leaf clearing through winter. You do not have to manage that; we do.' }
  ],
  pricingEyebrow: 'What It Costs',
  pricingHeading: 'Maintenance is cheaper than <span class="accent">rescue</span>',
  pricing: [
    'Ongoing garden maintenance is quoted per visit based on garden size, planting density and how much bed area there is. Gardens on a regular schedule are consistently the cheapest to maintain, because each visit is a tidy rather than a recovery.',
    'One-off seasonal resets and pre-sale clean-ups are quoted as a project after a site visit, since the scope depends entirely on how long the garden has been left and how much green waste is coming out.',
    'Garden maintenance is very commonly bundled with <a href="/lawn-mowing/" style="color:#C9A96E">lawn mowing</a> and <a href="/hedge-trimming/" style="color:#C9A96E">hedge trimming</a> on the same visit. One crew, one trip, one invoice — and it is the best value way to buy it.'
  ],
  areaHeading: 'Garden maintenance across the <span class="accent">South-East</span>',
  areaIntro: 'From compact courtyards in Officer to established gardens in Harkaway and Berwick, we maintain gardens throughout the corridor.',
  areaSuburbs: ['Berwick', 'Pakenham', 'Officer', 'Beaconsfield', 'Narre Warren', 'Narre Warren North', 'Harkaway', 'Botanic Ridge', 'Devon Meadows', 'Lysterfield', 'Cranbourne South', 'Nar Nar Goon'],
  faqHeading: 'Garden maintenance <span class="accent">questions</span>',
  faqs: [
    { q: 'How often should a garden be professionally maintained?', a: 'Most established gardens in South-East Melbourne sit best on a monthly or six-weekly visit. Densely planted gardens with high weed pressure benefit from monthly. Low-maintenance native or gravel-heavy gardens can often run on a seasonal schedule of four visits a year.' },
    { q: 'Do you do one-off garden clean-ups as well as regular visits?', a: 'Yes. One-off seasonal resets and pre-sale property clean-ups are a large part of our work. Many clients start with a single clean-up and then move onto an ongoing schedule once the garden is back to a standard worth holding.' },
    { q: 'Do you remove the green waste?', a: 'Prunings, weeds and leaf litter are always collected and cleaned up — you are never left with a pile on the lawn or the nature strip. Whether it leaves the property depends on your proposal. Green waste removal is quoted into the job when the volume warrants it, and where that is stipulated we take it all away. On smaller visits, where it is appropriate and there is room, it goes into your own green bin, filled properly and never overfilled. If you would rather we did not use your bin, say so and we will price removal instead.' },
    { q: 'Can you get a garden ready for a property sale?', a: 'Yes, and it is one of the highest-return jobs we do. A pre-sale presentation tidy typically includes a hard clean-up, pruning, recut bed edges, fresh mulch, weed treatment and a full mow and edge, timed to land just before photography or the first open for inspection.' },
    { q: 'What is softscaping?', a: 'Softscaping is the living side of a garden — plants, turf, mulch, soil and garden beds — as opposed to hardscaping such as paving, decking and retaining walls. We handle softscaping work including new plantings, mulching and reshaping garden beds.' },
    { q: 'Can garden maintenance be combined with my mowing visit?', a: 'Yes, and most clients do exactly that. Combining mowing, garden maintenance and hedge work into one scheduled visit means one crew, one trip and one invoice, which almost always works out cheaper than booking them separately.' }
  ],
  schemaName: 'Garden maintenance, pruning and clean-ups',
  schemaType: 'Garden Maintenance',
  ctaHeading: 'Bring Your Garden Back to <span class="accent">Its Best</span>',
  ctaCopy: 'Whether it needs a full seasonal reset or a steady maintenance schedule, we will tell you honestly which one you need. Book a free assessment.',
  related: [R.hedge, R.weed, R.lawn]
},

/* ============ WEED MANAGEMENT, BLOCK SLASHING & VEGETATION ============ */
/* Renamed from "Weed Control" at the client's request. The /weed-control/
   URL is deliberately unchanged so the page keeps its indexed history. */
{
  slug: 'weed-control',
  crumb: 'Weed & Vegetation Management',
  title: 'Weed Management & Block Slashing Pakenham | Blue Hills',
  description: 'Weed management, block slashing and vegetation management in Pakenham, Officer and Berwick. Vacant blocks, paddocks and fire-prevention cuts. 0411 342 456.',
  keywords: 'weed management Pakenham, weed control Pakenham, block slashing Pakenham, slashing vacant block Officer, vegetation management Berwick, paddock slashing Cardinia, fire hazard notice slashing Pakenham, lawn weed control Berwick, driveway weed control South-East Melbourne',
  eyebrow: 'Weeds, Blocks & Vegetation',
  h1: 'Weed Management, Block Slashing &amp; <span class="accent">Vegetation Management</span>',
  answer: 'Blue Hills provides weed management, block slashing and vegetation management across Pakenham, Officer, Berwick, Narre Warren and the wider South-East Melbourne corridor. On maintained properties we treat weeds in lawns, garden beds, driveways and paths using selective spraying, targeted spot treatment and hand-weeding. On vacant blocks, paddocks, easements and neglected sites we slash and clear overgrown vegetation, including work done to satisfy council fire-prevention notices. All of it is available as a one-off job or as part of a recurring maintenance schedule.',
  image: img.newWeed1,
  imageAlt: 'Blue Hills zero-turn mower slashing an overgrown vacant block in South-East Melbourne',
  secondImage: img.newWeed3,
  secondImageAlt: 'Large open block slashed back to an even, manageable height by Blue Hills',
  introEyebrow: 'The Service',
  introHeading: 'From <span class="accent">bindii in a lawn</span> to a block you cannot walk through.',
  intro: [
    'Weed and vegetation problems sit on a spectrum. At one end is a lawn with bindii and clover through it, where the answer is the right selective product applied at the right point in the season. At the other is a vacant block that has not been touched in two years, where the answer is a slasher, a plan for the debris, and someone who knows what is under the grass before they drive into it.',
    'Blue Hills covers the whole of that range. On maintained properties we use selective treatment on turf, targeted spot treatment and hand-weeding in garden beds — because blanket spraying near established plantings is how people lose shrubs — and knockdown treatment on driveways, paths and gravel where nothing desirable is growing.',
    'On vacant land, paddocks, easements, fence lines and neglected sites we slash. That covers residential blocks held for future building, rural paddocks, industrial yards, body corporate reserves and land that has attracted a council fire-prevention notice. We walk a block before we cut it, because star pickets, rubbish, stumps and old fencing hidden in long grass are what damage machinery and people.',
    'Timing matters as much as method. Bindii has to be treated in late winter before it sets its seed spike — treat it in January and you are dealing with prickles you could have prevented in July. Fire-prevention slashing has to be done before the declared fire danger period, not after the notice arrives. Clients on a schedule get both handled at the right point in the year without having to think about it.'
  ],
  facts: [
    { k: 'Lawn weeds', v: 'Selective treatment for bindii, clover, capeweed, cats ear, oxalis, winter grass' },
    { k: 'Garden beds', v: 'Targeted spot treatment plus hand-weeding around established plantings' },
    { k: 'Hard surfaces', v: 'Driveways, paths, gravel, kerbs and expansion joints' },
    { k: 'Block slashing', v: 'Vacant blocks, paddocks, easements, fence lines, industrial yards and reserves' },
    { k: 'Vegetation management', v: 'Overgrown site clearing, regrowth knock-down and access reinstatement' },
    { k: 'Fire prevention', v: 'Slashing to meet council fire-prevention notices ahead of the declared period' },
    { k: 'Best timing', v: 'Bindii and winter grass treated late winter; fire-prevention slashing before summer' },
    { k: 'Booking', v: 'One-off job or included in a recurring maintenance schedule' },
    { k: 'Property types', v: 'Residential, acreage, vacant land, body corporate common areas, commercial and industrial' }
  ],
  includedHeading: 'How we tackle <span class="accent">each kind of growth</span>',
  includedIntro: 'A driveway weed, a lawn weed, a weed in a garden bed and two acres of chest-high grass are four separate problems. Treating them the same way is how gardens get damaged and machinery gets broken.',
  included: [
    { t: 'Selective lawn spraying', d: 'Broadleaf weeds treated with a selective product that targets the weed and leaves your turf intact. Applied at the right rate and the right time of year.' },
    { t: 'Garden bed spot treatment', d: 'Weeds in beds treated individually or pulled by hand rather than blanket-sprayed, so nothing drifts onto the shrubs, perennials and edible plantings you actually want.' },
    { t: 'Driveway and path treatment', d: 'Knockdown treatment through paving joints, gravel, kerbs and cracks where there is no desirable planting to protect.' },
    { t: 'Block slashing', d: 'Vacant residential blocks, paddocks, easements, fence lines, industrial yards and body corporate reserves cut back to a manageable height. Blocks are walked first so hidden pickets, stumps and rubbish are found before the machine does.' },
    { t: 'Vegetation management', d: 'Heavier clearing on sites that have gone past slashing alone — woody regrowth, blackberry and scrub knocked down, access reinstated along boundaries, drains and service runs.' },
    { t: 'Fire-prevention compliance', d: 'Slashing and clearing to meet Cardinia, Casey and surrounding council fire-prevention notices. Booked ahead of the declared fire danger period rather than after an infringement.' }
  ],
  processHeading: 'A program that <span class="accent">actually reduces the problem</span>',
  processIntro: 'A one-off spray kills what is visible today and a one-off slash buys you eight weeks. Reducing the seed bank and staying ahead of the growth curve is what stops the same job recurring at the same cost every season.',
  process: [
    { t: 'Assess the site', d: 'We identify what is growing and where — lawn, beds, hard surfaces, or a whole block — and on vacant land we walk it for pickets, stumps, rubbish and drop-offs before any machinery goes on.' },
    { t: 'Match method to surface', d: 'Selective on turf, targeted or manual in beds, knockdown on hard surfaces, slashing or heavier clearing on open ground. Nothing is applied or driven near what it could damage.' },
    { t: 'Do it at the right time', d: 'Weeds treated before seed set, which is what reduces next season\'s germination rather than clearing this season\'s growth. Fire-prevention slashing scheduled before the declared period, not after the notice.' },
    { t: 'Follow up and suppress', d: 'A follow-up pass catches the second germination or the regrowth flush. On gardens, mulch, edging and turf density keep the ground covered; on blocks, a scheduled cut is far cheaper than an annual rescue.' }
  ],
  pricingEyebrow: 'What It Costs',
  pricingHeading: 'Priced by <span class="accent">area, access and how far it has gone</span>',
  pricing: [
    'Weed treatment is quoted on the area being treated and the method it requires. A selective spray across a suburban lawn is quick and inexpensive. Hand-weeding dense garden beds that have not been touched in a year takes real time and is priced accordingly.',
    'Block slashing and vegetation management are quoted after a site visit, because the price is driven by block size, how high and how woody the growth is, slope, access for the machine, and what is hidden in it. A block cut twice a year is a fraction of the cost per visit of the same block left for two years.',
    'Recurring clients pay far less over a year than one-off callouts, for the simple reason that weed pressure drops once the seed bank is reduced and a block that is kept down never becomes a clearing job. The first treatment or first cut on a badly gone site is always the most expensive one.',
    'Weed work is frequently added to a <a href="/garden-maintenance/" style="color:#C9A96E">garden maintenance</a> or <a href="/lawn-mowing/" style="color:#C9A96E">mowing</a> schedule at minimal extra cost, since the crew is already on site.'
  ],
  areaHeading: 'Weed and vegetation work across <span class="accent">South-East Melbourne</span>',
  areaIntro: 'We treat weeds and slash blocks for homeowners, landholders, body corporate common areas and commercial sites throughout the Pakenham–Berwick corridor and the semi-rural belt around it.',
  areaSuburbs: ['Pakenham', 'Officer', 'Berwick', 'Narre Warren', 'Beaconsfield', 'Botanic Ridge', 'Devon Meadows', 'Harkaway', 'Cranbourne South', 'Koo Wee Rup', 'Nar Nar Goon', 'Tynong', 'Pakenham Upper', 'Lysterfield'],
  faqHeading: 'Weed and vegetation <span class="accent">questions</span>',
  faqs: [
    { q: 'Do you slash vacant blocks and paddocks?', a: 'Yes. Block slashing is a core part of this service. We slash vacant residential blocks, rural paddocks, easements, fence lines, industrial yards and body corporate reserves across Pakenham, Officer, Nar Nar Goon, Tynong, Pakenham Upper and the surrounding areas. Blocks are walked before cutting so hidden star pickets, stumps, rubbish and drop-offs are identified first.' },
    { q: 'Can you slash a block to meet a council fire-prevention notice?', a: 'Yes, and it is a large part of what we do through spring. Cardinia, Casey and neighbouring councils issue fire-prevention notices requiring blocks to be cut back before the declared fire danger period. We slash to that standard and can do it on a recurring schedule so the notice never becomes an infringement. Book early — the weeks either side of the deadline are the busiest of our year.' },
    { q: 'What is the difference between slashing and vegetation management?', a: 'Slashing cuts grass and light growth back to a manageable height and suits blocks kept on a regular cycle. Vegetation management is the heavier work on sites that have gone past slashing — woody regrowth, blackberry and scrub knocked down, boundaries and access tracks reinstated. We tell you at the assessment which one your site actually needs.' },
    { q: 'Will weed spraying damage my lawn?', a: 'Not when a selective product is used correctly. Selective herbicides target broadleaf weeds and leave turf grasses unaffected. Damage generally comes from the wrong product, the wrong rate, or spraying in extreme heat — all of which are avoidable.' },
    { q: 'When should bindii be treated in Victoria?', a: 'Bindii should be treated in late winter, roughly July to August, before it sets its seed spike. Treating it once the prickles have formed kills the plant but the prickles remain. Treating it early is the only way to have a bindii-free lawn by summer.' },
    { q: 'How long until weeds die after treatment?', a: 'Most broadleaf lawn weeds visibly yellow within a few days and fully break down over one to three weeks depending on the weed and the weather. Tougher perennials such as oxalis and nutgrass usually need repeat treatments across a season.' },
    { q: 'Is the treatment safe around children and pets?', a: 'Treated areas should be kept clear until the application has fully dried, which is typically a few hours in normal conditions. We let you know the re-entry period on the day and can schedule treatment for a time that suits your household.' },
    { q: 'Can you treat weeds in garden beds without killing my plants?', a: 'Yes. In beds we use targeted spot treatment and hand-weeding rather than blanket spraying, specifically so nothing drifts onto established shrubs, perennials or edible plantings. Close to sensitive plants, hand-weeding is the default.' },
    { q: 'Do you offer ongoing weed and slashing programs?', a: 'Yes, and they are considerably cheaper than one-off callouts. Recurring weed treatment progressively reduces the seed bank so there is less to deal with each year, and a block kept on a scheduled cut never turns into a clearing job. Both can be built into an existing garden maintenance or mowing schedule.' }
  ],
  schemaName: 'Weed management, block slashing and vegetation management',
  schemaType: 'Weed Management',
  ctaHeading: 'Get on Top of It <span class="accent">Before It Gets Away</span>',
  ctaCopy: 'Lawns, garden beds, driveways, vacant blocks and overgrown sites — treated or slashed properly, timed correctly, and without collateral damage.',
  related: [R.lawn, R.garden, R.body]
},

/* ============================ BODY CORPORATE ============================ */
{
  slug: 'body-corporate',
  crumb: 'Body Corporate',
  title: 'Body Corporate & Strata Garden Maintenance | Blue Hills',
  description: 'Body corporate and strata grounds maintenance across Pakenham, Berwick, Narre Warren and Officer. Documented schedules, insured crews, clear invoicing.',
  keywords: 'body corporate garden maintenance Pakenham, strata grounds maintenance Berwick, owners corporation lawn mowing Narre Warren, common area maintenance Officer, strata gardening South-East Melbourne',
  eyebrow: 'Strata & Owners Corporations',
  h1: 'Body Corporate &amp; <span class="accent">Strata Grounds</span> Maintenance',
  answer: 'Blue Hills holds body corporate, strata and owners corporation grounds maintenance contracts across Pakenham, Berwick, Narre Warren, Officer and the surrounding South-East Melbourne suburbs. Every contract includes a documented service schedule, the same crew each visit, public liability insurance and clear monthly invoicing — so committees and managers always know exactly what was done and when.',
  /* Hero is the client's "Body Corporate Opening Image". */
  image: img.bodyCorpOpening,
  imageAlt: 'Shaped shrubs and clipped frontage on a body corporate unit maintained by Blue Hills in Pakenham VIC',
  secondImage: img.bodyCorpCrew,
  secondImageAlt: 'Blue Hills crew carrying out body corporate grounds maintenance on a Pakenham estate',
  introEyebrow: 'The Service',
  introHeading: 'Common areas that <span class="accent">never generate complaints.</span>',
  intro: [
    'Grounds maintenance is one of the most visible line items on an owners corporation budget, and it is the one residents notice the fastest when it slips. A missed fortnight on the entry lawn or a hedge left growing across a footpath generates emails to the committee within days.',
    'Blue Hills is built around the parts of the job that actually matter to a committee or a strata manager: turning up on the agreed schedule, sending the same crew who already know the site, and providing a record of what was done so it can be reported at the next meeting without anyone having to chase.',
    'We work across townhouse developments, apartment complexes, retirement villages and multi-building estates. Scope typically covers common area lawns, entry statements, garden beds, hedges and screens, path and car park edges, weed control and seasonal clean-ups — either as a single bundled contract or as a defined set of scheduled tasks.'
  ],
  facts: [
    { k: 'Client types', v: 'Owners corporations, body corporates, strata managers, retirement villages, developers' },
    { k: 'Documentation', v: 'Written service schedule and visit records suitable for committee reporting' },
    { k: 'Insurance', v: 'Public liability cover current on every site' },
    { k: 'Crew', v: 'Consistent crew allocated to your site — they learn the property, not just the task list' },
    { k: 'Invoicing', v: 'Clear monthly invoicing against the agreed schedule' },
    { k: 'Core suburbs', v: 'Pakenham, Berwick, Narre Warren, Officer, Beaconsfield, Botanic Ridge' }
  ],
  includedHeading: 'What a common area <span class="accent">contract covers</span>',
  includedIntro: 'Scope is defined up front and written down, so nobody is arguing later about whether something was in the contract.',
  included: [
    { t: 'Common area mowing and edging', d: 'Entry lawns, internal lawn areas, nature strips and shared open space mowed and edged to a set schedule.' },
    { t: 'Garden bed maintenance', d: 'Beds weeded, pruned and kept presentable, with mulch topped up as needed. Entry statement beds prioritised because they set the tone for the whole site.' },
    { t: 'Hedges and screens', d: 'Boundary screens, car park screening and internal hedges kept trimmed and clear of paths, signage, lighting and sightlines.' },
    { t: 'Weed control', d: 'Common area lawns, beds, car parks, kerbs and path joints treated on a scheduled basis rather than reactively after complaints.' },
    { t: 'Path and car park clearing', d: 'Edges cut back, surfaces blown down, and leaf and debris build-up cleared away from drains and entrances.' },
    { t: 'Seasonal clean-ups', d: 'Autumn leaf clearing, spring growth resets and pre-inspection tidy-ups scheduled into the annual program.' }
  ],
  processEyebrow: 'Working With Us',
  processHeading: 'Set up once, then it <span class="accent">just runs</span>',
  processIntro: 'The point of a grounds contract is that the committee stops having to manage it. Getting that right is mostly about how the contract is set up.',
  process: [
    { t: 'Site walk and scope', d: 'We walk the property with the manager or a committee representative, map the common areas, and identify what is in scope and what is lot-owner responsibility.' },
    { t: 'Written schedule and quote', d: 'You receive a documented service schedule — what is done, how often, and at what cost — in a format you can take straight to a committee meeting.' },
    { t: 'Consistent delivery', d: 'The same crew services your site on the agreed cycle. They learn the property, which means fewer instructions and fewer things missed.' },
    { t: 'Reporting and review', d: 'Visit records and monthly invoicing that reconcile against the schedule, plus a review point each year to adjust scope as the landscaping matures.' }
  ],
  pricingEyebrow: 'Contracts',
  pricingHeading: 'Priced per site, <span class="accent">documented in writing</span>',
  pricing: [
    'Body corporate grounds maintenance is quoted per site after a walk-through. Pricing reflects total common area, planting density, the number of visits per year and any site-specific access constraints such as gated car parks or restricted service windows.',
    'You receive the scope and cost in writing in a format suitable for a committee vote or a manager\'s recommendation. There are no variable hourly charges appearing on invoices — the schedule is agreed up front and the invoice matches it.',
    'Where a site also has commercial tenancies or mixed use, see <a href="/commercial-property/" style="color:#C9A96E">commercial property maintenance</a>. We frequently hold both under one arrangement.'
  ],
  areaHeading: 'Strata and body corporate sites we <span class="accent">service</span>',
  areaIntro: 'We maintain common areas for owners corporations across the growth corridor, from small townhouse groups to multi-stage estates.',
  areaSuburbs: ['Pakenham', 'Berwick', 'Narre Warren', 'Officer', 'Beaconsfield', 'Botanic Ridge', 'Devon Meadows', 'Cranbourne South', 'Narre Warren North', 'Lysterfield', 'Nar Nar Goon', 'Koo Wee Rup'],
  galleryHeading: 'Recent body corporate sites',
  galleryIntro: 'Common areas on townhouse groups, unit developments and managed estates across the Pakenham–Berwick corridor.',
  /* Five tiles, not six: the client's Photo Changes folder has Body Corporate
     1, 2, 3, 4 and 6 but no 5. Add it here when it arrives. */
  gallery: [
    { src: img.bc1, title: 'Boundary hedge & entry', alt: 'Boundary screening hedge and entry gate maintained on a strata-managed estate' },
    { src: img.bc2, title: 'Driveway & shaped shrubs', alt: 'Shared driveway with shaped shrubs maintained on a body corporate schedule' },
    { src: img.bc3, title: 'Townhouse frontage', alt: 'Townhouse frontage with maintained garden beds and mown common area lawn' },
    { src: img.bc4, title: 'Commercial frontage', alt: 'Commercial frontage hedge and footpath edge kept clear on a scheduled visit' },
    { src: img.bc6, title: 'Townhouse court common lawn', alt: 'Common area lawn in a townhouse court maintained under a body corporate contract' }
  ],
  faqHeading: 'Body corporate <span class="accent">questions</span>',
  faqs: [
    { q: 'Do you work directly with strata managers or with committees?', a: 'Both. We work directly with strata and owners corporation managers, and we also deal directly with self-managed committees. Documentation is provided in a format that works either way — a written schedule, visit records and monthly invoicing that reconciles against it.' },
    { q: 'Are you insured to work on common property?', a: 'Yes. Public liability insurance is current on every site we service. A certificate of currency can be provided to your manager or committee on request as part of the onboarding process.' },
    { q: 'Can you provide a documented service schedule for our records?', a: 'Yes, and it is standard for every contract. You receive a written schedule setting out what is done, how often, and at what cost — suitable for presenting at a committee meeting, attaching to the maintenance plan or tabling at the AGM.' },
    { q: 'What size properties do you take on?', a: 'From small townhouse groups of six to eight dwellings up to multi-building estates and retirement villages. What matters more than unit count is total common area and how many visits per year the landscaping needs to stay presentable.' },
    { q: 'Will it be the same crew each visit?', a: 'Yes, wherever possible. A consistent crew learns your site — which beds get weed pressure, where the irrigation heads sit, which gate codes apply, which areas the residents care most about. That consistency is why fewer things get missed.' },
    { q: 'Can we bundle mowing, hedges and weed control into one contract?', a: 'Yes, and most sites do. Bundling mowing, garden bed maintenance, hedge trimming, weed control and seasonal clean-ups into one scheduled contract is both cheaper and easier to administer than engaging separate contractors for each task.' }
  ],
  schemaName: 'Body corporate and strata grounds maintenance',
  schemaType: 'Body Corporate Grounds Maintenance',
  ctaHeading: 'Give Your Committee <span class="accent">One Less Thing</span> to Manage',
  ctaCopy: 'Documented schedules, consistent crews, public liability cover and invoicing that reconciles. Request a site assessment for your owners corporation.',
  related: [R.comm, R.garden, R.lawn]
},

/* ============================ COMMERCIAL PROPERTY ============================ */
{
  slug: 'commercial-property',
  crumb: 'Commercial Property',
  title: 'Commercial Grounds Maintenance Berwick | Blue Hills',
  description: 'Commercial and industrial grounds maintenance across Berwick, Narre Warren, Pakenham and Cranbourne South. Office parks, retail and childcare. 0411 342 456.',
  keywords: 'commercial property maintenance Berwick, industrial grounds maintenance Pakenham, office park lawn mowing Narre Warren, retail centre garden maintenance Officer, commercial landscaping South-East Melbourne',
  eyebrow: 'Commercial & Industrial',
  h1: 'Commercial Property Maintenance in <span class="accent">Berwick</span> &amp; Pakenham',
  answer: 'Blue Hills holds ongoing commercial and industrial grounds maintenance contracts across Berwick, Narre Warren, Pakenham, Officer and Cranbourne South. We service office parks, retail centres, childcare facilities, medical practices and industrial estates — covering mowing, hedging, weed control, garden bed maintenance and seasonal clean-ups under one consistent provider, on a documented schedule.',
  image: img.newCommercial1,
  imageAlt: 'Retail strip frontage and verge mown and edged by Blue Hills in South-East Melbourne',
  secondImage: img.newCommercial2,
  secondImageAlt: 'Office building grounds with mown lawn and maintained garden beds kept on a Blue Hills contract',
  introEyebrow: 'The Service',
  introHeading: 'Your grounds are the first thing a <span class="accent">customer sees.</span>',
  intro: [
    'Before anyone reads your signage or walks through your door, they have already formed an impression from the car park, the entry beds and the strip of lawn along the frontage. On a commercial site, grounds maintenance is not gardening. It is presentation, and in several cases it is compliance and safety as well.',
    'Blue Hills services commercial and industrial property across the South-East growth corridor: office parks, retail and neighbourhood centres, childcare and early learning facilities, medical practices, warehouses and industrial estates. Scope is agreed up front, documented, and delivered on a fixed cycle so nothing depends on someone remembering to call.',
    'We work around your operation, not through it. That means service windows outside trading hours where required, awareness of pedestrian and forklift traffic on industrial sites, and no equipment left blocking loading bays, fire egress or accessible parking.'
  ],
  facts: [
    { k: 'Site types', v: 'Office parks, retail centres, childcare and early learning, medical, warehouses, industrial estates' },
    { k: 'Scope', v: 'Mowing, edging, hedging, garden beds, weed control, car park and path clearing, seasonal clean-ups' },
    { k: 'Scheduling', v: 'Fixed service cycle, including out-of-hours windows where trading requires it' },
    { k: 'Insurance', v: 'Public liability cover current on every commercial site' },
    { k: 'Invoicing', v: 'Monthly invoicing reconciled against the agreed schedule' },
    { k: 'Core suburbs', v: 'Berwick, Narre Warren, Pakenham, Officer, Cranbourne South, Devon Meadows' }
  ],
  includedHeading: 'What we maintain on a <span class="accent">commercial site</span>',
  includedIntro: 'Commercial scope is written down before the first visit, including the service window and any site-specific access or safety requirements.',
  included: [
    { t: 'Frontage and entry presentation', d: 'The lawn, beds and signage surrounds that customers see first, held to a standard rather than cut back only when they get bad.' },
    { t: 'Car park and hard surfaces', d: 'Kerbs, islands, expansion joints and path edges kept clear of weed growth, with surfaces blown down and debris cleared from drains.' },
    { t: 'Screening hedges', d: 'Boundary and car park screening trimmed to keep sightlines, lighting, signage and security cameras clear and unobstructed.' },
    { t: 'Garden beds and mulch', d: 'Beds weeded, pruned and mulched so planting stays healthy and the site does not read as neglected between visits.' },
    { t: 'Industrial perimeters', d: 'Fence lines, yard edges, hardstand perimeters and vacant portions kept down to control fire load, weed spread and pest habitat.' },
    { t: 'Scheduled clean-ups', d: 'Autumn leaf clearing and pre-inspection or pre-audit tidy-ups built into the annual program rather than booked in a panic.' }
  ],
  processEyebrow: 'Working With Us',
  processHeading: 'One provider, one schedule, <span class="accent">one invoice</span>',
  processIntro: 'Most commercial sites we take over were previously using two or three separate contractors. Consolidating is almost always cheaper and always simpler.',
  process: [
    { t: 'Site assessment', d: 'We walk the property with your facilities contact, note the areas in scope, the traffic and safety considerations, and any windows in which work cannot happen.' },
    { t: 'Documented scope and quote', d: 'You receive a written scope, service frequency and price — the format facilities managers and business owners need to sign off or compare.' },
    { t: 'Scheduled delivery', d: 'Work runs on a fixed cycle, including out-of-hours service where trading, patient or student traffic requires it. The same crew services the site each visit.' },
    { t: 'Reporting and annual review', d: 'Visit records and monthly invoicing that match the agreed schedule, with a yearly review to adjust scope as planting matures or the site changes.' }
  ],
  pricingEyebrow: 'Contracts',
  pricingHeading: 'Commercial contracts <span class="accent">quoted per site</span>',
  pricing: [
    'Commercial grounds maintenance is quoted after a site assessment. Pricing reflects total maintained area, the mix of lawn, beds and hard surface, the required service frequency, and any access or out-of-hours constraints.',
    'You get a fixed, documented schedule and a price that does not move month to month. That is generally what facilities managers and business owners are actually after — a predictable line item that stops being a problem.',
    'For residential estates and common property under an owners corporation, see <a href="/body-corporate/" style="color:#C9A96E">body corporate and strata maintenance</a>. Mixed-use sites can be held under a single arrangement.'
  ],
  areaHeading: 'Commercial grounds maintenance <span class="accent">coverage</span>',
  areaIntro: 'We service commercial and industrial property throughout the Pakenham–Berwick corridor and the surrounding growth suburbs.',
  areaSuburbs: ['Berwick', 'Narre Warren', 'Pakenham', 'Officer', 'Cranbourne South', 'Devon Meadows', 'Beaconsfield', 'Botanic Ridge', 'Nar Nar Goon', 'Koo Wee Rup', 'Tynong', 'Narre Warren North'],
  faqHeading: 'Commercial maintenance <span class="accent">questions</span>',
  faqs: [
    { q: 'What types of commercial sites do you maintain?', a: 'Office parks, retail and neighbourhood centres, childcare and early learning facilities, medical practices, warehouses and industrial estates. If a site has lawn, garden beds, screening hedges or hard-surface weed pressure, it is within scope.' },
    { q: 'Can you work outside our trading hours?', a: 'Yes. Out-of-hours service windows are standard for retail, childcare and medical sites where mowing during trading is disruptive or unsafe. The service window is agreed up front and written into the schedule.' },
    { q: 'Do you have public liability insurance?', a: 'Yes. Public liability cover is current on every commercial site we service, and a certificate of currency can be supplied to your facilities manager or compliance team as part of onboarding.' },
    { q: 'Can you handle mowing, hedging and weed control under one contract?', a: 'Yes, and that is how most of our commercial clients buy it. Consolidating mowing, edging, hedging, garden beds, weed control and seasonal clean-ups under one provider is cheaper than separate contractors and removes the coordination overhead.' },
    { q: 'How is commercial grounds maintenance priced?', a: 'Per site, after an on-site assessment. Pricing is based on total maintained area, the mix of lawn, garden bed and hard surface, service frequency, and any access or out-of-hours requirements. The result is a fixed monthly figure, not a variable hourly charge.' },
    { q: 'Do you maintain industrial yards and fence lines?', a: 'Yes. Industrial perimeters, hardstand edges, fence lines and vacant portions of a site are kept cut down to control fire load, weed spread and pest habitat — which is often a compliance issue as much as a presentation one.' }
  ],
  schemaName: 'Commercial and industrial grounds maintenance',
  schemaType: 'Commercial Property Maintenance',
  ctaHeading: 'Make Your Site\'s First Impression <span class="accent">Work for You</span>',
  ctaCopy: 'One provider, one documented schedule, one predictable invoice. Request a commercial site assessment across Berwick, Pakenham and Narre Warren.',
  related: [R.body, R.lawn, R.weed]
}

];
