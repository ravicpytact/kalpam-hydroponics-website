import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { HEADER_CTA, PRIMARY_NAV } from "@/lib/nav";
import { SITE_CONTACT } from "@/lib/site-contact";

export function Footer() {
  const { phone, email, address, serviceArea, whatsapp, privacyUrl } = SITE_CONTACT;
  const year = new Date().getFullYear();

  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.openingMessage)}`
    : null;

  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <p className="site-footer__name">KALPAM LANDSCAPING</p>
            <p className="site-footer__tagline">
              Professional landscaping and garden maintenance in {serviceArea}.
            </p>
            <div className="site-footer__brand-actions">
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

          <nav className="site-footer__nav" aria-label="Footer">
            <p className="site-footer__heading">Pages</p>
            <ul>
              {PRIMARY_NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__contact">
            <p className="site-footer__heading">Contact</p>
            <ul className="site-footer__contact-list">
              <li>
                <span className="site-footer__label">Phone</span>
                <a href={`tel:${phone.tel}`}>{phone.display}</a>
              </li>
              <li>
                <span className="site-footer__label">Email</span>
                <a href={`mailto:${email.mailto}`}>{email.display}</a>
              </li>
              {whatsapp ? (
                <li>
                  <span className="site-footer__label">WhatsApp</span>
                  <a href={whatsappHref!}>{whatsapp.display}</a>
                </li>
              ) : null}
              <li>
                <span className="site-footer__label">Address</span>
                <span>{address.line}</span>
              </li>
              <li>
                <span className="site-footer__label">Service area</span>
                <span>{serviceArea}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">
            © {year} KALPAM LANDSCAPING
          </p>
          {privacyUrl ? (
            <Link href={privacyUrl}>Privacy policy</Link>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
