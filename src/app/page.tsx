import Link from "next/link";
import Image from "next/image";
import { getFeaturedServices } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { formatDuration, formatPrice } from "@/lib/format";
import { Section, Kicker } from "@/components/section";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  const featured = getFeaturedServices(4);

  return (
    <>
      {/* HERO */}
      <Section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-clay) 0%, transparent 70%)" }}
        />
        <div className="grid items-center gap-14 md:grid-cols-[1.1fr_0.9fr] md:gap-10">
          <Reveal as="div">
            <Kicker>{siteConfig.tagline}</Kicker>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-ink sm:text-6xl md:text-[3.6rem]">
              Retrouvez <span className="italic text-clay">l&apos;essentiel</span>,
              <br /> un soin à la fois.
            </h1>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-ink-soft">
              {siteConfig.description}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/reserver"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm tracking-wide text-cream transition-colors hover:bg-clay"
              >
                Réserver un soin
              </Link>
              <Link
                href="/prestations"
                className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-clay hover:text-clay"
              >
                Découvrir les prestations
              </Link>
            </div>
          </Reveal>

          <Reveal as="div" delay={150} className="relative mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-[10rem] rounded-b-3xl border border-gold/40 shadow-[0_30px_60px_-25px_rgba(42,35,32,0.35)]">
              <Image
                src="/images/hero-facial-massage.jpg"
                alt="Soin du visage prodigué dans une ambiance douce et feutrée"
                fill
                priority
                sizes="(max-width: 768px) 320px, 384px"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-ink/10 bg-paper px-6 py-4 shadow-lg">
              <p className="font-display text-2xl text-clay">9</p>
              <p className="text-xs tracking-wide text-ink-soft">rituels sur-mesure</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* PHILOSOPHY */}
      <Section tone="deep" className="py-24">
        <div className="grid items-center gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <Reveal className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl md:mx-0">
            <Image
              src="/images/spa-ambiance.jpg"
              alt="Bougies, serviettes et huiles préparées pour un rituel"
              fill
              sizes="(max-width: 768px) 300px, 360px"
              className="object-cover"
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="grid gap-10 md:grid-cols-[auto_1fr] md:gap-10">
              <div className="hidden h-full w-px self-stretch bg-ink/15 md:block" />
              <div className="max-w-xl">
                <p className="font-display text-2xl leading-snug text-ink italic sm:text-3xl">
                  « Un institut pensé comme une parenthèse — où chaque geste, chaque silence,
                  a sa raison d&apos;être. »
                </p>
                <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                  {siteConfig.name} associe les techniques d&apos;esthétique traditionnelles aux
                  rituels capillaires japonais et aux massages du monde, dans un cadre pensé
                  pour ralentir le temps.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* SIGNATURE SERVICES */}
      <Section className="py-24 md:py-28">
        <Reveal>
          <Kicker>Nos rituels signature</Kicker>
          <h2 className="mt-4 font-display text-4xl text-ink md:text-5xl">Les préférés</h2>
        </Reveal>

        <div className="mt-12 divide-y divide-ink/10 border-t border-ink/10">
          {featured.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              <Link
                href={`/reserver?service=${service.slug}`}
                className="group flex flex-col gap-2 py-7 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-display text-sm text-clay">0{i + 1}</span>
                  <span className="font-display text-2xl text-ink transition-colors group-hover:text-clay md:text-[1.7rem]">
                    {service.name}
                  </span>
                </div>
                <p className="max-w-md text-sm text-ink-soft sm:text-right">{service.shortDesc}</p>
                <div className="flex shrink-0 items-center gap-4 text-sm text-ink-soft">
                  <span>{formatDuration(service.durationMin)}</span>
                  <span className="text-ink">{formatPrice(service.priceCents)}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <Link
            href="/prestations"
            className="mt-10 inline-flex items-center gap-2 text-sm tracking-wide text-ink underline decoration-clay/50 underline-offset-4 hover:text-clay"
          >
            Voir toutes les prestations →
          </Link>
        </Reveal>
      </Section>

      {/* THREE PILLARS */}
      <Section tone="ink" className="py-24 md:py-28">
        <Reveal>
          <Kicker light>Trois univers</Kicker>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {[
            { image: "/images/esthetique-mask.jpg", title: "Esthétique", text: "Soins du visage sur-mesure pour une peau saine et lumineuse.", href: "/prestations#esthetique" },
            { image: "/images/head-spa-massage.jpg", title: "Head Spa", text: "Rituel capillaire japonais, massage crânien et exfoliation du cuir chevelu.", href: "/prestations#head-spa" },
            { image: "/images/massage-stones.jpg", title: "Massage", text: "Modelages du monde pour relâcher les tensions en profondeur.", href: "/prestations#massage" },
          ].map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100}>
              <Link href={pillar.href} className="group relative block aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 640px) 90vw, 30vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/5" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="font-display text-2xl text-cream">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">{pillar.text}</p>
                  <span className="mt-4 inline-block text-xs tracking-[0.2em] text-cream/60 uppercase transition-colors group-hover:text-gold">
                    Découvrir →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="py-24">
        <Reveal>
          <Kicker>Ils en parlent mieux que nous</Kicker>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {[
            { quote: "Un moment hors du temps. Le massage crânien est à lui seul une raison de revenir chaque mois.", name: "Camille R." },
            { quote: "Le soin du visage signature a transformé ma peau en trois séances. L'accueil est d'une douceur rare.", name: "Sarah B." },
            { quote: "Le head spa luxe est une expérience à part entière — je ressors flottante.", name: "Inès M." },
          ].map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="rounded-2xl border border-ink/10 bg-paper p-7">
              <p className="font-display text-3xl leading-none text-clay">“</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.quote}</p>
              <p className="mt-5 text-xs tracking-wide text-ink uppercase">{t.name}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PRACTICAL INFO / CTA */}
      <Section tone="deep" className="py-24">
        <Reveal>
          <div className="grid gap-12 rounded-3xl border border-ink/10 bg-paper p-10 md:grid-cols-[1fr_auto] md:items-center md:p-14">
            <div>
              <h2 className="font-display text-3xl text-ink md:text-4xl">
                Offrez-vous une parenthèse.
              </h2>
              <div className="mt-6 grid gap-1 text-sm text-ink-soft sm:grid-cols-2 sm:gap-6">
                <div>
                  <p className="text-xs tracking-[0.2em] text-ink uppercase">Adresse</p>
                  <p className="mt-1">{siteConfig.address.line1}, {siteConfig.address.postalCode} {siteConfig.address.city}</p>
                </div>
                <div>
                  <p className="text-xs tracking-[0.2em] text-ink uppercase">Horaires</p>
                  {siteConfig.hoursDisplay.map((h) => (
                    <p key={h.label} className="mt-1">{h.label} — {h.value}</p>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href="/reserver"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-9 py-4 text-sm tracking-wide text-cream transition-colors hover:bg-clay"
            >
              Réserver maintenant
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
