import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { ABOUT_HERO } from "@/lib/about-content";
import { SITE_CONTACT } from "@/lib/site-contact";

export function HeroAbout() {
  const { whatsapp } = SITE_CONTACT;
  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.openingMessage)}`
    : null;

  return (
    <section className="home-hero" aria-labelledby="about-hero-heading">
      <div className="home-hero__media">
        <Image
          src={ABOUT_HERO.image.src}
          alt={ABOUT_HERO.image.alt}
          fill
          priority
          sizes="100vw"
          className="home-hero__img"
        />
      </div>
      <div className="home-hero__overlay">
        <Container>
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">{ABOUT_HERO.eyebrow}</p>
            <h1 id="about-hero-heading">
              {ABOUT_HERO.headline.lead}{" "}
              <span className="home-hero__headline-line">{ABOUT_HERO.headline.line}</span>
            </h1>
            <p className="home-hero__support">{ABOUT_HERO.support}</p>
            <div className="home-hero__actions">
              <CtaLink href={ABOUT_HERO.primaryCta.href} variant="primary">
                {ABOUT_HERO.primaryCta.label}
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
