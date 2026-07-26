import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { CONTACT_SIDEBAR } from "@/lib/contact-content";
import { SITE_CONTACT } from "@/lib/site-contact";

export function ContactSidebar() {
  const { phone, email, address, serviceArea, whatsapp, operatingHours } = SITE_CONTACT;
  const { reachTitle, nextTitle, nextSteps, nextNote, whatsappCta } = CONTACT_SIDEBAR;

  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.openingMessage)}`
    : null;

  return (
    <aside className="contact-sidebar" aria-labelledby="contact-reach-heading">
      <div className="contact-sidebar__reach">
        <h3 id="contact-reach-heading" className="contact-sidebar__title">
          {reachTitle}
        </h3>
        <a className="contact-sidebar__phone-card" href={`tel:${phone.tel}`}>
          <Phone className="contact-sidebar__icon-inline" size={22} aria-hidden />
          <span className="contact-sidebar__phone-text">
            <span className="contact-sidebar__phone-number">{phone.display}</span>
            <span className="contact-sidebar__phone-hint">Tap to call</span>
          </span>
        </a>
        <ul className="contact-sidebar__list">
          <li>
            <Mail size={20} aria-hidden className="contact-sidebar__icon" />
            <div>
              <span className="contact-sidebar__label">Email</span>
              <a href={`mailto:${email.mailto}`}>{email.display}</a>
            </div>
          </li>
          <li>
            <MapPin size={20} aria-hidden className="contact-sidebar__icon" />
            <div>
              <span className="contact-sidebar__label">Address</span>
              <span>{address.line}</span>
            </div>
          </li>
          <li>
            <MapPin size={20} aria-hidden className="contact-sidebar__icon" />
            <div>
              <span className="contact-sidebar__label">Service area</span>
              <span>{serviceArea}</span>
            </div>
          </li>
          {operatingHours ? (
            <li>
              <Clock size={20} aria-hidden className="contact-sidebar__icon" />
              <div>
                <span className="contact-sidebar__label">Hours</span>
                <span>{operatingHours}</span>
              </div>
            </li>
          ) : null}
        </ul>
        {whatsappHref ? (
          <CtaLink href={whatsappHref} variant="secondary" className="contact-sidebar__whatsapp">
            {whatsappCta.label}
          </CtaLink>
        ) : null}
      </div>

      <div className="contact-sidebar__next">
        <h3 className="contact-sidebar__title">{nextTitle}</h3>
        <ol className="contact-sidebar__steps">
          {nextSteps.map((step) => (
            <li key={step.slice(0, 40)}>{step}</li>
          ))}
        </ol>
        <p className="about-story__note contact-sidebar__note" role="note">
          {nextNote}
        </p>
      </div>
    </aside>
  );
}
