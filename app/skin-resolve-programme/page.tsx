import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import StickyConsultCta from "../components/StickyConsultCta";
import FaqAccordion from "./FaqAccordion";
import { externalProjectLinkProps } from "../components/siteData";

/* ------------------------------------------------------------------ meta -- */

export const metadata: Metadata = {
  title: "Skin Resolve Programme | Hayyu Skin Clinic",
  description:
    "Skin Resolve Programme (SRP) adalah sistem perawatan kulit terstruktur dan personal di Hayyu Skin Clinic. Berbasis diagnosa dokter, analisis QuantifiCare, dan tiga stage program yang disesuaikan kondisi unik kulit setiap pasien.",
  metadataBase: new URL("https://hayyu.id"),
  alternates: { canonical: "/skin-resolve-programme" },
  openGraph: {
    title: "Skin Resolve Programme | Hayyu Skin Clinic",
    description:
      "Skin Resolve Programme (SRP) adalah sistem perawatan kulit terstruktur dan personal di Hayyu Skin Clinic. Berbasis diagnosa dokter, analisis QuantifiCare, dan tiga stage program yang disesuaikan kondisi unik kulit setiap pasien.",
    url: "https://hayyu.id/skin-resolve-programme",
    siteName: "Hayyu Skin Clinic",
    locale: "id_ID",
    type: "website",
  },
};

/* ------------------------------------------------------------------ data -- */

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  name: "Skin Resolve Programme",
  alternateName: "SRP",
  description:
    "Skin Resolve Programme (SRP) adalah sistem perawatan kulit terstruktur eksklusif Hayyu Skin Clinic. Dimulai dari analisis kulit menggunakan QuantifiCare, dilanjutkan diagnosa dokter, lalu program tata laksana yang dipersonalisasi dalam 3 stage: Main Problem, Additional Problem, dan Maintenance/Anti-Aging. Setiap pasien mendapatkan rekomendasi treatment dan produk yang disesuaikan dengan kondisi kulit masing-masing, dengan progres yang dipantau dari kunjungan ke kunjungan.",
  provider: {
    "@type": "MedicalBusiness",
    name: "Hayyu Skin Clinic",
    url: "https://hayyu.id",
  },
  recognizingAuthority: {
    "@type": "Organization",
    name: "Hayyu Skin Clinic Research and Development Department",
  },
};

const RESERVATION_URL = "https://hayyu.id/reservasi";

const chapters = [
  { label: "Apa Itu", href: "#apa-itu-srp" },
  { label: "Journey", href: "#customer-journey" },
  { label: "3 Stage", href: "#stage-program" },
  { label: "Konsultasi", href: "#proses-konsultasi" },
  { label: "Efektivitas", href: "#efektivitas" },
  { label: "FAQ", href: "#faq" },
];

const heroStats = [
  { value: "3", label: "Stage program terstruktur" },
  { value: "Personal", label: "Disesuaikan dengan kondisi kulit" },
  { value: "Data", label: "Progres dipantau dari kunjungan ke kunjungan" },
  { value: "✓", label: "Pendampingan pasca treatment oleh tim Hayyu" },
];

const journeySteps = [
  {
    num: "01",
    icon: "calendar",
    title: "Reservasi & Registrasi",
    desc: "Booking via HayyuDoc atau WhatsApp. Tidak ada antrian panjang.",
  },
  {
    num: "02",
    icon: "scan",
    title: "Skin Analyzer",
    desc: "QuantifiCare LifeViz menganalisis kondisi kulit secara objektif sebelum konsultasi.",
  },
  {
    num: "03",
    icon: "consult",
    title: "Konsultasi Dokter",
    desc: "Dokter review history, anamnesa, physical diagnose, dan jelaskan hasil skin analyzer.",
  },
  {
    num: "04",
    icon: "program",
    title: "Skin Resolve Programme",
    desc: "Dokter menentukan stage dan diagnosa. Program tata laksana muncul otomatis.",
  },
  {
    num: "05",
    icon: "check",
    title: "Pilih Program",
    desc: "Customer menyetujui program. Dokter menentukan kombinasi treatment terbaik untuk hari itu.",
  },
  {
    num: "06",
    icon: "sparkle",
    title: "Tindakan",
    desc: "Treatment dilakukan di ruang privat oleh dokter dan asisten wanita terlatih.",
  },
  {
    num: "07",
    icon: "document",
    title: "Medical Record",
    desc: "Dokter mengisi rekam medis, petunjuk produk pasca treatment, dan jadwal kontrol.",
  },
  {
    num: "08",
    icon: "support",
    title: "Pendampingan",
    desc: "Hayyu menghubungi kamu setelah treatment dan memastikan jadwal kontrol berikutnya. Kamu tidak sendirian dalam proses ini.",
  },
];

