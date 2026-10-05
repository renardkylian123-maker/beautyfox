import Image from "next/image";
import Link from "next/link";
import { RESERVATION_URL, home } from "@/lib/content";
import { BlobDecor, WaveDecor } from "@/components/Decor";
import {
  epilationsCorps,
  epilationsVisage,
  footspa,
  headspa,
  soinsCorps,
  soinsVisage,
} from "@/lib/data/soins";

const univers = [
  { slug: soinsCorps.slug, titre: soinsCorps.titre, nombre: soinsCorps.soins.length },
  { slug: soinsVisage.slug, titre: soinsVisage.titre, nombre: soinsVisage.soins.length },
  {
    slug: "epilations",
    titre: "Épilations",
    nombre: epilationsVisage.soins.length + epilationsCorps.soins.length,
  },
  { slug: headspa.slug, titre: headspa.titre, nombre: headspa.soins.length },
  { slug: footspa.slug, titre: footspa.titre, nombre: footspa.soins.length },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-stone bg-paper">
        <BlobDecor className="pointer-events-none absolute -left-40 -top-40 h-[32rem] w-[32rem] text-clay/10" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center md:py-32">
          <div>
            <p className="font-serif text-sm uppercase tracking-widest2 text-clay">
              {home.heroKicker}
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-ink md:text-6xl">
              {home.heroTitle}
            </h1>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink/80">
              {home.heroSubtitle}
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/80">
              {home.heroText}
            </p>
            <Link
              href={RESERVATION_URL}
              className="mt-10 inline-block border border-ink px-8 py-3 font-serif text-[15px] text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Réserver un soin
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -bottom-4 -right-4 h-full w-full bg-clay/25" />
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-lg shadow-ink/10">
              <Image
                src="/image1.jpg"
                alt="Institut Beauty Fox"
                fill
                className="scale-110 object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-b border-stone bg-sand">
        <WaveDecor className="pointer-events-none absolute inset-x-0 top-1/2 h-24 w-full -translate-y-1/2 text-clay/25" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="font-serif text-2xl italic leading-relaxed text-ink md:text-3xl">
            &ldquo;{home.quote}&rdquo;
          </p>
        </div>
      </section>

      <section className="border-b border-stone bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="font-serif text-sm uppercase tracking-widest2 text-clay">
            Nos univers de soin
          </p>
          <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
            Prendre soin de vous, à votre rythme
          </h2>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-stone bg-stone sm:grid-cols-3 md:grid-cols-5">
            {univers.map((categorie) => (
              <Link
                key={categorie.slug}
                href={`/soins#${categorie.slug}`}
                className="group bg-paper px-6 py-10 transition-colors hover:bg-sand"
              >
                <p className="font-serif text-xl text-ink">
                  {categorie.titre}
                </p>
                <p className="mt-3 text-sm text-ink/60">
                  {categorie.nombre} soins
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-sand">
        <BlobDecor className="pointer-events-none absolute -bottom-48 -right-48 h-[32rem] w-[32rem] text-clay/10" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div className="relative md:order-2">
            <div className="absolute -bottom-4 -right-4 h-full w-full bg-clay/25" />
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-lg shadow-ink/10">
              <Image
                src="/image2.jpg"
                alt={home.brand.name}
                fill
                className="scale-110 object-cover"
              />
            </div>
          </div>

          <div className="md:order-1">
            <p className="font-serif text-sm uppercase tracking-widest2 text-clay">
              {home.brand.title}
            </p>
            <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
              {home.brand.name}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink/80">
              {home.brand.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
