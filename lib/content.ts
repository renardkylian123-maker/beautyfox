// Tous les CTA "Réserver" / "Prendre rendez-vous" pointent vers cette page,
// qui intègre le module de réservation Planity (white-label).
export const RESERVATION_URL = "/reservation";

// Clé API Planity (white-label). Clé publique : elle est de toute façon visible
// dans le code de la page côté navigateur.
export const PLANITY_API_KEY = "-P0S7R2P8OJfwYaA9ef_";
// Couleur d'accent du module (= `clay` dans globals.css).
export const PLANITY_PRIMARY_COLOR = "#bf6b3a";

export const SITE_NAME = "Beauty Fox";
export const SITE_TAGLINE = "Institut de beauté & bien-être";

export const home = {
  heroKicker: "Institut de beauté & bien-être",
  heroTitle: "Un moment pour soi, simplement.",
  heroSubtitle:
    "Beauty Fox est un institut dédié à la beauté et au bien-être, pensé comme une parenthèse dans le quotidien.",
  heroText:
    "Un endroit où l'on vient prendre soin de soi, mais aussi ralentir, déconnecter et laisser, le temps d'un soin, les petits tracas à l'extérieur.",
  quote: "Le soin comme une parenthèse dans le quotidien.",
  brand: {
    title: "La marque que j'utilise",
    name: "Estime & Sens",
    paragraphs: [
      "Pour accompagner mes soins, j'ai choisi de travailler avec Estime & Sens, une marque française de cosmétiques bio.",
      "Je souhaitais une gamme qui corresponde à ma façon de travailler : des produits naturels, sensoriels et de qualité, tout en restant accessibles.",
      "Certifiés bio et développés en France, les soins Estime & Sens accordent une place essentielle au choix des ingrédients, à l'efficacité et au plaisir d'utilisation. Une philosophie qui s'inscrit naturellement dans l'univers de Beauty Fox.",
    ],
  },
};

export const about = {
  title: "À propos",
  intro: [
    "Je m'appelle Chloé et j'ai toujours aimé prendre soin des autres, les écouter et leur accorder du temps.",
    "Avec Beauty Fox, j'ai choisi de faire de cette passion mon métier et de créer un lieu qui me ressemble : chaleureux, apaisant et sincère. Un endroit où chacune peut se sentir à l'aise, déposer un instant son quotidien et profiter pleinement du moment.",
    "Il y a quelque chose de très particulier pour moi dans le soin : lorsque je prends soin de quelqu'un, je ressens moi aussi cette sensation de calme et de sérénité. C'est cet échange et ces moments privilégiés qui donnent tout son sens à mon métier.",
  ],
  whyTitle: "Pourquoi Beauty Fox ?",
  whyText: [
    "Beauty Fox est avant tout un clin d'œil à mon nom de famille. Une façon d'emporter avec moi un petit morceau de cette famille unie qui m'est chère et qui m'accompagne et me soutient dans mes projets.",
    "Derrière ce nom se trouve donc quelque chose de très personnel : mes racines, mais aussi le début d'une nouvelle aventure qui me tient profondément à cœur.",
  ],
};

export const reservation = {
  kicker: "Réservation",
  title: "Réserver un soin",
  intro:
    "Choisissez votre soin, votre créneau, et réservez en quelques clics. Un moment pour vous, simplement.",
};

export const contact = {
  title: "Contact",
  intro: "Une question, une envie particulière ? Beauty Fox est à votre écoute.",
};
