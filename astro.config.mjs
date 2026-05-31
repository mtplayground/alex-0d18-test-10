import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { loadEnv } from "vite";

const DEFAULT_SITE_URL = "http://localhost:8080";

function normalizeSiteUrl(rawSiteUrl = DEFAULT_SITE_URL) {
  try {
    const url = new URL(rawSiteUrl);
    return url.toString().replace(/\/$/, "");
  } catch {
    throw new Error("PUBLIC_SITE_URL must be an absolute URL, such as https://example.com");
  }
}

const mode = process.env.NODE_ENV ?? "development";
const env = loadEnv(mode, process.cwd(), "");
const siteUrl = normalizeSiteUrl(env.PUBLIC_SITE_URL);

export default defineConfig({
  integrations: [
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: "static",
  site: siteUrl,
});