const stages = [
  {
    num: "01",
    icon: "target",
    badge: "Stage 1",
    accentBorder: "border-t-gold",
    title: "Main",
    accentWord: "Problem",
    body: "Fokus pada masalah kulit utama yang paling mengganggu dan membutuhkan penanganan prioritas — jerawat aktif, flek melasma, hiperpigmentasi, atau kondisi kulit lain yang dominan. Program di stage ini membantu dokter memahami prioritas perawatan, bukan sekadar memilih treatment dari menu.",
  },
  {
    num: "02",
    icon: "layers",
    badge: "Stage 2",
    accentBorder: "border-t-primary-500",
    title: "Additional",
    accentWord: "Problem",
    body: "Setelah masalah utama lebih terkontrol, program bergerak ke masalah sekunder — bekas jerawat, ketidakmerataan warna kulit, tekstur, atau kondisi lain yang perlu dioptimalkan. Stage ini membantu perawatan berjalan lebih bertahap dan realistis.",
  },
  {
    num: "03",
    icon: "leaf",
    badge: "Stage 3",
    accentBorder: "border-t-primary-100",
    title: "Maintenance &",
    accentWord: "Anti-Aging",
    body: "Ketika kondisi kulit sudah optimal, program beralih ke maintenance — menjaga hasil yang sudah dicapai dan mencegah tanda-tanda penuaan dini. Stage ini adalah investasi jangka panjang untuk kulit yang sehat dan terawat di masa mendatang.",
  },
];

const consultationTimeline = [
  {
    icon: "history",
    eyebrow: "Sebelum Masuk Ruang Konsul",
    title: "Dokter Review Riwayatmu",
    desc: "Dokter memeriksa history customer di sistem sebelum kamu masuk — treatment sebelumnya, diagnosa, produk yang dipakai. Kamu tidak perlu mengulang cerita dari awal setiap kali datang.",
  },
  {
    icon: "consult",
    eyebrow: "Di Ruang Konsultasi",
    title: "Anamnesa & Physical Diagnose",
    desc: "Dokter menanyakan keluhan utama, menggali faktor penyebab, dan memeriksa kulit langsung. Bukan hanya melihat — tapi memahami konteks kondisi kulitmu secara menyeluruh.",
  },
  {
    icon: "eye",
    eyebrow: "Penjelasan Berbasis Visual",
    title: "Kamu Ikut Melihat & Memahami",
    desc: "Dokter menjelaskan kondisi kulitmu menggunakan hasil QuantifiCare dan gambar peraga fisiologi kulit — bukan hanya bilang \"kulitmu bermasalah\" tapi menunjukkan dengan data apa yang sebenarnya terjadi di lapisan kulitmu.",
  },
  {
    icon: "program",
    eyebrow: "Masuk ke SRP",
    title: "Diagnosa → Program Otomatis Muncul",
    desc: "Dokter memasukkan diagnosa ke sistem SRP. Secara otomatis muncul rekomendasi program tata laksana — lengkap dengan kombinasi treatment yang direkomendasikan dan Clinic Skincare yang sesuai. Semua transparan dan dijelaskan sebelum kamu memutuskan.",
  },
  {
    icon: "check",
    eyebrow: "Keputusan Ada di Tanganmu",
    title: "Pilih, Setujui, Mulai",
    desc: "Kamu memilih program yang sesuai. Dokter menentukan treatment yang dilakukan hari itu berdasarkan pilihanmu. Tidak ada yang dipaksakan — hanya rekomendasi berbasis data yang kamu setujui sendiri.",
  },
  {
    icon: "support",
    eyebrow: "Setelah Treatment",
    title: "Pendampingan Pasca Treatment",
    desc: "Dokter mengisi petunjuk pemakaian Clinic Skincare pasca treatment dan merekomendasikan jadwal kontrol berikutnya. Tim Hayyu menghubungi kamu beberapa hari setelah treatment untuk memastikan kondisi kulitmu baik — karena perjalanan perawatan tidak berhenti saat kamu keluar dari klinik.",
  },
];

