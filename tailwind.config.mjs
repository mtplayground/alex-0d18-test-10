const tokenColor = (name) => `rgb(var(--color-${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: tokenColor("primary"),
          foreground: tokenColor("primary-foreground"),
          soft: tokenColor("primary-soft"),
          subtle: tokenColor("primary-subtle"),
          muted: tokenColor("primary-muted"),
          active: tokenColor("primary-active"),
          hover: tokenColor("primary-hover"),
          strong: tokenColor("primary-strong"),
          ring: tokenColor("primary-ring"),
        },
        background: tokenColor("background"),
        card: tokenColor("card"),
        foreground: {
          DEFAULT: tokenColor("foreground"),
          muted: tokenColor("foreground-muted"),
        },
        muted: {
          DEFAULT: tokenColor("muted"),
          foreground: tokenColor("muted-foreground"),
        },
        border: tokenColor("border"),
        accent: {
          DEFAULT: tokenColor("accent"),
          warm: tokenColor("accent-warm"),
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
        ],
        display: ["Sora", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgb(17 24 39 / 0.08)",
      },
    },
  },
  plugins: [],
};
