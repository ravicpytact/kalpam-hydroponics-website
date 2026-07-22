import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { HOME_SERVICES } from "@/lib/home-content";

type ServiceCard = (typeof HOME_SERVICES.cards)[number];

function ServiceCardItem({ card }: { card: ServiceCard }) {
  return (
    <li className="home-services__card">
      <Link href={card.href} className="home-services__card-link">
        <div className="home-services__card-media">
          <Image
            src={card.image.src}
            alt={card.image.alt}
            width={640}
            height={480}
            sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
          />
        </div>
        <h3>{card.title}</h3>
        <p>
          <strong>Problem:</strong> {card.problem}
        </p>
        <p>
          <strong>Solution:</strong> {card.solution}
        </p>
        <p>
          <strong>Result:</strong> {card.result}
        </p>
      </Link>
    </li>
  );
}

export function ServicesOverviewHome() {
  const topRow = HOME_SERVICES.cards.slice(0, 3);
  const bottomRow = HOME_SERVICES.cards.slice(3);

  return (
    <Section className="home-services" title={HOME_SERVICES.title}>
      <Container>
        <p className="home-services__intro">{HOME_SERVICES.intro}</p>
        <div className="home-services__layout">
          <ul className="home-services__grid home-services__grid--top">
            {topRow.map((card) => (
              <ServiceCardItem key={card.title} card={card} />
            ))}
          </ul>
          <ul className="home-services__grid home-services__grid--bottom">
            {bottomRow.map((card) => (
              <ServiceCardItem key={card.title} card={card} />
            ))}
          </ul>
        </div>
        <div className="home-services__cta">
          <CtaLink href={HOME_SERVICES.cta.href} variant="primary">
            {HOME_SERVICES.cta.label}
          </CtaLink>
        </div>
      </Container>
    </Section>
  );
}
