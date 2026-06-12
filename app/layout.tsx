import type { Metadata, Viewport } from "next";
import { contaxSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ISST — International Smart Skin Technology | Hayyu Skin Clinic",
  description:
    "ISST (International Smart Skin Technology) adalah pendekatan perawatan kulit eksklusif Hayyu Skin Clinic yang menggabungkan formula internasional, Smart Combo Treatment melalui Skin Resolve Programme, dan pengukuran hasil berbasis teknologi QuantifiCare 3D dari Prancis.",
  metadataBase: new URL("https://hayyu.id"),
  alternates: { canonical: "/isst" },
  openGraph: {
    title: "ISST — International Smart Skin Technology | Hayyu Skin Clinic",
    description:
      "Sistem perawatan kulit eksklusif Hayyu: formula & alat berstandar internasional, Smart Combo Treatment via Skin Resolve Programme, dan pengukuran hasil dengan QuantifiCare LifeViz 3D.",
    url: "https://hayyu.id/isst",
    siteName: "Hayyu Skin Clinic",
    locale: "id_ID",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#006462",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={contaxSans.variable}>
      <body>
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
