import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { PROCESS_JOURNEY } from "@/lib/process-content";

export function ProcessJourney() {
  const { title, caption, phases, crossLinks } = PROCESS_JOURNEY;

  return (
    <section
      className="section process-journey"
      id="process-journey"
      aria-labelledby="process-journey-heading"
    >
      <Container>
        <header className="process-journey__header">
          <h2 id="process-journey-heading" className="about-story__title">
            {title}
          </h2>
          <p className="about-story__lead">{caption}</p>
        </header>

        <ol className="process-journey__phases" aria-label="Process phases">
          {phases.map((phase, index) => (
            <li key={phase.id} className="process-journey__phase">
              <span className="process-journey__phase-marker">{index + 1}</span>
              <span className="process-journey__phase-label">{phase.label}</span>
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
