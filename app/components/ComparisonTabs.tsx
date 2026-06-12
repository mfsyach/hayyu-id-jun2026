"use client";

import { useState } from "react";

type Side = { title: string; items: string[] };

function DashIcon() {
  return (
    <span className="mt-2 h-px w-3 shrink-0 bg-muted/60" aria-hidden="true" />
  );
}

function CheckIcon() {
  return (
    <svg
      className="mt-0.5 h-4 w-4 shrink-0 text-white"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 10.5 8 14.5 16 5.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Accessible segmented toggle (tablist) for the 4.7 comparison. Switching tabs
 * crossfades the panel; the "Dengan ISST" side is brand-teal, "Tanpa ISST" is
 * neutral. Copy is passed through verbatim. Defaults to the Hayyu side.
 */
export default function ComparisonTabs({
  left,
  right,
}: {
  left: Side;
  right: Side;
}) {
  const [active, setActive] = useState<"left" | "right">("right");
  const isBrand = active === "right";
  const current = isBrand ? right : left;

  const tab = (key: "left" | "right", label: string) => {
    const selected = active === key;
    return (
      <button
        key={key}
        type="button"
        role="tab"
        aria-selected={selected}
        aria-controls="comparison-panel"
        onClick={() => setActive(key)}
        className={`flex-1 rounded-full px-5 py-2.5 text-[14px] font-medium transition-colors duration-300 ${
          selected
            ? "bg-primary text-white shadow-sm"
            : "text-gray-600 hover:text-primary"
        }`}
      >
        {label}
      </button>
    );
  };

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Bandingkan dengan dan tanpa ISST"
        className="mx-auto flex max-w-md gap-1 rounded-full border border-gray-200 bg-surface p-1"
      >
        {tab("left", left.title)}
        {tab("right", right.title)}
      </div>

      <div
        id="comparison-panel"
        role="tabpanel"
        className="mx-auto mt-7 max-w-2xl"
      >
        {/* keyed so the panel remounts + crossfades on switch */}
        <div
          key={active}
          className={`animate-fade-up rounded-2xl p-8 ${
            isBrand
              ? "bg-primary text-white shadow-xl shadow-primary/20"
              : "bg-white ring-1 ring-black/5"
          }`}
        >
          <h3
            className={`mb-5 border-b pb-3 text-[13px] font-semibold uppercase tracking-[0.16em] ${
              isBrand
                ? "border-white/15 text-white/90"
                : "border-black/10 text-muted"
            }`}
          >
            {current.title}
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {current.items.map((item) => (
              <li
                key={item}
                className={`flex gap-3 text-[15px] ${
                  isBrand ? "text-white/90" : "text-body"
                }`}
              >
                {isBrand ? <CheckIcon /> : <DashIcon />}
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
