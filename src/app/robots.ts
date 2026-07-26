import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";

const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "ClaudeBot",
  "PerplexityBot",
  "Applebot-Extended",
] as const;

export default function robots(): MetadataRoute.Robots {
  const sitemapUrl = `${getSiteUrl()}/sitemap.xml`;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...AI_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
      })),
    ],
    sitemap: sitemapUrl,
  };
}
