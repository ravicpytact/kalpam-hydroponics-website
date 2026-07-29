import type { ContactEnquiry } from "@/lib/contact-enquiry";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatMultiline(value: string): string {
  return escapeHtml(value).replaceAll("\n", "<br />");
}

function row(label: string, value: string): string {
  return `
    <tr>
      <th style="padding:12px 16px;background:#f4f8f3;border-bottom:1px solid #e2ebe0;text-align:left;vertical-align:top;width:180px;font:600 13px/1.4 system-ui,sans-serif;color:#355f31;">
        ${escapeHtml(label)}
      </th>
      <td style="padding:12px 16px;border-bottom:1px solid #e2ebe0;font:400 14px/1.5 system-ui,sans-serif;color:#243024;">
        ${value}
      </td>
    </tr>
  `;
}

function emailCell(enquiry: ContactEnquiry): string {
  if (enquiry.email === "Not provided") {
    return escapeHtml(enquiry.email);
  }
  return `<a href="mailto:${escapeHtml(enquiry.email)}" style="color:#166912;text-decoration:none;">${escapeHtml(enquiry.email)}</a>`;
}

export function buildContactEnquirySubject(enquiry: ContactEnquiry): string {
  return `New website enquiry — ${enquiry.serviceInterestLabel} — ${enquiry.name}`;
}

export function buildContactEnquiryText(enquiry: ContactEnquiry): string {
  return [
    "New enquiry from Kalpam Landscaping website contact form",
    "",
    "About the enquirer",
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone}`,
    "",
    "Project details",
    `Property type: ${enquiry.propertyTypeLabel}`,
    `Service interest: ${enquiry.serviceInterestLabel}`,
    `Project location: ${enquiry.projectLocation}`,
    "",
    "Message",
    enquiry.message,
    "",
    `Submitted: ${enquiry.submittedAt} (IST)`,
  ].join("\n");
}

export function buildContactEnquiryHtml(
  enquiry: ContactEnquiry,
  options: { logoUrl: string; logoAlt: string },
): string {
  const { logoUrl, logoAlt } = options;
  const replyAction =
    enquiry.email !== "Not provided"
      ? `<p style="margin:24px 0 0;font:400 14px/1.5 system-ui,sans-serif;color:#5a5a5a;">
           Reply directly to
           <a href="mailto:${escapeHtml(enquiry.email)}" style="color:#166912;text-decoration:none;font-weight:600;">${escapeHtml(enquiry.email)}</a>.
         </p>`
      : enquiry.phone !== "Not provided"
        ? `<p style="margin:24px 0 0;font:400 14px/1.5 system-ui,sans-serif;color:#5a5a5a;">
             Follow up by phone or WhatsApp:
             <strong style="color:#243024;">${escapeHtml(enquiry.phone)}</strong>.
           </p>`
        : "";

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
                <h1 style="margin:0;font:700 24px/1.25 Georgia,'Times New Roman',serif;">
                  New website enquiry
                </h1>
                <p style="margin:10px 0 0;font:400 14px/1.5 system-ui,sans-serif;color:#e8f3e6;">
                  Submitted ${escapeHtml(enquiry.submittedAt)} (IST)
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 0 0;">
          <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse;">
            ${row("Name", escapeHtml(enquiry.name))}
            ${row("Email", emailCell(enquiry))}
            ${row("Phone", escapeHtml(enquiry.phone))}
            ${row("Property type", escapeHtml(enquiry.propertyTypeLabel))}
            ${row("Service interest", escapeHtml(enquiry.serviceInterestLabel))}
            ${row("Project location", escapeHtml(enquiry.projectLocation))}
            ${row("Message", formatMultiline(enquiry.message))}
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding:0 24px 24px;">
          ${replyAction}
          <p style="margin:16px 0 0;font:400 12px/1.5 system-ui,sans-serif;color:#7a8478;">
            This notification was sent from the contact form on the Kalpam Landscaping website.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
