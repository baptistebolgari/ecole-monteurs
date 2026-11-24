import type { Eleve } from "./types";

export const bettina: Eleve = {
  slug: "bettina",
  prenom: "Bettina",
  pastilleHaut: "L’École des Monteurs · Profil d’élève",
  pastilles: [
    "25 ans dans l’administratif",
    "En reconversion, en parallèle de son emploi",
  ],
  objectif: "Son objectif : un métier créatif, avec le maximum d’indépendance.",
  photo: {
    src: "/eleves/bettina/appel.jpg",
    alt: "Appel de coaching entre Bettina et Baptiste",
    width: 1200,
    height: 809,
  },
  depart: {
    titre: "Au départ",
    points: [
      "Elle avait seulement bricolé quelques montages pour elle, rien de professionnel.",
      "Elle travaillait sur un vieil ordinateur qui rame.",
      "Ses premières vidéos mettaient les images « façon PowerPoint », avec des bandes noires.",
      "**Son doute :** « Est-ce que je vais m’y plaire ou pas ? »",
    ],
  },
  declic: "Il y a eu une forme de **déclic.**",
  parcours: {
    titre: "Son parcours dans l’École",
    points: [
      "Des coachings individuels, à son rythme, en plus de son travail.",
      "Elle apprend à raconter une histoire avec ses images.",
      "Elle refait le même exercice cinq fois, jusqu’à en être contente.",
      "**Résultat :** elle maîtrise le dérush, le rythme et le sound design.",
    ],
  },
  aujourdhui: {
    titre: "Aujourd’hui",
    points: [
      "Elle monte des intros YouTube, des Shorts et des teasers de podcast.",
      "Sa vidéo de présentation est prête, et son portfolio est en cours.",
      "**Prochaine étape :** démarcher les entreprises de son réseau, en français et en allemand.",
    ],
  },
  // À compléter : libellés et liens YouTube non répertoriés.
  // Tant qu'un lien est vide, la vidéo (et la section si les deux sont vides) n'apparaît pas.
  avant: { label: "", url: "" },
  apres: { label: "", url: "" },
  citation: {
    texte:
      "Je suis sortie de cette phase où j’essayais un truc, je n’étais pas sûre de moi, je perdais beaucoup de temps. Il y a eu une forme de déclic. Je sais exactement ce que je dois faire, même si je dois recommencer, ce n’est pas grave. Je suis beaucoup plus à l’aise.",
    auteur: "Bettina — Ce qu’elle en dit",
  },
  meta: {
    titre: "Bettina — Profil d'élève | L'École des Monteurs",
    description:
      "25 ans dans l'administratif, en reconversion vers le montage vidéo.",
  },
};
