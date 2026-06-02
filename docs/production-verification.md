# Production Verification

Date: 2026-05-31

Verified theme: `light` default (`PUBLIC_THEME` unset or `PUBLIC_THEME=light`).

## Commands Run

```bash
npm run build
CHROME_PATH=/root/.cache/ms-playwright/chromium-1223/chrome-linux64/chrome npx -y lighthouse http://127.0.0.1:8080 --only-categories=performance,accessibility,seo --output=json --output-path=/tmp/myclawteam-lighthouse.json --chrome-flags="--headless --no-sandbox" --quiet
```

## Build Output

`npm run build` completed successfully with 0 errors, 0 warnings, and 0 hints.

The production `dist/` output contains:

- `index.html`
- one generated CSS file under `_astro/`
- `favicon.svg`
- `logo.svg`
- `og-image.png`
- `robots.txt`
- `sitemap-0.xml`
- `sitemap-index.xml`

Total `dist/` size was approximately 120 KB.

## JavaScript Shipping

No `.js` files were emitted in `dist/`.

The only `<script>` tag in `index.html` is the `application/ld+json` Organization schema. No client-side JavaScript bundle is shipped for the landing page.

## Lighthouse Baseline

Lighthouse was run against `astro preview` of the production build at `http://127.0.0.1:8080`.

Scores:

- Performance: 93
- Accessibility: 100
- SEO: 100

The scores are suitable as a baseline for the static landing page. Performance has room for future improvement, primarily around external font loading and render timing, but no blocking production issue was found.
