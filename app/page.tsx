import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ImagePlaceholder from "./components/ImagePlaceholder";
import Reveal from "./components/Reveal";
import SectionNav from "./components/SectionNav";
import StatCounter from "./components/StatCounter";
import StickyConsultCta from "./components/StickyConsultCta";
import { BASE, externalProjectLinkProps } from "./components/siteData";

const RESERVATION_URL = `${BASE}/reservasi`;

const trustPoints = [
  { value: "2017", label: "Melayani wanita Indonesia sejak" },
  { value: "100%", label: "Staf wanita untuk rasa aman dan nyaman" },
  { value: "1", label: "Customer, one private treatment room" },
  { value: "BPOM", label: "Produk klinik terdaftar dan terkurasi" },
];

const brandValues = [
  {
    title: "Khusus Wanita",
    body: "Ruang perawatan privat, staf wanita, dan alur konsultasi yang menjaga rasa aman.",
  },
  {
    title: "Aman dan Halal",
    body: "Produk dan prosedur dipilih dengan prinsip kehati-hatian, legalitas, dan nilai yang Hayyu jaga sejak awal.",
  },
  {
    title: "Cantik Aslimu",
    body: "Hayyu merawat dan mengoptimalkan kecantikan alami, bukan mengubah karakter wajahmu.",
  },
];

const isstPillars = [
  {
    num: "01",
    title: "International Formula and Device",
    body: "Bahan, formula, dan alat dipilih dengan standar klinis internasional.",
  },
  {
    num: "02",
    title: "Smart Combo Treatment",
    body: "Kombinasi treatment dirancang dokter melalui Skin Resolve Programme.",
  },
  {
    num: "03",
    title: "Safest Effective Result",
    body: "Perawatan mengejar hasil yang nyata tanpa mengorbankan keamanan jangka panjang.",
  },
  {
    num: "04",
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
    image: "https://storage.googleapis.com/hayyu-storage/landing-page/assets/landing-page-1764236509.webp",
    href: `${BASE}/detail-treatment/aging-serier-saphire?q=&t=`,
  },
  {
    category: "Aging Programme",
    name: "Aging Series Emerald",
    price: "Rp 6.054.000,-",
    oldPrice: "Rp 10.090.000,-",
    image: "https://storage.googleapis.com/hayyu-storage/landing-page/assets/landing-page-1764236509.webp",
    href: `${BASE}/detail-treatment/aging-series-emerald?q=&t=`,
  },
  {
    category: "Brightening Programme",
    name: "White Series Emerald",
    price: "Rp 5.705.100,-",
    oldPrice: "Rp 6.339.000,-",
    image: "https://storage.googleapis.com/hayyu-storage/landing-page/assets/landing-page-1764236509.webp",
    href: `${BASE}/detail-treatment/white-series-emerald?q=&t=`,
  },
  {
    category: "Acne Programme",
    name: "Acne Series Saphire",
    price: "Rp 1.288.500,-",
    oldPrice: "Rp 1.718.000,-",
    image: "https://storage.googleapis.com/hayyu-storage/landing-page/assets/landing-page-1764236509.webp",
    href: `${BASE}/detail-treatment/acne-series-saphire?q=&t=`,
  },
];

const clinicProducts = [
  {
    category: "Supplement",
    name: "Crystal Tomato Supplement",
    price: "Rp 1.999.000,-",
    image: "https://storage.googleapis.com/hayyu-storage/item/426301751.webp",
    href: `${BASE}/detail-skincare/crystal-tomato-supplement?c=&q=`,
  },
  {
    category: "Sunscreen",
    name: "Ultimate Protection",
    price: "Rp 158.000,-",
    image: "https://storage.googleapis.com/hayyu-storage/item/310321913.webp",
    href: `${BASE}/detail-skincare/ultimate-protection?c=&q=`,
  },
  {
    category: "Night Care",
    name: "Night Cream III",
    price: "Rp 95.000,-",
    image: "https://storage.googleapis.com/hayyu-storage/item/140185640.webp",
    href: `${BASE}/detail-skincare/night-cream-iii?c=&q=`,
  },
  {
    category: "Serum",
    name: "White by Traxinamide Serum",
    price: "Rp 175.000,-",
    image: "https://storage.googleapis.com/hayyu-storage/item/193536567.webp",
    href: `${BASE}/detail-skincare/white-by-traxinamide-serum?c=&q=`,
  },
];

