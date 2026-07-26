/**
 * About page content from development/info.md. Do not invent client facts.
 */

export const ABOUT_META = {
  title: "About",
  description:
    "Learn how Kalpam Landscaping combines horticulturist-led planning, trained technical execution, and dependable maintenance for gardens across Surat, Gujarat.",
} as const;

export const ABOUT_HERO = {
  eyebrow: "Who we are",
  headline: {
    lead: "About",
    line: "Kalpam Landscaping",
  },
  support:
    "Horticulturist-led garden development and maintenance for homes, workplaces, farmhouses, societies, commercial sites, and public-sector environments across Surat, Gujarat.",
  image: {
    src: "/images/about/story.webp",
    alt: "Calm garden pathway with layered planting and soft morning light",
  },
  primaryCta: { href: "/contact/", label: "Tell Us About Your Property" },
} as const;

export const ABOUT_COMPANY_STORY = {
  eyebrow: "Our story",
  title: "Company Story",
  lead:
    "Kalpam Landscaping designs, develops, and maintains attractive, sustainable green spaces through expert horticultural planning, quality execution, and reliable long-term care.",
  focus:
    "Our work centres on professional garden development and maintenance — outdoor and indoor — for homeowners, workplaces, farmhouses, societies, commercial sites, industries, and public-sector environments.",
  focusPoints: [
    {
      title: "Garden development",
      text: "Sustainable green spaces shaped to your site and maintenance goals.",
    },
    {
      title: "Outdoor and indoor planting",
      text: "Programmes for homes, workplaces, farmhouses, societies, and commercial sites.",
    },
    {
      title: "Maintenance and AMC",
      text: "Long-term care options, including annual maintenance contracts where agreed.",
    },
  ],
  glanceTitle: "At a glance",
  focusListTitle: "What we focus on",
  serviceArea: {
    label: "Service area",
    value: "Surat, Gujarat, India",
  },
  originNote:
    "Company origin story, founding year, and legal or trading-name history will be added from the Foundation Content Kit when the client supplies it.",
  cta: { href: "/contact/", label: "Tell Us About Your Property" },
} as const;

export const ABOUT_TEAM = {
  title: "Horticulturist-Led Team",
  intro:
    "Projects are led by experienced horticulturists working with a trained technical team across assessment, design, plantation, irrigation, installation, and maintenance.",
  roles: [
    "Site assessment, soil analysis, and environmental review",
    "Layout, planting, and irrigation planning",
    "Plantation, lawn, and garden installation",
    "Vertical structures and drip irrigation where required",
    "Handover guidance and ongoing maintenance options",
  ],
  image: {
    src: "/images/about/team.webp",
    alt: "Horticulture team reviewing planting and site conditions on a landscaping project",
    width: 960,
    height: 720,
  },
  mediaNote:
    "Individual credentials and client-approved team portraits will be added when the client confirms wording and publication permission.",
  cta: { href: "/contact/", label: "Meet the Expertise Behind the Work" },
} as const;

export const ABOUT_DIFFERENTIATOR = {
  eyebrow: "Our approach",
  title: "How Kalpam Works Differently",
  intro:
    "We frame our work around verifiable horticultural methods — not competitor comparisons — so property owners and decision-makers can see how recommendations follow real site conditions.",
  methodsCardTitle: "Our methods",
  methodPoints: [
    {
      title: "Site assessment",
      text: "Scientific site assessment before major planting decisions.",
    },
    {
      title: "Soil and environment",
      text: "Soil and environmental review for outdoor spaces.",
    },
    {
      title: "Indoor light",
      text: "Measured indoor light evaluation for indoor planting.",
    },
    {
      title: "Plant selection",
      text: "Plant selection matched to light, water, pollution, space, and maintenance capacity.",
    },
    {
      title: "Delivery and care",
      text: "End-to-end delivery with maintenance and AMC options where agreed.",
    },
  ],
  cta: { href: "/process/", label: "See Our Working Process" },
} as const;

export const ABOUT_VALUES = {
  eyebrow: "Our promise",
  title: "Values and Service Promise",
  intro:
    "Our service promise focuses on practical outcomes, clear communication, and long-term garden health.",
  items: [
    {
      title: "Quality workmanship",
      text: "Careful execution across plantation, lawn, irrigation, and garden elements.",
    },
    {
      title: "Practical, sustainable plant selection",
      text: "Plants chosen for suitability to your site — not decorative choices alone.",
    },
    {
      title: "Clear communication",
      text: "Dependable updates from assessment through handover and care planning.",
    },
    {
      title: "Long-term garden health",
      text: "Recommendations that account for maintenance capacity after installation.",
    },
    {
      title: "Transparent handover",
      text: "Client ownership and care responsibilities explained with client-approved warranty or guarantee wording only.",
    },
  ],
  cta: { href: "/contact/", label: "Start a Conversation" },
} as const;

export const ABOUT_PROOF = {
  eyebrow: "Trust",
  title: "Proof and Trust",
  intro:
    "Verified reviews, partner logos, project statistics, and testimonials will be shown here once the client approves each item for publication.",
  placeholderHint: "TBD — client: Google review excerpts, logos, statistics, and testimonials with permission.",
  cta: { href: "/contact/", label: "Request Relevant Project Examples" },
} as const;
