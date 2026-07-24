import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { Section } from "@/components/ui/Section";
import { ABOUT_TEAM } from "@/lib/about-content";

export function TeamAbout() {
  const { title, intro, roles, image, mediaNote, cta } = ABOUT_TEAM;

  return (
    <Section className="about-team" title={title}>
      <Container>
        <div className="home-credibility__main">
          <figure className="home-credibility__media">
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(max-width: 899px) 100vw, 55vw"
            />
          </figure>
          <div className="about-team__copy">
            <p>{intro}</p>
            <ul className="about-list">
              {roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
            <p className="about-team__note">{mediaNote}</p>
            <CtaLink href={cta.href} variant="secondary">
              {cta.label}
            </CtaLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
