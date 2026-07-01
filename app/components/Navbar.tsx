"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  navItems,
  utilityLinks,
  BASE,
  externalProjectLinkProps,
  type NavItem,
} from "./siteData";

const RESERVASI = `${BASE}/reservasi`;

/* Thin chevron, matching the live nav's lucide chevron-down (stroke 0.75). */
function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`ms-2 ${className}`}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M16.5 16.5 21 21"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** White rounded-square search button — teal icon, gray border, soft shadow. */
function SearchButton({
  className = "",
  expanded,
  onClick,
}: {
  className?: string;
  expanded: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label="Cari"
      aria-expanded={expanded}
      aria-controls="site-search-panel"
      onClick={onClick}
      className={`flex size-11 shrink-0 items-center justify-center rounded-lg border border-gray-300 bg-white text-primary shadow-sm transition-colors hover:bg-surface md:size-12 ${className}`}
    >
      <SearchIcon />
    </button>
  );
}

function SearchPanel({ onClose }: { onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      id="site-search-panel"
      className="mt-2 animate-fade-up rounded-2xl border border-gray-300 bg-white p-4 shadow-xl shadow-black/10"
    >
      <form
        action={BASE}
        method="get"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="site-search-input" className="sr-only">
          Cari di Hayyu
        </label>
        <input
          ref={inputRef}
          id="site-search-input"
          name="s"
          type="search"
          placeholder="Cari treatment, dokter, atau artikel"
          className="min-h-11 flex-1 rounded-lg border border-gray-200 px-4 text-[17px] text-ink outline-none transition-colors placeholder:text-muted focus:border-primary"
        />
        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-primary px-6 text-[15px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-primary-500"
        >
          Cari
        </button>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-gray-200 px-4 text-[15px] font-medium uppercase tracking-[0.14em] text-muted transition-colors hover:text-primary"
        >
          Tutup
        </button>
      </form>
    </div>
  );
}

/* Desktop nav item — link, or hover/focus dropdown when it has children. */
function DesktopItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);

  const triggerClass =
    "flex select-none items-center rounded-sm px-4 py-1 text-[17px] font-medium text-gray-700 outline-none transition-colors hover:font-semibold hover:text-gray-900";

  if (!item.children) {
    return (
      <a
        href={item.href}
        className={triggerClass}
        {...externalProjectLinkProps(item.href)}
      >
        {item.label}
      </a>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`${triggerClass} ${open ? "font-semibold text-gray-900" : ""}`}
      >
        {item.label}
        <Chevron className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <div
        className={`absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-4 transition-all duration-200 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-1 opacity-0"
        }`}
      >
        <ul className="overflow-hidden rounded-xl border border-gray-200 bg-white py-2 shadow-xl shadow-black/5">
          {item.children.map((child) => (
            <li key={child.label}>
              <a
                href={child.href}
                {...externalProjectLinkProps(child.href)}
                className="block px-5 py-2.5 text-[16px] text-gray-700 transition-colors hover:bg-primary-50 hover:font-semibold hover:text-primary"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* Mobile dropdown-panel row (accordion when it has children). */
function MobileItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const rowClass =
    "flex w-full items-center justify-between px-5 py-3.5 text-left text-[18px] text-gray-700";

  if (!item.children) {
    return (
      <a
        href={item.href}
        onClick={onNavigate}
        className={`${rowClass} border-b border-gray-100`}
        {...externalProjectLinkProps(item.href)}
      >
        {item.label}
      </a>
    );
  }

  return (
    <div className="border-b border-gray-100">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={rowClass}
      >
        {item.label}
        <Chevron className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul className="bg-surface/40 pb-2">
          {item.children.map((child) => (
            <li key={child.label}>
              <a
                href={child.href}
                onClick={onNavigate}
                {...externalProjectLinkProps(child.href)}
                className="block py-2.5 pl-8 pr-5 text-[17px] text-gray-600"
              >
                {child.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);
  const toggleSearch = () => {
    setSearchOpen((value) => !value);
    setMobileOpen(false);
  };

  return (
    <header>
      {/* Utility strip — desktop only, transparent; teal ONLINE RESERVATION tab.
          Collapses on scroll, mirroring the live site. */}
      <div
        className={`fixed inset-x-0 top-0 z-40 hidden transition-all duration-300 lg:block ${
          scrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <div className="mx-auto max-w-content px-4 lg:px-8 xl:px-0">
          <div className="flex items-stretch text-[17px]">
            <a
              href={utilityLinks[0].href}
              {...externalProjectLinkProps(utilityLinks[0].href)}
              className="rounded-b-xl bg-primary-500 px-4 py-2 uppercase leading-[22px] text-white"
            >
              {utilityLinks[0].label}
            </a>
            {utilityLinks.slice(1).map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...externalProjectLinkProps(l.href)}
                className="px-4 py-2 uppercase leading-[22px] text-gray-600 transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating navbar card. */}
      <div
        className={`fixed inset-x-0 z-50 top-2 transition-all duration-300 ${
          scrolled ? "lg:top-2" : "lg:top-14"
        }`}
      >
        <div className="mx-auto max-w-content px-4 lg:px-8 xl:px-0">
          <nav
            aria-label="Utama"
            className={`rounded-2xl border border-gray-300 bg-white/85 bg-clip-padding backdrop-blur-sm transition-shadow duration-300 ${
              scrolled ? "shadow-md shadow-black/5" : "shadow-sm"
            }`}
          >
            {/* Desktop row */}
            <div className="hidden items-center px-5 py-3 lg:flex">
              <a
                href="/"
                className="flex flex-grow items-center"
                aria-label="Hayyu Skin Clinic — beranda"
              >
                <Image
                  src="/images/hayyu-logo-hd.png"
                  alt="Hayyu Skin Clinic"
                  width={80}
                  height={54}
                  priority
                  className="h-11 w-auto"
                />
              </a>

              <div className="flex items-center">
                {navItems.map((item, i) => (
                  <div key={item.label} className="flex items-center">
                    {i > 0 && (
                      <span
                        className="mx-0.5 h-4 w-px bg-gray-400/70"
                        aria-hidden="true"
                      />
                    )}
                    <DesktopItem item={item} />
                  </div>
                ))}
              </div>

              <SearchButton
                className="ms-4"
                expanded={searchOpen}
                onClick={toggleSearch}
              />
            </div>

            {/* Mobile row */}
            <div className="flex items-center p-2 lg:hidden">
              <button
                type="button"
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu-panel"
                onClick={() => {
                  setMobileOpen((v) => !v);
                  setSearchOpen(false);
                }}
                className="me-2 flex size-11 items-center justify-center rounded-md border border-gray-100 text-primary-500"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {mobileOpen ? (
                    <path
                      d="M6 6l12 12M18 6 6 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  ) : (
                    <path
                      d="M4 6h16M4 12h16M4 18h16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  )}
                </svg>
              </button>

              <a
                href="/"
                className="flex flex-grow items-center"
                aria-label="Hayyu Skin Clinic — beranda"
              >
                <Image
                  src="/images/hayyu-logo-hd.png"
                  alt="Hayyu Skin Clinic"
                  width={64}
                  height={41}
                  priority
                  className="h-9 w-auto"
                />
              </a>

              <SearchButton expanded={searchOpen} onClick={toggleSearch} />
            </div>
          </nav>

          {searchOpen && <SearchPanel onClose={() => setSearchOpen(false)} />}

          {/* Mobile dropdown panel */}
          {mobileOpen && (
            <div
              id="mobile-menu-panel"
              className="mt-2 animate-fade-up overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-lg shadow-black/10 lg:hidden"
            >
              <nav aria-label="Menu mobile">
                {/* Home highlighted, as on the live site */}
                <a
                  href={navItems[0].href}
                  onClick={closeMobile}
                  {...externalProjectLinkProps(navItems[0].href)}
                  className="block border-b border-gray-100 bg-primary-50 px-5 py-3.5 text-[18px] font-medium text-primary"
                >
                  {navItems[0].label}
                </a>
                {navItems.slice(1).map((item) => (
                  <MobileItem key={item.label} item={item} onNavigate={closeMobile} />
                ))}
              </nav>

              <div className="px-4 py-4">
                <a
                  href={utilityLinks[0].href}
                  onClick={closeMobile}
                  {...externalProjectLinkProps(utilityLinks[0].href)}
                  className="flex w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-[16px] font-medium uppercase tracking-[0.14em] text-white transition-colors hover:bg-primary-500"
                >
                  {utilityLinks[0].label}
                </a>
                {utilityLinks.slice(1).map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={closeMobile}
                    {...externalProjectLinkProps(l.href)}
                    className="block py-2.5 text-center text-[16px] uppercase tracking-[0.06em] text-gray-600"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
