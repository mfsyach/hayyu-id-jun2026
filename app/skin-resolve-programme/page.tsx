import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import StickyConsultCta from "../components/StickyConsultCta";
import FaqAccordion from "./FaqAccordion";

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
    "Skin Resolve Programme (SRP) adalah sistem perawatan kulit terstruktur eksklusif Hayyu Skin Clinic. Dimulai dari analisis kulit menggunakan QuantifiCare, dilanjutkan diagnosa dokter, lalu program tata laksana yang dipersonalisasi dalam 3 stage: Main Problem, Additional Problem, dan Maintenance/Anti-Aging. Setiap pasien mendapatkan rekomendasi treatment dan produk yang disesuaikan kondisi kulit masing-masing, dengan sistem yang komprehensif sehingga hasil nyata bisa dirasakan bahkan sejak perawatan pertama.",
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

const heroStats = [
  { value: "3", label: "Stage program terstruktur" },
  { value: "100%", label: "Disesuaikan per pasien" },
  { value: "1x", label: "Hasil nyata terasa sejak perawatan pertama" },
  { value: "✓", label: "Pendampingan pasca treatment oleh tim Hayyu" },
];

const journeySteps = [
  {
    num: "01",
    icon: "📋",
    title: "Reservasi & Registrasi",
    desc: "Booking via HayyuDoc atau WhatsApp. Tidak ada antrian panjang.",
  },
  {
    num: "02",
    icon: "🔬",
    title: "Skin Analyzer",
    desc: "QuantifiCare LifeViz menganalisis kondisi kulit secara objektif sebelum konsultasi.",
  },
  {
    num: "03",
    icon: "👩‍⚕️",
    title: "Konsultasi Dokter",
    desc: "Dokter review history, anamnesa, physical diagnose, dan jelaskan hasil skin analyzer.",
  },
  {
    num: "04",
    icon: "📊",
    title: "Skin Resolve Programme",
    desc: "Dokter menentukan stage dan diagnosa. Program tata laksana muncul otomatis.",
  },
  {
    num: "05",
    icon: "✅",
    title: "Pilih Program",
    desc: "Customer menyetujui program. Dokter menentukan kombinasi treatment terbaik untuk hari itu.",
  },
  {
    num: "06",
    icon: "💆‍♀️",
    title: "Tindakan",
    desc: "Treatment dilakukan di ruang privat oleh dokter dan asisten wanita terlatih.",
  },
  {
    num: "07",
    icon: "📝",
    title: "Medical Record",
    desc: "Dokter mengisi rekam medis, petunjuk produk pasca treatment, dan jadwal kontrol.",
  },
  {
    num: "08",
    icon: "📱",
    title: "Pendampingan",
    desc: "Hayyu menghubungi kamu setelah treatment dan memastikan jadwal kontrol berikutnya. Kamu tidak sendirian dalam proses ini.",
  },
];

const stages = [
  {
    num: "01",
    badge: "Stage 1",
    accentBorder: "border-t-gold",
    title: "Main",
    accentWord: "Problem",
    body: "Fokus pada masalah kulit utama yang paling mengganggu dan membutuhkan penanganan prioritas — jerawat aktif, flek melasma, hiperpigmentasi, atau kondisi kulit lain yang dominan. Program di stage ini dirancang untuk menyelesaikan akar masalah, bukan hanya gejalanya.",
  },
  {
    num: "02",
    badge: "Stage 2",
    accentBorder: "border-t-primary-500",
    title: "Additional",
    accentWord: "Problem",
    body: "Setelah masalah utama tertangani atau terkontrol, program bergerak ke masalah sekunder — bekas jerawat, ketidakmerataan warna kulit, tekstur, atau kondisi lain yang perlu dioptimalkan. Stage ini membangun hasil yang lebih komprehensif.",
  },
  {
    num: "03",
    badge: "Stage 3",
    accentBorder: "border-t-primary-100",
    title: "Maintenance &",
    accentWord: "Anti-Aging",
    body: "Ketika kondisi kulit sudah optimal, program beralih ke maintenance — menjaga hasil yang sudah dicapai dan mencegah tanda-tanda penuaan dini. Stage ini adalah investasi jangka panjang untuk kulit yang sehat dan terawat di masa mendatang.",
  },
];

