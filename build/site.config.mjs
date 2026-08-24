/* Single source of truth for business data (from ClickUp task 86d2xwzcc)
   and site-wide navigation / SEO constants. */

export const biz = {
  legalName: 'Blue Hills Property Maintenance Pty Ltd',
  name: 'Blue Hills Property Maintenance',
  shortName: 'Blue Hills',
  founded: '2017',
  phoneDisplay: '0411 342 456',
  phoneHref: 'tel:+61411342456',
  phoneE164: '+61411342456',
  email: 'admin@bluehillsgpm.com.au',
  // The registered address is the owners' home, so the street line is
  // deliberately not published anywhere on the site or in schema. Blue Hills
  // is a service-area business: suburb, region and areaServed carry the
  // local-search signal without exposing a private address.
  suburb: 'Pakenham',
  state: 'VIC',
  stateFull: 'Victoria',
  postcode: '3810',
  country: 'AU',
  lat: -38.0708,
  lng: 145.485,
  origin: 'https://www.bluehillsgpm.com.au',
  gmb: 'https://maps.app.goo.gl/dwusyfqhVsmjgG6H7',
  facebook: 'https://www.facebook.com/bluehillspropertymaintenance/',
  instagram: 'https://www.instagram.com/bluehillsgardenandproperty/',
  priceRange: '$$',
  fromPrice: '99'
};

export const suburbs = [
  'Pakenham', 'Officer', 'Nar Nar Goon', 'Beaconsfield', 'Berwick', 'Harkaway',
  'Narre Warren', 'Narre Warren North', 'Lysterfield', 'Botanic Ridge',
  'Devon Meadows', 'Tynong', 'Pakenham Upper', 'Beaconsfield Upper',
  'Cranbourne South', 'Maryknoll', 'Guys Hill', 'Koo Wee Rup'
];

export const services = [
  { slug: 'lawn-mowing',        nav: 'Lawn Mowing',         short: 'Lawn Mowing & Edging' },
  { slug: 'acreage-mowing',     nav: 'Acreage Mowing',      short: 'Acreage Mowing' },
  { slug: 'hedge-trimming',     nav: 'Hedge Trimming',      short: 'Hedge Trimming & Reductions' },
  { slug: 'garden-maintenance', nav: 'Garden Maintenance',  short: 'Garden Maintenance' },
  // Renamed from "Weed Control" at the client's request. The URL stays
  // /weed-control/ so the page keeps its indexed history and inbound links.
  { slug: 'weed-control',       nav: 'Weed & Vegetation Management', short: 'Weed Management & Block Slashing' },
  { slug: 'body-corporate',     nav: 'Body Corporate',      short: 'Body Corporate & Strata' },
  { slug: 'commercial-property', nav: 'Commercial Property', short: 'Commercial Property Maintenance' }
];

