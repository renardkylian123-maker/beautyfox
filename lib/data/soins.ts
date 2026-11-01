export type Soin = {
  nom: string;
  duree: string;
  prix: string;
  description?: string;
  image?: string;
};

export type Categorie = {
  slug: string;
  titre: string;
  soins: Soin[];
  image?: string;
};

export type SousCategorie = {
  titre: string;
  soins: Soin[];
};

export const soinsCorps: Categorie = {
  slug: "soins-corps",
  titre: "Soins corps",
  soins: [
    {
      nom: "Massage signature relaxant",
      duree: "30 min",
      prix: "40 €",
      description:
        "Un massage personnalisé selon vos envies du moment. Choisissez une à deux zones parmi celles proposées afin de profiter d'un massage véritablement adapté à vos envies.",
      image: "/soins/corps-massage-relaxant-30min.jpg",
    },
    {
      nom: "Massage signature relaxant",
      duree: "45 min",
      prix: "50 €",
      description:
        "La version prolongée de notre Massage Signature Relaxant. Vous choisissez jusqu'à trois zones sur lesquelles vous souhaitez que l'on se concentre.",
      image: "/soins/corps-massage-relaxant.jpg",
    },
    {
      nom: "Soin Harmonie",
      duree: "60 min",
      prix: "80 €",
      description:
        "Un massage corps complet pensé pour apporter une sensation d'harmonie et de détente générale, de la tête aux pieds.",
      image: "/soins/corps-harmonie.jpg",
    },
    {
      nom: "Massage signature du dos",
      duree: "30 min",
      prix: "40 €",
      description:
        "Un massage ciblé : décolleté, épaules, trapèzes, nuque, puis massage ciblé du dos. Un massage crânien vient compléter cette expérience.",
      image: "/soins/corps-massage-dos.jpg",
    },
    {
      nom: "Soin rituel ressourçant dos",
      duree: "45 min",
      prix: "60 €",
      description:
        "Un rituel dédié au dos qui associe gommage et massage relaxant. Douche mise à disposition en fin de soin.",
      image: "/soins/corps-ressourcant-dos.jpg",
    },
    {
      nom: "Soin rituel signature",
      duree: "90 min",
      prix: "130 €",
      description:
        "L'expérience corps complète de Beauty Fox : gommage, massage, enveloppement. Douche mise à disposition en fin de soin.",
      image: "/soins/corps-rituel-signature.jpg",
    },
    {
      nom: "Soin minceur corps",
      duree: "55 min",
      prix: "70 €",
      description:
        "Un soin corps ciblé, au protocole adapté aux objectifs et aux besoins définis lors de votre rendez-vous.",
      image: "/soins/corps-minceur.jpg",
    },
    {
      nom: "Gommage modelant",
      duree: "30 min",
      prix: "45 €",
      description:
        "Un soin destiné à exfolier l'ensemble du corps pour retrouver une peau plus douce et plus lisse. Douche mise à disposition.",
      image: "/soins/corps-gommage.jpg",
    },
  ],
};

export const soinsVisage: Categorie = {
  slug: "soins-visage",
  titre: "Soins visage",
  soins: [
    {
      nom: "Soin bio actif",
      duree: "55 min",
      prix: "80 €",
      description:
        "Un soin visage personnalisé selon les besoins de votre peau. Quatre orientations disponibles : apaisant, hydratant, purifiant, anti-âge.",
      image: "/soins/visage-bio-actif.jpg",
    },
    {
      nom: "Soin bio experts",
      duree: "75 min",
      prix: "95 €",
      description:
        "Une version plus approfondie du soin Bio Actif, avec analyse poussée de la peau et protocole enrichi. Trois orientations : apaisant, hydratant, anti-âge.",
      image: "/soins/visage-bio-experts.jpg",
    },
    {
      nom: "Soin Glow express",
      duree: "30 min",
      prix: "45 €",
      description:
        "Un soin visage express pour un coup d'éclat en 30 minutes. Idéal avant un évènement ou pour prendre soin de soi rapidement.",
      image: "/soins/visage-glow-express.jpg",
    },
    {
      nom: "Soin rituel pureté active",
      duree: "60 min",
      prix: "80 €",
      description:
        "Un soin pensé pour les peaux jeunes, avec une attention particulière aux imperfections et à l'excès de sébum.",
      image: "/soins/visage-purete-active.jpg",
    },
    {
      nom: "Rituel du regard",
      duree: "30 min",
      prix: "45 €",
      description:
        "Un soin entièrement consacré au contour des yeux, zone délicate et souvent sollicitée.",
      image: "/soins/visage-regard.jpg",
    },
    {
      nom: "Le soin sublime",
      duree: "1h20",
      prix: "100 €",
      description:
        "Apporte de l'éclat, lisse la surface de l'épiderme, atténue les marques du temps, raffermit et ralentit l'apparition de nouveaux signes de l'âge.",
      image: "/soins/visage-sublime.jpg",
    },
    {
      nom: "Drainage aux brosses lymphatique",
      duree: "20 min",
      prix: "35 €",
      description:
        "Grâce à un drainage lymphatique doux et précis, ce soin stimule la circulation, détoxifie, défatigue et réveille l'éclat de votre peau. Un format express, à combiner avec n'importe quel autre soin visage.",
      image: "/soins/visage-drainage-lymphatique.jpg",
    },
    {
      nom: "Drainage aux brosses lymphatique",
      duree: "45 min",
      prix: "70 €",
      description:
        "Grâce à un drainage lymphatique doux et précis, ce soin stimule la circulation, détoxifie, défatigue et réveille l'éclat de votre peau. Version complète, en soin indépendant.",
      image: "/soins/visage-drainage-lymphatique.jpg",
    },
  ],
};

