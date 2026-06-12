"use client";

import Image from "next/image";
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
};

const stageNames = ["Main Problem", "Additional Problem", "Maintenance & Anti-Aging"];

export default function SrpJourney({
  stages,
  steps,
}: {
  stages: Stage[];
  steps: Step[];
}) {
  const [activeStage, setActiveStage] = useState(1);
  const [activeStep, setActiveStep] = useState(0);
  const stage = stages[activeStage];

  return (
    <div className="relative mx-auto max-w-content px-5 lg:px-8 xl:px-0">
      <p className="sr-only">Pilar 02 - Implementasi Nyata</p>

      <div className="grid items-start gap-10 pt-32 lg:grid-cols-[minmax(0,0.6fr)_minmax(23rem,0.4fr)] lg:gap-20 lg:pt-44">
        <div>
          <h2 className="max-w-4xl font-light leading-tight tracking-tight text-white text-[clamp(2rem,3.55vw,3.05rem)]">
            Smart Combo Treatment Diwujudkan Melalui{" "}
            <span className="italic font-light text-white/95 underline decoration-white/70 decoration-1 underline-offset-[7px]">
              Skin Resolve Programme
            </span>
          </h2>

          <div className="mt-12 max-w-[53rem] space-y-7 text-[16px] leading-relaxed text-white/84">
            <p>
              Konsep &quot;Smart Combo Treatment&quot; dalam ISST bukan hanya filosofi
              &mdash; ia diwujudkan secara konkret melalui Skin Resolve Programme
              (SRP), sistem tata laksana eksklusif yang dikembangkan tim Research
              &amp; Development Hayyu.
            </p>
            <p>
              Dalam SRP, dokter tidak memilihkan treatment berdasarkan menu atau
              tren. Setelah analisis kulit dengan QuantifiCare dan anamnesa lengkap,
              dokter memasukkan diagnosa ke dalam sistem &mdash; dan program
              kombinasi treatment yang paling tepat muncul secara otomatis,
              disesuaikan dengan kondisi unik kulit setiap pasien.
            </p>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-[17.5rem_minmax(0,1fr)]">
            <div
              role="tablist"
              aria-label="Tahapan Skin Resolve Programme"
              className="rounded-2xl border border-white/15 bg-white/10 p-3"
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
                    className={`block w-full rounded-xl px-4 py-4 text-left text-[13px] font-medium uppercase tracking-[0.16em] transition-colors ${
                      selected
                        ? "bg-white text-primary"
                        : "text-white/72 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <span className="block">Stage {index + 1}</span>
                    <span className="mt-2 block">{stageNames[index]}</span>
                  </button>
                );
              })}
            </div>

            <div
              id="srp-stage-panel"
              role="tabpanel"
              className="rounded-2xl border border-white/15 bg-white/[0.08] p-6 lg:p-7"
            >
              <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/74">
                Fokus Program
              </p>
              <h3 className="mt-4 max-w-[31rem] text-[clamp(1.35rem,2vw,1.75rem)] font-normal leading-snug text-white">
                {stage.focus}
              </h3>
              <p className="mt-5 max-w-[31rem] text-[15px] leading-relaxed text-white/82">
                {stage.outcome}
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full max-w-[36rem]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-primary-800/30 ring-1 ring-white/10">
            <Image
              src="/images/hero-konsultasi-kulit.png"
              alt="Dokter Hayyu menjelaskan rencana perawatan personal melalui tablet saat konsultasi"
              fill
              sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mt-20 rounded-2xl bg-white p-2 text-primary shadow-2xl shadow-black/14 ring-4 ring-white lg:mt-24">
        <ol className="grid gap-2 md:grid-cols-5">
          {steps.map((item, index) => {
            const selected = activeStep === index;
            return (
              <li key={item.num}>
                <button
                  type="button"
                  aria-pressed={selected}
                  onClick={() => setActiveStep(index)}
                  className={`flex h-full min-h-[10.5rem] w-full flex-col rounded-xl px-5 py-6 text-left transition-colors ${
                    selected
                      ? "bg-primary text-white"
                      : "bg-primary-50 text-primary hover:bg-primary-100"
                  }`}
                >
                  <span
                    className={`font-light text-[34px] leading-none ${
                      selected ? "text-white" : "text-primary/45"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span className="mt-auto block pt-7 text-[14px] font-medium leading-snug">
                    {item.title}
                  </span>
                  <span
                    className={`mt-1.5 block text-[13px] leading-snug ${
                      selected ? "text-white/72" : "text-primary/62"
                    }`}
                  >
                    {item.desc}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
