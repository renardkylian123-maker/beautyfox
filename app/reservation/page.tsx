import type { Metadata } from "next";
import PlanityWidget from "@/components/PlanityWidget";
import { reservation } from "@/lib/content";

export const metadata: Metadata = {
  title: "Réservation — Beauty Fox",
  description: reservation.intro,
};

export default function ReservationPage() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="text-center">
          <p className="font-serif text-sm uppercase tracking-widest2 text-clay">
            {reservation.kicker}
          </p>
          <h1 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
            {reservation.title}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink/80">
            {reservation.intro}
          </p>
        </div>

        <div className="mt-14">
          <PlanityWidget />
        </div>
      </div>
    </section>
  );
}
