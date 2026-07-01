// Navigation + footer link data, mirrored from the live site https://hayyu.id
// (top-level items and dropdown contents confirmed from the live navbar/footer).

export const BASE = "https://hayyu.id";

export type NavLink = { label: string; href: string };
export type NavItem = NavLink & { children?: NavLink[] };

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "::1"]);

export function isExternalProjectLink(href: string) {
  if (!/^https?:\/\//i.test(href)) return false;

  try {
    return !LOCAL_HOSTS.has(new URL(href).hostname);
  } catch {
    return false;
  }
}

export function externalProjectLinkProps(href: string) {
  return isExternalProjectLink(href)
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : {};
}

// Real destinations confirmed from the live navbar markup.
export const utilityLinks: NavLink[] = [
  { label: "Online Reservation", href: `${BASE}/reservasi` },
  { label: "Our Location", href: `${BASE}/location` },
  { label: "E-Brochure", href: `${BASE}/brochure` },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: `${BASE}/about`,
    children: [
      { label: "About Hayyu", href: `${BASE}/about` },
      { label: "Brand Story", href: "/brand-story" },
      { label: "Founder", href: `${BASE}/founder` },
      { label: "Our Doctor", href: `${BASE}/doctor` },
      { label: "Testimonial", href: `${BASE}/testimonial` },
      { label: "Hayyupedia", href: `${BASE}/hayyupedia` },
      { label: "FAQ", href: `${BASE}/faq` },
      { label: "ISST", href: "/isst" },
      { label: "Skin Resolve Programme", href: "/skin-resolve-programme" },
    ],
  },
  {
    label: "Treatment",
    href: `${BASE}/treatment`,
    children: [
      { label: "All Treatment", href: `${BASE}/treatment` },
      { label: "Skin Resolve Programme", href: "/skin-resolve-programme" },
      { label: "Peeling", href: `${BASE}/treatment/peeling` },
      { label: "Laser & Light", href: `${BASE}/treatment/laser-light` },
      { label: "Microneedle", href: `${BASE}/treatment/microneedle` },
      { label: "RF", href: `${BASE}/treatment/rf` },
      { label: "Facial", href: `${BASE}/treatment/facial` },
      { label: "Body Treatment", href: `${BASE}/treatment/body-treatment` },
      { label: "Others", href: `${BASE}/treatment/others` },
    ],
  },
  { label: "Clinic Skincare", href: `${BASE}/skincare` },
  { label: "Special Offers", href: `${BASE}/special-offer` },
  { label: "HayyuDoc", href: `${BASE}/hayyu-doc` },
  { label: "Partnership", href: `${BASE}/partnership` },
  { label: "News", href: `${BASE}/news` },
];

// ---- Footer ---------------------------------------------------------------

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "About Us",
    links: [
      { label: "About Hayyu", href: `${BASE}/about` },
      { label: "Brand Story", href: "/brand-story" },
      { label: "Founder", href: `${BASE}/founder` },
      { label: "Our Doctor", href: `${BASE}/doctor` },
      { label: "Testimonial", href: `${BASE}/testimonial` },
      { label: "Hayyupedia", href: `${BASE}/hayyupedia` },
      { label: "FAQ", href: `${BASE}/faq` },
      { label: "ISST", href: "/isst" },
      { label: "Skin Resolve Programme", href: "/skin-resolve-programme" },
    ],
  },
  {
    title: "Treatments",
    links: [
      { label: "All Treatment", href: `${BASE}/treatment` },
      { label: "Peeling", href: `${BASE}/treatment/peeling` },
      { label: "Laser & Light", href: `${BASE}/treatment/laser-light` },
      { label: "Microneedle", href: `${BASE}/treatment/microneedle` },
      { label: "RF", href: `${BASE}/treatment/rf` },
      { label: "Facial", href: `${BASE}/treatment/facial` },
      { label: "Body Treatment", href: `${BASE}/treatment/body-treatment` },
      { label: "Others", href: `${BASE}/treatment/others` },
    ],
  },
  {
    title: "Other Page",
    links: [
      { label: "Clinic Skincare", href: `${BASE}/skincare` },
      { label: "Special Offer", href: `${BASE}/special-offer` },
      { label: "Skin Resolve Programme", href: "/skin-resolve-programme" },
      { label: "HayyuDoc", href: `${BASE}/hayyu-doc` },
      { label: "Partnership", href: `${BASE}/partnership` },
      { label: "News", href: `${BASE}/news` },
      { label: "Contact", href: `${BASE}/contact` },
      { label: "Our Location", href: `${BASE}/our-location` },
      { label: "Career", href: `${BASE}/career` },
      { label: "Reservasi", href: `${BASE}/reservasi` },
    ],
  },
];

export const socialLinks: { label: string; href: string }[] = [
  { label: "Facebook", href: "https://www.facebook.com/hayyuclinic" },
  { label: "TikTok", href: "https://www.tiktok.com/@hayyuclinic" },
  { label: "Instagram", href: "https://www.instagram.com/hayyuclinic/" },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCP27xU7s2eym35h3tCMZmGQ",
  },
];

export const contact = {
  whatsappLabel: "+62 878-7000-8087",
  whatsappHref: "https://wa.me/6287870008087",
  emailLabel: "cs@hayyu.id",
  emailHref: "mailto:cs@hayyu.id",
};

export const appLinks = {
  googlePlay: "https://play.google.com/store/apps/details?id=hayyu.doc",
  appStore: "https://apps.apple.com/id/app/hayyu-doc/id1588840429",
};
