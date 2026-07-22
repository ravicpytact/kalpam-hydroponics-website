import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { HOME_TESTIMONIALS } from "@/lib/home-content";

export function TestimonialsEnquiryHome() {
  return (
    <Section className="home-testimonials" title={HOME_TESTIMONIALS.title}>
      <Container>
        <p>{HOME_TESTIMONIALS.reassurance}</p>
        <p className="home-testimonials__note" role="note">
          {HOME_TESTIMONIALS.note}
        </p>
        <ul className="home-testimonials__list">
          {HOME_TESTIMONIALS.items.map((item) => (
            <li key={item.name + item.context} className="home-testimonials__item">
              <blockquote>
                <p>“{item.quote}”</p>
                <footer>
                  <cite>{item.name}</cite>
                  <span>{item.context}</span>
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
        <div className="home-testimonials__actions">
          <CtaLink href={HOME_TESTIMONIALS.cta.href} variant="primary">
            {HOME_TESTIMONIALS.cta.label}
          </CtaLink>
        </div>
      </Container>
    </Section>
  );
}
