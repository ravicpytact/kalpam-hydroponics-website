import { CONTACT_FORM } from "@/lib/contact-content";

const MAX = {
  name: 120,
  email: 254,
  phone: 40,
  projectLocation: 200,
  message: 4000,
  website: 200,
} as const;

export type ContactEnquiryInput = {
  name: string;
  email: string;
  phone: string;
  propertyType: string;
  serviceInterest: string;
  projectLocation: string;
  message: string;
  website: string;
};

export type ContactEnquiry = {
  name: string;
  email: string;
  phone: string;
  propertyTypeLabel: string;
  serviceInterestLabel: string;
  projectLocation: string;
  message: string;
  submittedAt: string;
};

export type ContactEnquiryValidationResult =
  | { ok: true; enquiry: ContactEnquiry }
  | { ok: false; error: string; status: number };

function trimField(value: unknown, maxLength: number): string {
  return String(value ?? "")
    .trim()
    .slice(0, maxLength);
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function labelForValue(
  options: readonly { value: string; label: string }[],
  value: string,
  fallback: string,
): string {
  const match = options.find((option) => option.value === value);
  return match?.label ?? fallback;
}

export function parseContactEnquiryBody(body: unknown): ContactEnquiryValidationResult {
  if (!body || typeof body !== "object") {
    return { ok: false, error: "Invalid submission.", status: 400 };
  }

  const raw = body as Record<string, unknown>;
  const website = trimField(raw.website, MAX.website);

  if (website) {
    return { ok: false, error: "Invalid submission.", status: 400 };
  }

  const name = trimField(raw.name, MAX.name);
  const email = trimField(raw.email, MAX.email);
  const phone = trimField(raw.phone, MAX.phone);
  const propertyType = trimField(raw.propertyType, 40);
  const serviceInterest = trimField(raw.serviceInterest, 40);
  const projectLocation = trimField(raw.projectLocation, MAX.projectLocation);
  const message = trimField(raw.message, MAX.message);

  if (!name) {
    return { ok: false, error: "Name is required.", status: 400 };
  }

  if (!email && !phone) {
    return {
      ok: false,
      error: "Enter an email address or phone number so we can reach you.",
      status: 400,
    };
  }

  if (email && !isValidEmail(email)) {
    return { ok: false, error: "Enter a valid email address.", status: 400 };
  }

  if (!serviceInterest) {
    return { ok: false, error: "Service interest is required.", status: 400 };
  }

  if (!projectLocation) {
    return { ok: false, error: "Project location is required.", status: 400 };
  }

  if (!message) {
    return { ok: false, error: "Message or site requirement is required.", status: 400 };
  }

  const propertyTypeLabel = propertyType
    ? labelForValue(CONTACT_FORM.propertyTypes, propertyType, propertyType)
    : "Not specified";

  const serviceInterestLabel = labelForValue(
    CONTACT_FORM.serviceOptions,
    serviceInterest,
    serviceInterest,
  );

  return {
    ok: true,
    enquiry: {
      name,
      email: email || "Not provided",
      phone: phone || "Not provided",
      propertyTypeLabel,
      serviceInterestLabel,
      projectLocation,
      message,
      submittedAt: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "medium",
        timeStyle: "short",
      }),
    },
  };
}
