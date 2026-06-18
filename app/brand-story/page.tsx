import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import StickyConsultCta from "../components/StickyConsultCta";
import { BASE, externalProjectLinkProps } from "../components/siteData";

export const metadata: Metadata = {
  title: "Brand Story | Hayyu Skin Clinic",
  description:
    "Kisah Hayyu Skin Clinic — klinik kecantikan khusus wanita yang bermula dari pertanyaan sederhana seorang dokter, dan berkembang menjadi nilai yang melampaui batas.",
  metadataBase: new URL("https://hayyu.id"),
  alternates: { canonical: "/brand-story" },
  openGraph: {
    title: "Brand Story | Hayyu Skin Clinic",
    description:
      "Dari satu keresahan, lahir satu gerakan. Kisah Hayyu Skin Clinic dan nilai yang menjaga pertumbuhannya.",
    url: "https://hayyu.id/brand-story",
    siteName: "Hayyu Skin Clinic",
    locale: "id_ID",
    type: "website",
  },
};

const RESERVASI = `${BASE}/reservasi`;

const chapters = [
  { label: "Awal Mula", href: "#awal-mula" },
  { label: "Nilai yang Menjadi Akar", href: "#nilai" },
  { label: "Evolusi Brand", href: "#evolusi-brand" },
  { label: "Perjalanan", href: "#perjalanan" },
  { label: "Yang Tidak Berubah", href: "#nilai-tetap" },
];

const timeline = [
  {
    year: "2017",
    title: "Klinik Pertama Berdiri di Surabaya",
    desc: "dr. Ratna mendirikan Hayyu sebagai klinik kecantikan khusus wanita pertama di Indonesia yang mengedepankan kehalalan, privasi, dan perawatan berbasis kesehatan kulit — bukan kecantikan instan.",
    image: "/images/hero-konsultasi-kulit.png",
    alt: "Ruang konsultasi Hayyu Skin Clinic sebagai representasi awal perjalanan klinik di Surabaya",
  },
  {
    year: "2018",
    title: "Ekspansi & Sistem Kemitraan",
    desc: "Kepercayaan customer tumbuh. Hayyu membuka cabang di Sidoarjo dan mulai membuka peluang investasi bagi mitra yang percaya pada visi yang sama.",
    image: "/images/isst-tinjau-analisis-layar.png",
    alt: "Dokter Hayyu meninjau hasil analisis kulit sebagai representasi sistem dan standar layanan",
  },
  {
    year: "2019–2022",
    title: "Hadir di Malang, Tangerang, Bekasi, Depok",
    desc: "Hayyu hadir di kota-kota besar Jawa dan Jabodetabek. Setiap cabang membawa standar yang sama: staf wanita, ruang treatment privat, produk halal bersertifikat BPOM.",
    image: "/images/srp-section-bg.png",
    alt: "Suasana klinik Hayyu sebagai representasi pertumbuhan cabang di berbagai kota",
  },
  {
    year: "2023–Kini",
    title: "Hayyu Skin Clinic — Satu Nama, Satu Pengaruh",
    desc: "Dengan identitas yang lebih matang, Hayyu terus berinovasi melalui International Smart Skin Technology, aplikasi HayyuDoc, dan lini skincare klinis Dermacare — membawa nilai rasa syukur atas fitrah wanita ke lebih banyak orang.",
    image: "/images/quantificare-lifeviz-3d.png",
    alt: "Teknologi analisis kulit Hayyu sebagai representasi inovasi terbaru",
  },
];

