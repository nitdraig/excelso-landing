# Excelso Landing (Astro)

Parallel Astro migration of the Next.js marketing site. **No React.**

## Quick start

```bash
cd astro
npm install
npm run dev
```

- Site: http://localhost:4321

## Structure

```
src/
  components/   Header, Footer, JsonLd, LanguageSwitcher, PageStub
  data/         case studies + open source (ported from Next)
  i18n/         UI dictionaries EN/ES
  layouts/      BaseLayout (hreflang, OG, canonical)
  lib/          seo, i18n helpers, cn()
  pages/        EN routes + es/ mirror
  styles/       Tailwind v4 global.css
public/         assets copied from Next public/
```

## Locales

| Locale       | URL prefix |
| ------------ | ---------- |
| EN (default) | `/`        |
| ES           | `/es/`     |

Same slugs in both locales (`/contact` ↔ `/es/contact`).

## Migration status

| Phase                                           | Status   |
| ----------------------------------------------- | -------- |
| 1 Scaffold + i18n shell + layout                | **Done** |
| 2 Marketing content EN+ES                       | **Done** |
| 3 Contact + legal + Mailprex API                | **Done** |
| 4 Optional polish (Vanta, case study ES bodies) | Pending  |
| 5 Cutover                                       | Pending  |

Set `MAILPREX_FORM_TOKEN` in `.env` (local) and in the Vercel project env (Production + Preview) for the contact form.
