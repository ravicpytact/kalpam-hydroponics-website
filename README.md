# KALPAM LANDSCAPING — Website

Next.js App Router scaffold for the Website Foundation package.

## Install and run

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |

## Routes (from `info.md`)

| Page | URL | File |
| --- | --- | --- |
| Home | `/` | `src/app/page.tsx` |
| About | `/about/` | `src/app/about/page.tsx` |
| Services | `/services/` | `src/app/services/page.tsx` |
| Process | `/process/` | `src/app/process/page.tsx` |
| Contact | `/contact/` | `src/app/contact/page.tsx` |

## Structure

```
website/
├── public/images|icons|fonts
├── src/app/                 # routes only
├── src/components/layout/   # Header, Footer, Container
├── src/components/ui/       # Button, Section, CtaLink
├── src/components/sections/ # filled in build stages
├── src/lib/
└── src/types/
```

## Stage status

- Project structure: done (stubs only)
- Theme / base layout: next
- Real content, images, form email, SEO: later stages
