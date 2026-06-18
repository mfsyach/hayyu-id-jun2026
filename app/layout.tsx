import type { Metadata, Viewport } from "next";
import { contaxSans } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hayyu Skin Clinic | Klinik Kecantikan Khusus Wanita",
  description:
    "Hayyu Skin Clinic adalah klinik kecantikan khusus wanita yang merawat Cantik Aslimu melalui konsultasi personal, International Smart Skin Technology, dan Skin Resolve Programme.",
  metadataBase: new URL("https://hayyu.id"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Hayyu Skin Clinic | Klinik Kecantikan Khusus Wanita",
    description:
      "Klinik kecantikan khusus wanita dengan konsultasi personal, ISST, SRP, dan perawatan yang menjaga Cantik Aslimu.",
    url: "https://hayyu.id/",
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
