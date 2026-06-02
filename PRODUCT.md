# myClawTeam Product Contract

## What This Project Is

myClawTeam is a static Astro landing page for the product positioning "Agent Team for Founders." The page presents myClawTeam as a GitHub-native software delivery agent team where founders can describe goals conversationally and keep the resulting product work in their own repository.

## What It Does

The site renders a single marketing landing page with:

- Hero section with brand, tagline, positioning copy, and primary CTA.
- Three value propositions: GitHub-native, full SDLC autonomy, and complete code ownership.
- Four-step "How it works" flow: Talk, Plan, Build, Deploy & Operate.
- Feature highlights for production-ready output, security-by-default, code-in-your-repo, and end-to-end SDLC coverage.
- Final CTA band and minimal footer.
- Favicon, logo SVG, and 1200x630 Open Graph image.
- Build-time visual theming with a light default theme and a dark alternate theme.

## Architecture

- Framework: Astro with TypeScript and static output.
- Styling: Tailwind CSS via the Astro Tailwind integration, backed by semantic CSS variable color tokens in `src/styles/global.css`.
- Theming: `:root` defines the light palette, `[data-theme="dark"]` defines the dark palette, and `PUBLIC_THEME` selects the build-time theme through `src/layouts/BaseLayout.astro`.
- Content source: shared product and section copy lives in `src/config/site.ts`.
- Page shell: `src/layouts/BaseLayout.astro` owns global styles, fonts, SEO metadata, Open Graph/Twitter tags, favicon, and optional JSON-LD.
- Page composition: `src/pages/index.astro` assembles all section components within `BaseLayout`.
- Static assets: public brand and social assets live under `public/`.
- Deployment output: `npm run build` writes a static `dist/` directory.

## SEO And Metadata

- `PUBLIC_SITE_URL` controls canonical URLs, Open Graph URLs, `robots.txt`, and sitemap entries.
- `PUBLIC_THEME` controls the build-time visual theme and defaults to `light`; supported themes are configured in `src/config/site.ts`.
- The home page sets page-level title, meta description, canonical URL, Open Graph tags, Twitter card tags, and JSON-LD `Organization` schema for myClawTeam.
- Sitemap integration emits `sitemap-index.xml` and `sitemap-0.xml`.
- The production build currently ships no client JavaScript bundles; the only script tag is JSON-LD.

## Development And Verification

- Local dev: `npm run dev` on `0.0.0.0:8080`.
- Production build: `npm run build`.
- Preview built output: `npm run preview` on `0.0.0.0:8080`.
- E2E smoke test: `npm run test:e2e`, using Playwright against `astro preview`.
- Production verification notes live in `docs/production-verification.md`.

## Conventions

- Keep product-facing copy centralized in `src/config/site.ts` unless a component has purely structural text.
- Keep section components in `src/components/sections/`.
- Use semantic Tailwind color utilities such as `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `bg-primary`, and `border-border`; legacy `brand`, `ink`, `signal`, and `surface` palette scales have been removed.
- Add or change themes by editing RGB triplet CSS variables in `src/styles/global.css`, then listing new theme names in `src/config/site.ts`.
- Treat `dist/`, `.astro/`, Playwright output, local env files, tokens, and runtime state files as generated or local-only.
- Update this file when the merged product behavior, architecture, or project conventions change.
