# Image asset map

Drop new files in `development/img/`, then copy into these paths (or ask the agent to place them). Prefer `.webp`.

## Available now

| Source (`img/`) | Project path | Used on |
| --- | --- | --- |
| `IMG-01.webp` | `home/hero.webp` | Home hero |
| `IMG-04.webp` | `home/scientific-assessment.webp` | Home scientific approach |
| `IMG-05.webp` | `services/farmhouse.webp` | Home services card |
| `IMG-06.webp` | `services/indoor.webp` | Home services card |
| `IMG-07.webp` | `services/vertical.webp` | Home services card |
| `IMG-08.webp` | `services/industrial.webp` | Home services card |
| `IMG-09.webp` | `services/amc.webp` | Home services card |
| `IMG-09.webp` (same as card) | `services/amc-hero.webp` | Services AMC block + hero slide (IMG-16 was incorrect; use card asset until client supplies a distinct hero) |
| `IMG-10.webp` | `home/team-credibility.webp` + `about/team.webp` | Home credibility / About |
| `IMG-11.webp` | `about/story.webp` | About company story |
| `IMG-12.webp` | `services/farmhouse-hero.webp` | Services page |
| `IMG-13.webp` | `services/indoor-hero.webp` | Services page |
| `IMG-14.webp` | `services/vertical-hero.webp` | Services page |
| `IMG-15.webp` | `services/industrial-hero.webp` | Services page |
| `IMG-17.webp` | `process/overview.webp` | Process page |
| `IMG-18.webp` | `process/icons.webp` | Optional reference art; journey UI uses **Lucide** icons in code |
| `IMG-19.webp` | `contact/intro.webp` | Contact page |
| `IMG-20.webp` | `shared/og-default.webp` | Open Graph |
| `IMG-21.webp` | `shared/favicon.webp` | Favicon |
| `IMG-24.webp` | `shared/footer/banyan-branch-shadow.webp` | Footer decor |

## Placeholders (replace when client provides)

| Slot | Placeholder path | Replace with |
| --- | --- | --- |
| IMG-02 Logos | `shared/logos/kalpam-logo.png` | Header brand (client logo) |
| Before/After dummy pairs | `home/before-after/dummy-0{1-4}-before.webp` + `-after.webp` | Home before/after compare sliders |
| Google reviews | copy TBD | Approved review excerpts (not image files) |

## Folder layout

```
public/images/
  home/
  about/
  services/
  process/
  contact/
  shared/
    logos/
```
