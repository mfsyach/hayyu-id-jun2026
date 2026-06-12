import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImagePlaceholder from "./components/ImagePlaceholder";
import ComparisonTabs from "./components/ComparisonTabs";
import QuantificareExplorer from "./components/QuantificareExplorer";
import Reveal from "./components/Reveal";
import SectionNav from "./components/SectionNav";
import SrpJourney from "./components/SrpJourney";
import StatCounter from "./components/StatCounter";
import StickyConsultCta from "./components/StickyConsultCta";
import TimelineExplorer from "./components/TimelineExplorer";

/* ------------------------------------------------------------------ data -- */

const pillars = [
  {
    num: "01",
    title: (
      <>
        International <span className="accent">Formula &amp; Device</span>
      </>
    ),
    body: "Semua bahan dan alat yang digunakan di Hayyu dipilih berdasarkan standar dan efikasi klinis internasional — bukan popularitas pasar. Formula Clinic Skincare dibuat oleh dokter, diuji ketat, dan dimonitor secara berkelanjutan. Semua bahan aktif halal dan terdaftar BPOM.",
    tag: "Standar Internasional",
    emphasized: false,
    icon: (
      <path
        d="M9 3h6M10 3v4.5L5.5 17a2 2 0 0 0 1.8 3h9.4a2 2 0 0 0 1.8-3L14 7.5V3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    num: "02",
    title: (
      <>
        Smart Combo <span className="accent">Treatment via SRP</span>
      </>
    ),
    body: "Pilar ini diimplementasikan melalui Skin Resolve Programme (SRP) — sistem tata laksana perawatan terstruktur yang dikembangkan tim R&D Hayyu. Dokter merancang kombinasi treatment yang paling efektif berdasarkan diagnosa aktual, bukan protokol generik. Hasilnya: perawatan yang benar-benar personal.",
    tag: "Implementasi: Skin Resolve Programme",
    emphasized: true,
    icon: (
      <path
        d="M5 7h7m-7 5h11M5 17h6m6-10 3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    num: "03",
    title: (
      <>
        Safest &amp; <span className="accent">Effective Result</span>
      </>
    ),
    body: "Efektif tidak harus menyakitkan dan tidak harus mengubah wajah. Hayyu hanya melakukan prosedur yang aman jangka panjang — tidak ada bahan yang membuat ketergantungan, tidak ada prosedur yang merusak struktur alami wajah. Kecantikan asli, dioptimalkan, tanpa menyalahi fitrah.",
    tag: "Aman Jangka Panjang",
    emphasized: false,
    icon: (
      <path
        d="M12 3.5c2 1.6 4 2.2 6 2.2 0 6.5-2.4 10.2-6 12.8-3.6-2.6-6-6.3-6-12.8 2 0 4-.6 6-2.2Zm-2 8 1.6 1.6L15 9.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    num: "04",
    title: (
      <>
        Technology-measured <span className="accent">Improvement</span>
      </>
    ),
    body: "Hasil perawatan di Hayyu tidak hanya dirasakan — tapi diukur secara objektif menggunakan QuantifiCare LifeViz, sistem imaging 3D buatan Prancis yang digunakan di klinik dermatologi dan uji klinis internasional. Pasien bisa melihat perubahan nyata dalam data visual yang terukur.",
    tag: "Berbasis Data & Imaging 3D",
    emphasized: false,
    icon: (
      <path
        d="M12 3 4 7v10l8 4 8-4V7l-8-4Zm0 0v18M4 7l8 4 8-4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const stagePills = [
  "Stage 1 — Main Problem",
  "Stage 2 — Additional Problem",
  "Stage 3 — Maintenance & Anti-Aging",
];

const srpStages = [
  {
    label: stagePills[0],
    focus: "Keluhan utama yang paling memengaruhi kondisi kulit saat ini",
    outcome:
      "Dokter memprioritaskan masalah utama seperti acne, pigmentasi, atau tekstur agar program awal tidak melebar dan tetap terukur.",
  },
  {
    label: stagePills[1],
    focus: "Masalah tambahan yang muncul setelah kulit lebih stabil",
    outcome:
      "Program dapat bergerak ke concern pendukung seperti pori, bekas jerawat, atau uneven tone dengan kombinasi treatment yang lebih spesifik.",
  },
  {
    label: stagePills[2],
    focus: "Perawatan berkala untuk menjaga hasil dan kualitas kulit",
    outcome:
      "Setelah target utama tercapai, dokter menyusun ritme maintenance dan pencegahan aging berdasarkan data kunjungan sebelumnya.",
  },
];

const srpFlow = [
  { num: "01", title: "Skin Analyzer", desc: "QuantifiCare menganalisis kondisi kulit secara objektif" },
  { num: "02", title: "Diagnosa Dokter", desc: "Anamnesa, physical diagnose, penentuan stage SRP" },
  { num: "03", title: "Program Otomatis", desc: "Pilihan Reguler & Premium muncul sesuai diagnosa" },
  { num: "04", title: "Treatment", desc: "Kombinasi treatment terbaik sesuai program yang dipilih" },
  { num: "05", title: "Pengukuran Hasil", desc: "QuantifiCare membandingkan kondisi kulit sebelum & sesudah" },
];

const qcStats = [
  { value: "2003", label: "Didirikan di Prancis" },
  { value: "50+", label: "Negara pengguna" },
  { value: "3D", label: "Imaging presisi tinggi" },
  { value: "Klinis", label: "Digunakan dalam uji klinis dermatologi internasional" },
];

const qcParameters = [
  {
    name: "Kerutan & garis halus",
    insight: "Membantu membaca area yang membutuhkan perawatan tekstur dan aging.",
    score: 72,
    beforeImage: "/images/quantificare/wrinkles-before.png",
    afterImage: "/images/quantificare/wrinkles-after.png",
  },
  {
    name: "Pori-pori & tekstur",
    insight: "Memetakan area permukaan kulit yang perlu distabilkan bertahap.",
    score: 64,
    beforeImage: "/images/quantificare/pores-texture-before.png",
    afterImage: "/images/quantificare/pores-texture-after.png",
  },
  {
    name: "Pigmentasi & flek",
    insight: "Mendukung evaluasi noda yang tampak maupun yang mulai terbentuk.",
    score: 78,
    beforeImage: "/images/quantificare/pigmentation-before.png",
    afterImage: "/images/quantificare/pigmentation-after.png",
  },
  {
    name: "Oiliness",
    insight: "Menjadi masukan untuk program acne, sebum, dan perawatan harian.",
    score: 58,
    beforeImage: "/images/quantificare/oiliness-before.png",
    afterImage: "/images/quantificare/oiliness-after.png",
  },
  {
    name: "Volume & elastisitas",
    insight: "Memberi konteks 3D untuk perubahan wajah tanpa mengubah karakter alami.",
    score: 69,
    beforeImage: "/images/quantificare/volume-elasticity-before.png",
    afterImage: "/images/quantificare/volume-elasticity-after.png",
  },
];

const timeline = [
  {
    label: "Pilar 01 & 04",
    title: "Analisis Kulit dengan QuantifiCare",
    desc: "Sebelum treatment apapun, dokter Hayyu melakukan analisis kulit menggunakan QuantifiCare LifeViz. Kondisi kulit diukur secara objektif dalam berbagai parameter — semua dalam data yang bisa dibaca dan dibandingkan.",
  },
  {
    label: "Pilar 02",
    title: "Diagnosa & Smart Combo via SRP",
    desc: "Berdasarkan hasil analisis dan anamnesa, dokter memasukkan diagnosa ke dalam Skin Resolve Programme. Program kombinasi treatment — Reguler atau Premium — muncul otomatis sesuai kondisi kulit. Bukan protokol generik, tapi program yang dipersonalisasi.",
  },
  {
    label: "Pilar 01 & 03",
    title: "Treatment dengan Formula & Alat Berstandar Internasional",
    desc: "Prosedur dilakukan menggunakan bahan dan alat yang memenuhi standar internasional, halal, dan terdaftar BPOM. Semua dilakukan di ruang privat oleh staf wanita terlatih. Tidak ada prosedur yang mengubah struktur wajah secara permanen.",
  },
  {
    label: "Pilar 03 & 04",
    title: "Pengukuran Hasil & Rekomendasi Clinic Skincare",
    desc: "Setelah treatment, hasil dibandingkan dengan baseline QuantifiCare. Dokter juga merekomendasikan rangkaian Clinic Skincare Hayyu yang mendukung dan memaksimalkan hasil treatment di rumah — melengkapi sistem ISST secara menyeluruh.",
  },
];

const comparisonLeft = [
  "Diagnosis berdasarkan penilaian visual saja",
  "Treatment generik untuk semua tipe kulit",
  "Tidak ada program terstruktur per pasien",
  "Hasil hanya bisa dirasakan, tidak terukur",
  "Tidak ada baseline untuk perbandingan objektif",
  "Sulit tahu apakah treatment benar-benar efektif",
];

const comparisonRight = [
  "Diagnosis berbasis data imaging 3D QuantifiCare",
  "Smart Combo Treatment yang dipersonalisasi via SRP",
  "Program terstruktur 3 stage sesuai kondisi kulit",
  "Hasil diukur dan terdokumentasi secara objektif",
  "Baseline tersimpan untuk monitoring berkelanjutan",
  "Treatment berikutnya disesuaikan berdasarkan data nyata",
];

/* ----------------------------------------------------------------- shared -- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow mb-3">{children}</p>;
}

/* ------------------------------------------------------------------- page -- */

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <SectionNav />
      <main id="main">
        {/* ===================================================== 4.1 HERO === */}
        <section className="hero-bg relative overflow-hidden pb-20 pt-36 lg:pb-28 lg:pt-44">
          <div className="relative mx-auto grid max-w-content items-center gap-12 px-5 lg:grid-cols-2 lg:px-8 xl:px-0">
            <div className="animate-fade-up">
              <Eyebrow>Teknologi Hayyu Skin Clinic</Eyebrow>
              <h1 className="font-light leading-[1.08] tracking-tight text-ink text-[clamp(2.4rem,6vw,4.4rem)]">
                <span className="accent">International Smart</span> Skin Technology
              </h1>
              <p className="mt-4 text-[16px] uppercase tracking-[0.5em] text-muted">
                I · S · S · T
              </p>
              <p className="mt-7 max-w-xl text-[16px] leading-relaxed text-body">
                Sistem pendekatan perawatan kulit eksklusif Hayyu — menggabungkan
                formula berstandar internasional, metode kombinasi cerdas berbasis
                diagnosa, dan pengukuran hasil yang objektif dan terukur.
              </p>
              <a href="https://hayyu.id/reservasi" className="btn-primary mt-9">
                Reservasi Konsultasi
              </a>
            </div>

            <div className="relative animate-fade-up lg:pl-6">
              <ImagePlaceholder
                ratio="aspect-[4/5]"
                alt="Pasien wanita berhijab sedang berkonsultasi tentang kondisi kulit bersama dokter di ruang perawatan Hayyu Skin Clinic"
                filename="hero-konsultasi-kulit.png"
              />
            </div>
          </div>
        </section>

        {/* ============================================== 4.2 WHAT IS ISST === */}
        <section id="apa-itu-isst" className="scroll-mt-28 px-5 py-20 lg:py-24">
          <Reveal className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-2 lg:px-8 xl:px-0">
            <div>
              <Eyebrow>Apa itu ISST?</Eyebrow>
              <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(1.9rem,3.5vw,2.9rem)]">
                Bukan Sekadar Alat. <span className="accent">Sebuah Sistem.</span>
              </h2>
              <p className="mt-6 text-body">
                ISST — International Smart Skin Technology — adalah framework
                perawatan kulit eksklusif yang dikembangkan Hayyu Skin Clinic. Ini
                bukan nama satu alat atau satu prosedur, melainkan sistem menyeluruh
                yang menentukan bagaimana setiap pasien didiagnosis, dirawat, dan
                diukur hasilnya.
              </p>
              <p className="mt-4 text-body">
                ISST terdiri dari empat pilar yang bekerja bersama — dari pemilihan
                bahan dan alat berstandar internasional, hingga cara dokter merancang
                kombinasi treatment yang paling tepat, hingga cara hasil diukur secara
                objektif menggunakan teknologi imaging medis.
              </p>

              <div className="mt-8 rounded-r-xl border-l-[3px] border-primary bg-primary-50/70 px-7 py-6">
                <p className="eyebrow mb-3">Prinsip Dasar ISST</p>
                <p className="text-[16px] text-body">
                  Perawatan kulit yang efektif harus dimulai dari data yang akurat,
                  bukan dari asumsi. Setiap keputusan treatment di Hayyu — jenis
                  peeling, laser, kombinasi prosedur, rekomendasi Clinic Skincare —
                  didasarkan pada kondisi kulit yang terukur secara objektif dan
                  program yang dirancang personal untuk setiap pasien.
                </p>
              </div>
            </div>

            <div className="lg:pl-6">
              <ImagePlaceholder
                ratio="aspect-[4/3]"
                alt="Dokter Hayyu meninjau hasil analisis kulit pasien pada layar monitor di ruang konsultasi"
                filename="isst-tinjau-analisis-layar.png"
              />
            </div>
          </Reveal>
        </section>

        {/* ================================================== 4.3 4 PILAR === */}
        <section id="pilar" className="scroll-mt-28 bg-surface/60 py-20 lg:py-24">
          <div className="mx-auto max-w-content px-5 lg:px-8 xl:px-0">
            <Eyebrow>4 Pilar ISST</Eyebrow>
            <h2 className="max-w-3xl font-light leading-tight tracking-tight text-ink text-[clamp(1.9rem,3.5vw,2.9rem)]">
              Empat Hal yang Membuat{" "}
              <span className="accent">Perawatan Lebih Terukur</span>
            </h2>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {pillars.map((p, index) => (
                <Reveal key={p.num} delay={index * 80}>
                <article className="pillar-card group/pillar relative h-full overflow-hidden rounded-2xl bg-white p-9 ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white hover:shadow-xl hover:shadow-primary/20 hover:ring-primary/20 [&_.accent]:transition-colors [&_.accent]:duration-300">
                  <span
                    className="pointer-events-none absolute -right-2 -top-4 select-none font-light leading-none text-primary/[0.07] transition-colors duration-300 text-[110px] group-hover/pillar:text-white/10"
                    aria-hidden="true"
                  >
                    {p.num}
                  </span>

                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-primary-50 text-primary transition-colors duration-300 group-hover/pillar:bg-white/15 group-hover/pillar:text-white">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      {p.icon}
                    </svg>
                  </span>

                  <h3 className="relative mt-6 text-[clamp(1.25rem,2vw,1.5rem)] font-normal leading-snug text-ink transition-colors duration-300 group-hover/pillar:text-white">
                    {p.title}
                  </h3>
                  <p className="relative mt-3 text-[15px] leading-relaxed text-muted transition-colors duration-300 group-hover/pillar:text-white/75">
                    {p.body}
                  </p>
                  <span className="relative mt-5 inline-block border-b border-primary/40 pb-0.5 text-[12px] font-medium uppercase tracking-[0.16em] text-primary transition-colors duration-300 group-hover/pillar:border-white/40 group-hover/pillar:text-white">
                    {p.tag}
                  </span>
                </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ 4.4 SRP INTEGRATION === */}
        <section
          id="srp"
          className="relative scroll-mt-28 overflow-hidden bg-primary bg-cover bg-center bg-no-repeat pb-24 text-white lg:pb-36"
          style={{ backgroundImage: "url('/images/srp-section-bg.png')" }}
        >
          <Reveal>
            <div className="hidden">
              <div>
                <p className="mb-3 text-[12px] font-medium uppercase tracking-eyebrow text-white/90">
                  Pilar 02 — Implementasi Nyata
                </p>
                <h2 className="max-w-4xl font-light leading-tight tracking-tight text-white text-[clamp(1.9rem,3.5vw,2.9rem)]">
                  Smart Combo Treatment Diwujudkan Melalui{" "}
                  <span className="italic font-light text-white/95 underline decoration-white/35 decoration-1 underline-offset-[6px]">
                    Skin Resolve Programme
                  </span>
                </h2>

                <div className="mt-7 max-w-4xl space-y-5 text-[16px] leading-relaxed text-white/90">
                  <p>
                    Konsep &quot;Smart Combo Treatment&quot; dalam ISST bukan hanya
                    filosofi — ia diwujudkan secara konkret melalui Skin Resolve
                    Programme (SRP), sistem tata laksana eksklusif yang dikembangkan tim
                    Research &amp; Development Hayyu.
                  </p>
                  <p>
                    Dalam SRP, dokter tidak memilihkan treatment berdasarkan menu atau
                    tren. Setelah analisis kulit dengan QuantifiCare dan anamnesa lengkap,
                    dokter memasukkan diagnosa ke dalam sistem — dan program kombinasi
                    treatment yang paling tepat muncul secara otomatis, disesuaikan dengan
                    kondisi unik kulit setiap pasien.
                  </p>
                </div>
              </div>

              <ImagePlaceholder
                ratio="aspect-[4/5]"
                className="mx-auto w-full max-w-sm rounded-[1.25rem] ring-white/10 lg:mt-10"
                alt="Dokter Hayyu menjelaskan rencana perawatan personal melalui tablet saat konsultasi"
                filename="hero-konsultasi-kulit.png"
              />
            </div>

            <SrpJourney stages={srpStages} steps={srpFlow} />
          </Reveal>
        </section>

        {/* ================================================ 4.5 QUANTIFICARE === */}
        <section
          id="quantificare"
          className="relative scroll-mt-28 overflow-hidden bg-white bg-cover bg-center bg-no-repeat pb-20 pt-28 lg:pb-32 lg:pt-40"
          style={{ backgroundImage: "url('/images/quantificare-section-bg.png')" }}
        >
          <Reveal className="mx-auto grid max-w-content items-start gap-12 px-5 lg:grid-cols-2 lg:px-8 xl:px-0">
            <div>
              <Eyebrow>Pilar 04 — Teknologi Pengukuran</Eyebrow>
              <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(1.9rem,3.5vw,2.9rem)]">
                QuantifiCare LifeViz
                <span className="accent mt-1 block">Imaging 3D dari Prancis</span>
              </h2>
              <p className="mt-6 text-body">
                Hayyu menggunakan QuantifiCare LifeViz, sistem imaging kulit 3D yang
                dikembangkan di Prancis sejak 2003 dan dipakai oleh dermatologis, ahli
                bedah plastik, dan peneliti klinis di lebih dari 50 negara.
              </p>
              <p className="mt-4 text-body">
                Teknologi ini memungkinkan dokter Hayyu menganalisis kondisi kulit
                secara objektif — mengukur kerutan, pori-pori, pigmentasi, oiliness,
                dan perubahan volume wajah dalam 3D — sebelum menentukan treatment yang
                paling tepat. Hasil treatment juga bisa dibandingkan secara objektif
                dari kunjungan ke kunjungan.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {qcStats.map((s) => (
                  <div
                    key={s.value}
                    className="rounded-xl bg-primary px-5 py-6 text-center text-white"
                  >
                    <p className="font-light text-[34px] leading-none">
                      <StatCounter value={s.value} />
                    </p>
                    <p className="mt-3 text-[12px] leading-snug text-white/84">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pl-6">
              <ImagePlaceholder
                ratio="aspect-[6/5]"
                alt="Perangkat QuantifiCare LifeViz dan visualisasi hasil pemindaian kulit wajah 3D di layar"
                filename="quantificare-lifeviz-3d.png"
              />
            </div>
          </Reveal>

          <Reveal className="mx-auto max-w-content px-5 lg:px-8 xl:px-0">
            <QuantificareExplorer parameters={qcParameters} />
          </Reveal>
        </section>

        {/* ============================================ 4.6 HOW ISST WORKS === */}
        <section id="cara-kerja" className="scroll-mt-28 bg-surface/60 py-20 lg:py-24">
          <div className="mx-auto max-w-prose px-5 lg:px-8">
            <Eyebrow>Cara Kerja ISST</Eyebrow>
            <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(1.9rem,3.5vw,2.9rem)]">
              Dari Analisis ke Hasil —{" "}
              <span className="accent">Semua dalam Satu Sistem</span>
            </h2>

            <Reveal>
              <TimelineExplorer steps={timeline} />
            </Reveal>

            <ol className="sr-only">
              {timeline.map((step, i) => (
                <li key={i} className="relative mb-11 last:mb-0">
                  <span
                    className="absolute -left-[42px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary ring-4 ring-surface"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-primary">
                    {step.label}
                  </p>
                  <h3 className="mt-1.5 text-[clamp(1.15rem,2vw,1.45rem)] font-normal text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================================================ 4.7 COMPARISON === */}
        <section id="perbandingan" className="mx-auto max-w-content scroll-mt-28 px-5 py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Perbedaan yang Dirasakan</Eyebrow>
            <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(1.9rem,3.5vw,2.9rem)]">
              Dengan vs Tanpa <span className="accent">ISST</span>
            </h2>
          </div>

          <ComparisonTabs
            left={{ title: "Tanpa ISST", items: comparisonLeft }}
            right={{ title: "Dengan ISST â€” Hayyu", items: comparisonRight }}
          />

          <div className="hidden">
            {/* Dengan ISST — emphasized teal */}
            <div className="rounded-2xl bg-primary p-8 text-white shadow-xl shadow-primary/20">
              <h3 className="mb-5 border-b border-white/15 pb-3 text-[13px] font-semibold uppercase tracking-[0.16em] text-white/90">
                Dengan ISST — Hayyu
              </h3>
            </div>
          </div>
        </section>

        {/* ================================================ 4.8 PULL QUOTE === */}
        <section className="relative overflow-hidden bg-[#006462] text-white">
          {/* Brand wave decorations */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
          >
            {/* Flowing ribbon — top-left */}
            <Image
              src="/images/quote-wave-corner.png"
              alt=""
              width={1040}
              height={920}
              className="absolute -top-px left-0 w-[230px] sm:w-[300px] lg:w-[440px]"
            />
            {/* Rolling humps + diagonal — bottom */}
            <Image
              src="/images/quote-wave-humps.png"
              alt=""
              width={2250}
              height={578}
              className="absolute -bottom-px left-0 w-full lg:w-[120%] lg:left-auto lg:-right-[6%]"
            />
            {/* Soft halo behind the portrait */}
            <div className="absolute bottom-0 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-white/[0.045] blur-3xl lg:left-[26%] lg:h-[520px] lg:w-[520px]" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-[560px] max-w-content flex-col px-5 pt-16 sm:px-8 lg:grid lg:min-h-[560px] lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:gap-6 lg:px-8 lg:pt-0 xl:px-0">
            {/* PORTRAIT */}
            <div className="order-2 mt-10 flex w-full justify-center self-end lg:order-1 lg:mt-0 lg:justify-end">
              <div className="relative h-[340px] w-[238px] sm:h-[390px] sm:w-[274px] lg:h-[516px] lg:w-[352px]">
                <Image
                  src="/images/hayyu-quote-portrait.png"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 352px, 274px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            {/* QUOTE */}
            <figure className="order-1 self-center lg:order-2 lg:py-16 lg:pl-2">
              <span
                aria-hidden="true"
                className="block select-none font-serif text-[92px] leading-[0.55] text-white/30 sm:text-[112px] lg:text-[132px]"
              >
                &ldquo;
              </span>
              <blockquote className="mt-5 max-w-[680px] text-[clamp(1.2rem,4.6vw,1.38rem)] font-light italic leading-[1.7] text-white/95 lg:mt-6 lg:text-[clamp(1.45rem,2.05vw,1.9rem)] lg:leading-[1.6]">
                ISST bukan tentang teknologi yang canggih demi kecanggihan itu
                sendiri. Ini tentang memastikan setiap wanita yang datang ke Hayyu
                mendapatkan perawatan yang benar-benar tepat untuk kondisi unik
                kulitnya — terukur, aman, dan tanpa menyalahi fitrahnya.
              </blockquote>
            </figure>
          </div>
        </section>

        {/* ======================================================= 4.9 CTA === */}
        <section className="mx-auto max-w-content px-5 py-20 lg:px-8 xl:px-0 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center lg:px-8">
            <div
              className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/[0.06]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/[0.05]"
              aria-hidden="true"
            />
            <div className="relative mx-auto max-w-xl">
              <p className="mb-3 text-[12px] font-medium uppercase tracking-eyebrow text-white/90">
                Rasakan Perbedaannya
              </p>
              <h2 className="font-light italic leading-tight text-white text-[clamp(1.7rem,3vw,2.4rem)]">
                Mulai dengan Analisis Kulit yang Sesungguhnya
              </h2>
              <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-white/90">
                Konsultasi di Hayyu dimulai dari analisis kulit menggunakan
                QuantifiCare — data nyata sebagai fondasi Skin Resolve Programme yang
                tepat untukmu.
              </p>
              <a
                href="https://hayyu.id/reservasi"
                className="mt-9 inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-[14px] font-medium uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
              >
                Reservasi Konsultasi
              </a>
            </div>
          </div>
        </section>
      </main>
      <StickyConsultCta />
      <Footer />
    </>
  );
}
