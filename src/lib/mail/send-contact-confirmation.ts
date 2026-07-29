import "server-only";

import type { ContactEnquiry } from "@/lib/contact-enquiry";
import {
  buildContactConfirmationHtml,
  buildContactConfirmationSubject,
  buildContactConfirmationText,
  buyerHasEmail,
} from "@/lib/mail/contact-confirmation-email";
import { createSmtpTransporter, getSmtpConfig } from "@/lib/mail/smtp-config";
import { SITE_LOGO } from "@/lib/site-brand";
import { getSiteUrl } from "@/lib/site-url";

export async function sendContactConfirmationEmail(enquiry: ContactEnquiry): Promise<void> {
  if (!buyerHasEmail(enquiry)) {
    return;
  }

  const config = getSmtpConfig();
  const transporter = createSmtpTransporter(config);
  const logoUrl = `${getSiteUrl()}${SITE_LOGO.src}`;

  const fromAddress = config.sender.includes("<")
    ? config.sender
    : `Kalpam Landscaping <${config.sender}>`;

  await transporter.sendMail({
    from: fromAddress,
    to: enquiry.email,
    replyTo: config.recipient,
    subject: buildContactConfirmationSubject(),
    text: buildContactConfirmationText(enquiry),
    html: buildContactConfirmationHtml(enquiry, {
      logoUrl,
      logoAlt: SITE_LOGO.alt,
    }),
  });
}
