import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { PROCESS_STEPS } from "@/lib/process-content";

type Step = (typeof PROCESS_STEPS)[number];

type Props = {
  step: Step;
  reverse?: boolean;
};

function ProcessStepBlock({ step, reverse = false }: Props) {
  const headingId = `${step.id}-heading`;

  const narrative = (
    <div className="about-story__narrative">
      <header className="about-story__header">
        <p className="about-story__eyebrow">Step {step.step}</p>
        <h2 id={headingId} className="about-story__title">
          {step.title}
        </h2>
        <p className="about-story__lead">{step.summary}</p>
      </header>
      <div className="section-cta">
        <CtaLink href={step.cta.href} variant="primary">
          {step.cta.label}
        </CtaLink>
      </div>
    </div>
  );

  const aside = (
    <aside className="about-story__aside" aria-label={step.cardTitle}>
      <div className="about-story__card">
        <h3 className="about-story__card-title">{step.cardTitle}</h3>
        <ul className="about-story__points">
          {step.points.map((point) => (
            <li key={point.slice(0, 48)} className="about-story__point">
              <span className="about-story__point-icon" aria-hidden="true">
                ✓
              </span>
              <span className="about-story__point-body">
                <span className="about-story__point-text">{point}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );

  return (
    <section
      className={`section process-step${step.step % 2 === 0 ? " process-step--alt" : ""}`}
      id={step.id}
      aria-labelledby={headingId}
    >
      <Container>
        <div
          className={`about-story__grid process-step__grid${reverse ? " process-step__grid--reverse" : ""}`}
        >
          {reverse ? (
            <>
              {aside}
              {narrative}
            </>
          ) : (
            <>
              {narrative}
              {aside}
            </>
          )}
        </div>
        {"termsNote" in step && step.termsNote ? (
          <p className="about-story__note process-step__terms" role="note">
            {step.termsNote}
          </p>
        ) : null}
      </Container>
    </section>
  );
}

export function ProcessSteps() {
  return (
    <>
      {PROCESS_STEPS.map((step) => (
        <ProcessStepBlock key={step.id} step={step} reverse={step.step % 2 === 0} />
      ))}
    </>
  );
}
