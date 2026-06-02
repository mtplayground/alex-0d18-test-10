# myClawTeam

Static Astro landing page for myClawTeam.

## Requirements

- Node.js 20.19+ or 22 LTS recommended
- npm

Install dependencies:

```bash
npm install
```

## Environment Variables

Copy the example file for local development:

```bash
cp .env.example .env
```

Required for production builds:

```bash
PUBLIC_SITE_URL=https://example.com
PUBLIC_THEME=light
```

`PUBLIC_SITE_URL` must be an absolute origin URL. It is used to generate canonical URLs, Open Graph URLs, `robots.txt`, and sitemap entries. For local development, `.env.example` uses `http://localhost:8080`.

`PUBLIC_THEME` is optional. It selects the build-time visual theme and defaults to `light`. Supported values are listed in `src/config/site.ts`.

## Local Development

Run the Astro dev server:

```bash
npm run dev
```

The dev server listens on `0.0.0.0:8080`.

## Production Build

Build the static site:

```bash
npm run build
```

The production output is written to `dist/`.

Preview the built site locally:

```bash
npm run preview
```

The preview server also listens on `0.0.0.0:8080`.

## Theming

The site uses semantic CSS variables declared in `src/styles/global.css` and mapped into Tailwind in `tailwind.config.mjs`. Components should use semantic utilities such as `bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `border-border`, `bg-primary`, and `text-primary-foreground`.

To change colors within an existing theme, edit the RGB triplet values in `src/styles/global.css`. Use plain triplets such as `20 94 167`, not hex values or `rgb(...)`, so Tailwind opacity modifiers continue to work through `<alpha-value>`.

The default theme is the `:root` palette. Alternate palettes are declared with `data-theme` selectors, for example `[data-theme="dark"]`. `src/layouts/BaseLayout.astro` sets `<html data-theme="...">` from `PUBLIC_THEME`, falling back to `siteConfig.theme.default` when the env var is missing or unsupported.

Switch themes at build time:

```bash
PUBLIC_THEME=dark npm run build
```

To add a new named theme:

1. Add a `[data-theme="name"]` block in `src/styles/global.css`.
2. Override every `--color-*` token used by the semantic Tailwind colors.
3. Add `"name"` to `SUPPORTED_THEMES` in `src/config/site.ts`.
4. Build with `PUBLIC_THEME=name`.

## Self-Hosting `dist/`

After `npm run build`, deploy the contents of `dist/` to any static file server. The site does not require a Node.js process at runtime.

Minimal static server example:

```bash
npx serve dist -l 8080
```

Reverse proxy / web server requirements:

- Serve `dist/index.html` at `/`.
- Serve static assets from `dist/`, including `/_astro/*`, `favicon.svg`, `logo.svg`, `og-image.png`, `robots.txt`, and sitemap files.
- Return `index.html` for unknown application routes if future routes are added.
- Set `PUBLIC_SITE_URL` to the production origin before building, then publish the resulting `dist/` directory.

Example Nginx location:

```nginx
server {
  listen 80;
  server_name example.com;
  root /var/www/myclawteam/dist;
  index index.html;

  location / {
    try_files $uri $uri/ /index.html;
  }

  location /_astro/ {
    try_files $uri =404;
    add_header Cache-Control "public, max-age=31536000, immutable";
  }
}
```

## Verification

Run the production build and E2E smoke test:

```bash
npm run build
npm run test:e2e
```

Production verification notes are documented in `docs/production-verification.md`.
