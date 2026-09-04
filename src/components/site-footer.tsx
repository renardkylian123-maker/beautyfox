"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="border-t border-ink/10 bg-cream-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <p className="font-display text-2xl text-ink">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
            {siteConfig.tagline}. Un lieu pensé pour la lenteur, au cœur de {siteConfig.address.city}.
          </p>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-sm tracking-wide text-ink-soft underline decoration-ink/20 underline-offset-4 hover:text-clay"
          >
            Instagram
          </a>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-ink-soft uppercase">Navigation</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/prestations" className="text-ink-soft hover:text-clay">Prestations</Link></li>
            <li><Link href="/a-propos" className="text-ink-soft hover:text-clay">À propos</Link></li>
            <li><Link href="/reserver" className="text-ink-soft hover:text-clay">Réserver</Link></li>
            <li><Link href="/contact" className="text-ink-soft hover:text-clay">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.2em] text-ink-soft uppercase">Nous trouver</p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-soft">
            <li>{siteConfig.address.line1}</li>
            <li>{siteConfig.address.postalCode} {siteConfig.address.city}</li>
            <li><a href={`tel:${siteConfig.phoneHref}`} className="hover:text-clay">{siteConfig.phone}</a></li>
            <li><a href={`mailto:${siteConfig.email}`} className="hover:text-clay">{siteConfig.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10 px-6 py-6 text-center text-xs text-ink-soft/80 md:px-10">
        © {new Date().getFullYear()} {siteConfig.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
