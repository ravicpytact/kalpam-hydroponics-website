import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ProcessJourneyIcon } from "@/components/sections/process/ProcessJourneyIcon";
import { PROCESS_JOURNEY } from "@/lib/process-content";

export function ProcessJourney() {
  const { eyebrow, title, caption, phases, crossLinks } = PROCESS_JOURNEY;

  return (
    <section
      className="section process-journey"
      id="process-journey"
      aria-labelledby="process-journey-heading"
    >
      <Container>
        <header className="process-journey__header">
          <p className="about-story__eyebrow">{eyebrow}</p>
          <h2 id="process-journey-heading" className="about-story__title">
            {title}
          </h2>
          <p className="about-story__lead">{caption}</p>
        </header>

        <ol className="process-journey__stepper" aria-label="Process phases">
          {phases.map((phase, index) => (
            <li key={phase.id} className="process-journey__step">
              <article className="process-journey__card">
                <div className="process-journey__icon-ring">
                  <ProcessJourneyIcon phaseId={phase.id} />
                </div>
                <p className="process-journey__step-num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="process-journey__label">{phase.label}</h3>
                <p className="process-journey__desc">{phase.description}</p>
              </article>
            </li>
          ))}
        </ol>

        <nav className="process-journey__links" aria-label="Related pages">
          {crossLinks.map((link) => (
            <Link key={link.href} href={link.href} className="process-journey__link">
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </section>
  );
}