const effectivenessCards = [
  {
    num: "01",
    icon: "target",
    accentBorder: "border-t-gold",
    title: "Tepat Sasaran",
    body: "Treatment dipilih berdasarkan diagnosa aktual — bukan perkiraan. Setiap prosedur punya alasan yang kuat mengapa ia tepat untuk kondisi kulitmu.",
  },
  {
    num: "02",
    icon: "synergy",
    accentBorder: "border-t-primary-500",
    title: "Kombinasi Sinergis",
    body: "Metode yang dikombinasikan dalam SRP dipilih karena mekanisme kerjanya saling mendukung — bukan dipilih secara acak atau karena sedang populer.",
  },
  {
    num: "03",
    icon: "chart",
    accentBorder: "border-t-primary-100",
    title: "Terukur & Terdokumentasi",
    body: "QuantifiCare mengukur kondisi kulit sebelum dan sesudah — sehingga perubahan bisa dilihat dalam data nyata, bukan hanya dirasakan secara subjektif.",
  },
];

/* ---------------------------------------------------------------- helpers -- */

/** Cohesive thin-stroke line icons, replacing the page's earlier emoji. */
const ICONS: Record<string, React.ReactNode> = {
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2.5" />
      <path d="M3.5 9.5h17M8 3.5v3M16 3.5v3" />
    </>
  ),
  scan: (
    <>
      <path d="M4 8.5V6.5A2.5 2.5 0 0 1 6.5 4h2M15.5 4h2A2.5 2.5 0 0 1 20 6.5v2M20 15.5v2a2.5 2.5 0 0 1-2.5 2.5h-2M8.5 20h-2A2.5 2.5 0 0 1 4 17.5v-2" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  consult: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5.5 20a6.5 6.5 0 0 1 13 0" />
    </>
  ),
  program: (
    <>
      <rect x="5" y="4.5" width="14" height="16" rx="2" />
      <path d="M9.5 4.5v-1h5v1M9 16.5V14M12 16.5v-5M15 16.5v-3.5" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.3 12 2.6 2.6 4.8-5.2" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 4.5l1.7 4.3 4.3 1.7-4.3 1.7L12 16.5l-1.7-4.3L6 10.5l4.3-1.7z" />
      <path d="M18 14.5l.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8z" />
    </>
  ),
  document: (
    <>
      <path d="M7 3.5h6.2L18 8.3V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z" />
      <path d="M13 3.7V8.5h4.6M9 13h6M9 16.5h6" />
    </>
  ),
  support: (
    <>
      <path d="M5 5.5h14a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H9.5L5 20.5V7A1.5 1.5 0 0 1 5 5.5z" />
      <path d="M12 9.4c.9-.9 2.4-.5 2.7.7.2.8-.4 1.6-1.1 2.2L12 13.8l-1.6-1.5c-.7-.6-1.3-1.4-1.1-2.2.3-1.2 1.8-1.6 2.7-.7z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  layers: (
    <>
      <path d="M12 4 3.5 8.5 12 13l8.5-4.5z" />
      <path d="m4 13 8 4.3 8-4.3" />
    </>
  ),
  leaf: (
    <>
      <path d="M5.5 18.5c-1-7 4-13 14.5-13.5C20.5 15 14.5 20 7 19c-.8-.1-1.4-.5-1.5-.5z" />
      <path d="M9 16c2.5-3.5 5.5-5.8 9-7" />
    </>
  ),
  synergy: (
    <>
      <circle cx="9.5" cy="12" r="5" />
      <circle cx="14.5" cy="12" r="5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19.5h16" />
      <path d="M7.5 19.5V11M12 19.5V6.5M16.5 19.5v-5" />
    </>
  ),
  eye: (
    <>
      <path d="M2.8 12s3.4-6.3 9.2-6.3S21.2 12 21.2 12s-3.4 6.3-9.2 6.3S2.8 12 2.8 12z" />
      <circle cx="12" cy="12" r="2.7" />
    </>
  ),
  history: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 7.5V12l3 1.8" />
    </>
  ),
};

