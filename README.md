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
```

`PUBLIC_SITE_URL` must be an absolute origin URL. It is used to generate canonical URLs, Open Graph URLs, `robots.txt`, and sitemap entries. For local development, `.env.example` uses `http://localhost:8080`.

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
