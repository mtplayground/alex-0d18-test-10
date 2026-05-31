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
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        heading: "Talk",
        body: "Share the product goal, constraints, and tradeoffs in plain language.",
      },
      {
        heading: "Plan",
        body: "myClawTeam turns the conversation into scoped implementation work.",
      },
      {
        heading: "Build",
        body: "Code changes are produced, checked, and prepared in the repository.",
      },
      {
        heading: "Deploy & Operate",
        body: "Delivery continues through launch readiness and operational follow-through.",
      },
    ],
  },
  featureHighlights: {
    heading: "Feature highlights",
    items: [
      {
        heading: "Production-ready output",
        body: "Implementation work is shaped for real delivery, with buildable code and clear review boundaries.",
      },
      {
        heading: "Security-by-default",
        body: "Changes are made with conservative defaults, scoped access, and repository visibility in mind.",
      },
      {
        heading: "Code-in-your-repo",
        body: "The work happens where your product lives, keeping source, history, and decisions together.",
      },
      {
        heading: "End-to-end SDLC coverage",
        body: "Planning, implementation, validation, deployment support, and operational follow-through stay connected.",
      },
    ],
  },
};

export type SiteConfig = typeof siteConfig;
