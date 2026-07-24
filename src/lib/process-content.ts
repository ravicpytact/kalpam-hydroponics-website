/**
 * Process page content from development/info.md. Do not invent FAQ facts or warranty terms.
 */

export const PROCESS_META = {
  title: "Process",
  description:
    "From enquiry and site assessment through planning, installation, handover, and ongoing maintenance — Kalpam’s horticulturist-led process in Surat, Gujarat.",
} as const;

export const PROCESS_HERO = {
  eyebrow: "How we work",
  title: "Our Working Process",
  support:
    "Our method moves from initial enquiry through assessment, recommendation, execution, and aftercare — adapted to your property type and site conditions.",
  image: {
    src: "/images/process/overview.webp",
    alt: "Landscaping team reviewing plans during a site visit",
  },
  primaryCta: { href: "/contact/", label: "Book an Initial Discussion" },
} as const;

export const PROCESS_JOURNEY = {
  title: "Your journey",
  caption:
    "Enquiry starts the conversation through contact. Steps 1–4 below cover assessment through aftercare.",
  phases: [
    { id: "enquiry", label: "Enquiry" },
    { id: "assessment", label: "Assessment" },
    { id: "recommendation", label: "Recommendation" },
    { id: "execution", label: "Execution" },
    { id: "aftercare", label: "Aftercare" },
  ],
  crossLinks: [
    { href: "/services/", label: "See our service lines" },
    { href: "/about/#how-kalpam-works", label: "How our horticulture team works" },
  ],
} as const;

export const PROCESS_STEPS = [
  {
    id: "step-1",
    step: 1,
    title: "Discovery and Site Assessment",
    summary:
      "We understand your property, goals, and constraints, then review site conditions before recommending plants or scope.",
    cardTitle: "What we review",
    points: [
      "Discuss property type, intended use, preferences, budget context, timeline, and maintenance expectations.",
      "Review space, soil, drainage, water availability, light, exposure, pollution, and access.",
      "Measure indoor light with appropriate tools when indoor planting is part of the scope.",
    ],
    cta: { href: "/contact/", label: "Request a Site Visit" },
  },
  {
    id: "step-2",
    step: 2,
    title: "Recommendation and Planning",
    summary:
      "We select suitable plants and landscape elements and define layout, irrigation, scope, and care expectations.",
    cardTitle: "Planning outputs",
    points: [
      "Select plants and landscape elements matched to assessed conditions.",
      "Develop layout, plantation, lawn or garden plan, and irrigation approach.",
      "Define scope, responsibilities, and maintenance recommendations.",
      "Formal drawings or specifications only when separately agreed.",
    ],
    cta: { href: "/contact/", label: "Discuss Your Requirements" },
  },
  {
    id: "step-3",
    step: 3,
    title: "Development and Installation",
    summary:
      "Approved work is executed by trained personnel with horticultural oversight and clear progress communication.",
    cardTitle: "On site",
    points: [
      "Site preparation, plantation, lawn, garden elements, vertical structures, and irrigation as per the approved project.",
      "Trained technical personnel with horticultural oversight on site.",
      "Progress updates aligned to project scope and site readiness.",
    ],
    cta: { href: "/contact/", label: "Start Project Planning" },
  },
  {
    id: "step-4",
    step: 4,
    title: "Handover and Maintenance",
    summary:
      "We explain care after installation and discuss complimentary maintenance or AMC options under approved terms.",
    cardTitle: "After installation",
    points: [
      "Care guidance and post-installation responsibilities for your team or ours.",
      "Complimentary maintenance terms where applicable and client-approved.",
      "Annual maintenance contracts and plant-warranty wording published only with client-approved conditions.",
    ],
    termsNote:
      "Complimentary maintenance period, AMC inclusions, and plant-warranty details — TBD — client (Foundation Content Kit).",
    cta: { href: "/contact/", label: "Ask About Ongoing Care" },
  },
] as const;

export const PROCESS_FAQ = {
  eyebrow: "Questions",
  title: "Common questions",
  reminder:
    "Recommendations always begin with understanding your site conditions — we do not promise outcomes without assessment.",
  items: [
    {
      question: "Do you offer site visits?",
      answer:
        "Site visits and assessments are part of our process. What we review on site depends on the service, property access, and scope discussed during enquiry.",
    },
    {
      question: "Which property types do you serve?",
      answer:
        "Residential, commercial, industrial, farmhouse, and public-sector properties in Surat, Gujarat, India.",
    },
    {
      question: "Do you provide ongoing maintenance?",
      answer:
        "Yes. We can discuss complimentary maintenance where applicable and annual maintenance contracts under client-approved terms.",
    },
    {
      question: "How do you choose plants?",
      answer:
        "Selection follows site assessment — light, water quality, pollution exposure, available space, and realistic maintenance capacity.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Timelines depend on scope, site readiness, and season. We outline expectations after assessment and agreed planning — we do not publish fixed durations without project context.",
    },
    {
      question: "What areas do you cover?",
      answer: "Surat, Gujarat, India.",
    },
  ],
  clientNote:
    "Detailed FAQ answers, response-time expectations, and fine-grained service-area wording — TBD — client.",
  cta: { href: "/contact/", label: "Talk to a Landscaping Expert" },
} as const;
