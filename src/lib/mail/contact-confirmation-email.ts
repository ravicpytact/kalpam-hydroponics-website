import type { ContactEnquiry } from "@/lib/contact-enquiry";
import { CONTACT_FORM } from "@/lib/contact-content";
import { SITE_CONTACT } from "@/lib/site-contact";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function summaryRow(label: string, value: string): string {
  return `
    <tr>
      <th style="padding:10px 14px;background:#f4f8f3;border-bottom:1px solid #e2ebe0;text-align:left;width:140px;font:600 13px/1.4 system-ui,sans-serif;color:#355f31;">
        ${escapeHtml(label)}
      </th>
      <td style="padding:10px 14px;border-bottom:1px solid #e2ebe0;font:400 14px/1.5 system-ui,sans-serif;color:#243024;">
        ${escapeHtml(value)}
      </td>
    </tr>
  `;
}

export function buildContactConfirmationSubject(): string {
  return CONTACT_FORM.confirmationEmail.subject;
}

export function buildContactConfirmationText(enquiry: ContactEnquiry): string {
  const { phone, email, whatsapp } = SITE_CONTACT;
  const copy = CONTACT_FORM.confirmationEmail;

  return [
    `Hi ${enquiry.name},`,
    "",
    copy.intro,
    "",
    copy.followUp,
    "",
    copy.summaryHeading,
    `- ${copy.summaryService}: ${enquiry.serviceInterestLabel}`,
    `- ${copy.summaryLocation}: ${enquiry.projectLocation}`,
    "",
    copy.contactHeading,
    `- Phone / WhatsApp: ${phone.display}`,
    `- Email: ${email.display}`,
    whatsapp
      ? `- WhatsApp: https://wa.me/${whatsapp.number}`
      : null,
    "",
    copy.signOff,
    SITE_CONTACT.serviceArea,
  ]
    .filter(Boolean)
    .join("\n");
}

export function buildContactConfirmationHtml(
  enquiry: ContactEnquiry,
  options: { logoUrl: string; logoAlt: string },
): string {
  const { logoUrl, logoAlt } = options;
  const { phone, email, whatsapp } = SITE_CONTACT;
  const copy = CONTACT_FORM.confirmationEmail;
  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.openingMessage)}`
    : null;

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:24px;background:#f7f5ef;font-family:Georgia,'Times New Roman',serif;color:#243024;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2ebe0;border-radius:12px;overflow:hidden;">
      <tr>
        <td style="padding:24px 24px 16px;background:#166912;color:#ffffff;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
            <tr>
              <td style="width:64px;padding:0 16px 0 0;vertical-align:middle;">
                <img
                  src="${escapeHtml(logoUrl)}"
                  alt="${escapeHtml(logoAlt)}"
                  width="56"
                  height="56"
                  style="display:block;width:56px;height:56px;border:0;outline:none;border-radius:8px;background:#ffffff;padding:6px;"
                />
              </td>
              <td style="vertical-align:middle;">
                <p style="margin:0 0 6px;font:600 12px/1.2 system-ui,sans-serif;letter-spacing:0.08em;text-transform:uppercase;color:#b8d4b0;">
                  Kalpam Landscaping
                </p>
                <h1 style="margin:0;font:700 22px/1.3 Georgia,'Times New Roman',serif;">
                  ${escapeHtml(copy.subject)}
                </h1>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:24px 24px 8px;font:400 15px/1.6 system-ui,sans-serif;color:#243024;">
          <p style="margin:0 0 16px;">Hi ${escapeHtml(enquiry.name)},</p>
          <p style="margin:0 0 16px;">${escapeHtml(copy.intro)}</p>
          <p style="margin:0;">${escapeHtml(copy.followUp)}</p>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 24px 0;">
          <p style="margin:0 0 10px;font:600 13px/1.4 system-ui,sans-serif;letter-spacing:0.04em;text-transform:uppercase;color:#355f31;">
            ${escapeHtml(copy.summaryHeading)}
          </p>
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
            ${summaryRow(copy.summaryService, enquiry.serviceInterestLabel)}
            ${summaryRow(copy.summaryLocation, enquiry.projectLocation)}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:20px 24px 24px;">
          <p style="margin:0 0 10px;font:600 13px/1.4 system-ui,sans-serif;color:#355f31;">
            ${escapeHtml(copy.contactHeading)}
          </p>
          <p style="margin:0 0 6px;font:400 14px/1.5 system-ui,sans-serif;color:#243024;">
            Phone / WhatsApp:
            <a href="tel:${escapeHtml(phone.tel)}" style="color:#166912;text-decoration:none;font-weight:600;">${escapeHtml(phone.display)}</a>
          </p>
          <p style="margin:0 0 6px;font:400 14px/1.5 system-ui,sans-serif;color:#243024;">
            Email:
            <a href="mailto:${escapeHtml(email.mailto)}" style="color:#166912;text-decoration:none;font-weight:600;">${escapeHtml(email.display)}</a>
          </p>
          ${
            whatsappHref
              ? `<p style="margin:0;font:400 14px/1.5 system-ui,sans-serif;color:#243024;">
                   <a href="${escapeHtml(whatsappHref)}" style="color:#166912;text-decoration:none;font-weight:600;">Chat on WhatsApp</a>
                 </p>`
              : ""
          }
          <p style="margin:20px 0 0;font:400 14px/1.5 Georgia,'Times New Roman',serif;color:#243024;">
            ${escapeHtml(copy.signOff)}<br />
            ${escapeHtml(SITE_CONTACT.serviceArea)}
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function buyerHasEmail(enquiry: ContactEnquiry): boolean {
  return enquiry.email !== "Not provided";
}
