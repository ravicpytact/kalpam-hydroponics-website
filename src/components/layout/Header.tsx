"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { HEADER_CTA, PRIMARY_NAV } from "@/lib/nav";
import { isNavActive, normalizePath } from "@/lib/nav-utils";
import { SITE_CONTACT } from "@/lib/site-contact";
import { SITE_LOGO } from "@/lib/site-brand";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { phone, email, serviceArea, whatsapp } = SITE_CONTACT;

  const isHome = normalizePath(pathname) === "/";
  const isOverlay = isHome && !scrolled && !open;

  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    if (open) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  const headerClass = [
    "site-header",
    isOverlay ? "site-header--overlay" : "",
    scrolled ? "site-header--scrolled" : "",
    open ? "site-header--menu-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const whatsappHref = whatsapp
    ? `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(whatsapp.openingMessage)}`
    : null;

  return (
    <header className={headerClass}>
      <Container>
        <div className="site-header__inner">
          <Link href="/" className="site-header__brand" onClick={closeMenu}>
            <Image
              src={SITE_LOGO.src}
              alt=""
              width={SITE_LOGO.width}
              height={SITE_LOGO.height}
              className="site-header__logo"
              priority
            />
            <span className="site-header__brand-text">
              <span className="site-header__brand-name">KALPAM LANDSCAPING</span>
              <span className="site-header__brand-region">{serviceArea}</span>
            </span>
          </Link>

          <div className="site-header__desktop">
            <div className="site-header__pill">
              <nav className="site-header__nav" aria-label="Primary">
                <ul>
                  {PRIMARY_NAV.map((item) => {
                    const active = isNavActive(pathname, item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={active ? "is-active" : undefined}
                          aria-current={active ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="site-header__actions">
                {!isOverlay ? (
                  <a
                    className="site-header__phone"
                    href={`tel:${phone.tel}`}
                    aria-label={`Call ${phone.display}`}
                  >
                    <span className="site-header__phone-icon" aria-hidden="true">
                      ☎
                    </span>
                    <span className="site-header__phone-label">{phone.display}</span>
                  </a>
                ) : null}
                {whatsappHref ? (
                  <CtaLink href={whatsappHref} variant="secondary">
                    Chat on WhatsApp
                  </CtaLink>
                ) : null}
                <CtaLink href={HEADER_CTA.href} variant="primary">
                  {HEADER_CTA.label}
                </CtaLink>
              </div>
            </div>
          </div>

          <div className="site-header__mobile-bar">
            {!isOverlay ? (
              <a
                className="site-header__phone-btn"
                href={`tel:${phone.tel}`}
                aria-label={`Call ${phone.display}`}
              >
                <span aria-hidden="true">☎</span>
              </a>
            ) : null}
            <button
              type="button"
              className="site-header__menu-btn"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span aria-hidden="true">{open ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <button
          type="button"
          className="site-header__backdrop"
          aria-label="Close menu"
          onClick={closeMenu}
        />
      ) : null}

      <div
        id="mobile-nav"
        className={`site-header__panel${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <Container>
          <div className="site-header__panel-head">
            <p className="site-header__panel-title">Menu</p>
            <button
              type="button"
              className="site-header__panel-close"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              ✕
            </button>
          </div>

          <nav aria-label="Mobile">
            <ul>
              {PRIMARY_NAV.map((item) => {
                const active = isNavActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={active ? "is-active" : undefined}
                      aria-current={active ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="site-header__panel-actions">
            <CtaLink href={HEADER_CTA.href} variant="primary" onClick={closeMenu}>
              {HEADER_CTA.label}
            </CtaLink>
            {whatsappHref ? (
              <CtaLink href={whatsappHref} variant="secondary" onClick={closeMenu}>
                Chat on WhatsApp
              </CtaLink>
            ) : null}
          </div>

          <div className="site-header__panel-contact">
            <a href={`tel:${phone.tel}`}>{phone.display}</a>
            <a href={`mailto:${email.mailto}`}>{email.display}</a>
          </div>
        </Container>
      </div>
    </header>
  );
}
