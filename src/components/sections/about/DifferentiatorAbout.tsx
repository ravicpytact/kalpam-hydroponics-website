import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { ABOUT_DIFFERENTIATOR } from "@/lib/about-content";

export function DifferentiatorAbout() {
  const { eyebrow, title, intro, methodsCardTitle, methodPoints, cta } = ABOUT_DIFFERENTIATOR;

  return (
    <section
      className="section about-differentiator"
      id="how-kalpam-works"
      aria-labelledby="about-differentiator-heading"
    >
      <Container>
        <div className="about-story__grid">
          <div className="about-story__narrative">
            <header className="about-story__header">
              <p className="about-story__eyebrow">{eyebrow}</p>
              <h2 id="about-differentiator-heading" className="about-story__title">
                {title}
              </h2>
              <p className="about-story__lead">{intro}</p>
            </header>
            <div className="section-cta">
              <CtaLink href={cta.href} variant="primary">
                {cta.label}
              </CtaLink>
            </div>
          </div>

          <aside className="about-story__aside" aria-label={methodsCardTitle}>
            <div className="about-story__card">
              <h3 className="about-story__card-title">{methodsCardTitle}</h3>
              <ul className="about-story__points">
                {methodPoints.map((point) => (
                  <li key={point.title} className="about-story__point">
                    <span className="about-story__point-icon" aria-hidden="true">
                      ✓
                    </span>
                    <span className="about-story__point-body">
                      <strong className="about-story__point-title">{point.title}</strong>
                      <span className="about-story__point-text">{point.text}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
