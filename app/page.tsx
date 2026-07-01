import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import SectionNav from "./components/SectionNav";
import StickyConsultCta from "./components/StickyConsultCta";
import ProductCarousel, { type SkincareProduct } from "./components/ProductCarousel";
import { BASE, externalProjectLinkProps } from "./components/siteData";

const RESERVATION_URL = `${BASE}/reservasi`;
const FIGMA_ASSET_BASE = "/images/figma-home";

const whyHayyuPoints = [
  {
    title: "Khusus Wanita",
    body: "Ruang perawatan privat, staf wanita, dan alur konsultasi yang menjaga rasa aman.",
  },
  {
    title: "Satu Customer, Satu Ruang Privat",
    body: "Ruang konsultasi dan treatment dibuat privat agar setiap customer merasa lebih tenang.",
  },
  {
    title: "Aman dan Halal",
    body: "Produk dan prosedur dipilih dengan prinsip kehati-hatian, legalitas, dan nilai halal-aware yang Hayyu jaga sejak awal.",
  },
  {
    title: "Cantik Aslimu",
    body: "Hayyu merawat dan mengoptimalkan kecantikan alami, bukan mengubah karakter wajahmu.",
  },
];

const isstPillars = [
  {
    num: "01",
    icon: `${FIGMA_ASSET_BASE}/why-1.png`,
    title: "International Formula and Device",
    body: "Bahan, formula, dan alat dipilih dengan standar klinis internasional.",
  },
  {
    num: "02",
    icon: `${FIGMA_ASSET_BASE}/why-2.png`,
    title: "Smart Combo Treatment",
    body: "Kombinasi treatment dirancang dokter melalui Skin Resolve Programme.",
  },
  {
    num: "03",
    icon: `${FIGMA_ASSET_BASE}/why-3.png`,
    title: "Result with Safety Principles",
    body: "Perawatan dirancang untuk membantu progres kulit dengan tetap mempertimbangkan keamanan jangka panjang.",
  },
  {
    num: "04",
    icon: `${FIGMA_ASSET_BASE}/why-4.png`,
    title: "Technology-measured Improvement",
    body: "Perkembangan kulit dipantau dengan data visual dan imaging 3D QuantifiCare.",
  },
];

const srpStages = [
  {
    title: "Main Problem",
    body: "Fokus pada masalah utama seperti acne, pigmentasi, tekstur, atau concern dominan lain.",
  },
  {
    title: "Additional Problem",
    body: "Setelah kulit lebih stabil, dokter mengoptimalkan concern pendukung secara bertahap.",
  },
  {
    title: "Maintenance and Anti-Aging",
    body: "Hasil dijaga dengan ritme perawatan dan skincare klinis yang sesuai kondisi kulitmu.",
  },
];

const treatmentPrograms = [
  {
    category: "Aging Programme",
    name: "Aging Series Saphire",
    price: "Rp 4.031.200,-",
    oldPrice: "Rp 5.039.000,-",
    image: "/images/treatments/aging-series-saphire.webp",
    href: `${BASE}/detail-treatment/aging-series-saphire?q=&t=`,
  },
  {
    category: "Aging Programme",
    name: "Aging Series Emerald",
    price: "Rp 6.054.000,-",
    oldPrice: "Rp 10.090.000,-",
    image: "/images/treatments/aging-series-emerald.webp",
    href: `${BASE}/detail-treatment/aging-series-emerald?q=&t=`,
  },
  {
    category: "Brightening Programme",
    name: "White Series Emerald",
    price: "Rp 5.705.100,-",
    oldPrice: "Rp 6.339.000,-",
    image: "/images/treatments/white-series-emerald.webp",
    href: `${BASE}/detail-treatment/white-series-emerald?q=&t=`,
  },
  {
    category: "Acne Programme",
    name: "Acne Series Saphire",
    price: "Rp 1.288.500,-",
    oldPrice: "Rp 1.718.000,-",
    image: "/images/treatments/acne-series-saphire.webp",
    href: `${BASE}/detail-treatment/acne-series-saphire?q=&t=`,
  },
];

