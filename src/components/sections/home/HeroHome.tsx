import { Container } from "@/components/layout/Container";
import { HeroHomeMedia } from "@/components/sections/home/HeroHomeMedia";
import { CtaLink } from "@/components/ui/CtaLink";
import { HOME_HERO } from "@/lib/home-content";
import { SITE_CONTACT } from "@/lib/site-contact";

export function HeroHome() {
  const { whatsapp } = SITE_CONTACT;
  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.openingMessage)}`
    : null;

  return (
    <section className="home-hero" aria-labelledby="home-hero-heading">
      <div className="home-hero__media">
        <HeroHomeMedia src={HOME_HERO.video.src} />
      </div>
      <div className="home-hero__overlay">
        <Container>
          <div className="home-hero__content">
            <h1 id="home-hero-heading">
              {HOME_HERO.headline.lead}{" "}
              <span className="home-hero__headline-line">{HOME_HERO.headline.line}</span>
            </h1>
            <p className="home-hero__support">{HOME_HERO.support}</p>
            <div className="home-hero__actions">
              <CtaLink href={HOME_HERO.primaryCta.href} variant="primary">
                {HOME_HERO.primaryCta.label}
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
