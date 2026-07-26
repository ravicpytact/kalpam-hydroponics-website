/** Production site origin — set `NEXT_PUBLIC_SITE_URL` on Vercel (no trailing slash). */
const FALLBACK_SITE_URL = "https://kalpam.vercel.app";

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    return raw.replace(/\/+$/, "");
  }
  return FALLBACK_SITE_URL;
}

/** Build absolute URL for a public path (leading slash; trailing slash when not root). */
export function absoluteUrl(pathname: string): string {
  const base = getSiteUrl();
  if (pathname === "/" || pathname === "") {
    return `${base}/`;
  }
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const normalized = path.endsWith("/") ? path : `${path}/`;
  return `${base}${normalized}`;
}
