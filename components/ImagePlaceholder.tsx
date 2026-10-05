import Image from "next/image";

export default function ImagePlaceholder({
  src,
  alt,
}: {
  src?: string;
  alt?: string;
}) {
  return (
    <div className="relative">
      <div className="absolute -bottom-4 -right-4 h-full w-full bg-clay/25" />
      {src ? (
        <div className="relative aspect-[4/3] w-full overflow-hidden shadow-lg shadow-ink/10">
          <Image src={src} alt={alt ?? ""} fill className="object-cover" />
        </div>
      ) : (
        <div className="relative flex aspect-[4/3] w-full items-center justify-center border border-stone bg-stone/30 shadow-lg shadow-ink/10">
          <span className="px-6 text-center font-serif text-xs uppercase tracking-widest2 text-ink/40">
            Photo à venir
          </span>
        </div>
      )}
    </div>
  );
}
