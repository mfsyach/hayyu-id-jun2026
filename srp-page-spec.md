# Page Spec — Skin Resolve Programme (SRP)

> **Purpose of this document:** This is the content + structure brief for a new page in the Hayyu site.
> It contains **all the copy** (in Indonesian, verbatim) plus the intended **section structure**, **design intent**, and **SEO requirements**.
> The page must be built to match the **existing style, components, and conventions of this repo** — the colours/fonts listed below are the *intent* from the mockup and should be reconciled with the repo's actual design tokens (use the repo's tokens where they already exist).

---

## 1. Page identity

| Field | Value |
|---|---|
| Page name | Skin Resolve Programme (SRP) |
| Suggested route/slug | `/skin-resolve-programme` (or repo convention; e.g. `/srp`) |
| Language | Indonesian (`lang="id"`) |
| Primary CTA | "Reservasi Sekarang" → `https://hayyu.id/reservasi` |

### SEO / meta
- **`<title>`:** `Skin Resolve Programme | Hayyu Skin Clinic`
- **Meta description:** `Skin Resolve Programme (SRP) adalah sistem perawatan kulit terstruktur dan personal di Hayyu Skin Clinic. Berbasis diagnosa dokter, analisis QuantifiCare, dan tiga stage program yang disesuaikan kondisi unik kulit setiap pasien.`
- **Structured data (JSON-LD):** include a `MedicalTherapy` schema:
  - `name`: Skin Resolve Programme
  - `alternateName`: SRP
  - `description`: *Skin Resolve Programme (SRP) adalah sistem perawatan kulit terstruktur eksklusif Hayyu Skin Clinic. Dimulai dari analisis kulit menggunakan QuantifiCare, dilanjutkan diagnosa dokter, lalu program tata laksana yang dipersonalisasi dalam 3 stage: Main Problem, Additional Problem, dan Maintenance/Anti-Aging. Setiap pasien mendapatkan rekomendasi treatment dan produk yang disesuaikan kondisi kulit masing-masing, dengan sistem yang komprehensif sehingga hasil nyata bisa dirasakan bahkan sejak perawatan pertama.*
  - `provider`: MedicalBusiness — Hayyu Skin Clinic — `https://hayyu.id`
  - `recognizingAuthority`: Organization — "Hayyu Skin Clinic Research and Development Department"

---

## 2. Design intent (reconcile with repo tokens)

The mockup uses a calm, editorial, luxe-clinical look. If the repo already has equivalents, **prefer the repo's tokens/components**. These values are the reference target:

**Palette**
- Cream / background: `#FAF7F2`
- Sand / borders & dividers: `#E8DFD0`
- Sage / accents: `#7A8C6E`
- Earth / earth-light: `#5C4A32` / `#8B6F4E`
- Warm white / cards: `#FFFDF9`
- Text dark / mid / light: `#2C2416` / `#5C4A32` / `#8B7355`
- Gold / accent & CTA: `#C4A35A`
- Teal / dark sections: `#1A4A4A`; teal-mid: `#2D6B6B`

**Type**
- Display / headings: serif — *Cormorant Garamond* (300/400, italic for emphasis)
- Body / labels: sans — *DM Sans* (300/400/500)
- Emphasis pattern: italic words inside headings rendered in gold or earth-light (e.g. "Skin Resolve *Programme*").

**Rhythm**
- Generous vertical padding (~72px section padding desktop), max content width ~860px, centered.
- Alternating section backgrounds: light (cream) ↔ dark (teal).
- Small uppercase letter-spaced "section labels" above each `<h2>`.
- Thin 1px sand dividers.
- Mobile breakpoint ~640px (stack grids to single column; reduce hero/section padding).

> **Note:** The original mockup also defines styles for a "Program Options" and "Supporting Product" card section, but **those sections were never populated with content** — they are leftover CSS. Ignore them unless we add that content later.

---

## 3. Page structure (top → bottom)

1. Hero (dark/teal)
2. What is SRP (light)
3. Customer Journey — 8-step flow (dark/teal)
4. 3 Stage Program — 3 cards (light)
5. Detail Proses Konsultasi — vertical timeline (light)
6. Efektivitas Sistem — 3 paragraphs + 3 cards (light)
7. Pullquote (dark/teal)
8. FAQ (light)
9. CTA (dark/teal)

---

## 4. Section content (verbatim copy)

