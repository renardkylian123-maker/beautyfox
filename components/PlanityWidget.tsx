"use client";

import { useEffect, useRef } from "react";
import { PLANITY_API_KEY, PLANITY_PRIMARY_COLOR } from "@/lib/content";

const POLYFILLS_SRC =
  "https://d2skjte8udjqxw.cloudfront.net/widget/production/2/polyfills.latest.js";
const APP_SRC =
  "https://d2skjte8udjqxw.cloudfront.net/widget/production/2/app.latest.js";

type PlanityWindow = Window & {
  planity?: Record<string, unknown>;
};

function loadScript(src: string, added: HTMLScriptElement[]): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Impossible de charger ${src}`));
    // Enregistré avant le chargement pour que le nettoyage retire aussi un script en cours.
    added.push(script);
    document.body.appendChild(script);
  });
}

// Intègre le module de réservation Planity (white-label).
// Doc : https://planity.gitbook.io/white-label
// Le script lit `window.planity` au chargement : on le (re)charge à chaque montage
// du composant pour que le module s'initialise aussi après une navigation côté client.
export default function PlanityWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    const scripts: HTMLScriptElement[] = [];

    (window as PlanityWindow).planity = {
      key: PLANITY_API_KEY,
      primaryColor: PLANITY_PRIMARY_COLOR,
      container,
      options: {
        // Header sticky : évite qu'il recouvre le haut du module au choix d'une prestation.
        headerWidth: "80px",
      },
    };

    (async () => {
      try {
        await loadScript(POLYFILLS_SRC, scripts);
        if (cancelled) return;
        await loadScript(APP_SRC, scripts);
      } catch (error) {
        console.error(error);
      }
    })();

    return () => {
      cancelled = true;
      scripts.forEach((s) => s.remove());
      container.innerHTML = "";
      delete (window as PlanityWindow).planity;
    };
  }, []);

  return <div ref={containerRef} className="min-h-[480px]" />;
}
