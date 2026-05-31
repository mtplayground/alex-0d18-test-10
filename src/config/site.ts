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
  assets: {
    favicon: "/favicon.svg",
    logo: "/logo.svg",
    ogImage: "/og-image.png",
  },
  hero: {
    tagline: "Agent Team for Founders",
    headline: "You just talk, we handle the rest",
    body: "myClawTeam turns founder conversations into shipped product work, handling planning, implementation, deployment, and operational follow-through while the code stays in the repository you own.",
    cta: {
      label: "Start a conversation",
      href: "#hero",
    },
  },
  valueProps: [
    {
      heading: "GitHub-native",
      body: "Plans, changes, reviews, and delivery stay anchored in the GitHub workflow your team already uses.",
    },
    {
      heading: "Full SDLC autonomy",
      body: "From discovery through deployment, myClawTeam can carry software work across the full delivery lifecycle.",
    },
    {
      heading: "Complete code ownership",
      body: "The output lands in your repository, so your product, history, and operating knowledge remain yours.",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
