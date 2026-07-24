import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { ABOUT_VALUES } from "@/lib/about-content";

export function ValuesAbout() {
  const { eyebrow, title, intro, items, cta } = ABOUT_VALUES;

  return (
    <section
      className="section about-values"
      id="values"
      aria-labelledby="about-values-heading"
    >
      <Container>
        <header className="about-values__header">
          <p className="about-story__eyebrow">{eyebrow}</p>
          <h2 id="about-values-heading" className="about-story__title">
            {title}
          </h2>
          <p className="about-story__lead">{intro}</p>
        </header>
        <ul className="about-values__grid">
          {items.map((item) => (
            <li key={item.title} className="about-values__card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
        <div className="section-cta">
          <CtaLink href={cta.href} variant="primary">
            {cta.label}
          </CtaLink>
        </div>
      </Container>
    </section>
  );
}
