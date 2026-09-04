import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
  tone = "cream",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: "cream" | "deep" | "ink";
  id?: string;
}) {
  const bg =
    tone === "deep" ? "bg-cream-deep" : tone === "ink" ? "bg-ink text-cream" : "bg-cream";

  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="mx-auto max-w-6xl px-6 md:px-10">{children}</div>
    </section>
  );
}

export function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-xs tracking-[0.3em] uppercase ${
        light ? "text-cream/70" : "text-clay"
      }`}
    >
      <span className={`h-px w-8 ${light ? "bg-cream/40" : "bg-clay"}`} />
      {children}
    </p>
  );
}