function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-3 text-[14px] font-medium uppercase tracking-eyebrow ${
        light ? "text-white/80" : "text-primary"
      }`}
    >
      {children}
    </p>
  );
}

function Btn({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "light" | "outline";
}) {
  const cls =
    variant === "light"
      ? "bg-white text-primary hover:bg-cream"
      : variant === "outline"
        ? "border border-primary/25 bg-white/70 text-primary hover:bg-primary-50"
        : "bg-primary text-white hover:bg-primary-500";
  return (
    <a
      href={href}
      {...externalProjectLinkProps(href)}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-7 py-3 text-[15px] font-medium uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 ${cls}`}
    >
      {children}
    </a>
  );
}

function Plate({
  src,
  alt,
  ratio = "aspect-[4/5]",
  priority = false,
  caption,
  className = "",
}: {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  caption?: string;
  className?: string;
}) {
  return (
    <div
      className={`group relative ${ratio} overflow-hidden rounded-2xl bg-primary-50 ring-1 ring-primary/10 shadow-[0_24px_70px_rgba(0,100,98,0.14)] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 44vw, 100vw"
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-800/22 via-transparent to-white/10"
        aria-hidden="true"
      />
      {caption && (
        <span className="absolute bottom-4 left-4 rounded-full bg-white/85 px-4 py-1.5 text-[12px] font-medium uppercase tracking-[0.14em] text-primary backdrop-blur">
          {caption}
        </span>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------- page -- */

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-[16px] focus:text-white"
      >
        Lewati ke konten utama
      </a>

      <Navbar />

      <main id="main">
        {/* ====================================================== 4.1 HERO === */}
        <section className="hero-bg relative overflow-hidden pb-20 pt-40 lg:pb-24 lg:pt-52">
          {/* Faint "SRP" watermark */}
          <span
            className="pointer-events-none absolute bottom-0 right-0 select-none font-light leading-none text-primary/[0.07] text-[clamp(160px,28vw,320px)]"
            aria-hidden="true"
          >
            SRP
          </span>
          <div className="relative mx-auto max-w-content px-5 lg:px-8 xl:px-0">
            <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="animate-fade-up max-w-2xl">
                <Eyebrow>Sistem Perawatan Kulit Eksklusif Hayyu</Eyebrow>
                <h1 className="font-light leading-[1.08] tracking-tight text-ink text-[clamp(42px,6vw,74px)]">
                  Skin Resolve{" "}
                  <span className="italic font-light text-primary">Programme</span>
                </h1>
                <p className="mt-7 text-[18px] leading-relaxed text-body">
                  Bukan sekadar pilihan treatment. SRP adalah program tata laksana
                  kulit yang terstruktur, personal, dan berbasis diagnosa — dirancang
                  untuk membantu dokter menentukan langkah perawatan yang lebih terarah.
                  Hasil dapat berbeda pada setiap kulit, dan progresnya dipantau dari
                  kunjungan ke kunjungan.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <Btn href={RESERVATION_URL}>Reservasi Sekarang</Btn>
                  <Btn href="#customer-journey" variant="outline">
                    Lihat Cara Kerjanya
                  </Btn>
                </div>
              </div>

              <div className="animate-fade-up [animation-delay:120ms]">
                <Plate
                  src="/images/isst-tinjau-analisis-layar.png"
                  alt="Dokter Hayyu meninjau hasil analisis kulit sebagai awal Skin Resolve Programme"
                  ratio="aspect-[4/5]"
                  priority
                  caption="Diagnosa & Program"
                  className="mx-auto w-full max-w-[460px] lg:max-w-none"
                />
              </div>
            </div>

            {/* Stat row */}
            <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-primary/10 bg-white/80 px-5 py-6 text-center shadow-[0_18px_42px_rgba(0,100,98,0.09)] backdrop-blur-sm"
                >
                  <p className="font-light leading-none text-primary text-[clamp(32px,4vw,42px)]">
                    <StatCounter value={stat.value} />
                  </p>
                  <p className="mt-3 text-[14px] leading-snug text-body">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky chapter nav (desktop) — keeps a long page easy to move through. */}
        <nav
          aria-label="Navigasi bagian SRP"
          className="sticky top-[94px] z-30 hidden border-y border-primary/10 bg-white/82 backdrop-blur-md lg:block"
        >
          <div className="mx-auto flex max-w-content items-center justify-center gap-2 px-8 py-3">
            {chapters.map((chapter) => (
              <a
                key={chapter.href}
                href={chapter.href}
                className="rounded-md px-4 py-2 text-[14px] font-medium uppercase tracking-[0.16em] text-muted transition-colors hover:bg-primary-50 hover:text-primary"
              >
                {chapter.label}
              </a>
            ))}
          </div>
        </nav>

        {/* ============================================= 4.2 WHAT IS SRP === */}
        <section
          id="apa-itu-srp"
          className="scroll-mt-40 bg-cream px-5 py-20 lg:py-24"
        >
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal>
              <div className="grid gap-x-12 gap-y-6 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <Eyebrow>Apa itu Skin Resolve Programme?</Eyebrow>
                  <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(30px,calc(3vw_+_5px),46px)]">
                    Program Perawatan Kulit yang{" "}
                    <span className="accent">Punya Arah</span>
                  </h2>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[18px] leading-relaxed text-body">
                    Banyak orang pergi ke klinik kecantikan berkali-kali tapi tidak tahu
                    apakah kulitnya benar-benar membaik. Treatment dilakukan, tapi tidak
                    ada peta jalan yang jelas — tidak ada program, tidak ada target, tidak
                    ada ukuran keberhasilan.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 grid gap-x-12 gap-y-5 border-t border-primary/15 pt-10 text-[18px] leading-relaxed text-body lg:grid-cols-2">
                <p>
                  Skin Resolve Programme (SRP) adalah jawaban Hayyu untuk masalah ini.
                  SRP adalah sistem tata laksana perawatan kulit yang dikembangkan oleh
                  tim Research &amp; Development Hayyu — sebuah program terstruktur yang
                  dimulai dari diagnosa yang tepat, lalu menentukan jalur perawatan yang
                  paling efektif untuk kondisi kulit spesifik setiap pasien.
                </p>
                <p>
                  SRP berjalan di dalam aplikasi HayyuDoc dan dikelola langsung oleh
                  dokter di setiap sesi konsultasi. Setiap keputusan — treatment yang
                  dipilih, produk yang direkomendasikan, jadwal kontrol berikutnya —
                  semua tercatat dan termonitor dalam satu sistem yang berkesinambungan.
                </p>
              </div>
            </Reveal>

            {/* Perbedaan mendasar, as a two-card contrast. */}
            <Reveal className="mt-12">
              <p className="eyebrow mb-4">Perbedaan Mendasar</p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-primary/12 bg-white/70 p-7 lg:p-8">
                  <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-muted">
                    Klinik Lain
                  </p>
                  <p className="mt-4 text-[clamp(20px,2vw,25px)] font-light leading-snug text-ink">
                    Kamu memilih treatment dari menu.
                  </p>
                  <p className="mt-3 text-[16px] leading-relaxed text-muted">
                    Pilihan berangkat dari daftar layanan — belum tentu dari akar
                    masalah kulitmu.
                  </p>
                </div>
                <div className="relative overflow-hidden rounded-2xl bg-primary p-7 text-white lg:p-8">
                  <span
                    className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/[0.06]"
                    aria-hidden="true"
                  />
                  <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-gold">
                    Di Hayyu — dengan SRP
                  </p>
                  <p className="mt-4 text-[clamp(20px,2vw,25px)] font-light leading-snug">
                    Dokter membangun program untukmu.
                  </p>
                  <p className="mt-3 text-[16px] leading-relaxed text-white/82">
                    Berdasarkan kondisi aktual kulitmu — bukan berdasarkan treatment
                    yang sedang populer.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ========================================= 4.3 CUSTOMER JOURNEY === */}
        <section
          id="customer-journey"
          className="relative scroll-mt-40 overflow-hidden bg-primary-800 py-20 text-white lg:py-24"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #fff 0 1px, transparent 1px 28px)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-40 bottom-0 h-72 w-[40rem] -rotate-45 rounded-[72px] bg-white/[0.04]"
            aria-hidden="true"
          />

          <Reveal className="relative mx-auto max-w-content px-5 lg:px-8 xl:px-0">
            <div className="max-w-3xl">
              <Eyebrow light>Customer Journey</Eyebrow>
              <h2 className="font-light leading-tight tracking-tight text-white text-[clamp(30px,calc(3vw_+_5px),46px)]">
                Dari Datang hingga{" "}
                <span className="italic font-light text-gold">
                  Pulang — Semua Terstruktur
                </span>
              </h2>
              <p className="mt-5 text-[18px] leading-relaxed text-white/78">
                Delapan langkah yang sama untuk setiap customer — supaya tidak ada
                bagian dari perawatanmu yang terlewat atau ditebak-tebak.
              </p>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {journeySteps.map((step, index) => (
                <Reveal key={step.num} delay={index * 60}>
                  <article className="flex h-full flex-col gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition-colors hover:bg-white/[0.1]">
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-gold ring-1 ring-white/15">
                        <Icon name={step.icon} className="h-5 w-5" />
                      </span>
                      <span className="font-light leading-none text-white/30 text-[22px]">
                        {step.num}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[16px] font-medium leading-snug text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-snug text-white/70">
                        {step.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </section>

        {/* ========================================= 4.4 3 STAGE PROGRAM === */}
        <section
          id="stage-program"
          className="scroll-mt-40 bg-white px-5 py-20 lg:py-24"
        >
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal>
              <Eyebrow>3 Stage Program</Eyebrow>
              <h2 className="max-w-3xl font-light leading-tight tracking-tight text-ink text-[clamp(30px,calc(3vw_+_5px),46px)]">
                Perawatan yang Punya{" "}
                <span className="accent">Urutan dan Tujuan</span>
              </h2>
              <p className="mt-5 max-w-2xl text-[18px] leading-relaxed text-body">
                SRP tidak dimulai dari semua masalah sekaligus. Dokter menentukan
                stage yang paling tepat berdasarkan kondisi kulit aktual — memastikan
                setiap sesi treatment memiliki fokus yang jelas.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {stages.map((stage, index) => (
                <Reveal key={stage.num} delay={index * 80}>
                  <article
                    className={`flex h-full flex-col rounded-2xl border-t-[3px] bg-white p-8 ring-1 ring-black/5 transition-shadow hover:shadow-lg ${stage.accentBorder}`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary">
                        <Icon name={stage.icon} className="h-6 w-6" />
                      </span>
                      <span className="rounded-full border border-primary/20 px-3 py-1 text-[13px] font-medium uppercase tracking-[0.14em] text-primary">
                        {stage.badge}
                      </span>
                    </div>
                    <div className="mt-6 flex items-baseline gap-3">
                      <span className="font-light leading-none text-ink/15 text-[40px]">
                        {stage.num}
                      </span>
                      <h3 className="text-[clamp(21px,2vw,24px)] font-normal leading-snug text-ink">
                        {stage.title} <span className="accent">{stage.accentWord}</span>
                      </h3>
                    </div>
                    <p className="mt-4 flex-1 text-[17px] leading-relaxed text-body">
                      {stage.body}
                    </p>
                    {/* Cumulative progress — the program builds stage by stage. */}
                    <div className="mt-7 flex items-center gap-2" aria-hidden="true">
                      {[0, 1, 2].map((d) => (
                        <span
                          key={d}
                          className={`h-1.5 rounded-full transition-all ${
                            d <= index ? "w-7 bg-primary" : "w-1.5 bg-primary/20"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-[13px] font-medium uppercase tracking-[0.14em] text-muted">
                        {`${index + 1} / 3`}
                      </span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================================= 4.5 PROSES KONSULTASI DETAIL === */}
        <section
          id="proses-konsultasi"
          className="scroll-mt-40 bg-cream px-5 py-20 lg:py-24"
        >
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
              <Reveal>
                <div className="lg:sticky lg:top-32">
                  <Eyebrow>Detail Proses Konsultasi</Eyebrow>
                  <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(30px,calc(3vw_+_5px),46px)]">
                    Yang Terjadi Saat Kamu{" "}
                    <span className="accent">Duduk dengan Dokter Hayyu</span>
                  </h2>
                  <p className="mt-5 text-[18px] leading-relaxed text-body">
                    Bukan sekadar diperiksa sebentar lalu diberi resep. Inilah enam
                    momen yang kamu lewati di setiap sesi konsultasi.
                  </p>
                  <Plate
                    src="/images/isst-tinjau-analisis-layar.png"
                    alt="Dokter Hayyu menjelaskan kondisi kulit pasien menggunakan data analisis di layar"
                    ratio="aspect-[4/3]"
                    caption="Penjelasan berbasis data"
                    className="mt-8"
                  />
                </div>
              </Reveal>

              <Reveal delay={120}>
                <ol aria-label="Tahapan proses konsultasi">
                  {consultationTimeline.map((step, index) => {
                    const last = index === consultationTimeline.length - 1;
                    return (
                      <li key={index} className="flex gap-5">
                        <div className="flex flex-col items-center">
                          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary ring-1 ring-primary/15 shadow-sm">
                            <Icon name={step.icon} className="h-5 w-5" />
                          </span>
                          {!last && (
                            <span
                              className="my-2 w-px flex-1 bg-primary/20"
                              aria-hidden="true"
                            />
                          )}
                        </div>
                        <div className={last ? "" : "pb-10"}>
                          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-primary">
                            {step.eyebrow}
                          </p>
                          <h3 className="mt-1.5 text-[clamp(20px,2vw,24px)] font-normal leading-snug text-ink">
                            {step.title}
                          </h3>
                          <p className="mt-3 text-[17px] leading-relaxed text-body">
                            {step.desc}
                          </p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </Reveal>
            </div>
          </div>
        </section>

        {/* =========================================== 4.6 EFEKTIVITAS === */}
        <section
          id="efektivitas"
          className="scroll-mt-40 bg-white px-5 py-20 lg:py-24"
        >
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal>
              <div className="grid gap-x-12 gap-y-6 lg:grid-cols-12 lg:items-end">
                <div className="lg:col-span-7">
                  <Eyebrow>Efektivitas Sistem</Eyebrow>
                  <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(30px,calc(3vw_+_5px),46px)]">
                    Sistem yang Komprehensif,{" "}
                    <span className="accent">Hasil yang Nyata</span>
                  </h2>
                </div>
                <div className="lg:col-span-5">
                  <p className="text-[18px] leading-relaxed text-body">
                    SRP bukan hanya soal proses yang lebih teratur. Sistem yang mendalam
                    dan komprehensif ini membantu dokter memilih langkah yang lebih
                    sesuai dengan kondisi kulitmu.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-10 grid gap-x-12 gap-y-5 border-t border-primary/15 pt-10 text-[18px] leading-relaxed text-body lg:grid-cols-2">
                <p>
                  Karena treatment ditentukan berdasarkan diagnosa aktual — bukan asumsi
                  — setiap prosedur yang dilakukan benar-benar tepat sasaran. Kombinasi
                  treatment yang dipilih dokter melalui SRP dirancang untuk bekerja
                  bersama secara sinergis, saling mendukung untuk hasil yang paling
                  optimal.
                </p>
                <p>
                  Perubahan kulit dapat terlihat berbeda pada setiap orang. Karena itu,
                  dokter melihat kondisi awal, memilih treatment yang sesuai, lalu
                  mengevaluasi progresnya dari kunjungan ke kunjungan.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {effectivenessCards.map((card, index) => (
                <Reveal key={card.num} delay={index * 80}>
                  <article
                    className={`flex h-full flex-col rounded-2xl border-t-[3px] bg-surface/50 p-7 ring-1 ring-black/5 ${card.accentBorder}`}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-primary ring-1 ring-primary/10">
                      <Icon name={card.icon} className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 text-[clamp(20px,2vw,23px)] font-normal leading-snug text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[17px] leading-relaxed text-body">
                      {card.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================== 4.7 PULL QUOTE === */}
        <section className="bg-primary-800 py-16 lg:py-24">
          <Reveal>
            <figure className="relative mx-auto max-w-prose px-6 lg:px-8">
              <span
                className="pointer-events-none absolute -left-2 -top-10 select-none font-serif text-[120px] leading-none text-white/10"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="relative text-[clamp(21px,2vw,28px)] font-light italic leading-relaxed text-white/90">
                SRP bukan tentang menjual treatment sebanyak-banyaknya. SRP adalah
                tentang memastikan setiap treatment yang kamu jalani punya alasan yang
                jelas, tujuan yang terukur, dan progres yang bisa kamu pantau bersama dokter.
              </blockquote>
            </figure>
          </Reveal>
        </section>

        {/* ================================================== 4.8 FAQ === */}
        <section
          id="faq"
          className="scroll-mt-40 bg-cream px-5 py-20 lg:py-24"
        >
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <Reveal>
                <div className="lg:sticky lg:top-32">
                  <Eyebrow>Pertanyaan yang Sering Ditanyakan</Eyebrow>
                  <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(30px,calc(3vw_+_5px),46px)]">
                    Tentang{" "}
                    <span className="accent">Skin Resolve Programme</span>
                  </h2>
                  <p className="mt-5 text-[18px] leading-relaxed text-body">
                    Masih ada yang ingin kamu pastikan? Beberapa hal yang paling sering
                    ditanyakan calon customer Hayyu.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <FaqAccordion />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ================================================== 4.9 CTA === */}
        <section
          id="cta"
          className="scroll-mt-40 bg-primary-800 px-5 py-20 lg:py-24"
        >
          <Reveal>
            <div className="relative mx-auto max-w-content overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center lg:px-8 xl:px-0">
              {/* Decorative circles */}
              <div
                className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/[0.06]"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-white/[0.05]"
                aria-hidden="true"
              />

              <div className="relative mx-auto max-w-xl">
                <p className="mb-3 text-[14px] font-medium uppercase tracking-eyebrow text-white/80">
                  Mulai Program Kulitmu
                </p>
                <h2 className="font-light leading-tight text-white text-[clamp(29px,3vw,38px)]">
                  Perawatan yang Punya Arah Dimulai dari{" "}
                  <span className="italic text-gold">Satu Langkah</span>
                </h2>
                <p className="mx-auto mt-5 max-w-md text-[18px] leading-relaxed text-white/85">
                  Reservasi konsultasi pertamamu di Hayyu. Dokter akan melakukan skin
                  analysis, diagnosa, dan merancang Skin Resolve Programme yang tepat
                  untukmu.
                </p>
                <a
                  href={RESERVATION_URL}
                  {...externalProjectLinkProps(RESERVATION_URL)}
                  className="mt-9 inline-flex items-center justify-center rounded-md bg-white px-9 py-3.5 text-[16px] font-medium uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
                >
                  Reservasi Sekarang
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <StickyConsultCta />
      <Footer />
    </>
  );
}
