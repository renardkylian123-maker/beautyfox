import Image from "next/image";
import type { Metadata } from "next";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "À propos",
  description: about.intro[0],
};

export default function AProposPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-start md:py-32">
        <div className="relative aspect-[4/5] w-full overflow-hidden md:sticky md:top-28">
          <Image
            src="/image1.jpg"
            alt="Chloé, fondatrice de Beauty Fox"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div>
          <p className="font-serif text-sm uppercase tracking-widest2 text-clay">
            {about.title}
          </p>
          <h1 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
            Chloé
          </h1>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80">
            {about.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-14 border-t border-stone pt-10">
            <h2 className="font-serif text-2xl text-ink">{about.whyTitle}</h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-ink/80">
              {about.whyText.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
