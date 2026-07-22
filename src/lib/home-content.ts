/**
 * Homepage content from info.md. Do not invent client facts.
 */

export const HOME_HERO = {
  headline: {
    lead: "Trusted professional",
    line: "landscaping and garden maintenance",
  },
  support:
    "For homes, offices, farmhouses, residential societies, commercial properties, industries, and public-sector environments, designed, developed, and maintained with horticultural expertise.",
  image: {
    src: "/images/home/hero.webp",
    alt: "Completed professional landscaping project with layered planting and lawn",
  },
  primaryCta: { href: "/contact/", label: "Request a Site Visit" },
  secondaryCta: {
    href: "#",
    label: "Chat on WhatsApp",
    disabled: true,
    note: "WhatsApp number TBD, client",
  },
} as const;

/**
 * Credibility Snapshot — revised metric-strip layout (wireframes/home-credibility-snapshot.md).
 * Fields marked DUMMY DATA in comments must be replaced with client-verified content before launch.
 */
export const HOME_CREDIBILITY = {
  title: "Credibility Snapshot",
  eyebrow: "Trusted landscaping in Surat",
  lead:
    "Experience, horticulturist-led planning, and verified client feedback you can evaluate before your first site visit.",
  metrics: [
    {
      id: "experience",
      value: "4–10 years",
      label: "Operating experience",
      // DUMMY DATA — exact years wording pending client confirmation (info.md allows 4–10 range).
    },
    {
      id: "google-rating",
      value: "4.8",
      label: "Google rating",
      detail: "120+ reviews",
      // DUMMY DATA — rating and review count pending client verification before publication.
    },
    {
      id: "horticulturist",
      value: "Horticulturist-led",
      label: "Planning approach",
    },
    {
      id: "service-area",
      value: "Surat",
      label: "Gujarat, India",
    },
  ],
  proofCards: [
    {
      title: "Horticulturist-led planning",
      text: "Projects begin with experienced horticulturists: site assessment, soil analysis, and plant selection matched to real conditions.",
    },
    {
      title: "Trained technical team",
      text: "One team handles design, plantation, irrigation, installation, and ongoing maintenance options after handover.",
    },
  ],
  featuredReview: {
    rating: 5,
    quote:
      "Kalpam planned our garden around soil and light conditions, then maintained it reliably through the seasons.",
    author: "Residential client",
    location: "Surat",
    source: "Google",
    // DUMMY DATA — replace with a verified Google review excerpt when the client approves.
  },
  logos: {
    label: "Trusted by clients and partners",
    // DUMMY DATA — fictional client/partner names and wordmark SVGs until client supplies real logos.
    items: [
      {
        name: "Vesu Greens Housing",
        role: "client",
        src: "/images/shared/logos/dummy/vesu-greens-housing.svg",
        alt: "Vesu Greens Housing (dummy client logo)",
      },
      {
        name: "Saurashtra Farm Retreat",
        role: "client",
        src: "/images/shared/logos/dummy/saurashtra-farm-retreat.svg",
        alt: "Saurashtra Farm Retreat (dummy client logo)",
      },
      {
        name: "Gujarat BuildWorks",
        role: "partner",
        src: "/images/shared/logos/dummy/gujarat-buildworks.svg",
        alt: "Gujarat BuildWorks (dummy partner logo)",
      },
      {
        name: "Coastal Office Parks",
        role: "client",
        src: "/images/shared/logos/dummy/coastal-office-parks.svg",
        alt: "Coastal Office Parks (dummy client logo)",
      },
      {
        name: "Vesu Tech Campus",
        role: "client",
        src: "/images/shared/logos/dummy/vesu-tech-campus.svg",
        alt: "Vesu Tech Campus (dummy client logo)",
      },
      {
        name: "Surat Industrial Greens",
        role: "partner",
        src: "/images/shared/logos/dummy/surat-industrial-greens.svg",
        alt: "Surat Industrial Greens (dummy partner logo)",
      },
    ],
  },
  image: {
    src: "/images/home/team-credibility.webp",
    alt: "Landscaping team reviewing a garden site together",
  },
  cta: { href: "/about/", label: "See Why Clients Trust Kalpam" },
} as const;

