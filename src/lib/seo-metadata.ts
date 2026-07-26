import type { Metadata } from "next";
import { absoluteUrl, getSiteUrl } from "@/lib/site-url";

export const SITE_NAME = "KALPAM LANDSCAPING";

export const DEFAULT_DESCRIPTION =
  "Trusted professional landscaping and garden maintenance for homes, offices, farmhouses, residential societies, commercial properties, industries, and public-sector environments.";

const OG_IMAGE = "/images/shared/og-default.webp";

function ogTitle(pageTitle?: string): string {
  return pageTitle ? `${pageTitle} | ${SITE_NAME}` : SITE_NAME;
}

/** Per-page metadata with canonical + Open Graph + Twitter. */
export function pageMetadata(options: {
  pathname: PublicPathname;
  title?: string;
  description: string;
}): Metadata {
  const canonical = absoluteUrl(options.pathname);
  const title = ogTitle(options.title);

  return {
    ...(options.title ? { title: options.title } : {}),
    description: options.description,
    alternates: { canonical },
    openGraph: {
      title,
      description: options.description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [{ url: OG_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: options.description,
      images: [OG_IMAGE],
    },
  };
}

export type PublicPathname = "/" | "/about/" | "/services/" | "/process/" | "/contact/";

export function rootMetadata(): Metadata {
  const canonical = absoluteUrl("/");
  const verification: Metadata["verification"] = {};

  if (process.env.GOOGLE_SITE_VERIFICATION) {
    verification.google = process.env.GOOGLE_SITE_VERIFICATION;
  }
  if (process.env.BING_SITE_VERIFICATION) {
    verification.other = {
      "msvalidate.01": process.env.BING_SITE_VERIFICATION,
    };
  }

  return {
    metadataBase: new URL(getSiteUrl()),
    title: {
      default: SITE_NAME,
      template: `%s | ${SITE_NAME}`,
    },
    description: DEFAULT_DESCRIPTION,
    alternates: { canonical },
    openGraph: {
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
      images: [{ url: OG_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      images: [OG_IMAGE],
    },
    ...(Object.keys(verification).length > 0 ? { verification } : {}),
  };
}