const values = [
  {
    title: "Aman & Halal",
    desc: "Semua produk dan prosedur terdaftar BPOM dan memenuhi standar kehalalan. Bukan klaim — ini komitmen yang bisa diverifikasi.",
    icon: (
      <path
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Privasi Terjaga",
    desc: "Satu ruang untuk satu pasien. Seluruh staf adalah wanita. Setiap customer berhak merasa aman sepenuhnya selama perawatan.",
    icon: (
      <path
        d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Berbasis Ilmu",
    desc: "Perawatan dirancang oleh dokter, bukan oleh tren. dr. Ratna dan tim aktif mengikuti perkembangan ilmu kecantikan medis nasional dan internasional.",
    icon: (
      <path
        d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 14 18.469V19a2 2 0 1 1-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Merayakan Fitrah",
    desc: "Hayyu tidak percaya pada kecantikan yang mengubah siapa kamu. Kami merawat, mengoptimalkan, dan membantu setiap wanita bersyukur atas kecantikan aslinya.",
    icon: (
      <path
        d="M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

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

function StoryImage({
  src,
  alt,
  ratio = "aspect-[4/5]",
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  ratio?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`group relative ${ratio} overflow-hidden rounded-xl bg-surface ring-1 ring-primary/10 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 44vw, 100vw"
        priority={priority}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-800/18 via-transparent to-white/8"
        aria-hidden="true"
      />
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto flex max-w-prose items-center gap-4 px-5" aria-hidden="true">
      <div className="h-px flex-1 bg-primary/10" />
      <div className="h-1.5 w-1.5 rotate-45 bg-gold" />
      <div className="h-px flex-1 bg-primary/10" />
    </div>
  );
}

export default function BrandStoryPage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-[16px] focus:text-white"
      >
        Lewati ke konten utama
      </a>
      <Navbar />

      <main id="main" className="bg-cream">
        <section className="hero-bg relative overflow-hidden pb-20 pt-40 lg:pb-28 lg:pt-52">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-content items-center gap-12 px-5 lg:grid-cols-[0.94fr_1.06fr] lg:px-8 xl:px-0">
            <Reveal>
              <Eyebrow>Perjalanan Sebuah Misi</Eyebrow>
              <h1 className="max-w-4xl font-light leading-[1.06] tracking-tight text-ink text-[clamp(43px,calc(6vw_+_2px),85px)]">
                Dari Satu Keresahan,{" "}
                <span className="accent">Lahir Satu Gerakan</span>
              </h1>
              <p className="mt-7 max-w-2xl text-[18px] leading-relaxed text-body">
                Kisah Hayyu Skin Clinic — klinik kecantikan khusus wanita yang bermula dari pertanyaan sederhana seorang dokter, dan berkembang menjadi nilai yang melampaui batas.
              </p>
              <div className="mt-10 h-20 w-px bg-gradient-to-b from-primary via-gold to-transparent" />
            </Reveal>

            <Reveal delay={120}>
              <StoryImage
                src="/images/hero-konsultasi-kulit.png"
                alt="Konsultasi kulit di Hayyu Skin Clinic sebagai pembuka perjalanan brand"
                priority
                className="shadow-[0_24px_80px_rgba(0,100,98,0.16)]"
              />
            </Reveal>
          </div>
        </section>

        <nav
          aria-label="Navigasi cerita brand"
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

        <section id="awal-mula" className="scroll-mt-40 px-5 py-20 lg:py-28">
          <Reveal className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:px-8 xl:px-0">
            <div>
              <Eyebrow>Awal Mula</Eyebrow>
              <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(31px,4vw,53px)]">
                Ketika Seorang Dokter <span className="accent">Bertanya</span>
              </h2>
              <div className="mt-6 space-y-5 text-[18px] leading-relaxed text-body">
                <p>
                  Tahun 2017. Surabaya. dr. Ratna Yuliarviana — seorang ibu dari empat anak, dokter lulusan Universitas Airlangga, dan pemegang sertifikat Diploma American Academy of Aesthetic Medicine — melihat satu keresahan yang terus berulang.
                </p>
                <p>
                  Banyak wanita Indonesia ingin merawat kulit mereka. Tapi selalu ada kekhawatiran yang mengikuti: <em>apakah prosedurnya aman? Apakah produknya halal? Apakah privasi saya terjaga?</em> Pertanyaan-pertanyaan itu tidak pernah terjawab tuntas oleh klinik kecantikan yang ada saat itu.
                </p>
                <p>
                  Dari sana, dr. Ratna membuat keputusan yang sederhana tapi berani: membangun klinik yang menjawab semua keresahan itu sekaligus. Bukan sekadar klinik yang bagus — tapi klinik yang benar-benar <em>untuk</em> wanita Indonesia.
                </p>
              </div>
            </div>

            <StoryImage
              src="/images/hayyu-quote-portrait.png"
              alt="dr. Ratna Yuliarviana, Founder dan Medical Director Hayyu Skin Clinic"
              ratio="aspect-[5/6]"
              className="mx-auto w-full max-w-lg bg-primary-50"
            />
          </Reveal>
        </section>

        <Divider />

        <section className="px-5 py-20 lg:py-24">
          <Reveal>
            <figure className="relative mx-auto max-w-prose overflow-hidden rounded-xl border border-primary/10 bg-white px-7 py-10 shadow-[0_18px_54px_rgba(0,100,98,0.08)] sm:px-10 lg:px-14 lg:py-14">
              <span
                className="pointer-events-none absolute -left-2 -top-12 select-none font-serif text-[180px] leading-none text-primary/[0.07]"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <blockquote className="relative text-[clamp(22px,3vw,31px)] font-light italic leading-relaxed text-ink">
                &quot;Saya ingin mengajak seluruh wanita Indonesia untuk merawat kulit wajah dengan cara yang tepat — perawatan yang tidak bertentangan dengan nilai dan norma yang ada, dan tentunya aman dan nyaman untuk semua.&quot;
              </blockquote>
              <figcaption className="relative mt-8">
                <p className="text-[15px] font-medium uppercase tracking-[0.16em] text-primary">
                  dr. Ratna Yuliarviana, Dipl. AAM
                </p>
                <p className="mt-1 text-[16px] text-muted">
                  Founder &amp; Medical Director, Hayyu Skin Clinic
                </p>
              </figcaption>
            </figure>
          </Reveal>
        </section>

        <section
          id="nilai"
          className="relative scroll-mt-36 overflow-hidden bg-primary-800 px-5 py-20 text-white lg:py-28"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #fff 0 1px, transparent 1px 26px)",
            }}
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none text-[clamp(112px,18vw,224px)] leading-none text-white/[0.05]"
            aria-hidden="true"
          >
            شُكْر
          </span>

          <Reveal className="relative mx-auto max-w-prose text-center">
            <Eyebrow light>Nilai yang Menjadi Akar</Eyebrow>
            <h2 className="font-light leading-tight text-white text-[clamp(32px,calc(4vw_+_7px),54px)]">
              Kecantikan Bukan Soal Mengubah.{" "}
              <span className="italic text-gold">Ini Soal Mensyukuri.</span>
            </h2>
            <div className="mx-auto mt-7 max-w-2xl space-y-5 text-[18px] leading-relaxed text-white/82">
              <p>
                Di balik semua teknologi, semua treatment, semua inovasi yang Hayyu kembangkan — ada satu keyakinan yang tidak pernah bergeser sejak hari pertama.
              </p>
              <p>
                Setiap wanita lahir dengan fitrahnya sendiri. Kulit, wajah, tubuh — itu bukan kekurangan yang harus diperbaiki. Itu anugerah yang layak dirawat, dijaga, dan disyukuri.
              </p>
              <p>
                <em>Rasa syukur atas fitrah sebagai wanita</em> adalah nilai yang berakar dalam, tapi berbicara kepada semua. Bukan hanya kepada satu kelompok, satu latar belakang, satu kepercayaan. Karena setiap wanita — di mana pun — mengenal perasaan itu.
              </p>
            </div>
          </Reveal>
        </section>

        <section id="evolusi-brand" className="scroll-mt-36 px-5 py-20 lg:py-28">
          <Reveal className="mx-auto max-w-prose">
            <Eyebrow>Evolusi Brand</Eyebrow>
            <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(31px,4vw,53px)]">
              Nama Berubah, <span className="accent">Akar Tetap Sama</span>
            </h2>
            <p className="mt-6 text-[18px] leading-relaxed text-body">
              Hayyu tidak lahir dengan nama yang sekarang dikenal. Seperti banyak brand yang tumbuh dengan jujur, identitas kami berkembang seiring pemahaman yang semakin dalam tentang misi kami yang sesungguhnya.
            </p>

            <div className="my-10 overflow-hidden rounded-xl border-l-[3px] border-gold bg-white shadow-[0_18px_54px_rgba(0,100,98,0.07)]">
              <div className="space-y-4 px-7 py-8 text-[17px] leading-relaxed text-body sm:px-9">
                <p>
                  <strong>Hayyu Syar&apos;i Skin Clinic</strong> adalah nama awal yang mencerminkan akar nilai kami dengan jelas — klinik yang dibangun di atas prinsip kehalalan, privasi, dan kenyamanan wanita Muslim. Nama itu adalah keberanian untuk menjadi berbeda di industri yang belum banyak bicara soal ini.
                </p>
                <p>
                  Seiring bertumbuh, kami menyadari sesuatu yang penting: nilai yang kami pegang — <em>rasa syukur atas fitrah wanita</em> — bukan nilai eksklusif. Ia adalah nilai universal yang seharusnya bisa dirasakan oleh semua wanita, tanpa memandang latar belakang mereka.
                </p>
                <p>
                  Menjadi <strong>Hayyu Skin Clinic</strong> bukan berarti melepas identitas awal. Justru sebaliknya — kami memperluas bahasa kami. Nilai yang selama ini kami pegang dengan kuat, kini kami bawa lebih jauh: bukan hanya sebagai ciri khas sebuah klinik, tapi sebagai warisan yang ingin kami ukir di industri kecantikan Indonesia.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 border-t border-primary/10 bg-primary-50/55 px-7 py-6 sm:px-9">
                <span className="rounded-md border border-primary/30 bg-white px-4 py-2 text-[16px] font-medium text-primary">
                  Hayyu Syar&apos;i Skin Clinic
                </span>
                <span className="text-[24px] text-gold" aria-hidden="true">
                  →
                </span>
                <span className="rounded-md bg-primary px-4 py-2 text-[16px] font-medium text-white">
                  Hayyu Skin Clinic
                </span>
              </div>
            </div>

            <p className="text-[18px] leading-relaxed text-body">
              Simbolisme boleh berubah. Tapi substansi — perawatan yang aman, halal, menghormati privasi, dan merayakan kecantikan asli — itu tidak pernah kami kompromikan, dan tidak akan pernah.
            </p>
          </Reveal>
        </section>

        <Divider />

        <section id="perjalanan" className="scroll-mt-36 px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal className="max-w-prose">
              <Eyebrow>Perjalanan</Eyebrow>
              <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(31px,4vw,53px)]">
                Tumbuh Bersama <span className="accent">Kepercayaan</span>
              </h2>
            </Reveal>

            <div className="relative mt-12">
              <div
                className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-gold to-primary/10 lg:block"
                aria-hidden="true"
              />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <Reveal key={item.year} delay={index * 80}>
                    <article className="relative grid gap-7 lg:grid-cols-[0.76fr_1.24fr] lg:gap-12 lg:pl-14">
                      <span
                        className="absolute left-[9px] top-2 hidden h-3 w-3 rounded-full bg-primary ring-4 ring-cream lg:block"
                        aria-hidden="true"
                      />
                      <StoryImage
                        src={item.image}
                        alt={item.alt}
                        ratio="aspect-[4/3]"
                        className="min-h-[260px]"
                      />
                      <div className="self-center">
                        <p className="text-[15px] font-medium uppercase tracking-[0.2em] text-gold">
                          {item.year}
                        </p>
                        <h3 className="mt-2 text-[clamp(24px,3vw,32px)] font-light leading-snug text-ink">
                          {item.title}
                        </h3>
                        <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-body">
                          {item.desc}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        <section id="nilai-tetap" className="scroll-mt-36 bg-white px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal className="max-w-prose">
              <Eyebrow>Yang Tidak Berubah</Eyebrow>
              <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(31px,4vw,53px)]">
                Empat Hal yang Selalu <span className="accent">Kami Jaga</span>
              </h2>
              <p className="mt-6 text-[18px] leading-relaxed text-body">
                Di balik perubahan nama dan pertumbuhan cabang, ada hal-hal yang sejak hari pertama tidak pernah kami kompromikan.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 70}>
                  <article className="h-full rounded-lg border border-primary/10 bg-cream p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-primary-50">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-primary ring-1 ring-primary/10">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        {value.icon}
                      </svg>
                    </span>
                    <h3 className="mt-6 text-[clamp(21px,2vw,24px)] font-normal text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-relaxed text-body">
                      {value.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-primary-800 px-5 py-20 text-white lg:py-28">
          <Image
            src="/images/quote-wave-humps.png"
            alt=""
            width={2250}
            height={578}
            className="pointer-events-none absolute bottom-0 left-0 w-full opacity-40"
            aria-hidden="true"
          />
          <Reveal className="relative mx-auto max-w-prose text-center">
            <Eyebrow light>Hayyu Skin Clinic</Eyebrow>
            <h2 className="font-light leading-tight text-white text-[clamp(32px,calc(4vw_+_7px),54px)]">
              Perjalanan Ini <span className="italic text-gold">Belum Selesai</span>
            </h2>
            <p className="mx-auto mt-7 max-w-2xl text-[18px] leading-relaxed text-white/84">
              Dari satu klinik di Surabaya, menjadi puluhan cabang di seluruh Indonesia. Tapi yang kami kejar bukan angka — melainkan kepercayaan setiap wanita yang mempercayakan kulitnya kepada kami, dan legacy yang ingin kami wariskan: bahwa wanita Indonesia merawat diri bukan untuk mengubah siapa mereka, tapi karena mereka bersyukur atas siapa mereka.
            </p>
            <a
              href={RESERVASI}
              {...externalProjectLinkProps(RESERVASI)}
              className="mt-9 inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-[16px] font-medium uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream"
            >
              Mulai Perjalanan Kulitmu
            </a>
          </Reveal>
        </section>
      </main>

      <StickyConsultCta />
      <Footer />
    </>
  );
}
