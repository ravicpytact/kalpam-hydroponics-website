import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { CONTACT_FORM, CONTACT_HERO } from "@/lib/contact-content";
import { SITE_CONTACT } from "@/lib/site-contact";

export function HeroContact() {
  const { whatsapp } = SITE_CONTACT;
  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.openingMessage)}`
    : null;

  return (
    <section className="home-hero contact-hero" aria-labelledby="contact-hero-heading">
      <div className="home-hero__media">
        <Image
          src={CONTACT_HERO.image.src}
          alt={CONTACT_HERO.image.alt}
          fill
          priority
          sizes="100vw"
          className="home-hero__img"
        />
      </div>
      <div className="home-hero__overlay">
        <Container>
          <div className="home-hero__content">
            <p className="home-hero__eyebrow">{CONTACT_HERO.eyebrow}</p>
            <h1 id="contact-hero-heading">{CONTACT_HERO.title}</h1>
            <p className="home-hero__support">{CONTACT_HERO.support}</p>
            <div className="home-hero__actions">
              {whatsappHref ? (
                <CtaLink href={whatsappHref} variant="primary">
                  {CONTACT_HERO.whatsappCta.label}
                </CtaLink>
              ) : (
                <CtaLink href={CONTACT_HERO.formAnchor} variant="primary">
                  {CONTACT_FORM.submitLabel}
                </CtaLink>
              )}
              <Link
                href={CONTACT_HERO.formAnchor}
                className="cta-link cta-link--ghost home-hero__whatsapp"
              >
                {CONTACT_HERO.formAnchorLabel}
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
