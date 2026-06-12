"use client";

import Image from "next/image";
import { useState } from "react";

type Parameter = {
  name: string;
  insight: string;
  score: number;
  beforeImage: string;
  afterImage: string;
};

const analysisCopy =
  "Parameter yang bisa dianalisis QuantifiCare meliputi kerutan dan garis halus, pori-pori, pigmentasi dan flek (termasuk yang belum terlihat di permukaan), kadar minyak, tekstur kulit, serta perubahan volume dan elastisitas wajah secara 3D.";

export default function QuantificareExplorer({
  parameters,
}: {
  parameters: Parameter[];
}) {
  const [active, setActive] = useState(0);
  const [comparison, setComparison] = useState(58);
  const parameter = parameters[active];

  return (
    <div className="mt-24 grid gap-10 lg:mt-32 lg:grid-cols-[0.56fr_0.44fr] lg:items-start lg:gap-12">
      <div
        id="quantificare-panel"
        role="tabpanel"
        className="rounded-2xl bg-primary-50 p-6 ring-1 ring-primary/10 sm:p-7"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-primary">
              Fokus Terukur
            </p>
            <h3 className="mt-3 text-[clamp(1.25rem,2vw,1.6rem)] font-normal leading-snug text-ink">
              {parameter.name}
            </h3>
          </div>
          <div className="text-right">
            <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
              Index
            </p>
            <p className="mt-1 font-light text-[42px] leading-none text-primary">
              {parameter.score}
            </p>
          </div>
        </div>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-white">
          <div
            className="h-full rounded-full bg-primary transition-all duration-500"
            style={{ width: `${parameter.score}%` }}
          />
        </div>

        <div className="mt-7">
          <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.18em] text-primary">
            Preview Perbandingan
          </p>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white ring-1 ring-primary/10">
            <Image
              src={parameter.beforeImage}
              alt={`Kondisi sebelum untuk parameter ${parameter.name}`}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 transition-[clip-path] duration-300"
              style={{ clipPath: `inset(0 0 0 ${100 - comparison}%)` }}
            >
              <Image
                src={parameter.afterImage}
                alt={`Kondisi sesudah untuk parameter ${parameter.name}`}
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
            </div>
            <div
              className="absolute inset-y-0 w-px bg-white shadow-[0_0_0_1px_rgba(0,100,98,0.2)]"
              style={{ left: `${100 - comparison}%` }}
              aria-hidden="true"
            />
            <div className="absolute left-4 top-4 rounded-full bg-white/88 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
              Sebelum
            </div>
            <div className="absolute right-4 top-4 rounded-full bg-white/88 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
              Sesudah
            </div>
            <div className="absolute inset-x-5 bottom-5 hidden rounded-xl bg-white/90 px-4 py-3 text-[13px] leading-snug text-body md:block">
              Data visual membantu dokter membandingkan kondisi kulit dari kunjungan
              ke kunjungan tanpa hanya mengandalkan persepsi.
            </div>
          </div>

          <input
            id="comparison-preview"
            type="range"
            min="15"
            max="85"
            value={comparison}
            onChange={(event) => setComparison(Number(event.target.value))}
            className="mt-6 w-full accent-primary"
            aria-label="Geser preview perbandingan sebelum dan sesudah"
            aria-valuetext={`${comparison}% area sesudah`}
          />
        </div>
      </div>

      <div className="lg:pt-2">
        <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-primary">
          Parameter Analisis
        </p>
        <p className="mt-6 text-[16px] leading-relaxed text-body">
          {analysisCopy}
        </p>

        <div
          role="tablist"
          aria-label="Parameter QuantifiCare"
          className="mt-6 space-y-4"
        >
          {parameters.map((item, index) => {
            const selected = active === index;
            return (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="quantificare-panel"
                onClick={() => setActive(index)}
                className={`block w-full rounded-xl border px-5 py-5 text-left transition-colors ${
                  selected
                    ? "border-primary bg-primary text-white shadow-lg shadow-primary/15"
                    : "border-black/5 bg-white text-body hover:border-primary/30 hover:text-primary"
                }`}
              >
                <span className="block text-[14px] font-medium">{item.name}</span>
                <span
                  className={`mt-2 block text-[13px] leading-snug ${
                    selected ? "text-white/72" : "text-muted"
                  }`}
                >
                  {item.insight}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
