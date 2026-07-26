"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { CONTACT_FORM } from "@/lib/contact-content";
import { SITE_CONTACT } from "@/lib/site-contact";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { privacyUrl } = SITE_CONTACT;
  const consentHint = CONTACT_FORM.fields.consent.privacyFallback;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);

    if (data.get("website")) {
      setSubmitted(true);
      form.reset();
      return;
    }

    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!email && !phone) {
      setError(CONTACT_FORM.errors.contactMethod);
      return;
    }

    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="contact-form__success" role="status">
        <h3>{CONTACT_FORM.success.title}</h3>
        <p>{CONTACT_FORM.success.body}</p>
        <Button type="button" variant="secondary" onClick={() => setSubmitted(false)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {error ? (
        <p className="contact-form__error" role="alert">
          {error}
        </p>
      ) : null}

      <fieldset className="contact-form__group">
        <legend>{CONTACT_FORM.groups.aboutYou}</legend>
        <div className="contact-form__field">
          <label htmlFor="contact-name">
            {CONTACT_FORM.fields.name.label} *
          </label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="contact-form__row">
          <div className="contact-form__field">
            <label htmlFor="contact-email">{CONTACT_FORM.fields.email.label}</label>
            <input id="contact-email" name="email" type="email" autoComplete="email" />
          </div>
          <div className="contact-form__field">
            <label htmlFor="contact-phone">{CONTACT_FORM.fields.phone.label}</label>
            <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
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
        <div className="contact-form__field">
          <label htmlFor="contact-service">
            {CONTACT_FORM.fields.serviceInterest.label} *
          </label>
          <select id="contact-service" name="serviceInterest" required defaultValue="">
            {CONTACT_FORM.serviceOptions.map((opt) => (
              <option key={opt.value || "empty"} value={opt.value} disabled={opt.value === ""}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="contact-form__field">
          <label htmlFor="contact-location">
            {CONTACT_FORM.fields.projectLocation.label} *
          </label>
          <input
            id="contact-location"
            name="projectLocation"
            type="text"
            autoComplete="street-address"
            required
          />
        </div>
      </fieldset>

      <fieldset className="contact-form__group">
        <legend>{CONTACT_FORM.groups.message}</legend>
        <div className="contact-form__field">
          <label htmlFor="contact-message">
            {CONTACT_FORM.fields.message.label} *
          </label>
          <textarea id="contact-message" name="message" rows={5} required />
        </div>
        <div className="contact-form__field contact-form__field--checkbox">
          <label htmlFor="contact-consent">
            <input id="contact-consent" name="consent" type="checkbox" required />
            <span>
              {CONTACT_FORM.fields.consent.label}{" "}
              {privacyUrl ? (
                <>
                  <a href={privacyUrl} className="contact-form__privacy-link">
                    Privacy policy
                  </a>
                  .
                </>
              ) : (
                <span className="contact-form__consent-note">{consentHint}</span>
              )}
            </span>
          </label>
        </div>
      </fieldset>

      <div className="contact-form__honeypot" aria-hidden="true">
        <label htmlFor="contact-website">{CONTACT_FORM.honeypotLabel}</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" variant="primary" className="contact-form__submit">
        {CONTACT_FORM.submitLabel}
      </Button>
    </form>
  );
}
