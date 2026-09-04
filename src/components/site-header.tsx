"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-config";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/prestations", label: "Prestations" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "bg-cream/90 border-ink/10 backdrop-blur-sm" : "bg-cream/40 border-transparent backdrop-blur-[2px]"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="font-display text-xl tracking-wide text-ink">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`group relative text-[0.95rem] tracking-wide text-ink-soft transition-colors hover:text-ink ${
                pathname === link.href ? "text-ink" : ""
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px bg-clay transition-all duration-300 ${
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/reserver"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-2.5 text-sm tracking-wide text-cream transition-colors hover:bg-clay"
          >
            Réserver
          </Link>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-6 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-cream px-6 pb-6 pt-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-3 text-base text-ink-soft first:pt-4"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reserver"
            className="mt-3 inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm text-cream"
          >
            Réserver
          </Link>
        </nav>
      )}
    </header>
  );
}