const updates = [
  {
    label: "Special Offer",
    title: "Tetap update dengan penawaran spesial Hayyu",
    href: `${BASE}/special-offer`,
  },
  {
    label: "What is New",
    title: "Campaign, treatment terbaru, dan cerita customer Hayyu",
    href: `${BASE}/news`,
  },
  {
    label: "Partnership",
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
  },
  {
    name: "Citra Kirana",
    role: "Public Figure",
    quote:
      "Merawat kulit wajah adalah salah satu caraku untuk bersyukur atas anugerah cantik dari-Nya.",
  },
  {
    name: "Larissa Chou",
    role: "Public Figure",
    quote:
      "Semua staff Hayyu wanita, treatment terasa tenang, nyaman, dan tanpa was-was.",
  },
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`mb-3 text-[14px] font-medium uppercase tracking-eyebrow ${
        light ? "text-white/78" : "text-primary"
      }`}
    >
      {children}
    </p>
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

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m5 12.5 4.2 4L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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

function TreatmentCard({
  programme,
}: {
  programme: (typeof treatmentPrograms)[number];
}) {
  return (
    <a
      href={programme.href}
      {...externalProjectLinkProps(programme.href)}
      className="group block text-center"
    >
      <div className="relative aspect-[16/8] overflow-hidden rounded-[20px] bg-primary-50 shadow-[0_18px_48px_rgba(0,100,98,0.08)]">
        <Image
          src={programme.image}
          alt={programme.name}
          fill
          sizes="(min-width: 1024px) 520px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
      </div>
      <p className="mt-7 text-[13px] font-medium uppercase tracking-[0.2em] text-primary">
        {programme.category}
      </p>
      <h3 className="mt-2 text-[clamp(22px,2.4vw,29px)] font-normal uppercase leading-snug tracking-[0.04em] text-muted">
        {programme.name}
      </h3>
      <div className="mt-3 flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
        <p className="text-[18px] font-medium text-primary">{programme.price}</p>
        <p className="text-[14px] text-muted line-through">{programme.oldPrice}</p>
      </div>
    </a>
  );
}

