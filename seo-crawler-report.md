# SEO and crawler settings report

## Project summary

- **Base URL:** `NEXT_PUBLIC_SITE_URL` (fallback: `https://kalpam.vercel.app`)
- **Source:** `development/info.md` + built routes
- **AI crawler policy:** Allow (default)

## Public routes included

| Page | Route | Canonical | In sitemap |
| --- | --- | --- | --- |
| Home | `/` | yes | yes |
| About | `/about/` | yes | yes |
| Services | `/services/` | yes | yes |
| Process | `/process/` | yes | yes |
| Contact | `/contact/` | yes | yes |

## Deliverables checklist

- [x] Sitemap generated (`src/app/sitemap.ts` → `/sitemap.xml`)
- [x] Canonical URL per public page (`src/lib/seo-metadata.ts`)
- [x] `robots.ts` → `/robots.txt` with sitemap reference
- [x] AI crawler allow rules (GPTBot, ClaudeBot, etc.)
- [x] `metadataBase` + Open Graph / Twitter on all pages
- [x] Organization + WebSite JSON-LD (`SiteJsonLd.tsx`)
- [x] `trailingSlash: true` aligned with nav links
- [x] `env.example` for production URL and verification tokens

## AI crawler policy

- [x] `GPTBot` allowed
- [x] `ChatGPT-User` allowed
- [x] `Google-Extended` allowed
- [x] `ClaudeBot` allowed
- [x] `PerplexityBot` allowed
- [x] `Applebot-Extended` allowed
- [x] No global `Disallow: /` for public pages

## Validation (after deploy)

- [ ] Set `NEXT_PUBLIC_SITE_URL` to live HTTPS domain on Vercel
- [ ] `/robots.txt` and `/sitemap.xml` load on production
- [ ] View page source: canonical link + JSON-LD present
- [ ] Submit sitemap in Google Search Console and Bing Webmaster Tools
- [ ] Add `GOOGLE_SITE_VERIFICATION` / `BING_SITE_VERIFICATION` when tokens are issued

## Pending / blockers

- [ ] Client production domain confirmed (update fallback in `src/lib/site-url.ts` if different)
- [ ] Custom OG image at `public/images/shared/og-default.webp` (optional; referenced in metadata)
- [ ] GSC / Bing access — client TBD (`development/info.md`)

SEO and crawler settings added. AI crawlers allowed by default unless docs required otherwise.
