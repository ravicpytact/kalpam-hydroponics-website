/**
 * Confirmed client contact details — single source for footer, contact page, forms, SEO.
 * Update here when the client provides new values.
 *
 * Last updated: 2026-07-21
 */

export const SITE_CONTACT = {
  phone: {
    display: "+91 98765 43210",
    tel: "+919876543210",
  },
  email: {
    display: "info@kalpamhydroponics.com",
    mailto: "info@kalpamhydroponics.com",
    /** Form submission recipient (Resend/Brevo) */
    formRecipient: "info@kalpamhydroponics.com",
  },
  address: {
    line: "Vesu, Surat, Gujarat, India",
  },
  serviceArea: "Surat, Gujarat, India",
  /** TBD — client */
  whatsapp: null as null | { display: string; number: string; openingMessage: string },
  /** TBD — client */
  operatingHours: null as null | string,
  /** TBD — client */
  privacyUrl: null as null | string,
} as const;
