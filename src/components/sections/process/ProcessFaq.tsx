import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { PROCESS_FAQ } from "@/lib/process-content";

export function ProcessFaq() {
  const { eyebrow, title, reminder, items, clientNote, cta } = PROCESS_FAQ;

  return (
    <section
      className="section process-faq"
      id="process-faq"
      aria-labelledby="process-faq-heading"
    >
      <Container>
        <header className="process-faq__header">
          <p className="about-story__eyebrow">{eyebrow}</p>
          <h2 id="process-faq-heading" className="about-story__title">
            {title}
          </h2>
          <p className="about-story__lead">{reminder}</p>
        </header>

        <div className="process-faq__list">
          {items.map((item) => (
            <details key={item.question} className="process-faq__item">
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>

        <p className="about-story__note process-faq__note" role="note">
          {clientNote}
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
