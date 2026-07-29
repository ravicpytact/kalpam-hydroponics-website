/**
 * Confirmed client contact details — single source for footer, contact page, forms, SEO.
 * Update here when the client provides new values.
 *
 * Last updated: 2026-07-28
 */

export const SITE_CONTACT = {
  phone: {
    display: "+91 93778 66066",
    tel: "+919377866066",
  },
  email: {
    display: "kalpamhorti@gmail.com",
    mailto: "kalpamhorti@gmail.com",
    /** Default enquiry recipient when CONTACT_FORM_TO is not set in env */
    formRecipient: "kalpamhorti@gmail.com",
  },
  address: {
    line: "C/119, Aagam Vivianna, Vesu main road, Vesu, Surat, Gujarat, India - 395007",
    postalCode: "395007",
  },
  serviceArea: "Surat, Gujarat, India",
  whatsapp: {
    display: "+91 93778 66066",
    number: "919377866066",
    openingMessage: "Hello, I would like to know more about Kalpam Landscaping services.",
  },
  operatingHours: "Mon–Sat, 9:00 AM – 6:00 PM",
  /** TBD — client */
  privacyUrl: null as null | string,
} as const;
