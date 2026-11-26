import type { Eleve } from "./types";

export const jonathan: Eleve = {
  slug: "jonathan",
  prenom: "Jonathan",
  pastilleHaut: "L’École des Monteurs · Profil d’élève",
  pastilles: ["Monte depuis 2020"],
  objectif: "Son objectif : vivre du montage vidéo.",
  // Nom de famille flouté dans l’image elle-même.
  photo: {
    src: "/eleves/jonathan/appel.jpg",
    alt: "Appel de coaching entre Jonathan et Baptiste",
    width: 1200,
    height: 797,
  },
  citation: {
    texte:
      "Je me sens un peu **plus à l’aise, plus rapide** à monter. C’est moins intimidant quand j’ai le rush.",
    auteur: "Jonathan",
  },
  depart: [
    "Il savait monter, mais sans style visuel cohérent : ses montages manquaient d’unité.",
    "Il passait des heures à chercher ses images : 15\u00a0heures pour une seule intro.",
    "Il n’avait monté que des vidéos de famille, jamais pour un créateur.",
  ],
  coachings: [
    "**Une direction artistique** unifiée pour chaque montage.",
    "**Une boîte à outils de monteur pro** : banques d’images, IA, effets prêts à l’emploi.",
    "**Des exercices calqués sur les demandes de clients** : intro YouTube, Short, puis publicité.",
  ],
  // Nom de famille et code de réunion masqués dans l’image elle-même.
  photoCoaching: {
    src: "/eleves/jonathan/coaching.jpg",
    alt: "Coaching entre Jonathan et Baptiste sur un montage dans Premiere Pro",
    width: 1200,
    height: 634,
  },
  resultats: [
    "Un montage jugé professionnel, fluide et moderne.",
    "Il est plus à l’aise et plus rapide face à un nouveau rush.",
    "Un premier Short de qualité pro, dans le style exact de la créatrice. **En cours :** une offre sur mesure, construite autour de ce qu’il aime faire et sait faire.",
  ],
  avant: { label: "", url: "" },
  apres: { label: "", url: "" },
  exemple: {
    titre: "Un exemple de son travail",
    url: "https://drive.google.com/file/d/1FztjCg5g_4dzX0fTENOq4Gn6AmvM2UUz/view",
    format: "vertical",
  },
  meta: {
    titre: "Jonathan — Profil d'élève | L'École des Monteurs",
    description:
      "Il montait depuis 2020. Aujourd'hui, il livre un montage de qualité pro.",
  },
};
