import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { HOME_CREDIBILITY } from "@/lib/home-content";
import { HEADER_CTA, PRIMARY_NAV } from "@/lib/nav";
import { SITE_CONTACT } from "@/lib/site-contact";

export function Footer() {
  const { phone, email, address, serviceArea, whatsapp, privacyUrl } = SITE_CONTACT;
  const { logos } = HOME_CREDIBILITY;
  const year = new Date().getFullYear();

  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.openingMessage)}`
    : null;

  return (
    <footer className="site-footer">
      <div className="site-footer__decor" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="site-footer__decor-img site-footer__decor-img--banyan"
          src="/images/shared/footer/banyan-branch-shadow.webp"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>

      <Container className="site-footer__content">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <p className="site-footer__name">KALPAM LANDSCAPING</p>
            <p className="site-footer__tagline">
              Professional landscaping and garden maintenance in {serviceArea}.
            </p>
            <Link className="site-footer__text-cta" href={HEADER_CTA.href}>
              {HEADER_CTA.label} →
            </Link>
          </div>

          <div className="site-footer__reach">
            <p className="site-footer__heading">Get in touch</p>
            <a className="site-footer__phone-card" href={`tel:${phone.tel}`}>
              <span className="site-footer__phone-number">{phone.display}</span>
              <span className="site-footer__phone-hint">Tap to call</span>
            </a>
            <ul className="site-footer__reach-list">
              <li>
                <span className="site-footer__label">Email</span>
                <a href={`mailto:${email.mailto}`}>{email.display}</a>
              </li>
              {whatsapp && whatsappHref ? (
                <li>
                  <span className="site-footer__label">WhatsApp</span>
                  <a href={whatsappHref}>{whatsapp.display}</a>
                </li>
              ) : null}
            </ul>
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

          <div className="site-footer__visit">
            <p className="site-footer__heading">Visit us</p>
            <ul className="site-footer__visit-list">
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

        {/* DUMMY DATA — fictional logos until client supplies approved assets */}
        <div className="site-footer__trust" aria-label="Client and partner logos">
          <p className="site-footer__trust-label">{logos.label}</p>
          <ul className="site-footer__trust-logos">
            {logos.items.map((logo) => (
              <li key={logo.name}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={48}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">© {year} KALPAM LANDSCAPING</p>
          {privacyUrl ? (
            <div className="site-footer__bottom-links">
              <Link href={privacyUrl}>Privacy policy</Link>
            </div>
          ) : null}
        </div>
      </Container>
    </footer>
  );
}
