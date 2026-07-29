import { CONTACT_FORM } from "@/lib/contact-content";

export type ContactFormField =
  | "name"
  | "email"
  | "phone"
  | "serviceInterest"
  | "projectLocation"
  | "message"
  | "consent";

export type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  projectLocation: string;
  message: string;
  consent: boolean;
};

export type ContactFormFieldErrors = Partial<Record<ContactFormField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function contactMethodError(values: ContactFormValues): string | undefined {
  if (!values.email.trim() && !values.phone.trim()) {
    return CONTACT_FORM.errors.contactMethod;
  }
  return undefined;
}

function emailFormatError(email: string): string | undefined {
  const trimmed = email.trim();
  if (trimmed && !EMAIL_PATTERN.test(trimmed)) {
    return CONTACT_FORM.errors.emailInvalid;
  }
  return undefined;
}

export function validateContactFormField(
  field: ContactFormField,
  values: ContactFormValues,
): ContactFormFieldErrors {
  const errors: ContactFormFieldErrors = {};

  switch (field) {
    case "name":
      if (!values.name.trim()) {
        errors.name = CONTACT_FORM.errors.nameRequired;
      }
      break;
    case "email": {
      const formatError = emailFormatError(values.email);
      if (formatError) {
        errors.email = formatError;
      }
      const methodError = contactMethodError(values);
      if (methodError) {
        errors.email = methodError;
        errors.phone = methodError;
      }
      break;
    }
    case "phone": {
      const methodError = contactMethodError(values);
      if (methodError) {
        errors.email = methodError;
        errors.phone = methodError;
      }
      break;
    }
    case "serviceInterest":
      if (!values.serviceInterest.trim()) {
        errors.serviceInterest = CONTACT_FORM.errors.serviceRequired;
      }
      break;
    case "projectLocation":
      if (!values.projectLocation.trim()) {
        errors.projectLocation = CONTACT_FORM.errors.locationRequired;
      }
      break;
    case "message":
      if (!values.message.trim()) {
        errors.message = CONTACT_FORM.errors.messageRequired;
      }
      break;
    case "consent":
      if (!values.consent) {
        errors.consent = CONTACT_FORM.errors.consentRequired;
      }
      break;
  }

  return errors;
}

export function validateContactForm(values: ContactFormValues): ContactFormFieldErrors {
  const errors: ContactFormFieldErrors = {};

  if (!values.name.trim()) {
    errors.name = CONTACT_FORM.errors.nameRequired;
  }

  const formatError = emailFormatError(values.email);
  if (formatError) {
    errors.email = formatError;
  }

  const methodError = contactMethodError(values);
  if (methodError) {
    errors.email = methodError;
    errors.phone = methodError;
  }

  if (!values.serviceInterest.trim()) {
    errors.serviceInterest = CONTACT_FORM.errors.serviceRequired;
  }

  if (!values.projectLocation.trim()) {
    errors.projectLocation = CONTACT_FORM.errors.locationRequired;
  }

  if (!values.message.trim()) {
    errors.message = CONTACT_FORM.errors.messageRequired;
  }

  if (!values.consent) {
    errors.consent = CONTACT_FORM.errors.consentRequired;
  }

  return errors;
}

const FIELD_IDS: Record<ContactFormField, string> = {
  name: "contact-name",
  email: "contact-email",
  phone: "contact-phone",
  serviceInterest: "contact-service",
  projectLocation: "contact-location",
  message: "contact-message",
  consent: "contact-consent",
};

export function getFirstInvalidFieldId(errors: ContactFormFieldErrors): string | null {
  const order: ContactFormField[] = [
    "name",
    "email",
    "phone",
    "serviceInterest",
    "projectLocation",
    "message",
    "consent",
  ];

  for (const field of order) {
    if (errors[field]) {
      return FIELD_IDS[field];
    }
  }

  return null;
}

export function readContactFormValues(form: HTMLFormElement): ContactFormValues {
  const data = new FormData(form);

  return {
    name: String(data.get("name") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    phone: String(data.get("phone") ?? "").trim(),
    serviceInterest: String(data.get("serviceInterest") ?? "").trim(),
    projectLocation: String(data.get("projectLocation") ?? "").trim(),
    message: String(data.get("message") ?? "").trim(),
    consent: data.get("consent") === "on",
  };
}