### 4.1 — Hero  *(dark / teal background; large faint "SRP" watermark behind)*
- **Label:** Sistem Perawatan Kulit Eksklusif Hayyu
- **H1:** Skin Resolve *Programme*  *(italicise "Programme", gold)*
- **Sub-headline:** Bukan sekadar pilihan treatment. SRP adalah program tata laksana kulit yang terstruktur, personal, dan berbasis diagnosa — dirancang untuk menyelesaikan masalah kulitmu secara sistematis dari akar. Sistem yang komprehensif ini menghasilkan efektivitas nyata yang bisa dirasakan bahkan sejak perawatan pertama.

**Stat row (4 items):**
| Value | Label |
|---|---|
| 3 | Stage program terstruktur |
| 100% | Disesuaikan per pasien |
| 1x | Hasil nyata terasa sejak perawatan pertama |
| ✓ | Pendampingan pasca treatment oleh tim Hayyu |

---

### 4.2 — What is SRP  *(light)*
- **Label:** Apa itu Skin Resolve Programme?
- **H2:** Program Perawatan Kulit yang *Punya Arah*

**Paragraphs:**
1. Banyak orang pergi ke klinik kecantikan berkali-kali tapi tidak tahu apakah kulitnya benar-benar membaik. Treatment dilakukan, tapi tidak ada peta jalan yang jelas — tidak ada program, tidak ada target, tidak ada ukuran keberhasilan.
2. Skin Resolve Programme (SRP) adalah jawaban Hayyu untuk masalah ini. SRP adalah sistem tata laksana perawatan kulit yang dikembangkan oleh tim Research & Development Hayyu — sebuah program terstruktur yang dimulai dari diagnosa yang tepat, lalu menentukan jalur perawatan yang paling efektif untuk kondisi kulit spesifik setiap pasien.
3. SRP berjalan di dalam aplikasi HayyuDoc dan dikelola langsung oleh dokter di setiap sesi konsultasi. Setiap keputusan — treatment yang dipilih, produk yang direkomendasikan, jadwal kontrol berikutnya — semua tercatat dan termonitor dalam satu sistem yang berkesinambungan.

**Highlight box** *(left gold border, warm gradient)*
- **Label:** Perbedaan Mendasar
- **Body:** Di klinik lain, kamu memilih treatment dari menu. Di Hayyu dengan SRP, dokter membangun program untukmu — berdasarkan kondisi aktual kulitmu, bukan berdasarkan treatment yang sedang populer.

---

### 4.3 — Customer Journey  *(dark / teal)*
- **Label:** Customer Journey
- **H2:** Dari Datang hingga *Pulang — Semua Terstruktur*

**Flow steps (grid of 8; each = number + icon + title + short desc):**

| # | Icon | Title | Description |
|---|---|---|---|
| 01 | 📋 | Reservasi & Registrasi | Booking via HayyuDoc atau WhatsApp. Tidak ada antrian panjang. |
| 02 | 🔬 | Skin Analyzer | QuantifiCare LifeViz menganalisis kondisi kulit secara objektif sebelum konsultasi. |
| 03 | 👩‍⚕️ | Konsultasi Dokter | Dokter review history, anamnesa, physical diagnose, dan jelaskan hasil skin analyzer. |
| 04 | 📊 | Skin Resolve Programme | Dokter menentukan stage dan diagnosa. Program tata laksana muncul otomatis. |
| 05 | ✅ | Pilih Program | Customer menyetujui program. Dokter menentukan kombinasi treatment terbaik untuk hari itu. |
| 06 | 💆‍♀️ | Tindakan | Treatment dilakukan di ruang privat oleh dokter dan asisten wanita terlatih. |
| 07 | 📝 | Medical Record | Dokter mengisi rekam medis, petunjuk produk pasca treatment, dan jadwal kontrol. |
| 08 | 📱 | Pendampingan | Hayyu menghubungi kamu setelah treatment dan memastikan jadwal kontrol berikutnya. Kamu tidak sendirian dalam proses ini. |

---

### 4.4 — 3 Stage Program  *(light)*
- **Label:** 3 Stage Program
- **H2:** Perawatan yang Punya *Urutan dan Tujuan*
- **Intro:** SRP tidak dimulai dari semua masalah sekaligus. Dokter menentukan stage yang paling tepat berdasarkan kondisi kulit aktual — memastikan setiap sesi treatment memiliki fokus yang jelas.

