"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { CONTACT_FORM } from "@/lib/contact-content";
import {
  getFirstInvalidFieldId,
  readContactFormValues,
  validateContactForm,
  validateContactFormField,
  type ContactFormField,
  type ContactFormFieldErrors,
} from "@/lib/contact-form-validation";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null;
  }

  return (
    <p id={id} className="contact-form__field-message" role="alert">
      {message}
    </p>
  );
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [confirmationSent, setConfirmationSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ContactFormFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  function fieldClass(field: ContactFormField, extra = "") {
    const invalid = fieldErrors[field] ? " contact-form__field--invalid" : "";
    return `contact-form__field${invalid}${extra ? ` ${extra}` : ""}`;
  }

  function handleFieldBlur(field: ContactFormField, form: HTMLFormElement) {
    const values = readContactFormValues(form);
    const nextErrors = validateContactFormField(field, values);

    setFieldErrors((current) => {
      const merged = { ...current };

      if (field === "email" || field === "phone") {
        delete merged.email;
        delete merged.phone;
      } else {
        delete merged[field];
      }

      return { ...merged, ...nextErrors };
    });
  }

  function handleFieldChange(field: ContactFormField, form: HTMLFormElement) {
    const values = readContactFormValues(form);
    const nextErrors = validateContactFormField(field, values);
    const isValid = !nextErrors[field] && !(field === "email" || field === "phone"
      ? nextErrors.email || nextErrors.phone
      : false);

    if (!isValid) {
      return;
    }

    setFieldErrors((current) => {
      const merged = { ...current };

      if (field === "email" || field === "phone") {
        delete merged.email;
        delete merged.phone;
      } else {
        delete merged[field];
      }

      return merged;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      setSubmitted(true);
      form.reset();
      setFieldErrors({});
      return;
    }

    const values = readContactFormValues(form);
    const validationErrors = validateContactForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      const firstInvalidId = getFirstInvalidFieldId(validationErrors);
      if (firstInvalidId) {
        document.getElementById(firstInvalidId)?.focus();
      }
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          propertyType: data.get("propertyType"),
          serviceInterest: values.serviceInterest,
          projectLocation: values.projectLocation,
          message: values.message,
          website: data.get("website"),
        }),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
        confirmationSent?: boolean;
      };

      if (!response.ok || !result.ok) {
        setFormError(result.error ?? CONTACT_FORM.errors.submitFailed);
        return;
      }

      setConfirmationSent(Boolean(result.confirmationSent));
      setSubmitted(true);
      form.reset();
      setFieldErrors({});
    } catch {
      setFormError(CONTACT_FORM.errors.submitFailed);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="contact-form__success" role="status">
        <h3>{CONTACT_FORM.success.title}</h3>
        <p>
          {confirmationSent
            ? CONTACT_FORM.success.bodyWithConfirmation
            : CONTACT_FORM.success.body}
        </p>
        <Button
          type="button"
          variant="secondary"
          onClick={() => {
            setSubmitted(false);
            setConfirmationSent(false);
          }}
        >
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {formError ? (
        <p className="contact-form__form-error" role="alert">
          {formError}
        </p>
      ) : null}

      <fieldset className="contact-form__group">
        <legend>{CONTACT_FORM.groups.aboutYou}</legend>
        <div className={fieldClass("name")}>
          <label htmlFor="contact-name">
            {CONTACT_FORM.fields.name.label} *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
            onBlur={(event) => {
              const form = event.currentTarget.form;
              if (form) handleFieldBlur("name", form);
            }}
            onChange={(event) => {
              const form = event.currentTarget.form;
              if (form) handleFieldChange("name", form);
            }}
          />
          <FieldError id="contact-name-error" message={fieldErrors.name} />
        </div>
        <div className="contact-form__row">
          <div className={fieldClass("email")}>
            <label htmlFor="contact-email">{CONTACT_FORM.fields.email.label} *</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
              onBlur={(event) => {
                const form = event.currentTarget.form;
                if (form) handleFieldBlur("email", form);
              }}
              onChange={(event) => {
                const form = event.currentTarget.form;
                if (form) handleFieldChange("email", form);
              }}
            />
            <FieldError id="contact-email-error" message={fieldErrors.email} />
          </div>
          <div className={fieldClass("phone")}>
            <label htmlFor="contact-phone">{CONTACT_FORM.fields.phone.label} *</label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={fieldErrors.phone ? "contact-phone-error" : undefined}
              onBlur={(event) => {
                const form = event.currentTarget.form;
                if (form) handleFieldBlur("phone", form);
              }}
              onChange={(event) => {
                const form = event.currentTarget.form;
                if (form) handleFieldChange("phone", form);
              }}
            />
            <FieldError id="contact-phone-error" message={fieldErrors.phone} />
          </div>
        </div>
      </fieldset>

      <fieldset className="contact-form__group">
        <legend>{CONTACT_FORM.groups.project}</legend>
        <div className="contact-form__field">
          <label htmlFor="contact-property-type">
            {CONTACT_FORM.fields.propertyType.label}
          </label>
          <select id="contact-property-type" name="propertyType" defaultValue="">
            {CONTACT_FORM.propertyTypes.map((opt) => (
              <option key={opt.value || "empty"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className={fieldClass("serviceInterest")}>
          <label htmlFor="contact-service">
            {CONTACT_FORM.fields.serviceInterest.label} *
          </label>
          <select
            id="contact-service"
            name="serviceInterest"
            required
            defaultValue=""
            aria-invalid={Boolean(fieldErrors.serviceInterest)}
            aria-describedby={
              fieldErrors.serviceInterest ? "contact-service-error" : undefined
            }
            onBlur={(event) => {
              const form = event.currentTarget.form;
              if (form) handleFieldBlur("serviceInterest", form);
            }}
            onChange={(event) => {
              const form = event.currentTarget.form;
              if (form) handleFieldChange("serviceInterest", form);
            }}
          >
            {CONTACT_FORM.serviceOptions.map((opt) => (
              <option key={opt.value || "empty"} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
          <FieldError id="contact-service-error" message={fieldErrors.serviceInterest} />
        </div>
        <div className={fieldClass("projectLocation")}>
          <label htmlFor="contact-location">
            {CONTACT_FORM.fields.projectLocation.label} *
          </label>
          <input
            id="contact-location"
            name="projectLocation"
            type="text"
            autoComplete="street-address"
            required
            aria-invalid={Boolean(fieldErrors.projectLocation)}
            aria-describedby={
              fieldErrors.projectLocation ? "contact-location-error" : undefined
            }
            onBlur={(event) => {
              const form = event.currentTarget.form;
              if (form) handleFieldBlur("projectLocation", form);
            }}
            onChange={(event) => {
              const form = event.currentTarget.form;
              if (form) handleFieldChange("projectLocation", form);
            }}
          />
          <FieldError id="contact-location-error" message={fieldErrors.projectLocation} />
        </div>
      </fieldset>

      <fieldset className="contact-form__group">
        <legend>{CONTACT_FORM.groups.message}</legend>
        <div className={fieldClass("message")}>
          <label htmlFor="contact-message">
            {CONTACT_FORM.fields.message.label} *
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
            onBlur={(event) => {
              const form = event.currentTarget.form;
              if (form) handleFieldBlur("message", form);
            }}
            onChange={(event) => {
              const form = event.currentTarget.form;
              if (form) handleFieldChange("message", form);
            }}
          />
          <FieldError id="contact-message-error" message={fieldErrors.message} />
        </div>
      </fieldset>

      <div className="contact-form__honeypot" aria-hidden="true">
        <label htmlFor="contact-website">{CONTACT_FORM.honeypotLabel}</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button
        type="submit"
        variant="primary"
        className="contact-form__submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending…" : CONTACT_FORM.submitLabel}
      </Button>
    </form>
  );
}