const clinicProducts: SkincareProduct[] = [
  {
    category: "Supplement",
    name: "Crystal Tomato Supplement",
    price: "Rp 1.999.000,-",
    image: "/images/skincare/crystal-tomato-supplement.webp",
    href: `${BASE}/detail-skincare/crystal-tomato-supplement?q=&c=`,
  },
  {
    category: "Sunscreen",
    name: "Ultimate Protection",
    price: "Rp 158.000,-",
    image: "/images/skincare/ultimate-protection.webp",
    href: `${BASE}/detail-skincare/ultimate-protection?q=&c=`,
  },
  {
    category: "Night Care",
    name: "Night Cream III",
    price: "Rp 95.000,-",
    image: "/images/skincare/night-cream-iii.webp",
    href: `${BASE}/detail-skincare/night-cream-iii?q=&c=`,
  },
  {
    category: "Moisturizer",
    name: "Smooth by Centella",
    price: "Rp 165.000,-",
    image: "/images/skincare/smooth-by-centella.webp",
    href: `${BASE}/detail-skincare/smooth-by-centella?q=&c=`,
  },
  {
    category: "Moisturizer",
    name: "Blemish Moisturizer",
    price: "Rp 45.000,-",
    image: "/images/skincare/blemish-moisturizer.webp",
    href: `${BASE}/detail-skincare/blemish-moisturizer?q=&c=`,
  },
  {
    category: "Serum",
    name: "White by Traxinamide Serum",
    price: "Rp 175.000,-",
    image: "/images/skincare/white-by-traxinamide-serum.webp",
    href: `${BASE}/detail-skincare/white-by-traxinamide-serum?q=&c=`,
  },
  {
    category: "Serum",
    name: "Sparkling Silverlets Serum",
    price: "Rp 235.000,-",
    image: "/images/skincare/sparkling-silverlets-serum.webp",
    href: `${BASE}/detail-skincare/sparkling-silverlets-serum?q=&c=`,
  },
  {
    category: "Moisturizer",
    name: "Skin Barrier Moisturizer",
    price: "Rp 210.000,-",
    image: "/images/skincare/skin-barrier-moisturizer.webp",
    href: `${BASE}/detail-skincare/skin-barrier-moisturizer?q=&c=`,
  },
];

// "What's New On Hayyu" — two editorial feature cards leading the page after
// the hero (image, title, supporting copy, arrow).
const whatsNewItems = [
  {
    title: "Inovasi Smart Skin Technology",
    body: "Hayyu terus menghadirkan formula dan alat terkini agar setiap treatment terasa lebih aman, nyaman, dan terukur untuk kulitmu.",
    image: "/images/brand/representative-doctor-values.png",
    href: "/isst",
  },
  {
    title: "Paket Perawatan Lebih Hemat",
    body: "Program perawatan rutin yang dirancang agar kamu bisa menjaga hasil kulit sepanjang tahun dengan lebih hemat.",
    image: "/images/brand/clinic-growth-collage.png",
    href: `${BASE}/special-offer`,
  },
];

const updates = [
  {
    label: "Penawaran Spesial",
    title: "Tetap update dengan penawaran spesial Hayyu",
    href: `${BASE}/special-offer`,
  },
  {
    label: "Kabar Terbaru",
    title: "Promo, treatment terbaru, dan cerita customer Hayyu",
    href: `${BASE}/news`,
  },
  {
    label: "Kemitraan",
    title: "Mari bergabung bersama Hayyu",
    href: `${BASE}/partnership`,
  },
];

const testimonials = [
  {
    name: "Zaskia Mecca",
    role: "Influencer",
    quote:
      "Dulu sempat trauma treatment injeksi, tapi treatment di Hayyu beneran nyaman dan hasilnya bagus banget.",
    href: `${BASE}/testimonial`,
  },
  {
    name: "Citra Kirana",
    role: "Public Figure",
    quote:
      "Merawat kulit wajah adalah salah satu caraku untuk bersyukur atas anugerah cantik dari-Nya.",
    href: `${BASE}/testimonial`,
  },
  {
    name: "Larissa Chou",
    role: "Public Figure",
    quote:
      "Semua staff Hayyu wanita, treatment terasa tenang, nyaman, dan tanpa was-was.",
    href: `${BASE}/testimonial`,
  },
];

/**
 * Section kicker: optional editorial index (01–08), a short hairline rule, and
 * the uppercase eyebrow label — the structural device that threads the page
 * together while keeping the live site's eyebrow type.
 */