const consultationTimeline = [
  {
    eyebrow: "Sebelum Masuk Ruang Konsul",
    title: "Dokter Review Riwayatmu",
    desc: "Dokter memeriksa history customer di sistem sebelum kamu masuk — treatment sebelumnya, diagnosa, produk yang dipakai. Kamu tidak perlu mengulang cerita dari awal setiap kali datang.",
  },
  {
    eyebrow: "Di Ruang Konsultasi",
    title: "Anamnesa & Physical Diagnose",
    desc: "Dokter menanyakan keluhan utama, menggali faktor penyebab, dan memeriksa kulit langsung. Bukan hanya melihat — tapi memahami konteks kondisi kulitmu secara menyeluruh.",
  },
  {
    eyebrow: "Penjelasan Berbasis Visual",
    title: "Kamu Ikut Melihat & Memahami",
    desc: "Dokter menjelaskan kondisi kulitmu menggunakan hasil QuantifiCare dan gambar peraga fisiologi kulit — bukan hanya bilang \"kulitmu bermasalah\" tapi menunjukkan dengan data apa yang sebenarnya terjadi di lapisan kulitmu.",
  },
  {
    eyebrow: "Masuk ke SRP",
    title: "Diagnosa → Program Otomatis Muncul",
    desc: "Dokter memasukkan diagnosa ke sistem SRP. Secara otomatis muncul rekomendasi program tata laksana — lengkap dengan kombinasi treatment yang direkomendasikan dan Clinic Skincare yang sesuai. Semua transparan dan dijelaskan sebelum kamu memutuskan.",
  },
  {
    eyebrow: "Keputusan Ada di Tanganmu",
    title: "Pilih, Setujui, Mulai",
    desc: "Kamu memilih program yang sesuai. Dokter menentukan treatment yang dilakukan hari itu berdasarkan pilihanmu. Tidak ada yang dipaksakan — hanya rekomendasi berbasis data yang kamu setujui sendiri.",
  },
  {
    eyebrow: "Setelah Treatment",
    title: "Pendampingan Pasca Treatment",
    desc: "Dokter mengisi petunjuk pemakaian Clinic Skincare pasca treatment dan merekomendasikan jadwal kontrol berikutnya. Tim Hayyu menghubungi kamu beberapa hari setelah treatment untuk memastikan kondisi kulitmu baik — karena perjalanan perawatan tidak berhenti saat kamu keluar dari klinik.",
  },
];

const effectivenessCards = [
  {
    num: "01",
    accentBorder: "border-t-gold",
    title: "Tepat Sasaran",
    body: "Treatment dipilih berdasarkan diagnosa aktual — bukan perkiraan. Setiap prosedur punya alasan yang kuat mengapa ia tepat untuk kondisi kulitmu.",
  },
  {
    num: "02",
    accentBorder: "border-t-primary-500",
    title: "Kombinasi Sinergis",
    body: "Metode yang dikombinasikan dalam SRP dipilih karena mekanisme kerjanya saling mendukung — bukan dipilih secara acak atau karena sedang populer.",
  },
  {
    num: "03",
    accentBorder: "border-t-primary-100",
    title: "Terukur & Terdokumentasi",
    body: "QuantifiCare mengukur kondisi kulit sebelum dan sesudah — sehingga perubahan bisa dilihat dalam data nyata, bukan hanya dirasakan secara subjektif.",
  },
];

