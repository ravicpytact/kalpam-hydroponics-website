import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { SERVICES_ENQUIRY } from "@/lib/services-content";

export function ServicesEnquiry() {
  const { eyebrow, title, body, cta } = SERVICES_ENQUIRY;

  return (
    <section
      className="section services-enquiry"
      id="service-enquiry"
      aria-labelledby="services-enquiry-heading"
    >
      <Container>
        <header className="services-enquiry__header">
          <p className="about-story__eyebrow">{eyebrow}</p>
          <h2 id="services-enquiry-heading" className="about-story__title">
            {title}
          </h2>
          <p className="about-story__lead">{body}</p>
        </header>
        <div className="section-cta">
          <CtaLink href={cta.href} variant="primary">
            {cta.label}
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
