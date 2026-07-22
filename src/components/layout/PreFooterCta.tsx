import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { HEADER_CTA } from "@/lib/nav";
import { SITE_CONTACT } from "@/lib/site-contact";

export function PreFooterCta() {
  const { whatsapp } = SITE_CONTACT;
  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.openingMessage)}`
    : null;

  return (
    <section className="pre-footer-cta" aria-labelledby="pre-footer-cta-heading">
      <Container>
        <div className="pre-footer-cta__inner">
          <div className="pre-footer-cta__copy">
            <h2 id="pre-footer-cta-heading" className="pre-footer-cta__title">
              Ready to improve your outdoor or indoor green space?
            </h2>
            <p className="pre-footer-cta__text">
              Request a site visit. We assess conditions before we recommend.
            </p>
          </div>
          <div className="pre-footer-cta__actions">
            <CtaLink href={HEADER_CTA.href} variant="primary">
              {HEADER_CTA.label}
            </CtaLink>
            {whatsappHref ? (
              <CtaLink href={whatsappHref} variant="secondary">
                Chat on WhatsApp
              </CtaLink>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
