/**
 * Toutes les informations "métier" du salon centralisées ici.
 * Modifie ce fichier pour changer le nom, l'adresse, les horaires affichés, etc.
 * (Les prestations, elles, vivent dans src/lib/services.ts.)
 */
export const siteConfig = {
  name: "Maison Chloé",
  tagline: "Institut de beauté & head spa",
  description:
    "Institut de beauté, head spa et massages au cœur de Paris. Soins du visage, modelages et rituels capillaires japonais dans un cadre pensé pour la lenteur.",
  phone: "01 23 45 67 89",
  phoneHref: "+33123456789",
  email: "contact@maisonchloe.fr",
  address: {
    line1: "14 rue des Tournelles",
    postalCode: "75003",
    city: "Paris",
    mapsQuery: "14+rue+des+Tournelles+75003+Paris",
  },
  social: {
    instagram: "https://instagram.com",
  },
  hoursDisplay: [
    { label: "Mardi — Vendredi", value: "10h00 – 19h30" },
    { label: "Samedi", value: "10h00 – 18h00" },
    { label: "Dimanche — Lundi", value: "Fermé" },
  ],
};
