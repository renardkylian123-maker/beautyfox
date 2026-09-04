import type { Metadata } from "next";
import Link from "next/link";
import { getServicesByCategory } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { categoryLabels, formatDuration, formatPrice } from "@/lib/format";
import { Section, Kicker } from "@/components/section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: `Prestations — ${siteConfig.name}`,
  description: "Découvrez l'ensemble des soins esthétiques, head spa et massages proposés.",
};

const categoryIntro: Record<string, string> = {
  esthetique: "Des soins du visage sur-mesure pour révéler l'éclat naturel de votre peau.",
  "head-spa": "Le rituel capillaire japonais, entre exfoliation du cuir chevelu et massage crânien.",
  massage: "Des modelages du monde pour relâcher les tensions et retrouver l'équilibre.",
};

export default function PrestationsPage() {
  const grouped = getServicesByCategory();

  return (
    <>
      <Section className="pt-16 pb-10 md:pt-24">
        <Reveal>
          <Kicker>Le menu</Kicker>
          <h1 className="mt-4 max-w-2xl font-display text-4xl text-ink md:text-5xl">
            Nos prestations
          </h1>
          <p className="mt-5 max-w-lg text-[1.05rem] leading-relaxed text-ink-soft">
            Chaque soin est pensé comme un rituel à part entière. Choisissez le vôtre,
            réservez en quelques instants.
          </p>
        </Reveal>
      </Section>

      {grouped.map((group, gi) => (
        <Section
          key={group.category}
          id={group.category}
          tone={gi % 2 === 1 ? "deep" : "cream"}
          className="scroll-mt-24 py-16 md:py-20"
        >
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-ink/10 pb-6">
              <div>
                <h2 className="font-display text-3xl text-ink md:text-4xl">
                  {categoryLabels[group.category]}
                </h2>
                <p className="mt-2 max-w-md text-sm text-ink-soft">{categoryIntro[group.category]}</p>
              </div>
            </div>
          </Reveal>

          <div className="mt-4 divide-y divide-ink/10">
            {group.services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 70}>
                <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                  <div className="max-w-xl">
                    <h3 className="font-display text-2xl text-ink">{service.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{service.description}</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-6 sm:flex-col sm:items-end sm:gap-3">
                    <div className="text-sm text-ink-soft">
                      <span>{formatDuration(service.durationMin)}</span>
                      <span className="mx-2">·</span>
                      <span className="text-ink">{formatPrice(service.priceCents)}</span>
                    </div>
                    <Link
                      href={`/reserver?service=${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2 text-sm tracking-wide text-ink transition-colors hover:border-clay hover:bg-clay hover:text-cream"
                    >
                      Réserver
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ))}
    </>
  );
}
