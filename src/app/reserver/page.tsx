import type { Metadata } from "next";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";
import { Section, Kicker } from "@/components/section";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: `Réserver — ${siteConfig.name}`,
  description: "Réservez votre prestation en ligne.",
};

export default async function ReserverPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service: slug } = await searchParams;
  const preselected = services.find((s) => s.slug === slug);

  return (
    <Section className="py-16 md:py-24">
      <Reveal>
        <Kicker>Réservation</Kicker>
        <h1 className="mt-4 max-w-2xl font-display text-4xl text-ink md:text-5xl">
          Réservez votre soin
        </h1>
        {preselected && (
          <p className="mt-4 text-sm tracking-wide text-clay">
            Prestation sélectionnée : {preselected.name}
          </p>
        )}
      </Reveal>

      {/*
        Emplacement du module de réservation en ligne (fourni par un prestataire externe).
        Remplacer ce bloc par le widget/script/iframe une fois intégré — le slug de la
        prestation présélectionnée est déjà disponible ci-dessus (`preselected`) pour
        être transmis au widget si celui-ci le permet.
      */}
      <Reveal delay={100}>
        <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl border border-dashed border-ink/20 bg-paper px-8 py-20 text-center">
          <p className="font-display text-2xl text-ink">La réservation en ligne arrive bientôt</p>
          <p className="max-w-md text-sm leading-relaxed text-ink-soft">
            En attendant la mise en ligne de notre module de réservation, contactez-nous
            directement pour prendre rendez-vous.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm tracking-wide text-cream transition-colors hover:bg-clay"
            >
              Appeler — {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}${preselected ? `?subject=${encodeURIComponent("Réservation — " + preselected.name)}` : ""}`}
              className="inline-flex items-center gap-2 border-b border-ink/30 pb-1 text-sm tracking-wide text-ink transition-colors hover:border-clay hover:text-clay"
            >
              Écrire un email
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