function IndexEyebrow({
  index,
  children,
  light = false,
}: {
  index?: string;
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      {index && (
        <>
          <span
            className={`text-[14px] font-medium tabular-nums ${
              light ? "text-white/65" : "text-primary/55"
            }`}
          >
            {index}
          </span>
          <span
            className={`h-px w-7 ${light ? "bg-white/30" : "bg-primary/30"}`}
            aria-hidden="true"
          />
        </>
      )}
      <span
        className={`text-[14px] font-medium uppercase tracking-eyebrow ${
          light ? "text-white/78" : "text-primary"
        }`}
      >
        {children}
      </span>
    </div>
  );
}

/**
 * Asymmetric editorial section header: heading on the left, supporting intro +
 * CTA on the right, anchored to a top hairline. Replaces the repeated
 * centered-heading pattern.
 */
function SectionHeader({
  index,
  eyebrow,
  title,
  intro,
  cta,
  light = false,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  cta?: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`border-t pt-7 ${light ? "border-white/20" : "border-primary/15"}`}>
      <div className="grid gap-x-10 gap-y-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <IndexEyebrow index={index} light={light}>
            {eyebrow}
          </IndexEyebrow>
          <h2
            className={`mt-5 font-light leading-[1.08] tracking-tight text-[clamp(31px,4.2vw,52px)] ${
              light ? "text-white" : "text-ink"
            }`}
          >
            {title}
          </h2>
        </div>
        {(intro || cta) && (
          <div className="lg:col-span-5 lg:pt-1.5">
            {intro && (
              <p
                className={`text-[18px] leading-relaxed ${
                  light ? "text-white/82" : "text-body"
                }`}
              >
                {intro}
              </p>
            )}
            {cta && <div className="mt-7">{cta}</div>}
          </div>
        )}
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8.5 16 12l-6 3.5v-7Z" fill="currentColor" />
    </svg>
  );
}

/** Editorial "Lihat" arrow link used for inline section actions. */
function InlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      {...externalProjectLinkProps(href)}
      className="inline-flex items-center gap-2 text-[14px] font-medium uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary-500"
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

function LinkButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "light" | "outline";
}) {
  const classes =
    variant === "light"
      ? "bg-white text-primary hover:bg-cream"
      : variant === "outline"
        ? "border border-primary/25 bg-white/70 text-primary hover:bg-primary-50"
        : "bg-primary text-white hover:bg-primary-500";

  return (
    <a
      href={href}
      {...externalProjectLinkProps(href)}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-6 py-3 text-[15px] font-medium uppercase tracking-[0.16em] transition-all duration-300 hover:-translate-y-0.5 ${classes}`}
    >
      {children}
      <ArrowIcon />
    </a>
  );
}

function IsstIcon({ icon }: { icon: string }) {
  return (
    <Image
      src={icon}
      alt=""
      width={96}
      height={96}
      aria-hidden="true"
      className="h-16 w-16 object-contain"
    />
  );
}

function TreatmentCard({
  programme,
}: {
  programme: (typeof treatmentPrograms)[number];
}) {
  return (
    <a
      href={programme.href}
      {...externalProjectLinkProps(programme.href)}
      className="group block"
    >
      <div className="relative h-[220px] overflow-hidden rounded-br-[24px] rounded-tl-[24px] bg-primary-50 shadow-[0_18px_48px_rgba(0,100,98,0.08)] sm:h-[260px] lg:h-[320px] xl:h-[340px]">
        <Image
          src={programme.image}
          alt={programme.name}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-6 flex items-start justify-between gap-6 border-t border-primary/10 pt-5">
        <h3 className="text-[clamp(20px,2vw,26px)] font-normal uppercase leading-snug tracking-[0.03em] text-ink transition-colors group-hover:text-primary">
          {programme.name}
        </h3>
        <div className="shrink-0 text-right">
          <p className="text-[18px] font-medium text-primary">{programme.price}</p>
          <p className="text-[14px] text-muted line-through">{programme.oldPrice}</p>
        </div>
      </div>
    </a>
  );
}

function WhatsNewCard({ item }: { item: (typeof whatsNewItems)[number] }) {
  return (
    <a
      href={item.href}
      {...externalProjectLinkProps(item.href)}
      className="group block"
    >
      <div className="relative aspect-[2/1] overflow-hidden rounded-br-[24px] rounded-tl-[24px] bg-primary-50 shadow-[0_18px_48px_rgba(0,100,98,0.08)]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(min-width: 1024px) 560px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="mt-6 flex items-start justify-between gap-6 border-t border-primary/10 pt-5">
        <div>
          <h3 className="text-[clamp(20px,2vw,26px)] font-normal leading-snug text-ink transition-colors group-hover:text-primary">
            {item.title}
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-body">{item.body}</p>
        </div>
        <span className="mt-1 shrink-0 text-primary" aria-hidden="true">
          <ArrowIcon />
        </span>
      </div>
    </a>
  );
}

/** Monogram avatar — no testimonial photos exist, so initials stand in. */
function Avatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className="flex size-16 shrink-0 items-center justify-center rounded-full bg-primary-50 text-[18px] font-medium text-primary ring-1 ring-primary/15"
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}

function TestimonialCard({ item }: { item: (typeof testimonials)[number] }) {
  return (
    <figure className="flex h-full gap-5 rounded-2xl border border-primary/10 bg-white p-7 shadow-[0_16px_42px_rgba(0,100,98,0.06)]">
      <Avatar name={item.name} />
      <div className="flex flex-1 flex-col">
        <figcaption>
          <p className="text-[17px] font-medium text-ink">{item.name}</p>
          <p className="mt-0.5 text-[13px] uppercase tracking-[0.14em] text-primary">
            {item.role}
          </p>
        </figcaption>
        <blockquote className="mt-4 text-[15px] leading-relaxed text-body">
          &ldquo;{item.quote}&rdquo;
        </blockquote>
        <a
          href={item.href}
          {...externalProjectLinkProps(item.href)}
          className="mt-5 inline-flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary-500"
        >
          <PlayIcon />
          Video Selengkapnya
        </a>
      </div>
    </figure>
  );
}

export default function Page() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-[16px] focus:text-white"
      >
        Lewati ke konten utama
      </a>
      <Navbar />
      <SectionNav />

      <main id="main">
        <section className="figma-hero-bg relative overflow-hidden text-ink">
          <div className="relative mx-auto grid min-h-[760px] max-w-content items-center gap-x-16 gap-y-12 px-5 pb-20 pt-36 lg:grid-cols-[1fr_0.86fr] lg:px-8 lg:pb-24 lg:pt-44 2xl:px-0">
            <div>
              <Reveal className="max-w-[768px]">
                <IndexEyebrow>Klinik Kecantikan Khusus Wanita</IndexEyebrow>
                <h1 className="mt-5 max-w-[760px] text-[42px] font-light leading-[1.05] tracking-normal text-ink sm:text-[56px] lg:text-[64px] xl:text-[72px]">
                  Karena Kamu Bersinar dengan Cantik Aslimu
                </h1>
                <p className="mt-7 max-w-[650px] text-[18px] leading-relaxed text-body">
                  Hayyu membantu kamu merawat kulit dengan aman, personal, dan
                  lebih terukur melalui konsultasi dokter, ruang perawatan privat,
                  dan staf wanita yang membuatmu merasa tenang.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <LinkButton href={RESERVATION_URL}>Reservasi Sekarang</LinkButton>
                  <LinkButton href="#brand-story" variant="outline">
                    Kenali Hayyu
                  </LinkButton>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120} className="mx-auto w-full max-w-[640px] lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-primary-50 shadow-[0_24px_70px_rgba(0,100,98,0.12)]">
                <Image
                  src={`${FIGMA_ASSET_BASE}/hero-consultation.png`}
                  alt="Konsultasi kulit di Hayyu Skin Clinic bersama dokter wanita"
                  fill
                  priority
                  sizes="(min-width: 1280px) 640px, (min-width: 1024px) 42vw, 92vw"
                  className="object-cover"
                />
                <span className="absolute bottom-4 left-4 rounded-full bg-white/88 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary backdrop-blur">
                  Konsultasi · Dokter Wanita
                </span>
              </div>
            </Reveal>

          </div>
        </section>

        <section className="bg-white px-5 pt-20 lg:pt-24">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal>
              <div className="border-t border-primary/15 pt-7">
                <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
                  <div>
                    <IndexEyebrow index="01">Brand Story</IndexEyebrow>
                    <h2 className="mt-5 font-light leading-[1.08] tracking-tight text-ink text-[clamp(31px,4.2vw,52px)]">
                      What&rsquo;s New On Hayyu
                    </h2>
                  </div>
                  <InlineLink href={`${BASE}/news`}>Lihat Lebih Banyak</InlineLink>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-12">
              <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
                {whatsNewItems.map((item) => (
                  <WhatsNewCard key={item.title} item={item} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="brand-story"
          className="figma-brand-story-bg scroll-mt-28 overflow-hidden bg-white px-5 py-20 lg:py-28"
        >
          <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 xl:px-0">
            <Reveal>
              <IndexEyebrow>Brand Story</IndexEyebrow>
              <h2 className="mt-5 max-w-[560px] text-[clamp(31px,4vw,54px)] font-light leading-tight tracking-tight text-ink">
                Merawat Diri dengan Tenang
              </h2>
              <div className="mt-6 max-w-[610px] space-y-5 text-[18px] leading-relaxed text-body">
                <p>
                  Hayyu hadir untuk wanita yang ingin merawat kulit tanpa mengabaikan
                  rasa aman, privasi, dan nilai yang mereka pegang.
                </p>
                <p>
                  Setiap pengalaman dirancang agar kamu merasa dihargai sejak
                  konsultasi sampai selesai treatment.
                </p>
              </div>
              <div className="mt-8">
                <LinkButton href="/brand-story" variant="outline">
                  Baca Brand Story
                </LinkButton>
              </div>
            </Reveal>

            <Reveal delay={120} className="relative mx-auto w-full max-w-[760px]">
              <div className="relative aspect-[1443/1090] w-full">
                <Image
                  src={`${FIGMA_ASSET_BASE}/brand-story-women.png`}
                  alt="Dua wanita berhijab tersenyum sebagai representasi Brand Story Hayyu"
                  fill
                  sizes="(min-width: 1280px) 720px, (min-width: 1024px) 52vw, 94vw"
                  className="object-contain object-bottom"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="figma-why-bg overflow-hidden bg-surface px-5 py-16 lg:py-20">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal>
              <h2 className="text-center text-[clamp(30px,3.2vw,40px)] font-light leading-tight text-primary">
                Kenapa Harus Hayyu?
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {whyHayyuPoints.map((point, index) => (
                <Reveal key={point.title} delay={index * 70}>
                  <article className="mx-auto max-w-[290px] text-center">
                    <h3 className="text-[18px] font-medium leading-snug text-primary">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-body">
                      {point.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="isst" className="scroll-mt-28 bg-white px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal>
              <div className="border-t border-primary/12 pt-7">
                <div className="grid gap-x-12 gap-y-6 lg:grid-cols-12">
                  <div className="lg:col-span-7">
                    <IndexEyebrow index="02">
                      International Smart Skin Technology
                    </IndexEyebrow>
                    <h2 className="mt-5 max-w-[760px] text-[clamp(31px,4vw,54px)] font-light leading-[1.08] tracking-tight text-ink">
                      Teknologi yang Membantu Dokter Memahami Kulitmu
                    </h2>
                  </div>
                  <p className="text-[18px] leading-relaxed text-body lg:col-span-5 lg:pt-10">
                    Di Hayyu, teknologi membantu dokter membaca kondisi kulitmu dengan
                    lebih objektif. Dari analisis kulit, diagnosa, pilihan treatment,
                    sampai pemantauan hasil, semuanya dibuat lebih terarah.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-x-9 gap-y-10 sm:grid-cols-2 xl:grid-cols-4">
              {isstPillars.map((pillar, index) => (
                <Reveal key={pillar.num} delay={index * 70}>
                  <article className="h-full border-t border-primary/14 pt-6">
                    <IsstIcon icon={pillar.icon} />
                    <h3 className="mt-5 text-[19px] font-normal leading-snug text-ink">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-body">
                      {pillar.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <div className="grid items-center gap-10 overflow-hidden rounded-xl border border-primary/10 bg-white p-6 lg:grid-cols-[1fr_0.92fr] lg:p-9">
                <div className="order-2 lg:order-1">
                  <IndexEyebrow>QuantifiCare LifeViz</IndexEyebrow>
                  <h3 className="mt-5 max-w-[650px] text-[clamp(26px,3vw,40px)] font-light leading-tight text-ink">
                    Hasil Tidak Hanya Dirasakan. Hasil Juga Diukur.
                  </h3>
                  <p className="mt-5 max-w-[690px] text-[17px] leading-relaxed text-body">
                    Analisis kulit membantu dokter membaca pigmentasi, tekstur,
                    oiliness, pori, dan perubahan wajah secara lebih objektif. Data
                    ini menjadi dasar rekomendasi treatment, bukan sekadar asumsi
                    visual.
                  </p>
                </div>
                <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-lg bg-primary-50 lg:order-2">
                  <Image
                    src={`${FIGMA_ASSET_BASE}/quantificare-device.png`}
                    alt="Perangkat QuantifiCare LifeViz untuk analisis kulit 3D di Hayyu Skin Clinic"
                    fill
                    sizes="(min-width: 1280px) 620px, (min-width: 1024px) 42vw, 92vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section
          id="srp"
          className="figma-srp-bg scroll-mt-28 overflow-hidden bg-cream px-5 py-20 lg:py-24"
        >
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <div className="grid gap-10 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <IndexEyebrow index="03">Skin Resolve Programme</IndexEyebrow>
                <h2 className="mt-5 text-[clamp(31px,4vw,54px)] font-light leading-tight text-ink">
                  Perawatan yang Punya Arah
                </h2>
              </Reveal>

              <Reveal delay={100} className="lg:col-span-5">
                <p className="text-[18px] leading-relaxed text-body">
                  Skin Resolve Programme membantu dokter menyusun perawatan
                  berdasarkan kondisi kulitmu, bukan sekadar memilih treatment yang
                  sedang populer. Setiap langkah dibuat agar tujuan perawatan lebih
                  jelas dan mudah dipantau.
                </p>
                <div className="mt-7">
                  <LinkButton href="/skin-resolve-programme" variant="outline">
                    Pelajari SRP
                  </LinkButton>
                </div>
              </Reveal>
            </div>

            <div className="mt-16 grid gap-x-14 gap-y-10 md:grid-cols-3">
              {srpStages.map((stage, index) => (
                <Reveal key={stage.title} delay={index * 80}>
                  <article>
                    <div className="relative aspect-[1.6/1] overflow-hidden rounded-tl-xl rounded-tr-xl bg-primary-50">
                      <Image
                        src={`${FIGMA_ASSET_BASE}/quantificare-device.png`}
                        alt={`${stage.title} dalam Skin Resolve Programme Hayyu`}
                        fill
                        sizes="(min-width: 1024px) 420px, (min-width: 768px) 31vw, 92vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="mt-7 text-[12px] font-semibold uppercase tracking-[0.24em] text-primary">
                      {`Tahap 0${index + 1}`}
                    </p>
                    <h3 className="mt-3 text-[21px] font-normal leading-snug text-ink">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-body">
                      {stage.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="treatments" className="scroll-mt-28 bg-white px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal>
              <SectionHeader
                index="04"
                eyebrow="Pilihan Treatment Hayyu"
                title="Treatment untuk Setiap Kebutuhan Kulitmu"
                intro="Temukan pilihan treatment Hayyu dan konsultasikan dengan dokter agar setiap langkah perawatan sesuai dengan kondisi dan tujuan kulitmu."
                cta={
                  <LinkButton href={`${BASE}/treatment`} variant="outline">
                    Lihat Treatment
                  </LinkButton>
                }
              />
            </Reveal>

            <Reveal className="mt-14">
              <div className="grid gap-x-10 gap-y-12 md:grid-cols-2">
                {treatmentPrograms.map((programme) => (
                  <TreatmentCard key={programme.name} programme={programme} />
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="products" className="scroll-mt-28 bg-cream px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal>
              <SectionHeader
                index="05"
                eyebrow="Skincare Pilihan Hayyu"
                title="Lengkapi Perawatanmu dengan Skincare Hayyu"
                intro="Skincare klinis Hayyu membantu menjaga hasil treatment di rumah dan dapat direkomendasikan sesuai kebutuhan kulitmu."
                cta={
                  <LinkButton href={`${BASE}/skincare`} variant="outline">
                    Lihat Skincare
                  </LinkButton>
                }
              />
            </Reveal>

            <Reveal className="mt-14">
              <ProductCarousel products={clinicProducts} />
            </Reveal>
          </div>
        </section>

        <section id="proof" className="scroll-mt-28 bg-surface/60 px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal>
              <SectionHeader
                index="06"
                eyebrow="Testimonial"
                title="Pengalaman Mereka Merawat Kulit di Hayyu"
                intro="Cerita customer yang merasa lebih tenang, nyaman, dan percaya selama menjalani perawatan di Hayyu."
                cta={
                  <LinkButton href={`${BASE}/testimonial`} variant="outline">
                    Lihat Testimonial
                  </LinkButton>
                }
              />
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <Reveal key={item.name} delay={index * 80}>
                  <TestimonialCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="updates" className="scroll-mt-28 bg-cream px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal>
              <SectionHeader
                index="07"
                eyebrow="Promo, Artikel, dan Partnership"
                title="Yang Terbaru dari Hayyu"
              />
            </Reveal>

            {/* Editorial index list rather than another card grid. */}
            <div className="mt-12 border-t border-primary/15">
              {updates.map((item, index) => (
                <Reveal key={item.label} delay={index * 70}>
                  <a
                    href={item.href}
                    {...externalProjectLinkProps(item.href)}
                    className="group grid items-center gap-x-8 gap-y-3 border-b border-primary/15 py-7 transition-colors hover:bg-white sm:grid-cols-[auto_1fr_auto] sm:px-4 lg:py-9"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[15px] font-medium tabular-nums text-primary/50">
                        {`0${index + 1}`}
                      </span>
                      <span className="text-[13px] font-medium uppercase tracking-[0.18em] text-primary">
                        {item.label}
                      </span>
                    </div>
                    <h3 className="text-[clamp(22px,2.4vw,30px)] font-light leading-snug text-ink transition-colors group-hover:text-primary">
                      {item.title}
                    </h3>
                    <span className="inline-flex items-center gap-2 text-[14px] font-medium uppercase tracking-[0.14em] text-primary">
                      Lihat
                      <ArrowIcon />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="app" className="scroll-mt-28 overflow-hidden bg-white px-5 pt-20 lg:pt-28">
          <div className="mx-auto grid max-w-content items-end gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 xl:px-0">
            <Reveal className="order-2 mx-auto w-full max-w-[560px] self-end lg:order-1 lg:max-w-none">
              <div className="relative aspect-[4/5] w-full translate-y-px">
                <Image
                  src="/images/app/hayyudoc-person-phone-provided.png"
                  alt="Wanita Hayyu menunjukkan layar ponsel berisi kampanye Skinvestasi Cantik Aslimu"
                  fill
                  sizes="(min-width: 1280px) 560px, (min-width: 1024px) 44vw, 92vw"
                  className="object-contain object-bottom"
                />
              </div>
            </Reveal>

            <Reveal delay={120} className="order-1 pb-12 lg:order-2 lg:pb-28">
              <IndexEyebrow index="08">HayyuDoc</IndexEyebrow>
              <h2 className="mt-5 font-light leading-tight tracking-tight text-ink text-[clamp(31px,4vw,54px)]">
                Pantau Perjalanan Kulitmu Lewat HayyuDoc
              </h2>
              <p className="mt-6 text-[18px] leading-relaxed text-body">
                Reservasi, riwayat treatment, rekomendasi produk, dan jadwal kontrol
                bisa kamu akses lebih mudah dalam satu aplikasi.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton href={`${BASE}/hayyu-doc`} variant="outline">
                  Pelajari HayyuDoc
                </LinkButton>
                <LinkButton href={RESERVATION_URL}>Reservasi</LinkButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-primary-800 px-5 py-20 text-white lg:py-28">
          <Reveal className="mx-auto max-w-prose text-center">
            <div className="flex justify-center">
              <IndexEyebrow light>Mulai Perjalanan Kulitmu</IndexEyebrow>
            </div>
            <h2 className="mt-5 font-light leading-tight text-white text-[clamp(31px,4vw,52px)]">
              Mulai dari Konsultasi, Bukan Tebakan
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-white/82">
              Dokter Hayyu akan membantu membaca kondisi kulitmu, menjelaskan pilihan
              treatment, dan menyusun perawatan yang sesuai dengan kebutuhan kulitmu.
            </p>
            <div className="mt-9">
              <LinkButton href={RESERVATION_URL} variant="light">
                Reservasi Konsultasi
              </LinkButton>
            </div>
          </Reveal>
        </section>
      </main>

      <StickyConsultCta />
      <Footer />
    </>
  );
}
