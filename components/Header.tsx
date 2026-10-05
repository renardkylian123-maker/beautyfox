"use client";

import Link from "next/link";
import { useState } from "react";
import { RESERVATION_URL, SITE_NAME } from "@/lib/content";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

const SOINS_CATEGORIES = [
  { href: "/soins#soins-corps", label: "Soins corps" },
  { href: "/soins#soins-visage", label: "Soins visage" },
  { href: "/soins#epilations", label: "Épilations" },
  { href: "/soins#headspa", label: "HeadSpa" },
  { href: "/soins#footspa", label: "FootSpa" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [soinsOpenMobile, setSoinsOpenMobile] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-serif text-xl tracking-wide text-ink">
          {SITE_NAME}
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <Link
            href="/"
            className="font-serif text-[15px] text-ink transition-colors hover:text-clay"
          >
            Accueil
          </Link>

          <div className="group relative">
            <Link
              href="/soins"
              className="font-serif text-[15px] text-ink transition-colors hover:text-clay"
            >
              Soins
            </Link>

            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 pt-4 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <ul className="border border-stone bg-paper py-2 shadow-sm">
                {SOINS_CATEGORIES.map((cat) => (
                  <li key={cat.href}>
                    <Link
                      href={cat.href}
                      className="block px-5 py-2.5 font-serif text-sm text-ink transition-colors hover:bg-stone/40 hover:text-clay"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href="/a-propos"
            className="font-serif text-[15px] text-ink transition-colors hover:text-clay"
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className="font-serif text-[15px] text-ink transition-colors hover:text-clay"
          >
            Contact
          </Link>
        </nav>

        <Link
          href={RESERVATION_URL}
          className="hidden border border-ink px-6 py-2.5 font-serif text-[15px] text-ink transition-colors hover:bg-ink hover:text-paper md:inline-block"
        >
          Réserver
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="h-px w-6 bg-ink" />
          <span className="h-px w-6 bg-ink" />
          <span className="h-px w-6 bg-ink" />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-stone bg-paper px-6 py-6 md:hidden">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="border-b border-stone/60 py-3 font-serif text-base text-ink"
          >
            Accueil
          </Link>

          <div className="border-b border-stone/60">
            <div className="flex items-center justify-between py-3">
              <Link
                href="/soins"
                onClick={() => setOpen(false)}
                className="font-serif text-base text-ink"
              >
                Soins
              </Link>
              <button
                type="button"
                onClick={() => setSoinsOpenMobile((v) => !v)}
                aria-label="Afficher les catégories de soins"
                aria-expanded={soinsOpenMobile}
                className="px-2 font-serif text-ink"
              >
                {soinsOpenMobile ? "−" : "+"}
              </button>
            </div>
            {soinsOpenMobile && (
              <ul className="pb-3 pl-4">
                {SOINS_CATEGORIES.map((cat) => (
                  <li key={cat.href}>
                    <Link
                      href={cat.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 font-serif text-sm text-ink/80"
                    >
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {NAV_LINKS.filter((l) => l.href !== "/").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-stone/60 py-3 font-serif text-base text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={RESERVATION_URL}
            onClick={() => setOpen(false)}
            className="mt-4 border border-ink px-6 py-3 text-center font-serif text-base text-ink"
          >
            Réserver
          </Link>
        </nav>
      )}
    </header>
  );
}
