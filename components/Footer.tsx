import Link from "next/link";
import { RESERVATION_URL, SITE_NAME, SITE_TAGLINE } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-stone bg-stone/40 text-ink">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-serif text-xl tracking-wide">{SITE_NAME}</p>
          <p className="mt-2 text-sm text-ink/70">{SITE_TAGLINE}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <Link href="/a-propos" className="text-ink/80 hover:text-clay">
            À propos
          </Link>
          <Link href="/soins" className="text-ink/80 hover:text-clay">
            Nos soins
          </Link>
          <Link href="/contact" className="text-ink/80 hover:text-clay">
            Contact
          </Link>
          <Link href={RESERVATION_URL} className="text-ink/80 hover:text-clay">
            Réserver
          </Link>
        </div>

        <div className="text-sm text-ink/70">
          <p>Sur rendez-vous.</p>
          <p className="mt-2">Institut de beauté &amp; bien-être</p>
        </div>
      </div>

      <div className="border-t border-stone px-6 py-5 text-center text-xs text-ink/50">
        © {new Date().getFullYear()} {SITE_NAME}. Tous droits réservés.
      </div>
    </footer>
  );
}
