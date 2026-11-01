import ImagePlaceholder from "./ImagePlaceholder";
import type { Soin } from "@/lib/data/soins";

export default function SoinFeature({
  soin,
  reverse,
}: {
  soin: Soin;
  reverse: boolean;
}) {
  return (
    <div className="grid items-center gap-10 border-t border-stone py-14 md:grid-cols-2 md:gap-16">
      <div className={reverse ? "md:order-2" : ""}>
        <ImagePlaceholder src={soin.image} alt={soin.nom} />
      </div>
      <div className={reverse ? "md:order-1" : ""}>
        <h3 className="font-serif text-2xl text-ink">{soin.nom}</h3>
        {soin.description && (
          <p className="mt-4 max-w-md text-base leading-relaxed text-ink/80">
            {soin.description}
          </p>
        )}
        <div className="mt-6 flex items-baseline gap-3">
          <p className="font-serif text-xl text-clay">{soin.prix}</p>
          <span className="text-sm text-ink/50">{soin.duree}</span>
        </div>
      </div>
    </div>
  );
}
