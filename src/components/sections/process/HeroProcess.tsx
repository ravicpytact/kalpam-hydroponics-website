import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { PROCESS_HERO } from "@/lib/process-content";
import { SITE_CONTACT } from "@/lib/site-contact";

export function HeroProcess() {
  const { whatsapp } = SITE_CONTACT;
  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.openingMessage)}`
    : null;

  return (
    <section className="home-hero process-hero" aria-labelledby="process-hero-heading">
      <div className="home-hero__media">
        <Image
          src={PROCESS_HERO.image.src}
          alt={PROCESS_HERO.image.alt}
          fill
          priority
          sizes="100vw"
          className="home-hero__img"
        />
      </div>
      <div className="home-hero__overlay">
        <Container>
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">{PROCESS_HERO.eyebrow}</p>
            <h1 id="process-hero-heading">{PROCESS_HERO.title}</h1>
            <p className="home-hero__support">{PROCESS_HERO.support}</p>
            <div className="home-hero__actions">
              <CtaLink href={PROCESS_HERO.primaryCta.href} variant="primary">
                {PROCESS_HERO.primaryCta.label}
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
