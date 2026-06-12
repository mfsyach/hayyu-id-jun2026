"use client";

import { useState } from "react";

type TimelineStep = {
  label: string;
  title: string;
  desc: string;
};

function Arrow({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function TimelineExplorer({ steps }: { steps: TimelineStep[] }) {
  const [active, setActive] = useState(0);
  const step = steps[active];
  const previous = () => setActive((value) => Math.max(0, value - 1));
  const next = () => setActive((value) => Math.min(steps.length - 1, value + 1));

  return (
    <div className="mt-12 grid gap-6 lg:grid-cols-[18rem_1fr]">
      <ol className="grid gap-2">
        {steps.map((item, index) => {
          const selected = active === index;
          return (
            <li key={item.title}>
              <button
                type="button"
                aria-current={selected ? "step" : undefined}
                onClick={() => setActive(index)}
                className={`flex w-full items-center gap-4 rounded-xl border px-4 py-3 text-left transition-colors ${
                  selected
                    ? "border-primary bg-primary text-white"
                    : "border-black/5 bg-white text-body hover:border-primary/30 hover:text-primary"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-[13px] font-medium ${
                    selected ? "bg-white text-primary" : "bg-primary-50 text-primary"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <span
                    className={`block text-[11px] font-medium uppercase tracking-[0.14em] ${
                      selected ? "text-white/65" : "text-primary"
                    }`}
                  >
                    {item.label}
                  </span>
                  <span className="mt-0.5 block text-[14px] font-medium leading-snug">
                    {item.title}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ol>

      <div className="rounded-2xl bg-white p-7 ring-1 ring-black/5">
        <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-primary">
          {step.label}
        </p>
        <h3 className="mt-2 text-[clamp(1.35rem,2.6vw,2rem)] font-light leading-tight text-ink">
          {step.title}
        </h3>
        <p className="mt-4 text-[16px] leading-relaxed text-body">{step.desc}</p>

        <div className="mt-7 flex items-center justify-between gap-3 border-t border-black/5 pt-5">
          <button
            type="button"
            onClick={previous}
            disabled={active === 0}
            className="inline-flex items-center gap-2 rounded-md border border-primary/25 px-4 py-2 text-[13px] font-medium uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary-50 disabled:pointer-events-none disabled:opacity-35"
          >
            <Arrow direction="left" />
            Sebelumnya
          </button>
          <button
            type="button"
            onClick={next}
            disabled={active === steps.length - 1}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-[13px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-primary-500 disabled:pointer-events-none disabled:opacity-35"
          >
            Berikutnya
            <Arrow direction="right" />
          </button>
        </div>
      </div>
    </div>
  );
}
