import { siteConfig } from "../config/site";

export function GET() {
  const sitemapUrl = new URL("/sitemap-index.xml", siteConfig.url);

  return new Response(
    `User-agent: *
Allow: /

Sitemap: ${sitemapUrl.toString()}
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
