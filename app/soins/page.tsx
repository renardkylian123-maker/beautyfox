import type { Metadata } from "next";
import {
  epilationsCorps,
  epilationsVisage,
  footspa,
  headspa,
  soinsCorps,
  soinsVisage,
} from "@/lib/data/soins";
import SoinsListe from "@/components/SoinsListe";
import SoinFeature from "@/components/SoinFeature";
import CategorieImageUnique from "@/components/CategorieImageUnique";
import { BlobDecor } from "@/components/Decor";
import type { Categorie } from "@/lib/data/soins";

function bgClass(index: number) {
  return index % 2 === 0 ? "bg-paper" : "bg-sand";
}

function SoinsCategorie({
  categorie,
  index,
}: {
  categorie: Categorie;
  index: number;
}) {
  return (
    <section
      id={categorie.slug}
      className={`scroll-mt-28 border-b border-stone ${bgClass(index)}`}
    >
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          {categorie.titre}
        </h2>
        <div>
          {categorie.soins.map((soin, i) => (
            <SoinFeature
              key={`${soin.nom}-${i}`}
              soin={soin}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SoinsCategorieImageUnique({
  categorie,
  index,
}: {
  categorie: Categorie;
  index: number;
}) {
  return (
    <section
      id={categorie.slug}
      className={`scroll-mt-28 border-b border-stone ${bgClass(index)}`}
    >
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-10 font-serif text-2xl text-ink md:text-3xl">
          {categorie.titre}
        </h2>
        <CategorieImageUnique categorie={categorie} />
      </div>
    </section>
  );
}

export const metadata: Metadata = {
  title: "Nos soins",
  description:
    "Catalogue complet des soins Beauty Fox : soins corps, soins visage, épilations, headspa et footspa.",
};

export default function SoinsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-paper">
        <BlobDecor className="pointer-events-none absolute -right-40 -top-40 h-[28rem] w-[28rem] text-clay/10" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 md:py-32">
          <p className="font-serif text-sm uppercase tracking-widest2 text-clay">
            Carte des soins
          </p>
          <h1 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
            Nos soins
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80">
            Chaque soin est pensé comme une parenthèse sur mesure. Retrouvez
            l&rsquo;ensemble de la carte ci-dessous.
          </p>
        </div>
      </section>

      <SoinsCategorie categorie={soinsCorps} index={0} />
      <SoinsCategorie categorie={soinsVisage} index={1} />

      <section
        id="epilations"
        className={`scroll-mt-28 border-b border-stone ${bgClass(2)}`}
      >
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="font-serif text-2xl text-ink md:text-3xl">
            Épilations
          </h2>

          <div className="mt-10 grid gap-x-16 gap-y-10 md:grid-cols-2">
            <div>
              <h3 className="font-serif text-sm uppercase tracking-widest2 text-ink/50">
                {epilationsVisage.titre}
              </h3>
              <SoinsListe soins={epilationsVisage.soins} />
            </div>
            <div>
              <h3 className="font-serif text-sm uppercase tracking-widest2 text-ink/50">
                {epilationsCorps.titre}
              </h3>
              <SoinsListe soins={epilationsCorps.soins} />
            </div>
          </div>
        </div>
      </section>

      <SoinsCategorieImageUnique categorie={headspa} index={3} />
      <SoinsCategorieImageUnique categorie={footspa} index={4} />
    </>
  );
}