function ProductCard({ product }: { product: (typeof clinicProducts)[number] }) {
  return (
    <a
      href={product.href}
      {...externalProjectLinkProps(product.href)}
      className="group block text-center"
    >
      <div className="relative aspect-[16/8] overflow-hidden rounded-[20px] bg-primary-50 shadow-[0_18px_48px_rgba(0,100,98,0.08)]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 520px, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
        />
      </div>
      <p className="mt-7 text-[13px] font-medium uppercase tracking-[0.2em] text-primary">
        {product.category}
      </p>
      <h3 className="mt-2 text-[clamp(22px,2.4vw,29px)] font-normal uppercase leading-snug tracking-[0.04em] text-muted">
        {product.name}
      </h3>
      <p className="mt-3 text-[18px] font-medium text-primary">{product.price}</p>
    </a>
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
        <section className="hero-bg relative overflow-hidden pt-36 text-ink lg:pt-48">
          <div
            className="absolute inset-0 bg-gradient-to-b from-cream/80 via-cream/58 to-white lg:bg-gradient-to-r lg:from-cream/95 lg:via-cream/78 lg:to-white/22"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-content items-center gap-12 px-5 pb-20 lg:grid-cols-[0.96fr_0.9fr] lg:px-8 lg:pb-24 xl:px-0">
            <div>
              <Reveal className="max-w-3xl">
                <Eyebrow>Hayyu Skin Clinic</Eyebrow>
                <h1 className="font-light leading-[1.02] tracking-tight text-ink text-[clamp(45px,8vw,92px)]">
                  Hayyu Skin Clinic
                </h1>
                <p className="mt-5 max-w-2xl text-[clamp(22px,3vw,34px)] font-light leading-tight text-primary">
                  Karena kamu bersinar dengan Cantik Aslimu.
                </p>
                <p className="mt-7 max-w-2xl text-[18px] leading-relaxed text-body">
                  Klinik kecantikan khusus wanita yang merawat kulit secara personal
                  melalui brand story yang berakar pada rasa syukur, International
                  Smart Skin Technology, dan Skin Resolve Programme yang terstruktur.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkButton href={RESERVATION_URL}>Reservasi Konsultasi</LinkButton>
                  <LinkButton href="#brand-story" variant="outline">
                    Kenali Hayyu
                  </LinkButton>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120} className="mx-auto w-full max-w-[560px] lg:max-w-none">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-primary-50 shadow-[0_24px_80px_rgba(0,100,98,0.16)] ring-1 ring-white/80 sm:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src="/images/hero-konsultasi-kulit.png"
                  alt="Konsultasi kulit di Hayyu Skin Clinic bersama dokter wanita"
                  fill
                  priority
                  sizes="(min-width: 1280px) 560px, (min-width: 1024px) 44vw, 100vw"
                  className="object-cover object-[center_42%] transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-800/18 via-transparent to-white/12"
                  aria-hidden="true"
                />
              </div>
            </Reveal>

            <Reveal delay={180} className="lg:col-span-2">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {trustPoints.map((point) => (
                  <div
                    key={point.label}
                    className="rounded-lg border border-white/70 bg-white/82 px-5 py-5 shadow-[0_18px_44px_rgba(0,100,98,0.1)] backdrop-blur"
                  >
                    <p className="text-[34px] font-light leading-none text-primary">
                      <StatCounter value={point.value} />
                    </p>
                    <p className="mt-3 text-[14px] leading-snug text-body">
                      {point.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="brand-story" className="scroll-mt-28 bg-white px-5 py-20 lg:py-28">
          <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:px-8 xl:px-0">
            <Reveal>
              <Eyebrow>Brand Story</Eyebrow>
              <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(31px,4vw,54px)]">
                Dibangun untuk Wanita yang Ingin Merawat Diri dengan Tenang
              </h2>
              <div className="mt-6 space-y-5 text-[18px] leading-relaxed text-body">
                <p>
                  Hayyu lahir dari keresahan sederhana: banyak wanita ingin merawat
                  kulit, tetapi juga ingin merasa aman, nyaman, terjaga privasinya,
                  dan yakin bahwa pilihan perawatannya tidak bertentangan dengan
                  nilai yang mereka pegang.
                </p>
                <p>
                  Karena itu Hayyu tidak sekadar menawarkan treatment. Hayyu membangun
                  pengalaman klinik yang menghormati fitrah wanita, menjaga privasi,
                  dan membantu setiap pasien mensyukuri kecantikan aslinya.
                </p>
              </div>
              <div className="mt-8">
                <LinkButton href="/brand-story" variant="outline">
                  Baca Brand Story
                </LinkButton>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <ImagePlaceholder
                filename="hayyu-quote-portrait.png"
                alt="Founder Hayyu Skin Clinic sebagai representasi perjalanan dan nilai brand Hayyu"
                ratio="aspect-[5/6]"
                className="mx-auto max-w-lg bg-primary-50"
              />
            </Reveal>
          </div>

          <div className="mx-auto mt-12 grid max-w-content gap-4 md:grid-cols-3 lg:px-8 xl:px-0">
            {brandValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <article className="h-full rounded-lg border border-primary/10 bg-cream p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-white text-primary ring-1 ring-primary/10">
                    <CheckIcon />
                  </span>
                  <h3 className="mt-5 text-[23px] font-normal leading-snug text-ink">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-[16px] leading-relaxed text-body">
                    {value.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="isst" className="scroll-mt-28 bg-cream px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal className="max-w-3xl">
              <Eyebrow>International Smart Skin Technology</Eyebrow>
              <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(31px,4vw,54px)]">
                Teknologi Hayyu Bukan Sekadar Alat. Ini Sebuah Sistem.
              </h2>
              <p className="mt-6 text-[18px] leading-relaxed text-body">
                ISST menggabungkan formula dan device berstandar internasional,
                diagnosa dokter, Smart Combo Treatment melalui SRP, dan pengukuran
                hasil dengan QuantifiCare LifeViz 3D dari Prancis.
              </p>
            </Reveal>

            <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {isstPillars.map((pillar, index) => (
                <Reveal key={pillar.num} delay={index * 70}>
                  <article className="group h-full rounded-lg border border-primary/10 bg-white p-7 transition-colors hover:border-primary/25 hover:bg-primary hover:text-white">
                    <p className="text-[15px] font-medium uppercase tracking-[0.18em] text-primary transition-colors group-hover:text-white/70">
                      {pillar.num}
                    </p>
                    <h3 className="mt-5 text-[22px] font-normal leading-snug text-ink transition-colors group-hover:text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-relaxed text-body transition-colors group-hover:text-white/76">
                      {pillar.body}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12 grid items-center gap-10 rounded-lg border border-primary/10 bg-white p-6 lg:grid-cols-[0.88fr_1.12fr] lg:p-8">
              <ImagePlaceholder
                filename="quantificare-lifeviz-3d.png"
                alt="Perangkat QuantifiCare LifeViz untuk analisis kulit 3D di Hayyu Skin Clinic"
                ratio="aspect-[4/3]"
                className="rounded-lg"
              />
              <div>
                <Eyebrow>QuantifiCare LifeViz</Eyebrow>
                <h3 className="text-[clamp(26px,3vw,38px)] font-light leading-tight text-ink">
                  Hasil Tidak Hanya Dirasakan. Hasil Juga Diukur.
                </h3>
                <p className="mt-5 text-[17px] leading-relaxed text-body">
                  Analisis kulit membantu dokter membaca pigmentasi, tekstur,
                  oiliness, pori, dan perubahan wajah secara lebih objektif. Data ini
                  menjadi dasar rekomendasi treatment, bukan sekadar asumsi visual.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="srp" className="scroll-mt-28 bg-primary-800 px-5 py-20 text-white lg:py-28">
          <div className="mx-auto grid max-w-content gap-12 lg:grid-cols-[0.96fr_1.04fr] lg:px-8 xl:px-0">
            <Reveal>
              <Eyebrow light>Skin Resolve Programme</Eyebrow>
              <h2 className="font-light leading-tight text-white text-[clamp(31px,4vw,54px)]">
                Perawatan yang Punya Arah, Urutan, dan Tujuan.
              </h2>
              <p className="mt-6 text-[18px] leading-relaxed text-white/82">
                SRP adalah sistem tata laksana perawatan kulit Hayyu. Dokter memulai
                dari skin analyzer, anamnesa, dan diagnosa, lalu menyusun jalur
                treatment yang sesuai kondisi aktual kulitmu.
              </p>
              <div className="mt-8">
                <LinkButton href="/skin-resolve-programme" variant="light">
                  Pelajari SRP
                </LinkButton>
              </div>
            </Reveal>

            <div className="grid gap-4">
              {srpStages.map((stage, index) => (
                <Reveal key={stage.title} delay={index * 80}>
                  <article className="rounded-lg border border-white/12 bg-white/[0.06] p-6">
                    <div className="flex items-start gap-5">
                      <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white text-[16px] font-medium text-primary">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-[22px] font-normal leading-snug text-white">
                          {stage.title}
                        </h3>
                        <p className="mt-2 text-[16px] leading-relaxed text-white/72">
                          {stage.body}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="treatments" className="scroll-mt-28 bg-white px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal className="mx-auto max-w-4xl text-center">
              <p className="text-[20px] font-light text-muted">Our Services</p>
              <div className="mx-auto mt-5 h-1 w-64 overflow-hidden bg-primary-50">
                <div className="h-full w-1/2 bg-primary" />
              </div>
              <h2 className="mt-10 font-light leading-tight tracking-tight text-muted text-[clamp(32px,5vw,54px)]">
                We offer beauty products and wide range of beauty services
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-body">
                Treatment Hayyu disusun untuk concern spesifik dan dipilih bersama
                dokter, sehingga setiap langkah punya arah yang jelas.
              </p>
            </Reveal>

            <Reveal className="mx-auto mt-16 max-w-6xl">
              <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                {treatmentPrograms.slice(0, 2).map((programme) => (
                  <TreatmentCard key={programme.name} programme={programme} />
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <LinkButton href={`${BASE}/treatment`} variant="outline">
                  Lihat Treatment
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="products" className="scroll-mt-28 bg-cream px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal className="mx-auto max-w-4xl text-center">
              <p className="text-[20px] font-light text-muted">Our Best Seller</p>
              <div className="mx-auto mt-5 h-1 w-64 overflow-hidden bg-primary-50">
                <div className="h-full w-1/2 bg-primary" />
              </div>
              <h2 className="mt-10 font-light leading-tight tracking-tight text-muted text-[clamp(32px,5vw,54px)]">
                Take care of your original beauty with our skincare
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-body">
                Real product Hayyu dari halaman Clinic Skincare, ditampilkan lebih
                lega agar foto dan nama produk mudah dipindai.
              </p>
            </Reveal>

            <Reveal className="mx-auto mt-16 max-w-6xl">
              <div className="grid gap-12 md:grid-cols-2 md:gap-16">
                {clinicProducts.slice(0, 2).map((product) => (
                  <ProductCard key={product.name} product={product} />
                ))}
              </div>
              <div className="mt-12 flex justify-center">
                <LinkButton href={`${BASE}/skincare`} variant="outline">
                  Lihat Skincare
                </LinkButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="proof" className="scroll-mt-28 bg-surface/60 px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal className="max-w-3xl">
              <Eyebrow>Testimonial</Eyebrow>
              <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(31px,4vw,54px)]">
                Ini Kata Mereka yang Sudah Mencoba Perawatan Hayyu
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {testimonials.map((item, index) => (
                <Reveal key={item.name} delay={index * 80}>
                  <figure className="h-full rounded-lg border border-primary/10 bg-white p-7 shadow-[0_16px_42px_rgba(0,100,98,0.06)]">
                    <blockquote className="text-[18px] leading-relaxed text-body">
                      "{item.quote}"
                    </blockquote>
                    <figcaption className="mt-7 border-t border-primary/10 pt-5">
                      <p className="text-[17px] font-medium text-ink">{item.name}</p>
                      <p className="mt-1 text-[14px] uppercase tracking-[0.14em] text-primary">
                        {item.role}
                      </p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

            <div className="mt-10">
              <LinkButton href={`${BASE}/testimonial`} variant="outline">
                Lihat Testimonial
              </LinkButton>
            </div>
          </div>
        </section>

        <section id="updates" className="scroll-mt-28 bg-cream px-5 py-20 lg:py-28">
          <div className="mx-auto max-w-content lg:px-8 xl:px-0">
            <Reveal className="max-w-3xl">
              <Eyebrow>Special Offer, News, Partnership</Eyebrow>
              <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(31px,4vw,54px)]">
                Yang Terbaru dari Hayyu
              </h2>
            </Reveal>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {updates.map((item, index) => (
                <Reveal key={item.label} delay={index * 80}>
                  <a
                    href={item.href}
                    {...externalProjectLinkProps(item.href)}
                    className="group flex h-full min-h-48 flex-col justify-between rounded-lg border border-primary/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <p className="text-[14px] font-medium uppercase tracking-[0.18em] text-primary">
                      {item.label}
                    </p>
                    <h3 className="mt-8 text-[24px] font-light leading-snug text-ink">
                      {item.title}
                    </h3>
                    <span className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium uppercase tracking-[0.14em] text-primary">
                      View More
                      <ArrowIcon />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="app" className="scroll-mt-28 bg-white px-5 py-20 lg:py-28">
          <div className="mx-auto grid max-w-content items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 xl:px-0">
            <Reveal>
              <ImagePlaceholder
                filename="isst-tinjau-analisis-layar.png"
                alt="Dokter Hayyu meninjau data kulit pasien sebagai bagian dari pengalaman digital Hayyu"
                ratio="aspect-[4/3]"
                className="rounded-lg"
              />
            </Reveal>

            <Reveal delay={120}>
              <Eyebrow>HayyuDoc</Eyebrow>
              <h2 className="font-light leading-tight tracking-tight text-ink text-[clamp(31px,4vw,54px)]">
                Solusi Tepat Perawatan Kulit Wajah Terlengkap dalam Satu Aplikasi
              </h2>
              <p className="mt-6 text-[18px] leading-relaxed text-body">
                Reservasi, riwayat treatment, rekomendasi produk, dan perjalanan
                kulitmu lebih mudah dipantau melalui ekosistem HayyuDoc.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <LinkButton href={`${BASE}/hayyu-doc`} variant="outline">
                  Lihat HayyuDoc
                </LinkButton>
                <LinkButton href={RESERVATION_URL}>Reservasi</LinkButton>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-primary-800 px-5 py-20 text-white lg:py-28">
          <Reveal className="mx-auto max-w-prose text-center">
            <Eyebrow light>Mulai Perjalanan Kulitmu</Eyebrow>
            <h2 className="font-light leading-tight text-white text-[clamp(31px,4vw,52px)]">
              Konsultasi yang Tepat Dimulai dari Memahami Kondisi Kulitmu.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[18px] leading-relaxed text-white/82">
              Datang untuk konsultasi, analisis kulit, dan rekomendasi program yang
              sesuai. Hayyu membantu kamu merawat Cantik Aslimu dengan cara yang
              lebih aman, personal, dan terukur.
            </p>
            <div className="mt-9">
              <LinkButton href={RESERVATION_URL} variant="light">
                Reservasi Sekarang
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