export const HOME_SERVICES = {
  title: "Services Overview",
  intro:
    "Each service focuses on the client problem, Kalpam’s approach, and the intended result, with final scope confirmed after site assessment.",
  cta: { href: "/services/", label: "Explore Our Services" },
  cards: [
    {
      title: "Farmhouse Garden Development",
      problem: "Large outdoor spaces need cohesive design, planting, and care.",
      solution:
        "Customized landscape design, plantation, lawn, irrigation planning, and maintenance coordination.",
      result: "A complete outdoor living environment matched to the site.",
      href: "/services/",
      image: {
        src: "/images/services/farmhouse.webp",
        alt: "Spacious farmhouse garden with lawn and plantation",
      },
    },
    {
      title: "Indoor Office and Home Gardens",
      problem: "Indoor plants often fail when light and maintenance are guessed.",
      solution:
        "Site visit and light measurement, then plant selection suited to real indoor conditions.",
      result: "Healthier indoor planting with practical care options.",
      href: "/services/",
      image: {
        src: "/images/services/indoor.webp",
        alt: "Indoor plants arranged near natural window light",
      },
    },
    {
      title: "Vertical Gardens",
      problem: "Limited ground space still needs living greenery.",
      solution:
        "Living green-wall design with durable structure and efficient drip irrigation planning.",
      result: "Productive use of walls with low-maintenance care options.",
      href: "/services/",
      image: {
        src: "/images/services/vertical.webp",
        alt: "Living vertical garden green wall with dense planting",
      },
    },
    {
      title: "Industrial Gardens",
      problem: "Harsh sites need planting that can handle real operating conditions.",
      solution:
        "Landscape planning for pollution, exposure, and water quality, including high-TDS contexts.",
      result: "Durable planting schemes with practical maintenance planning.",
      href: "/services/",
      image: {
        src: "/images/services/industrial.webp",
        alt: "Hardy industrial-site landscaping along a building edge",
      },
    },
    {
      title: "Annual Maintenance Contracts",
      problem: "Installed landscapes need reliable long-term care.",
      solution:
        "Scheduled care for plants, lawns, and gardens under agreed AMC terms.",
      result: "Ongoing garden health with clear contract conditions.",
      href: "/services/",
      image: {
        src: "/images/services/amc.webp",
        alt: "Well-maintained garden after routine care",
      },
    },
  ],
} as const;

export const HOME_SCIENTIFIC = {
  title: "Scientific Landscaping Approach",
  intro:
    "Technical steps explained simply, so landscapes stay healthier and last longer.",
  steps: [
    "Site assessment, soil analysis, and environmental-condition review",
    "Plant selection based on light, water quality, pollution exposure, available space, and maintenance needs",
    "Indoor light measurement with a light meter before plant recommendation",
    "Planning, installation, irrigation considerations, and ongoing care under one team",
  ],
  image: {
    src: "/images/home/scientific-assessment.webp",
    alt: "Horticulturist assessing soil and plants during a site visit",
  },
  cta: { href: "/process/", label: "View Our Process" },
} as const;

export const HOME_BEFORE_AFTER = {
  title: "Before and After Results",
  // DUMMY DATA — replace pairs with client-approved photos and captions before launch.
  pairs: [
    {
      id: "pair-01",
      caption:
        "Residential society courtyard, sparse planting and bare edges to layered greenery and defined lawn.",
      before: {
        src: "/images/home/before-after/dummy-01-before.webp",
        alt: "Dummy before photo, residential courtyard (replace with client photo)",
      },
      after: {
        src: "/images/home/before-after/dummy-01-after.webp",
        alt: "Dummy after photo, residential courtyard (replace with client photo)",
      },
    },
    {
      id: "pair-02",
      caption:
        "Farmhouse front garden, uneven lawn and gaps to structured beds and outdoor living edge.",
      before: {
        src: "/images/home/before-after/dummy-02-before.webp",
        alt: "Dummy before photo, farmhouse garden (replace with client photo)",
      },
      after: {
        src: "/images/home/before-after/dummy-02-after.webp",
        alt: "Dummy after photo, farmhouse garden (replace with client photo)",
      },
    },
    {
      id: "pair-03",
      caption:
        "Indoor lobby planter zone, sparse pots to curated indoor planting near window light.",
      before: {
        src: "/images/home/before-after/dummy-03-before.webp",
        alt: "Dummy before photo, indoor lobby planters (replace with client photo)",
      },
      after: {
        src: "/images/home/before-after/dummy-03-after.webp",
        alt: "Dummy after photo, indoor lobby planters (replace with client photo)",
      },
    },
    {
      id: "pair-04",
      caption: "Blank exterior wall to living green wall / vertical garden.",
      before: {
        src: "/images/home/before-after/dummy-04-before.webp",
        alt: "Dummy before photo, blank exterior wall (replace with client photo)",
      },
      after: {
        src: "/images/home/before-after/dummy-04-after.webp",
        alt: "Dummy after photo, vertical garden (replace with client photo)",
      },
    },
  ],
  cta: { href: "/contact/", label: "Discuss Your Space" },
} as const;

export const HOME_TESTIMONIALS = {
  title: "Testimonials and Final Enquiry",
  reassurance:
    "Recommendations are customized to site conditions, with reliable maintenance options where suitable.",
  note: "Layout dummy quotes: replace with client-approved testimonials and attribution before launch.",
  items: [
    {
      quote:
        "The team explained soil and plant choices in plain language, then delivered a garden that still looks healthy months later.",
      name: "A. Sharma",
      context: "Homeowner, residential garden (dummy)",
    },
    {
      quote:
        "They measured light before recommending indoor plants for our office. Care instructions were clear and practical.",
      name: "R. Mehta",
      context: "Office manager, indoor planting (dummy)",
    },
    {
      quote:
        "From assessment to installation, communication was steady. Maintenance options were explained without pressure.",
      name: "Society committee member",
      context: "Residential society landscape (dummy)",
    },
  ],
  cta: { href: "/contact/", label: "Get a Landscaping Consultation" },
} as const;
