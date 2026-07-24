/**
 * Services page content from development/info.md. Do not invent pricing or AMC terms.
 */

export const SERVICES_META = {
  title: "Services",
  description:
    "Farmhouse gardens, indoor planting, vertical gardens, industrial landscaping, and annual maintenance contracts — customized after site assessment in Surat, Gujarat.",
} as const;

export const SERVICES_HERO = {
  eyebrow: "What we offer",
  title: "Services Introduction",
  body:
    "Kalpam provides professional landscaping and garden maintenance for residential, commercial, industrial, farmhouse, and public-sector properties. Recommendations are customized after site conditions and maintenance expectations are understood.",
  primaryCta: { href: "/contact/", label: "Request a Site Assessment" },
  /** Hold time per slide before crossfade (see services-hero.md wireframe). */
  intervalMs: 2000,
  fadeMs: 600,
} as const;

export const SERVICE_LINES = [
  {
    id: "farmhouse",
    title: "Farmhouse Garden Development",
    summary:
      "Customized outdoor living environments with design, plantation, lawn, irrigation planning, and coordinated maintenance.",
    body: [
      "Farmhouse projects can include organic fruit and vegetable planning, lawn and plantation work, irrigation, and end-to-end outdoor development.",
      "Final scope and inclusions depend on site assessment and your maintenance expectations.",
    ],
    image: {
      src: "/images/services/farmhouse-hero.webp",
      alt: "Complete farmhouse outdoor landscape with lawn and plantation",
    },
    cta: { href: "/contact/", label: "Plan Your Farmhouse Garden" },
  },
  {
    id: "indoor",
    title: "Indoor Office and Home Gardens",
    summary:
      "Indoor planting planned with site visits and light measurement so plants suit real indoor conditions.",
    body: [
      "We assess indoor light and recommend plants suited to your space. Where horticulturally appropriate, we can discuss air-quality-friendly planting without making absolute health or oxygen claims.",
      "Complimentary maintenance terms and AMC plant-warranty details are confirmed with the client before publication.",
    ],
    termsNote:
      "Complimentary maintenance period and AMC plant-warranty wording — TBD — client (Foundation Content Kit).",
    image: {
      src: "/images/services/indoor-hero.webp",
      alt: "Indoor plants in office space with natural light",
    },
    cta: { href: "/contact/", label: "Assess Your Indoor Space" },
  },
  {
    id: "vertical",
    title: "Vertical Gardens",
    summary:
      "Living green-wall design with plant selection, support structure, drip irrigation, and practical care options.",
    body: [
      "Vertical gardens make productive use of wall space when light, water, drainage, and access support a viable design.",
      "Feasibility and maintenance expectations are confirmed during assessment — we do not promise outcomes without reviewing site conditions.",
    ],
    image: {
      src: "/images/services/vertical-hero.webp",
      alt: "Living green wall with dense vertical planting",
    },
    cta: { href: "/contact/", label: "Explore a Vertical Garden" },
  },
  {
    id: "industrial",
    title: "Industrial Gardens",
    summary:
      "Durable planting schemes for pollution, exposure, and operational constraints, including high-TDS water contexts where relevant.",
    body: [
      "Industrial sites need planting selected for harsh conditions and practical maintenance access.",
      "We do not promise plant survival or performance without site assessment and agreed scope.",
    ],
    image: {
      src: "/images/services/industrial-hero.webp",
      alt: "Hardy planting at an industrial property edge",
    },
    cta: { href: "/contact/", label: "Discuss an Industrial Site" },
  },
  {
    id: "amc",
    title: "Annual Maintenance Contracts",
    summary:
      "Scheduled care for plants, lawns, and gardens under client-approved contract terms.",
    body: [
      "AMC programmes can include watering, pruning, health checks, and replacement conditions as defined in your agreement.",
      "Plant-warranty and service inclusions are published only with client-approved AMC terms.",
    ],
    termsNote: "Final AMC inclusions, frequency, exclusions, and warranty — TBD — client.",
    image: {
      src: "/images/services/amc.webp",
      alt: "Well-maintained garden after routine care",
    },
    cta: { href: "/contact/", label: "Ask About an AMC" },
  },
] as const;

/** Hero rotator slides — same order and assets as service blocks. */
export const SERVICES_HERO_SLIDES = SERVICE_LINES.map((line) => ({
  id: line.id,
  src: line.image.src,
  alt: line.image.alt,
}));

export const SERVICES_ENQUIRY = {
  title: "Service Enquiry",
  eyebrow: "Next step",
  body:
    "Share your property type, location, service interest, and the challenge you want to solve. Recommendations follow discussion or a site assessment — we do not show fixed pricing unless the client supplies approved rates.",
  cta: { href: "/contact/", label: "Get a Customized Recommendation" },
} as const;
