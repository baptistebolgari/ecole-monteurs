import type { Eleve } from "./types";

export const thomas: Eleve = {
  slug: "thomas",
  prenom: "Thomas",
  pastilleHaut: "L’École des Monteurs · Profil d’élève",
  pastilles: [
    "Prof de musique au collège",
    "Créateur de contenu guitare sur YouTube",
  ],
  objectif:
    "Son objectif : apprendre à monter du contenu pour développer ses projets.",
  photo: {
    src: "/eleves/thomas/appel.jpg",
    alt: "Appel de coaching entre Thomas et Baptiste",
    width: 1200,
    height: 805,
  },
  depart: [
    "Il montait en autodidacte, sans aucun plan d’illustration.",
    "Ses vidéos d’analyse plafonnaient à 2\u00a0000 vues : beaucoup de spectateurs partaient au bout de 30 secondes.",
    "Il voulait proposer ses services de montage, mais doutait d’avoir le niveau.",
  ],
  coachings: [
    "**Mise en place d’une méthode en 3 étapes pour la rétention.**",
    "**Un plan de lancement pour les futures vidéos de sa chaîne.**",
    "**Une offre de montage** pour une typologie de client précis.",
  ],
  photoCoaching: {
    src: "/eleves/thomas/coaching.jpg",
    alt: "Coaching entre Thomas et Baptiste sur un montage dans Final Cut Pro",
    width: 1200,
    height: 597,
  },
  resultats: [
    "Ses vidéos sont beaucoup plus dynamiques.",
    "Sa chaîne décolle : sa vidéo sur le groupe Téléphone dépasse les 50\u00a0000 vues.",
    "Il a déjà eu ses premiers rendez-vous pour des missions de montage.",
  ],
  chaine: {
    images: [
      {
        src: "/eleves/thomas/video-telephone.jpg",
        alt: "Miniature de la vidéo « Pourquoi ce solo de Téléphone nous transporte autant ? », 56 k vues",
        width: 882,
        height: 692,
      },
      {
        src: "/eleves/thomas/video-manche.jpg",
        alt: "Miniature de la vidéo « Cette méthode va changer ta façon de voir le manche. », 7,7 k vues",
        width: 872,
        height: 654,
      },
    ],
    video: {
      url: "https://www.youtube.com/watch?v=W-JYHmzpxUo",
      titre: "Pourquoi ce solo de Téléphone nous transporte autant ?",
    },
    bouton: {
      label: "Voir sa chaîne YouTube",
      url: "https://www.youtube.com/@fretandgroove",
    },
  },
  // Section masquée tant que les liens sont vides.
  avant: { label: "", url: "" },
  apres: { label: "", url: "" },
  citation: {
    texte:
      "Jusqu’à maintenant, je faisais le truc un peu amateur de mettre la musique tout le temps pareil. […] Le montage, j’ai fait un effort. J’ai mis en place tout ce qu’on a vu. Et même moi, quand je regarde l’intro, je suis content, parce qu’au moins c’est dynamique.",
  },
  meta: {
    titre: "Thomas — Profil d'élève | L'École des Monteurs",
    description:
      "Prof de musique et créateur de contenu : de 2 000 à plus de 50 000 vues.",
  },
};
