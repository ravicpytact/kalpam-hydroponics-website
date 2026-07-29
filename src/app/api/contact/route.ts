import { NextResponse } from "next/server";
import { parseContactEnquiryBody } from "@/lib/contact-enquiry";
import { buyerHasEmail } from "@/lib/mail/contact-confirmation-email";
import { sendContactConfirmationEmail } from "@/lib/mail/send-contact-confirmation";
import { sendContactEnquiryEmail } from "@/lib/mail/send-contact-enquiry";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  const parsed = parseContactEnquiryBody(body);

  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: parsed.error }, { status: parsed.status });
  }

  try {
    await sendContactEnquiryEmail(parsed.enquiry);
  } catch (error) {
    console.error("Contact form email delivery failed.", error);
    return NextResponse.json(
      {
        ok: false,
        error: "We could not send your enquiry right now. Please try again or contact us by phone or WhatsApp.",
      },
      { status: 503 },
    );
  }

  let confirmationSent = false;

  if (buyerHasEmail(parsed.enquiry)) {
    try {
      await sendContactConfirmationEmail(parsed.enquiry);
      confirmationSent = true;
    } catch (error) {
      console.error("Contact confirmation email delivery failed.", error);
    }
  }

  return NextResponse.json({ ok: true, confirmationSent });
}
