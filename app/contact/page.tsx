import type { Metadata } from "next";
import Link from "next/link";
import { RESERVATION_URL, contact } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: contact.intro,
};

export default function ContactPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-2xl px-6 py-24 text-center md:py-32">
        <p className="font-serif text-sm uppercase tracking-widest2 text-clay">
          {contact.title}
        </p>
        <h1 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
          Nous contacter
        </h1>
        <p className="mt-6 text-base leading-relaxed text-ink/80">
          {contact.intro}
        </p>

        <Link
          href={RESERVATION_URL}
          className="mt-10 inline-block border border-ink px-8 py-3 font-serif text-[15px] text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          Prendre rendez-vous
        </Link>
      </div>
    </section>
  );
}