**Cards (3; each has a number 01–03, a "Stage N" badge, title, description). Accent colours: card 1 = gold, card 2 = teal-mid, card 3 = sage.**

**Stage 1 — Main *Problem***
Fokus pada masalah kulit utama yang paling mengganggu dan membutuhkan penanganan prioritas — jerawat aktif, flek melasma, hiperpigmentasi, atau kondisi kulit lain yang dominan. Program di stage ini dirancang untuk menyelesaikan akar masalah, bukan hanya gejalanya.

**Stage 2 — Additional *Problem***
Setelah masalah utama tertangani atau terkontrol, program bergerak ke masalah sekunder — bekas jerawat, ketidakmerataan warna kulit, tekstur, atau kondisi lain yang perlu dioptimalkan. Stage ini membangun hasil yang lebih komprehensif.

**Stage 3 — Maintenance & *Anti-Aging***
Ketika kondisi kulit sudah optimal, program beralih ke maintenance — menjaga hasil yang sudah dicapai dan mencegah tanda-tanda penuaan dini. Stage ini adalah investasi jangka panjang untuk kulit yang sehat dan terawat di masa mendatang.

---

### 4.5 — Detail Proses Konsultasi  *(light; vertical timeline with connecting line + dots)*
- **Label:** Detail Proses Konsultasi
- **H2:** Yang Terjadi Saat Kamu *Duduk dengan Dokter Hayyu*

**Timeline steps (6; each = small eyebrow + title + description):**

1. **Eyebrow:** Sebelum Masuk Ruang Konsul — **Title:** Dokter Review Riwayatmu
   Dokter memeriksa history customer di sistem sebelum kamu masuk — treatment sebelumnya, diagnosa, produk yang dipakai. Kamu tidak perlu mengulang cerita dari awal setiap kali datang.
2. **Eyebrow:** Di Ruang Konsultasi — **Title:** Anamnesa & Physical Diagnose
   Dokter menanyakan keluhan utama, menggali faktor penyebab, dan memeriksa kulit langsung. Bukan hanya melihat — tapi memahami konteks kondisi kulitmu secara menyeluruh.
3. **Eyebrow:** Penjelasan Berbasis Visual — **Title:** Kamu Ikut Melihat & Memahami
   Dokter menjelaskan kondisi kulitmu menggunakan hasil QuantifiCare dan gambar peraga fisiologi kulit — bukan hanya bilang "kulitmu bermasalah" tapi menunjukkan dengan data apa yang sebenarnya terjadi di lapisan kulitmu.
4. **Eyebrow:** Masuk ke SRP — **Title:** Diagnosa → Program Otomatis Muncul
   Dokter memasukkan diagnosa ke sistem SRP. Secara otomatis muncul rekomendasi program tata laksana — lengkap dengan kombinasi treatment yang direkomendasikan dan Clinic Skincare yang sesuai. Semua transparan dan dijelaskan sebelum kamu memutuskan.
5. **Eyebrow:** Keputusan Ada di Tanganmu — **Title:** Pilih, Setujui, Mulai
   Kamu memilih program yang sesuai. Dokter menentukan treatment yang dilakukan hari itu berdasarkan pilihanmu. Tidak ada yang dipaksakan — hanya rekomendasi berbasis data yang kamu setujui sendiri.
6. **Eyebrow:** Setelah Treatment — **Title:** Pendampingan Pasca Treatment
   Dokter mengisi petunjuk pemakaian Clinic Skincare pasca treatment dan merekomendasikan jadwal kontrol berikutnya. Tim Hayyu menghubungi kamu beberapa hari setelah treatment untuk memastikan kondisi kulitmu baik — karena perjalanan perawatan tidak berhenti saat kamu keluar dari klinik.

---

### 4.6 — Efektivitas Sistem  *(light)*
- **Label:** Efektivitas Sistem
- **H2:** Sistem yang Komprehensif, *Hasil yang Nyata*

**Paragraphs:**
1. SRP bukan hanya soal proses yang lebih teratur. Sistem yang mendalam dan komprehensif ini berdampak langsung pada efektivitas hasil perawatan.
2. Karena treatment ditentukan berdasarkan diagnosa aktual — bukan asumsi — setiap prosedur yang dilakukan benar-benar tepat sasaran. Kombinasi treatment yang dipilih dokter melalui SRP dirancang untuk bekerja bersama secara sinergis, saling mendukung untuk hasil yang paling optimal.
3. Hasilnya: banyak customer Hayyu merasakan perubahan nyata pada kondisi kulitnya bahkan sejak perawatan pertama. Bukan karena janji instan — tapi karena sejak awal, treatment yang diberikan memang yang paling tepat untuk kondisi kulit mereka.

