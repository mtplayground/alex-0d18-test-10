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
        brand: {
          50: "#eef8ff",
          100: "#d8efff",
          200: "#b8e3ff",
          300: "#86d1ff",
          400: "#4bb4ff",
          500: "#2295f2",
          600: "#1476cf",
          700: "#145ea7",
          800: "#174f89",
          900: "#193f6c",
          950: "#112947",
        },
        ink: {
          50: "#f6f8fa",
          100: "#e9eef3",
          200: "#d4dde7",
          300: "#b3c3d2",
          400: "#8ca4b8",
          500: "#6c879d",
          600: "#536d82",
          700: "#44586a",
          800: "#3b4a58",
          900: "#222c35",
          950: "#111820",
        },
        signal: {
          mint: "#12b981",
          amber: "#f5a524",
          coral: "#f45d48",
        },
        surface: {
          DEFAULT: tokenColor("surface"),
          muted: tokenColor("muted"),
          raised: "rgb(255 255 255 / <alpha-value>)",
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
