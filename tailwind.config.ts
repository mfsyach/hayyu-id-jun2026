import type { Config } from "tailwindcss";

/**
 * Design tokens extracted from the live site https://hayyu.id
 * (CSS custom properties --primary / --primary-50 / --primary-500, arbitrary
 * color classes, and the rendered hero). The brand is a deep teal/green with
 * neutral grays on white — NOT the burgundy/gold the build spec guessed.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand teal — hsl(179 100% 20%) ≈ #006462 (the live "Consult Now"
        // button, logo, active nav and accents).
        primary: {
          DEFAULT: "#006462",
          50: "#E6F0EF", // hsl(180 28% 92%) — soft teal tint section bg
          100: "#CFE2E1",
          500: "#02746F", // hsl(179 97% 23%) — hover / gradient stop
          600: "#006462",
          700: "#02534F",
          800: "#013F3C", // deepest teal for accent bands
        },
        ink: "#111827", // gray-900 headings on the live site
        body: "#4A4D57", // primary paragraph text (darkened from #6D6F78)
        muted: "#6B6B6B", // secondary / caption text (darkened from #7A7A7A)
        surface: "#F4F4F5", // secondary light section bg (hsl 240 5% 96%)
        cream: "#FBFAF8", // warm off-white used between sections
      },
      fontFamily: {
        // Self-hosted Contax Sans (next/font/local) with the live site's
        // Arial/Helvetica fallback stack.
        sans: ["var(--font-contax-sans)", "Arial", "Helvetica", "sans-serif"],
      },
      maxWidth: {
        content: "1440px", // page container
        prose: "860px", // editorial text column
      },
      letterSpacing: {
        eyebrow: "0.28em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
