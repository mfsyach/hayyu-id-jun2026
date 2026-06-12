import localFont from "next/font/local";

/**
 * Contax Sans — the single proprietary humanist sans-serif used across
 * hayyu.id (weights 200–900 + italics). The .woff2 files were pulled from the
 * live site and are self-hosted in /public/fonts. Exposed as the same CSS
 * variable the live site uses (--font-contax-sans).
 */
export const contaxSans = localFont({
  src: [
    { path: "../public/fonts/ContaxSans-Light.woff2", weight: "300", style: "normal" },
    { path: "../public/fonts/ContaxSans-LightItalic.woff2", weight: "300", style: "italic" },
    { path: "../public/fonts/ContaxSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/ContaxSans-Italic.woff2", weight: "400", style: "italic" },
    { path: "../public/fonts/ContaxSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/ContaxSans-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/ContaxSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-contax-sans",
  display: "swap",
  fallback: ["Arial", "Helvetica", "sans-serif"],
});
