const DEFAULT_SITE_URL = "http://localhost:8080";

function normalizeSiteUrl(rawSiteUrl = DEFAULT_SITE_URL) {
  try {
    const url = new URL(rawSiteUrl);
    return url.toString().replace(/\/$/, "");
  } catch {
    throw new Error("PUBLIC_SITE_URL must be an absolute URL, such as https://example.com");
  }
}

export const siteConfig = {
  name: "myClawTeam",
  title: "myClawTeam",
  description: "Agent Team for Founders.",
  url: normalizeSiteUrl(import.meta.env.PUBLIC_SITE_URL),
  locale: "en_US",
};

export type SiteConfig = typeof siteConfig;
