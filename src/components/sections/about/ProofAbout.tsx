import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { ABOUT_PROOF } from "@/lib/about-content";

export function ProofAbout() {
  const { eyebrow, title, intro, placeholderHint, cta } = ABOUT_PROOF;

  return (
    <section
      className="section about-proof"
      id="proof"
      aria-labelledby="about-proof-heading"
    >
      <Container>
        <header className="about-proof__header">
          <p className="about-story__eyebrow">{eyebrow}</p>
          <h2 id="about-proof-heading" className="about-story__title">
            {title}
          </h2>
          <p className="about-story__lead">{intro}</p>
        </header>
        <p className="about-story__note about-proof__note" role="note">
          {placeholderHint}
        </p>
        <div className="section-cta">
          <CtaLink href={cta.href} variant="primary">
            {cta.label}
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