export const img = {
  logo: '/assets/img/blue-hills-property-maintenance-logo.webp',
  hero: '/assets/img/manicured-lawn-pakenham-blue-hills-property-maintenance.webp',
  lawn: '/assets/img/professional-lawn-mowing-pakenham-residential-property.webp',
  acreage: '/assets/img/ride-on-acreage-mowing-pakenham-upper-vic.webp',
  hedge: '/assets/img/professional-hedge-trimming-sharp-clean-lines.webp',
  garden: '/assets/img/garden-maintenance-berwick-vic-blue-hills-team.webp',
  weed: '/assets/img/garden-path-clean-edges-pruned-plants-narre-warren.webp',
  pruning: '/assets/img/garden-path-clean-edges-pruned-plants-narre-warren.webp',
  bodyCorp: '/assets/img/body-corporate-common-area-gardens-pakenham-vic.webp',
  bodyCorpCrew: '/assets/img/body-corporate-grounds-maintenance-pakenham-crew.webp',
  commercial: '/assets/img/commercial-office-park-lawn-mowing-berwick-vic.webp',
  stripes: '/assets/img/mowed-edged-lawn-stripe-lines-officer-vic.webp',
  acreagePortfolio: '/assets/img/acreage-lawn-mowing-berwick-vic.webp',
  hedgePortfolio: '/assets/img/hedge-trimming-reduction-botanic-ridge-vic.webp',
  gardenPortfolio: '/assets/img/garden-maintenance-berwick-vic.webp',
  before: '/assets/img/lawn-transformation-before-overgrown-pakenham.webp',
  after: '/assets/img/lawn-transformation-after-restored-pakenham.webp',

  /* ---- Photo Changes set (client-supplied replacements) ---- */
  homePruning: '/assets/img/pruning-shaped-topiary-entrance-blue-hills.webp',
  homeBodyCorp: '/assets/img/body-corporate-common-area-lawn-frontage.webp',

  lawn1: '/assets/img/garden-maintenance-berwick-vic-blue-hills-team.webp',
  lawn2: '/assets/img/lawn-mowing-shaped-shrubs-striped-lawn.webp',
  lawn3: '/assets/img/lawn-mowing-garden-lawn-with-gazebo.webp',
  lawn4: '/assets/img/lawn-mowing-blue-hills-truck-and-trailer-on-site.webp',
  lawn5: '/assets/img/lawn-mowing-blue-hills-vehicle-residential-driveway.webp',
  lawn6: '/assets/img/lawn-mowing-nature-strip-and-footpath-edging.webp',

  acre1: '/assets/img/acreage-mowing-open-lawn-with-gum-trees.webp',
  acre2: '/assets/img/acreage-mowing-large-lawn-and-driveway.webp',
  acre3: '/assets/img/ride-on-acreage-mowing-pakenham-upper-vic.webp',
  acre4: '/assets/img/acreage-mowing-striped-lawn-rural-outlook.webp',
  acre5: '/assets/img/acreage-lawn-mowing-berwick-vic.webp',
  acre6: '/assets/img/acreage-mowing-zero-turn-ride-on-mower.webp',

  hedge1: '/assets/img/hedge-trimming-reduction-botanic-ridge-vic.webp',
  hedge2: '/assets/img/hedge-trimming-shaped-hedges-driveway-two-storey-home.webp',
  hedge3: '/assets/img/grounds-maintenance-commercial-car-park-screening-hedge.webp',
  hedge4: '/assets/img/hedge-trimming-boundary-hedge-with-palm-and-lawn.webp',
  hedge5: '/assets/img/hedge-trimming-long-driveway-hedge-and-gate.webp',
  hedge6: '/assets/img/hedge-trimming-level-boundary-hedge-and-lawn.webp',
  // "Hedge Trimming 6 OPENING IMAGE" — the client's pick for the page hero.
  hedgeOpening: '/assets/img/hedge-trimming-formal-hedges-driveway-pakenham.webp',

  bc1: '/assets/img/body-corporate-boundary-hedge-and-entry-gate.webp',
  bc2: '/assets/img/body-corporate-driveway-with-shaped-shrubs.webp',
  bc3: '/assets/img/body-corporate-townhouse-frontage-and-garden-beds.webp',
  bc4: '/assets/img/body-corporate-commercial-frontage-hedge-and-path.webp',
  bc6: '/assets/img/body-corporate-townhouse-court-common-lawn.webp',
  // "Body Corporate Opening Image" — the client's pick for the page hero.
  bodyCorpOpening: '/assets/img/body-corporate-shaped-shrubs-unit-frontage.webp',

  /* ---- "Bluehills - New Images" folder ---- */
  newAcreage1: '/assets/img/acreage-mowing-shaded-parkland-lawn.webp',
  newHedge1: '/assets/img/hedge-trimming-long-formal-hedge-run.webp',
  newHedge2: '/assets/img/hedge-trimming-retaining-wall-hedge-street-corner.webp',
  newGarden1: '/assets/img/garden-maintenance-mulched-beds-and-border-hedge.webp',
  newWeed1: '/assets/img/block-slashing-vacant-lot-zero-turn-mower.webp',
  newWeed3: '/assets/img/vegetation-management-slashed-open-block.webp',
  newCommercial1: '/assets/img/commercial-property-retail-strip-verge-mowing.webp',
  newCommercial2: '/assets/img/commercial-property-office-grounds-and-garden-beds.webp'
};