/* ---------------------------------------------------------------- helpers -- */

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-3 text-[12px] font-medium uppercase tracking-eyebrow ${
        light ? "text-white/80" : "text-primary"
      }`}
    >
      {children}
    </p>
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
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Lewati ke konten utama
      </a>

      <Navbar />

      <main id="main">
        {/* ====================================================== 4.1 HERO === */}
        <section className="hero-bg relative overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-52">
          {/* Faint "SRP" watermark */}
          <span
            className="pointer-events-none absolute bottom-0 right-0 select-none font-light leading-none text-primary/[0.07] text-[clamp(10rem,28vw,20rem)]"
            aria-hidden="true"
          >
            SRP
          </span>
          <div className="relative mx-auto max-w-content px-5 lg:px-8 xl:px-0">
            <div className="animate-fade-up max-w-3xl">
              <Eyebrow>Sistem Perawatan Kulit Eksklusif Hayyu</Eyebrow>
              <h1 className="font-light leading-[1.08] tracking-tight text-ink text-[clamp(2.6rem,6vw,4.6rem)]">
                Skin Resolve{" "}
                <span className="italic font-light text-primary">Programme</span>
              </h1>
              <p className="mt-7 max-w-2xl text-[16px] leading-relaxed text-body">
                Bukan sekadar pilihan treatment. SRP adalah program tata laksana
                kulit yang terstruktur, personal, dan berbasis diagnosa — dirancang
                untuk menyelesaikan masalah kulitmu secara sistematis dari akar.
                Sistem yang komprehensif ini menghasilkan efektivitas nyata yang bisa
                dirasakan bahkan sejak perawatan pertama.
              </p>
            </div>

            {/* Stat row */}
            <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-primary/10 bg-white/80 px-5 py-6 text-center shadow-[0_18px_42px_rgba(0,100,98,0.09)] backdrop-blur-sm"
                >
                  <p className="font-light leading-none text-primary text-[clamp(2rem,4vw,2.6rem)]">
                    <StatCounter value={stat.value} />
                  </p>
                  <p className="mt-3 text-[12px] leading-snug text-body">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================= 4.2 WHAT IS SRP === */}
        <section
          id="apa-itu-srp"
          className="scroll-mt-28 bg-cream px-5 py-20 lg:py-24"
        >
          <Reveal className="mx-auto max-w-prose lg:px-0">
            <Eyebrow>Apa itu Skin Resolve Programme?</Eyebrow>
            <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(1.9rem,3.5vw,2.9rem)]">
              Program Perawatan Kulit yang{" "}
              <span className="accent">Punya Arah</span>
            </h2>

            <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-body">
              <p>
                Banyak orang pergi ke klinik kecantikan berkali-kali tapi tidak tahu
                apakah kulitnya benar-benar membaik. Treatment dilakukan, tapi tidak
                ada peta jalan yang jelas — tidak ada program, tidak ada target, tidak
                ada ukuran keberhasilan.
              </p>
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

            {/* Highlight box */}
            <div className="mt-10 rounded-r-xl border-l-[3px] border-gold bg-primary-50/60 px-7 py-6">
              <p className="eyebrow mb-3">Perbedaan Mendasar</p>
              <p className="text-[16px] leading-relaxed text-body">
                Di klinik lain, kamu memilih treatment dari menu. Di Hayyu dengan SRP,
                dokter membangun program untukmu — berdasarkan kondisi aktual kulitmu,
                bukan berdasarkan treatment yang sedang populer.
              </p>
            </div>
          </Reveal>
        </section>

        {/* ========================================= 4.3 CUSTOMER JOURNEY === */}
        <section
          id="customer-journey"
          className="relative scroll-mt-28 overflow-hidden bg-primary-800 py-20 text-white lg:py-24"
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
            <Eyebrow light>Customer Journey</Eyebrow>
            <h2 className="max-w-3xl font-light leading-tight tracking-tight text-white text-[clamp(1.9rem,3.5vw,2.9rem)]">
              Dari Datang hingga{" "}
              <span className="italic font-light text-gold">
                Pulang — Semua Terstruktur
              </span>
            </h2>

            <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {journeySteps.map((step, index) => (
                <Reveal key={step.num} delay={index * 60}>
                  <article className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-6 transition-colors hover:bg-white/[0.1]">
                    <div className="flex items-center gap-3">
                      <span className="font-light leading-none text-white/40 text-[22px]">
                        {step.num}
                      </span>
                      <span className="text-[22px]" aria-hidden="true">
                        {step.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-[14px] font-medium leading-snug text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-[13px] leading-snug text-white/70">
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
          className="scroll-mt-28 bg-white px-5 py-20 lg:py-24"
        >
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal>
              <Eyebrow>3 Stage Program</Eyebrow>
              <h2 className="max-w-3xl font-light leading-tight tracking-tight text-ink text-[clamp(1.9rem,3.5vw,2.9rem)]">
                Perawatan yang Punya{" "}
                <span className="accent">Urutan dan Tujuan</span>
              </h2>
              <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-body">
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
                      <span className="font-light leading-none text-ink/15 text-[48px]">
                        {stage.num}
                      </span>
                      <span className="rounded-full border border-primary/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-primary">
                        {stage.badge}
                      </span>
                    </div>
                    <h3 className="mt-5 text-[clamp(1.2rem,2vw,1.4rem)] font-normal leading-snug text-ink">
                      {stage.title}{" "}
                      <span className="accent">{stage.accentWord}</span>
                    </h3>
                    <p className="mt-4 flex-1 text-[15px] leading-relaxed text-body">
                      {stage.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================================= 4.5 PROSES KONSULTASI DETAIL === */}
        <section
          id="proses-konsultasi"
          className="scroll-mt-28 bg-cream px-5 py-20 lg:py-24"
        >
          <Reveal className="mx-auto max-w-prose lg:px-0">
            <Eyebrow>Detail Proses Konsultasi</Eyebrow>
            <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(1.9rem,3.5vw,2.9rem)]">
              Yang Terjadi Saat Kamu{" "}
              <span className="accent">Duduk dengan Dokter Hayyu</span>
            </h2>
          </Reveal>

          <Reveal className="mx-auto mt-12 max-w-prose lg:px-0">
            <ol
              className="relative border-l-2 border-primary-100 pl-8"
              aria-label="Tahapan proses konsultasi"
            >
              {consultationTimeline.map((step, index) => (
                <li
                  key={index}
                  className={`relative ${index < consultationTimeline.length - 1 ? "mb-12" : ""}`}
                >
                  {/* Dot on the timeline line */}
                  <span
                    className="absolute -left-[37px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary ring-4 ring-cream"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>

                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                    {step.eyebrow}
                  </p>
                  <h3 className="mt-1.5 text-[clamp(1.1rem,2vw,1.35rem)] font-normal leading-snug text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-body">
                    {step.desc}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        {/* =========================================== 4.6 EFEKTIVITAS === */}
        <section
          id="efektivitas"
          className="scroll-mt-28 bg-white px-5 py-20 lg:py-24"
        >
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal className="max-w-prose">
              <Eyebrow>Efektivitas Sistem</Eyebrow>
              <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(1.9rem,3.5vw,2.9rem)]">
                Sistem yang Komprehensif,{" "}
                <span className="accent">Hasil yang Nyata</span>
              </h2>

              <div className="mt-6 space-y-5 text-[16px] leading-relaxed text-body">
                <p>
                  SRP bukan hanya soal proses yang lebih teratur. Sistem yang mendalam
                  dan komprehensif ini berdampak langsung pada efektivitas hasil
                  perawatan.
                </p>
                <p>
                  Karena treatment ditentukan berdasarkan diagnosa aktual — bukan asumsi
                  — setiap prosedur yang dilakukan benar-benar tepat sasaran. Kombinasi
                  treatment yang dipilih dokter melalui SRP dirancang untuk bekerja
                  bersama secara sinergis, saling mendukung untuk hasil yang paling
                  optimal.
                </p>
                <p>
                  Hasilnya: banyak customer Hayyu merasakan perubahan nyata pada kondisi
                  kulitnya bahkan sejak perawatan pertama. Bukan karena janji instan —
                  tapi karena sejak awal, treatment yang diberikan memang yang paling
                  tepat untuk kondisi kulit mereka.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {effectivenessCards.map((card, index) => (
                <Reveal key={card.num} delay={index * 80}>
                  <article
                    className={`flex h-full flex-col rounded-2xl border-t-[3px] bg-surface/50 p-7 ring-1 ring-black/5 ${card.accentBorder}`}
                  >
                    <span className="font-light leading-none text-ink/15 text-[36px]">
                      {card.num}
                    </span>
                    <h3 className="mt-4 text-[clamp(1.1rem,2vw,1.3rem)] font-normal leading-snug text-ink">
                      {card.title}
                    </h3>
                    <p className="mt-3 flex-1 text-[15px] leading-relaxed text-body">
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
              <blockquote className="relative text-[clamp(1.2rem,2.4vw,1.65rem)] font-light italic leading-relaxed text-white/90">
                SRP bukan tentang menjual treatment sebanyak-banyaknya. SRP adalah
                tentang memastikan setiap treatment yang kamu jalani punya alasan yang
                jelas, tujuan yang terukur, dan hasil yang bisa kamu lihat sendiri.
              </blockquote>
            </figure>
          </Reveal>
        </section>

        {/* ================================================== 4.8 FAQ === */}
        <section
          id="faq"
          className="scroll-mt-28 bg-cream px-5 py-20 lg:py-24"
        >
          <Reveal className="mx-auto max-w-prose lg:px-0">
            <Eyebrow>Pertanyaan yang Sering Ditanyakan</Eyebrow>
            <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(1.9rem,3.5vw,2.9rem)]">
              Tentang{" "}
              <span className="accent">Skin Resolve Programme</span>
            </h2>
          </Reveal>

          <div className="mx-auto mt-10 max-w-prose lg:px-0">
            <FaqAccordion />
          </div>
        </section>

        {/* ================================================== 4.9 CTA === */}
        <section
          id="cta"
          className="scroll-mt-28 bg-primary-800 px-5 py-20 lg:py-24"
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
                <p className="mb-3 text-[12px] font-medium uppercase tracking-eyebrow text-white/80">
                  Mulai Program Kulitmu
                </p>
                <h2 className="font-light leading-tight text-white text-[clamp(1.7rem,3vw,2.4rem)]">
                  Perawatan yang Punya Arah Dimulai dari{" "}
                  <span className="italic text-gold">Satu Langkah</span>
                </h2>
                <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed text-white/85">
                  Reservasi konsultasi pertamamu di Hayyu. Dokter akan melakukan skin
                  analysis, diagnosa, dan merancang Skin Resolve Programme yang tepat
                  untukmu.
                </p>
                <a
                  href="https://hayyu.id/reservasi"
                  className="mt-9 inline-flex items-center justify-center rounded-md bg-white px-9 py-3.5 text-[14px] font-medium uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
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
