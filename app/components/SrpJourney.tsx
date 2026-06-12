"use client";

import { useState } from "react";

type Stage = {
  label: string;
  focus: string;
  outcome: string;
};

type Step = {
  num: string;
  title: string;
  desc: string;
  detail?: string;
};

export default function SrpJourney({
  stages,
  steps,
}: {
  stages: Stage[];
  steps: Step[];
}) {
  const [activeStage, setActiveStage] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const stage = stages[activeStage];
  const step = steps[activeStep];

  return (
    <div className="mt-10">
      <div
        role="tablist"
        aria-label="Tahapan Skin Resolve Programme"
        className="flex flex-col gap-2 rounded-2xl border border-white/15 bg-white/10 p-2 sm:flex-row"
      >
        {stages.map((item, index) => {
          const selected = activeStage === index;
          return (
            <button
              key={item.label}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="srp-stage-panel"
              onClick={() => setActiveStage(index)}
              className={`flex-1 rounded-xl px-4 py-3 text-left text-[13px] font-medium uppercase tracking-[0.12em] transition-colors ${
                selected
                  ? "bg-white text-primary"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div
          id="srp-stage-panel"
          role="tabpanel"
          className="rounded-2xl border border-white/15 bg-white/[0.08] p-6"
        >
          <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/80">
            Fokus Program
          </p>
          <h3 className="mt-2 text-[clamp(1.15rem,2vw,1.45rem)] font-normal leading-snug text-white">
            {stage.focus}
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-white/90">
            {stage.outcome}
          </p>
        </div>

        <div className="rounded-2xl bg-white p-2 text-primary shadow-xl shadow-black/10">
          <ol className="grid gap-2 md:grid-cols-5">
            {steps.map((item, index) => {
              const selected = activeStep === index;
              return (
                <li key={item.num}>
                  <button
                    type="button"
                    aria-pressed={selected}
                    onClick={() => setActiveStep(index)}
                    className={`flex h-full min-h-[9rem] w-full flex-col rounded-xl px-4 py-5 text-left transition-colors ${
                      selected
                        ? "bg-primary text-white"
                        : "bg-primary-50 text-primary hover:bg-primary-100"
                    }`}
                  >
                    <span
                      className={`font-light text-[34px] leading-none ${
                        selected ? "text-white" : "text-primary/50"
                      }`}
                    >
                      {item.num}
                    </span>
                    <span className="mt-3 text-[14px] font-medium leading-snug">
                      {item.title}
                    </span>
                    <span
                      className={`mt-2 text-[13px] leading-snug ${
                        selected ? "text-white/70" : "text-primary/65"
                      }`}
                    >
                      {item.desc}
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="mt-2 rounded-xl bg-surface px-5 py-4">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-primary">
              Langkah Aktif
            </p>
            <h3 className="mt-1 text-[clamp(1rem,2vw,1.25rem)] font-normal text-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-body">
              {step.detail ?? step.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
