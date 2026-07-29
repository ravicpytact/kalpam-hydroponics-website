import "server-only";

import type { ContactEnquiry } from "@/lib/contact-enquiry";
import {
  buildContactEnquiryHtml,
  buildContactEnquirySubject,
  buildContactEnquiryText,
} from "@/lib/mail/contact-enquiry-email";
import { createSmtpTransporter, getSmtpConfig } from "@/lib/mail/smtp-config";
import { SITE_LOGO } from "@/lib/site-brand";
import { getSiteUrl } from "@/lib/site-url";

export async function sendContactEnquiryEmail(enquiry: ContactEnquiry): Promise<void> {
  const config = getSmtpConfig();
  const transporter = createSmtpTransporter(config);
  const logoUrl = `${getSiteUrl()}${SITE_LOGO.src}`;

  const fromAddress = config.sender.includes("<")
    ? config.sender
    : `Kalpam Landscaping <${config.sender}>`;

  await transporter.sendMail({
    from: fromAddress,
    to: config.recipient,
    replyTo: enquiry.email !== "Not provided" ? enquiry.email : undefined,
    subject: buildContactEnquirySubject(enquiry),
    text: buildContactEnquiryText(enquiry),
    html: buildContactEnquiryHtml(enquiry, {
      logoUrl,
      logoAlt: SITE_LOGO.alt,
    }),
  });
}
