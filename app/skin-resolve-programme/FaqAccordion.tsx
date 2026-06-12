"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Apakah SRP wajib diikuti semua customer Hayyu?",
    a: "SRP adalah standar sistem konsultasi Hayyu untuk semua customer — baik baru maupun lama. Program yang direkomendasikan sepenuhnya disesuaikan dengan kondisi kulit dan didiskusikan bersama dokter. Tidak ada yang dipaksakan.",
  },
  {
    q: "Apa bedanya SRP dengan program paket klinik kecantikan biasa?",
    a: "Paket klinik biasanya fixed — kamu beli sejumlah sesi treatment yang sudah ditentukan. SRP berbeda: programnya dinamis dan disesuaikan dengan perkembangan kondisi kulitmu. Diagnosa bisa berubah setiap sesi, dan treatment yang direkomendasikan menyesuaikan.",
  },
  {
    q: "Apakah program SRP bisa dilanjutkan setelah jeda lama?",
    a: "Program SRP dirancang untuk memberikan hasil yang berkelanjutan. Konsistensi perawatan adalah kunci — dokter akan memandu jadwal yang paling sesuai dengan kondisi dan tujuan kulitmu.",
  },
  {
    q: "Apakah history program SRP saya tersimpan?",
    a: "Ya. Semua riwayat SRP — diagnosa, treatment yang dilakukan, perkembangan kondisi kulit, dan Clinic Skincare yang digunakan — tersimpan di sistem Hayyu dan bisa diakses melalui aplikasi HayyuDoc.",
  },
  {
    q: "Berapa lama proses konsultasi SRP?",
    a: "Untuk customer baru, konsultasi biasanya membutuhkan waktu lebih lama karena dokter perlu menjelaskan SRP secara lengkap. Untuk customer lama yang melanjutkan program, prosesnya lebih singkat karena history sudah tersimpan.",
  },
];

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <dl className="divide-y divide-primary-50">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className={`border-l-2 py-5 pl-6 transition-colors duration-200 ${
              isOpen ? "border-primary" : "border-transparent"
            }`}
          >
            <dt>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-start justify-between gap-6 text-left text-[15px] font-medium leading-snug text-ink"
              >
                <span>{item.q}</span>
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors duration-200 ${
                    isOpen
                      ? "border-primary bg-primary text-white"
                      : "border-primary/30 text-primary"
                  }`}
                  aria-hidden="true"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d={isOpen ? "M2 5h6" : "M5 2v6M2 5h6"}
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>
            </dt>
            {isOpen && (
              <dd className="mt-4 text-[15px] leading-relaxed text-body">
                {item.a}
              </dd>
            )}
          </div>
        );
      })}
    </dl>
  );
}
