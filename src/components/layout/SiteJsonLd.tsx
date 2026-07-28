import { SITE_LOGO } from "@/lib/site-brand";
import { SITE_CONTACT } from "@/lib/site-contact";
import { getSiteUrl } from "@/lib/site-url";

export function SiteJsonLd() {
  const siteUrl = getSiteUrl();
  const logoUrl = `${siteUrl}${SITE_LOGO.src}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "KALPAM LANDSCAPING",
        url: siteUrl,
        logo: logoUrl,
        email: SITE_CONTACT.email.mailto,
        telephone: SITE_CONTACT.phone.tel,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Surat",
          addressRegion: "Gujarat",
          addressCountry: "IN",
          postalCode: SITE_CONTACT.address.postalCode,
          streetAddress: SITE_CONTACT.address.line,
        },
        areaServed: SITE_CONTACT.serviceArea,
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "KALPAM LANDSCAPING",
        inLanguage: "en-IN",
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
