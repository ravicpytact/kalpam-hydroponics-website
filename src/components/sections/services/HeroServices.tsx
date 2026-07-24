import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { HeroServicesRotator } from "@/components/sections/services/HeroServicesRotator";
import {
  SERVICES_HERO,
  SERVICES_HERO_SLIDES,
} from "@/lib/services-content";
import { SITE_CONTACT } from "@/lib/site-contact";

export function HeroServices() {
  const { whatsapp } = SITE_CONTACT;
  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.openingMessage)}`
    : null;

  return (
    <section className="home-hero services-hero" aria-labelledby="services-hero-heading">
      <HeroServicesRotator
        slides={SERVICES_HERO_SLIDES}
        intervalMs={SERVICES_HERO.intervalMs}
        fadeMs={SERVICES_HERO.fadeMs}
      />
      <div className="home-hero__overlay">
        <Container>
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">{SERVICES_HERO.eyebrow}</p>
            <h1 id="services-hero-heading">{SERVICES_HERO.title}</h1>
            <p className="home-hero__support">{SERVICES_HERO.body}</p>
            <div className="home-hero__actions">
              <CtaLink href={SERVICES_HERO.primaryCta.href} variant="primary">
                {SERVICES_HERO.primaryCta.label}
              </CtaLink>
              {whatsappHref ? (
                <CtaLink href={whatsappHref} variant="ghost" className="home-hero__whatsapp">
                  Chat on WhatsApp
                </CtaLink>
              ) : null}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
