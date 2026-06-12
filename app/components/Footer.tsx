import Image from "next/image";
import {
  footerColumns,
  socialLinks,
  contact,
  appLinks,
  BASE,
} from "./siteData";

function SocialIcon({ name }: { name: string }) {
  const common = { width: 18, height: 18, viewBox: "0 0 24 24", "aria-hidden": true };
  switch (name) {
    case "Facebook":
      return (
        <svg {...common} fill="currentColor">
          <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...common} fill="currentColor">
          <path d="M16.5 3c.3 2.1 1.5 3.4 3.5 3.6v2.4c-1.2.1-2.4-.2-3.5-.8v5.7c0 3.2-2.3 5.1-4.9 5.1-2.7 0-4.6-2-4.6-4.5 0-2.7 2.2-4.6 5-4.3v2.5c-.4-.1-.9-.2-1.3-.1-1 .1-1.8.8-1.8 1.9 0 1.2.9 2 2 2 1.2 0 2-.9 2-2.3V3h3.6Z" />
        </svg>
      );
    case "YouTube":
      return (
        <svg {...common} fill="currentColor">
          <path d="M23 12s0-3.3-.4-4.8a2.5 2.5 0 0 0-1.8-1.8C19.3 5 12 5 12 5s-7.3 0-8.8.4A2.5 2.5 0 0 0 1.4 7.2C1 8.7 1 12 1 12s0 3.3.4 4.8a2.5 2.5 0 0 0 1.8 1.8C4.7 19 12 19 12 19s7.3 0 8.8-.4a2.5 2.5 0 0 0 1.8-1.8C23 15.3 23 12 23 12Zm-13 3V9l5 3-5 3Z" />
        </svg>
      );
    default:
      return null;
  }
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-primary">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-[14px] text-body transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-[url('/images/footer-bg.png')] bg-cover bg-center bg-no-repeat">

      <div className="relative mx-auto max-w-content px-5 py-16 lg:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + contact */}
          <div className="lg:col-span-1">
            <a href={`${BASE}/`} aria-label="Hayyu Skin Clinic — beranda">
              <Image
                src="/images/hayyu-logo-hd.png"
                alt="Hayyu Skin Clinic"
                width={150}
                height={99}
                className="h-14 w-auto"
              />
            </a>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-body">
              Klinik kecantikan yang merawat kulitmu secara personal dengan
              International Smart Skin Technology.
            </p>

            <div className="mt-6 space-y-2">
              <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-primary">
                Direct Contact
              </h3>
              <a
                href={contact.whatsappHref}
                className="block text-[14px] text-body transition-colors hover:text-primary"
              >
                WhatsApp: {contact.whatsappLabel}
              </a>
              <a
                href={contact.emailHref}
                className="block text-[14px] text-body transition-colors hover:text-primary"
              >
                Email: {contact.emailLabel}
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
            <FooterColumn key={col.title} title={col.title} links={col.links} />
          ))}

          {/* Social + apps */}
          <div>
            <h3 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.16em] text-primary">
              Connect with Us
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/30 text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  <SocialIcon name={s.label} />
                </a>
              ))}
            </div>

            <h3 className="mb-3 mt-7 text-[13px] font-semibold uppercase tracking-[0.16em] text-primary">
              Download Our Apps
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href={appLinks.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg border border-primary/25 px-4 py-2 text-primary transition-colors hover:bg-primary-50"
                aria-label="Download di Google Play"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3.6 2.3 13 12 3.6 21.7c-.4-.2-.6-.6-.6-1.1V3.4c0-.5.2-.9.6-1.1Zm10.7 8.3 2.6-2.6 3.9 2.2c.7.4.7 1.4 0 1.8l-3.9 2.2-2.6-2.6 0 .1Zm-1 1.4L5.4 21l9.3-5.3-1.4-1.7Zm0-3.4 1.4-1.7L5.4 3l7.9 6.6-.0-.6Z" />
                </svg>
                <span className="text-left text-[13px] leading-tight">
                  <span className="block text-[10px] uppercase tracking-wider text-muted">Get it on</span>
                  Google Play
                </span>
              </a>
              <a
                href={appLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg border border-primary/25 px-4 py-2 text-primary transition-colors hover:bg-primary-50"
                aria-label="Download di App Store"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.4 1.6c.1 1-.3 2-1 2.8-.7.8-1.7 1.4-2.7 1.3-.1-1 .4-2 1-2.7.7-.8 1.8-1.4 2.7-1.4ZM19 17c-.5 1.1-.7 1.6-1.3 2.6-.9 1.4-2.1 3.1-3.6 3.1-1.3 0-1.7-.9-3.5-.8-1.8 0-2.2.8-3.5.8-1.5 0-2.7-1.6-3.6-3-2.4-3.8-2.7-8.2-1.2-10.6 1.1-1.7 2.8-2.7 4.4-2.7 1.6 0 2.7 1 4 1 1.3 0 2-1 4-1 1.4 0 2.9.8 4 2.1-3.5 1.9-2.9 6.9 0 8.5Z" />
                </svg>
                <span className="text-left text-[13px] leading-tight">
                  <span className="block text-[10px] uppercase tracking-wider text-muted">Download on the</span>
                  App Store
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="relative border-t border-black/5">
        <div className="mx-auto max-w-content px-5 py-5 lg:px-8 xl:px-0">
          <p className="text-center text-[12px] uppercase tracking-[0.12em] text-muted">
            Copyright © 2026 PT. RUVI RIZQY BERKAH. ALL RIGHT RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
}
