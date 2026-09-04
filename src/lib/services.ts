/**
 * Contenu des prestations, en dur (pas de base de données).
 * La réservation en ligne est gérée par un prestataire externe — voir /reserver.
 * Pour changer une prestation (nom, durée, prix, description...), modifie directement ce fichier.
 */
export interface Service {
  slug: string;
  category: "esthetique" | "head-spa" | "massage";
  name: string;
  shortDesc: string;
  description: string;
  durationMin: number;
  priceCents: number;
  featured: boolean;
}

export const services: Service[] = [
  {
    slug: "soin-visage-signature",
    category: "esthetique",
    name: "Soin du Visage Signature",
    shortDesc: "Nettoyage, exfoliation douce et masque sur-mesure.",
    description:
      "Un rituel complet pensé pour redonner à la peau tout son éclat : double nettoyage, exfoliation enzymatique, massage facial drainant et masque formulé selon les besoins du moment.",
    durationMin: 60,
    priceCents: 7500,
    featured: true,
  },
  {
    slug: "soin-eclat-express",
    category: "esthetique",
    name: "Soin Éclat Express",
    shortDesc: "La pause beauté idéale entre deux rendez-vous.",
    description:
      "Nettoyage, gommage léger et masque express pour un teint frais et reposé en un minimum de temps.",
    durationMin: 30,
    priceCents: 4500,
    featured: false,
  },
  {
    slug: "regard-sur-mesure",
    category: "esthetique",
    name: "Regard Sur-Mesure",
    shortDesc: "Restructuration des sourcils et teinture.",
    description: "Épilation, dessin et teinture des sourcils pour un regard structuré et naturel.",
    durationMin: 20,
    priceCents: 2500,
    featured: false,
  },
  {
    slug: "head-spa-signature",
    category: "head-spa",
    name: "Head Spa Signature",
    shortDesc: "Le rituel capillaire japonais dans son intégralité.",
    description:
      "Exfoliation du cuir chevelu, bain vapeur, massage crânien profond et brushing léger. Une parenthèse de 60 minutes pour un cuir chevelu apaisé et des cheveux revitalisés.",
    durationMin: 60,
    priceCents: 8000,
    featured: true,
  },
  {
    slug: "head-spa-decouverte",
    category: "head-spa",
    name: "Head Spa Découverte",
    shortDesc: "Une première immersion dans le massage crânien.",
    description: "Massage crânien et modelage du cuir chevelu pour relâcher les tensions en 30 minutes.",
    durationMin: 30,
    priceCents: 5000,
    featured: false,
  },
  {
    slug: "head-spa-luxe",
    category: "head-spa",
    name: "Head Spa Luxe Visage & Crâne",
    shortDesc: "Le rituel complet, du cuir chevelu jusqu'au visage.",
    description:
      "Notre soin le plus complet : head spa signature suivi d'un modelage du visage et des épaules pour une détente totale de 90 minutes.",
    durationMin: 90,
    priceCents: 12000,
    featured: true,
  },
  {
    slug: "massage-californien",
    category: "massage",
    name: "Massage Californien",
    shortDesc: "Un modelage enveloppant à l'huile chaude.",
    description:
      "Des mouvements amples et enveloppants pour relâcher les tensions et retrouver un profond état de détente.",
    durationMin: 60,
    priceCents: 8500,
    featured: false,
  },
  {
    slug: "massage-balinais",
    category: "massage",
    name: "Massage Balinais",
    shortDesc: "Pressions profondes et étirements doux.",
    description:
      "Un massage traditionnel indonésien qui combine pressions profondes, étirements et effleurages pour dénouer les tensions musculaires.",
    durationMin: 75,
    priceCents: 10000,
    featured: true,
  },
  {
    slug: "massage-cranien-nuque",
    category: "massage",
    name: "Massage Crânien & Nuque",
    shortDesc: "Ciblé sur les tensions du haut du corps.",
    description:
      "Un massage ciblé sur le cuir chevelu, la nuque et les trapèzes pour soulager les tensions liées au stress et aux écrans.",
    durationMin: 30,
    priceCents: 4500,
    featured: false,
  },
];

export function getFeaturedServices(limit?: number): Service[] {
  const featured = services.filter((s) => s.featured);
  return limit ? featured.slice(0, limit) : featured;
}

export function getServicesByCategory(): { category: Service["category"]; services: Service[] }[] {
  const order: Service["category"][] = ["esthetique", "head-spa", "massage"];
  return order
    .map((category) => ({ category, services: services.filter((s) => s.category === category) }))
    .filter((g) => g.services.length > 0);
}
