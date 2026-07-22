import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { HOME_SCIENTIFIC } from "@/lib/home-content";

export function ScientificApproachHome() {
  return (
    <Section className="home-scientific" title={HOME_SCIENTIFIC.title}>
      <Container>
        <div className="home-scientific__grid">
          <div className="home-scientific__media">
            <Image
              src={HOME_SCIENTIFIC.image.src}
              alt={HOME_SCIENTIFIC.image.alt}
              width={960}
              height={720}
              sizes="(max-width: 900px) 100vw, 48vw"
            />
          </div>
          <div className="home-scientific__copy">
            <p>{HOME_SCIENTIFIC.intro}</p>
            <ol className="home-scientific__steps">
              {HOME_SCIENTIFIC.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            <CtaLink href={HOME_SCIENTIFIC.cta.href} variant="primary">
              {HOME_SCIENTIFIC.cta.label}
            </CtaLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
