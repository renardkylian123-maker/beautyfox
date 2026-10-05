import type { Soin } from "@/lib/data/soins";

export default function SoinsListe({ soins }: { soins: Soin[] }) {
  return (
    <ul className="divide-y divide-stone border-t border-stone">
      {soins.map((soin, index) => (
        <li
          key={`${soin.nom}-${index}`}
          className="flex items-baseline justify-between gap-4 py-4"
        >
          <h3 className="font-serif text-base text-ink">{soin.nom}</h3>
          <span className="font-serif text-lg text-clay">{soin.prix}</span>
        </li>
      ))}
    </ul>
  );
}
