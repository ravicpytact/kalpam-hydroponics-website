/**
 * Homepage content from info.md. Do not invent client facts.
 */

export const HOME_HERO = {
  headline: {
    lead: "Professional landscaping",
    line: "garden development and maintenance",
  },
  support:
    "For homes, offices, farmhouses, residential societies, commercial properties, industries, and public-sector environments, designed, developed, and maintained with horticultural expertise.",
  video: {
    src: "/videos/home-hero.mp4",
  },
  image: {
    src: "/images/home/hero.webp",
    alt: "Completed professional landscaping project with layered planting and lawn",
  },
  primaryCta: { href: "/contact/", label: "Request a Site Visit" },
  secondaryCta: {
    href: "#",
    label: "Chat on WhatsApp",
    disabled: true,
    note: "Uses WhatsApp from site-contact.ts when configured",
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
      value: "5 years",
      label: "Operating experience",
    },
    {
      id: "google-rating",
      value: "5.0",
      label: "Google rating",
      detail: "31 reviews",
    },
    {
      id: "projects-completed",
      value: "400+",
      label: "Projects completed",
    },
    {
      id: "horticulturist",
      value: "Horticulturist-led",
      label: "Planning approach",
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
      "Kalpam Landscaping truly stands out with their creativity, professionalism, and dedication. The team doesn't just build gardens – they transform spaces into living artworks that feel refreshing and inspiring. Every detail, from design planning to execution, was handled with care and precision. I was especially impressed with their innovative ideas and timely service. If you're looking for a landscaping company that delivers more than just plants – but a complete experience of beauty, quality, and trust – Kalpam Landscaping is the name to go with.",
    author: "Rambha Vaghela",
    location: "Surat",
    source: "Google",
  },
  logos: {
    label: "Trusted by clients and partners",
    items: [
      {
        id: "dharmanandan-diamond",
        title: "Dharmanandan Diamond",
        subtitle: "Pvt. Ltd.",
        role: "client",
      },
      {
        id: "anjali-lab-tech-diamond",
        title: "Anjali Lab Tech",
        subtitle: "Diamond",
        role: "client",
      },
      {
        id: "surat-commissioner-bunglow",
        title: "Surat Commitioner",
        subtitle: "Bunglow",
        role: "client",
      },
      {
        id: "shalu-dyeing",
        title: "Shalu Dyeing",
        subtitle: "O.P. Farm",
        role: "client",
      },
      {
        id: "dee-beers-group",
        title: "Dee Beers Group",
        role: "client",
      },
      {
        id: "bhavik-koladiya",
        title: "Bhavik Koladiya",
        subtitle: "Founder · BharatPe",
        role: "client",
      },
      {
        id: "uphoria",
        title: "Uphoria",
        subtitle: "The fine dine",
        role: "client",
      },
      {
        id: "dhanlaxmi-diamond",
        title: "Dhanlaxmi Diamond",
        role: "client",
      },
      {
        id: "unique-diamond",
        title: "Unique Diamond",
        role: "client",
      },
      {
        id: "magppie-wellness",
        title: "Magppie Wellness",
        subtitle: "Kitchens",
        role: "client",
      },
      {
        id: "ar-haresh-mahadevwala",
        title: "Ar. Haresh Mahadevwala",
        role: "client",
      },
      {
        id: "ar-sarosh-wadia",
        title: "Ar. Sarosh Wadia",
        role: "client",
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
  cta: {
    href: "https://www.google.com/search?q=kalpam+landscaping",
    label: "View All Google Reviews",
  },
} as const;
