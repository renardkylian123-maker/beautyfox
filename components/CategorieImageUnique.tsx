import ImagePlaceholder from "./ImagePlaceholder";
import type { Categorie } from "@/lib/data/soins";

export default function CategorieImageUnique({
  categorie,
}: {
  categorie: Categorie;
}) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
      <div className="space-y-10">
        {categorie.soins.map((soin, i) => (
          <div
            key={`${soin.nom}-${i}`}
            className={i > 0 ? "border-t border-stone pt-10" : ""}
          >
            <h3 className="font-serif text-2xl text-ink">{soin.nom}</h3>
            {soin.description && (
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/80">
                {soin.description}
              </p>
            )}
            <p className="mt-6 font-serif text-xl text-clay">{soin.prix}</p>
          </div>
        ))}
      </div>
      <div>
        <ImagePlaceholder src={categorie.image} alt={categorie.titre} />
      </div>
    </div>
  );
}