**Cards (3; numbered 01–03, top accent borders: gold / teal-mid / sage):**

- **01 — Tepat Sasaran:** Treatment dipilih berdasarkan diagnosa aktual — bukan perkiraan. Setiap prosedur punya alasan yang kuat mengapa ia tepat untuk kondisi kulitmu.
- **02 — Kombinasi Sinergis:** Metode yang dikombinasikan dalam SRP dipilih karena mekanisme kerjanya saling mendukung — bukan dipilih secara acak atau karena sedang populer.
- **03 — Terukur & Terdokumentasi:** QuantifiCare mengukur kondisi kulit sebelum dan sesudah — sehingga perubahan bisa dilihat dalam data nyata, bukan hanya dirasakan secara subjektif.

---

### 4.7 — Pullquote  *(dark / teal; large quotation mark watermark)*
> SRP bukan tentang menjual treatment sebanyak-banyaknya. SRP adalah tentang memastikan setiap treatment yang kamu jalani punya alasan yang jelas, tujuan yang terukur, dan hasil yang bisa kamu lihat sendiri.

---

### 4.8 — FAQ  *(light; each item has a left border that highlights on hover)*
- **Label:** Pertanyaan yang Sering Ditanyakan
- **H2:** Tentang *Skin Resolve Programme*

1. **Q:** Apakah SRP wajib diikuti semua customer Hayyu?
   **A:** SRP adalah standar sistem konsultasi Hayyu untuk semua customer — baik baru maupun lama. Program yang direkomendasikan sepenuhnya disesuaikan dengan kondisi kulit dan didiskusikan bersama dokter. Tidak ada yang dipaksakan.
2. **Q:** Apa bedanya SRP dengan program paket klinik kecantikan biasa?
   **A:** Paket klinik biasanya fixed — kamu beli sejumlah sesi treatment yang sudah ditentukan. SRP berbeda: programnya dinamis dan disesuaikan dengan perkembangan kondisi kulitmu. Diagnosa bisa berubah setiap sesi, dan treatment yang direkomendasikan menyesuaikan.
3. **Q:** Apakah program SRP bisa dilanjutkan setelah jeda lama?
   **A:** Program SRP dirancang untuk memberikan hasil yang berkelanjutan. Konsistensi perawatan adalah kunci — dokter akan memandu jadwal yang paling sesuai dengan kondisi dan tujuan kulitmu.
4. **Q:** Apakah history program SRP saya tersimpan?
   **A:** Ya. Semua riwayat SRP — diagnosa, treatment yang dilakukan, perkembangan kondisi kulit, dan Clinic Skincare yang digunakan — tersimpan di sistem Hayyu dan bisa diakses melalui aplikasi HayyuDoc.
5. **Q:** Berapa lama proses konsultasi SRP?
   **A:** Untuk customer baru, konsultasi biasanya membutuhkan waktu lebih lama karena dokter perlu menjelaskan SRP secara lengkap. Untuk customer lama yang melanjutkan program, prosesnya lebih singkat karena history sudah tersimpan.

---

### 4.9 — CTA  *(dark / teal)*
- **Label:** Mulai Program Kulitmu
- **Title:** Perawatan yang Punya Arah Dimulai dari Satu Langkah
- **Body:** Reservasi konsultasi pertamamu di Hayyu. Dokter akan melakukan skin analysis, diagnosa, dan merancang Skin Resolve Programme yang tepat untukmu.
- **Button:** Reservasi Sekarang → `https://hayyu.id/reservasi`

---

## 5. Build notes / acceptance criteria
- Reuse the repo's existing layout shell (header, nav, footer, fonts, tokens, shared components) — this page should feel native to the site, not bolted on.
- Add the page to navigation/sitemap if other treatment/programme pages are linked there.
- Fully responsive; grids collapse to single column on mobile (~640px and below).
- Preserve all Indonesian copy exactly as above (no translation, no rewriting).
- Include the `<title>`, meta description, and JSON-LD schema from §1.
- The single conversion action on the page is the reservation CTA (`https://hayyu.id/reservasi`).
- Decorative emoji icons in the Customer Journey are fine as a starting point, but swap for the repo's icon set if one exists.
