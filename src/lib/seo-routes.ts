/** Public marketing routes only — matches primary nav + home (info.md five pages). */
export const PUBLIC_SITEMAP_PATHS = [
  "/",
  "/about/",
  "/services/",
  "/process/",
  "/contact/",
] as const;

export type PublicSitemapPath = (typeof PUBLIC_SITEMAP_PATHS)[number];
