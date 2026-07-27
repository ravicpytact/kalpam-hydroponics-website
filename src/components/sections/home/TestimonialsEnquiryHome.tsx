import { Container } from "@/components/layout/Container";
import { TestimonialsRotator } from "@/components/sections/home/TestimonialsRotator";
import { Section } from "@/components/ui/Section";
import { GOOGLE_REVIEWS_FOR_TESTIMONIALS } from "@/lib/google-reviews";
import { HOME_TESTIMONIALS } from "@/lib/home-content";

export function TestimonialsEnquiryHome() {
  return (
    <Section className="home-testimonials" title={HOME_TESTIMONIALS.title}>
      <Container>
        <p>{HOME_TESTIMONIALS.reassurance}</p>
        <TestimonialsRotator reviews={GOOGLE_REVIEWS_FOR_TESTIMONIALS} />
        <div className="home-testimonials__actions">
          <a
            href={HOME_TESTIMONIALS.cta.href}
            className="cta-link cta-link--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {HOME_TESTIMONIALS.cta.label}
          </a>
        </div>
      </Container>
    </Section>
  );
}
