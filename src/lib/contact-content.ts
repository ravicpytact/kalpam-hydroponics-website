/**
 * Contact page content from development/info.md. Do not invent response times or privacy legal text.
 */

export const CONTACT_META = {
  title: "Contact",
  description:
    "Share your property and landscaping requirements with Kalpam Landscaping in Surat, Gujarat — enquiry form, phone, and WhatsApp.",
} as const;

export const CONTACT_HERO = {
  eyebrow: "Get in touch",
  title: "Tell Us About Your Property",
  support:
    "Discuss landscaping, garden development, indoor planting, vertical gardens, industrial sites, or maintenance. Include location, service interest, and what you want to achieve so we can respond usefully.",
  image: {
    src: "/images/contact/intro.webp",
    alt: "Calm garden path inviting a conversation about your property",
  },
  formAnchor: "#contact-form",
  formAnchorLabel: "Go to enquiry form",
  whatsappCta: { label: "Chat on WhatsApp" },
} as const;

export const CONTACT_FORM = {
  title: "Send your requirement",
  intro: "Fields marked with * are required. Provide at least an email or phone number so we can reach you.",
  groups: {
    aboutYou: "About you",
    project: "Your project",
    message: "Message",
  },
  fields: {
    name: { label: "Name", required: true },
    email: { label: "Email address", required: false },
    phone: { label: "Phone or WhatsApp number", required: false },
    propertyType: { label: "Property or organization type", required: false },
    serviceInterest: { label: "Service interest", required: true },
    projectLocation: { label: "Project location", required: true },
    message: { label: "Message or site requirement", required: true },
    consent: {
      label: "I agree to be contacted about my enquiry.",
      privacyFallback:
        "Privacy and data-use wording — TBD — client. Your details are used only to respond to this enquiry.",
    },
  },
  propertyTypes: [
    { value: "", label: "Select type (optional)" },
    { value: "residential", label: "Residential" },
    { value: "commercial", label: "Commercial" },
    { value: "industrial", label: "Industrial" },
    { value: "farmhouse", label: "Farmhouse" },
    { value: "society", label: "Society / residential complex" },
    { value: "public-sector", label: "Public sector" },
    { value: "other", label: "Other" },
  ],
  serviceOptions: [
    { value: "", label: "Select a service *" },
    { value: "farmhouse", label: "Farmhouse Garden Development" },
    { value: "indoor", label: "Indoor Office and Home Gardens" },
    { value: "vertical", label: "Vertical Gardens" },
    { value: "industrial", label: "Industrial Gardens" },
    { value: "amc", label: "Annual Maintenance Contracts" },
    { value: "general", label: "General enquiry" },
    { value: "unsure", label: "Not sure yet" },
  ],
  submitLabel: "Submit Your Enquiry",
  honeypotLabel: "Leave this field empty",
  errors: {
    contactMethod: "Enter an email address or phone number so we can reach you.",
    generic: "Please check the highlighted fields and try again.",
  },
  success: {
    title: "Thank you — your enquiry was received.",
    body: "Success message wording and email delivery — TBD — client (form backend in a later stage). We will review what you shared and follow up when appropriate.",
  },
} as const;

export const CONTACT_SIDEBAR = {
  reachTitle: "Reach us",
  nextTitle: "What happens next",
  nextSteps: [
    "We receive your enquiry and review the details you provide.",
    "Our team assesses whether a call, site visit, or more information is needed.",
    "We follow up using the contact method you supplied.",
  ],
  nextNote:
    "Expected response time and internal notification copy — TBD — client. We do not promise a fixed reply window until the client confirms.",
  whatsappCta: { label: "Chat on WhatsApp" },
} as const;
