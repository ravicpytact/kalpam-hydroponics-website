import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { ClientLogosMarquee } from "@/components/sections/home/ClientLogosMarquee";
import { HOME_CREDIBILITY } from "@/lib/home-content";

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="home-credibility__stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={
            index < rating ? "home-credibility__star is-filled" : "home-credibility__star"
          }
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </span>
  );
}

export function CredibilityHome() {
  const { featuredReview, logos } = HOME_CREDIBILITY;

  return (
    <Section className="home-credibility">
      <Container>
        <header className="home-credibility__header">
          <p className="home-credibility__eyebrow">{HOME_CREDIBILITY.eyebrow}</p>
          <h2 className="home-credibility__title">{HOME_CREDIBILITY.title}</h2>
          <p className="home-credibility__lead">{HOME_CREDIBILITY.lead}</p>
        </header>

        <ul className="home-credibility__metrics" aria-label="Trust highlights">
          {HOME_CREDIBILITY.metrics.map((metric) => (
            <li key={metric.id} className="home-credibility__metric">
              <p className="home-credibility__metric-value">
                {metric.id === "google-rating" ? (
                  <>
                    <span aria-hidden="true">★ </span>
                    {metric.value}
                  </>
                ) : (
                  metric.value
                )}
              </p>
              <p className="home-credibility__metric-label">{metric.label}</p>
              {"detail" in metric && metric.detail ? (
                <p className="home-credibility__metric-detail">{metric.detail}</p>
              ) : null}
            </li>
          ))}
        </ul>

        <div className="home-credibility__main">
          <figure className="home-credibility__media">
            <Image
              src={HOME_CREDIBILITY.image.src}
              alt={HOME_CREDIBILITY.image.alt}
              width={960}
              height={720}
              sizes="(max-width: 899px) 100vw, 55vw"
            />
          </figure>

          <div className="home-credibility__proof">
            <ul className="home-credibility__proof-cards">
              {HOME_CREDIBILITY.proofCards.map((card) => (
                <li key={card.title} className="home-credibility__proof-card">
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </li>
              ))}
            </ul>

            <blockquote className="home-credibility__review">
              <StarRating rating={featuredReview.rating} />
              <p>&ldquo;{featuredReview.quote}&rdquo;</p>
              <footer>
                {featuredReview.author}
                {featuredReview.location ? `, ${featuredReview.location}` : ""}
                {" · "}
                {featuredReview.source}
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="home-credibility__logos">
          <p className="home-credibility__logos-label" id="home-credibility-logos-label">
            {logos.label}
          </p>
          <ClientLogosMarquee
            items={logos.items}
            label={logos.label}
            secondsPerItem={2}
            variant="credibility"
          />
        </div>

        <div className="home-credibility__cta">
          <CtaLink href={HOME_CREDIBILITY.cta.href} variant="secondary">
            {HOME_CREDIBILITY.cta.label}
          </CtaLink>
        </div>
      </Container>
    </Section>
  );
}