export const epilationsVisage: SousCategorie = {
  titre: "Visage",
  soins: [
    { nom: "Sourcils", duree: "15 min", prix: "9 €" },
    { nom: "Lèvre supérieure", duree: "10 min", prix: "7 €" },
    { nom: "Menton", duree: "10 min", prix: "7 €" },
    { nom: "Joues", duree: "10 min", prix: "7 €" },
    { nom: "Sourcils + lèvres", duree: "20 min", prix: "15 €" },
    { nom: "Lèvre + menton", duree: "15 min", prix: "12 €" },
    { nom: "Sourcils + lèvre + menton", duree: "25 min", prix: "20 €" },
    { nom: "Visage complet", duree: "30 min", prix: "22 €" },
  ],
};

export const epilationsCorps: SousCategorie = {
  titre: "Corps",
  soins: [
    { nom: "Aisselles", duree: "20 min", prix: "9 €" },
    { nom: "Avant-bras", duree: "20 min", prix: "10 €" },
    { nom: "Bras complet", duree: "25 min", prix: "15 €" },
    { nom: "Demi-jambes", duree: "25 min", prix: "17 €" },
    { nom: "Jambes complètes", duree: "45 min", prix: "25 €" },
    { nom: "Maillot échancré", duree: "20 min", prix: "14 €" },
    { nom: "Maillot brésilien", duree: "25 min", prix: "18 €" },
    { nom: "Maillot intégral", duree: "45 min", prix: "22 €" },
    { nom: "Dos", duree: "30 min", prix: "20 €" },
    { nom: "Torse", duree: "30 min", prix: "20 €" },
    { nom: "Ventre", duree: "15 min", prix: "10 €" },
  ],
};

export const headspa: Categorie = {
  slug: "headspa",
  titre: "HeadSpa",
  image: "/soins/headspa-centre.jpg",
  soins: [
    {
      nom: "HeadSpa découverte",
      duree: "45 min",
      prix: "75 €",
      description:
        "Shampoing, masque, soin vapeur, massage crânien (cuir chevelu, cou, décolleté), massage bras pendant la pause, séchage aux doigts et huile de soin.",
    },
    {
      nom: "HeadSpa Evasion",
      duree: "90 min",
      prix: "125 €",
      description:
        "Gommage, shampoing, masque, soin visage Glow express, massage nuque/cou/décolleté, masque vapeur, massage bras ou pieds, séchage aux doigts et huile de soin.",
    },
  ],
};

export const footspa: Categorie = {
  slug: "footspa",
  titre: "FootSpa",
  image: "/soins/footspa-centre.jpg",
  soins: [
    {
      nom: "FootSpa découverte",
      duree: "55 min",
      prix: "75 €",
      description:
        "Nettoyage et préparation des pieds, exfoliation, masque nourrissant, massage relaxant des mains et avant-bras pendant la pose, puis massage des pieds.",
    },
    {
      nom: "FootSpa Evasion",
      duree: "75 min",
      prix: "95 €",
      description:
        "Nettoyage et préparation des pieds, exfoliant, masque nourrissant, massage relaxant des pieds et des jambes, puis massage du dos pour une détente plus profonde.",
    },
  ],
};

export const toutesLesCategories: Categorie[] = [
  soinsCorps,
  soinsVisage,
  headspa,
  footspa,
];
