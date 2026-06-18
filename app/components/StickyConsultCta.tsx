"use client";

import { useEffect, useState } from "react";
import { externalProjectLinkProps } from "./siteData";

const RESERVATION_URL = "https://hayyu.id/reservasi";

function CloseIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export default function StickyConsultCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible || dismissed) return null;

  return (
    <aside
      aria-label="Reservasi konsultasi"
      className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-content rounded-2xl border border-white/30 bg-primary px-4 py-3 text-white shadow-2xl shadow-black/20 sm:left-auto sm:right-5 sm:mx-0 sm:max-w-sm"
    >
      <div className="flex items-center gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-[14px] font-medium uppercase tracking-[0.16em] text-white/80">
            Konsultasi Hayyu
          </p>
          <p className="mt-1 text-[17px] leading-snug text-white/90">
            Mulai dari analisis kulit dan rekomendasi personal.
          </p>
        </div>
        <a
          href={RESERVATION_URL}
          {...externalProjectLinkProps(RESERVATION_URL)}
          className="shrink-0 rounded-md bg-white px-4 py-2 text-[14px] font-medium uppercase tracking-[0.14em] text-primary transition-colors hover:bg-cream"
        >
          Reservasi
        </a>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Tutup ajakan reservasi"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        >
          <CloseIcon />
        </button>
      </div>
    </aside>
  );
}
