"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "apa-itu-isst", label: "Apa itu ISST" },
  { id: "pilar", label: "4 Pilar" },
  { id: "srp", label: "SRP" },
  { id: "quantificare", label: "QuantifiCare" },
  { id: "cara-kerja", label: "Cara Kerja" },
  { id: "perbandingan", label: "Perbandingan" },
];

/**
 * Right-side dot rail (wide screens only) with scroll-spy: the active section
 * highlights as you scroll, labels reveal on hover, and clicking smooth-scrolls
 * (instant under reduced-motion). Appears once past the hero.
 */
export default function SectionNav() {
  const [active, setActive] = useState(sections[0].id);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const shown = new Set<string>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) shown.add(e.target.id);
          else shown.delete(e.target.id);
        }
        const first = sections.find((s) => shown.has(s.id));
        if (first) setActive(first.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));

    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Navigasi bagian halaman"
      className={`fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 transition-opacity duration-300 xl:block ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <ul className="flex flex-col gap-4">
        {sections.map((s) => {
          const on = active === s.id;
          return (
            <li key={s.id} className="group flex items-center justify-end gap-3">
              <span
                className={`whitespace-nowrap text-[11px] uppercase tracking-[0.14em] transition-all duration-200 ${
                  on
                    ? "text-primary opacity-100"
                    : "text-gray-400 opacity-0 group-hover:opacity-100"
                }`}
              >
                {s.label}
              </span>
              <button
                type="button"
                onClick={() => go(s.id)}
                aria-label={`Ke bagian ${s.label}`}
                aria-current={on ? "true" : undefined}
                className={`h-2.5 w-2.5 rounded-full border transition-all duration-200 ${
                  on
                    ? "scale-125 border-primary bg-primary"
                    : "border-gray-400 bg-transparent hover:border-primary hover:bg-primary/30"
                }`}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
