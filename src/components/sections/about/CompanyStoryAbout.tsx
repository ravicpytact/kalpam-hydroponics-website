import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { ABOUT_COMPANY_STORY } from "@/lib/about-content";

export function CompanyStoryAbout() {
  const {
    eyebrow,
    title,
    lead,
    focus,
    focusPoints,
    glanceTitle,
    focusListTitle,
    serviceArea,
    originNote,
    cta,
  } = ABOUT_COMPANY_STORY;

  return (
    <section className="section about-story" id="company-story" aria-labelledby="about-story-heading">
      <Container>
        <div className="about-story__grid">
          <div className="about-story__narrative">
            <header className="about-story__header">
              <p className="about-story__eyebrow">{eyebrow}</p>
              <h2 id="about-story-heading" className="about-story__title">
                {title}
              </h2>
              <p className="about-story__lead">{lead}</p>
            </header>
            <p>{focus}</p>
            <div className="section-cta">
              <CtaLink href={cta.href} variant="primary">
                {cta.label}
              </CtaLink>
            </div>
          </div>

          <aside className="about-story__aside" aria-label={glanceTitle}>
            <div className="about-story__card">
              <h3 className="about-story__card-title">{glanceTitle}</h3>
              <dl className="about-story__facts">
                <div className="about-story__location">
                  <span className="about-story__location-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11Z"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinejoin="round"
                      />
                      <circle cx="12" cy="10" r="2.25" fill="currentColor" />
                    </svg>
                  </span>
                  <div className="about-story__location-text">
                    <dt>{serviceArea.label}</dt>
                    <dd>{serviceArea.value}</dd>
                  </div>
                </div>
              </dl>
              <h4 className="about-story__card-subtitle">{focusListTitle}</h4>
              <ul className="about-story__points">
                {focusPoints.map((point) => (
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
        <p className="about-story__note" role="note">
          {originNote}
        </p>
      </Container>
    </section>
  );
}
