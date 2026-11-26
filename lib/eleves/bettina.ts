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
  depart: [
    "Ses premiers montages faisaient amateur : images « façon PowerPoint », bandes noires.",
    "Elle tâtonnait, n’était pas sûre d’elle et perdait beaucoup de temps.",
    "Elle ne savait pas si le métier allait lui plaire, ni comment trouver des clients.",
  ],
  coachings: [
    "**Un cahier des charges précis pour chaque exercice**, comme une vraie commande client.",
    "**La méthode en 3 couches** : dérush, illustrations, habillage. Toujours dans le même ordre.",
    "**Un plan de lancement** : portfolio, vidéo de présentation, puis démarchage de son réseau.",
  ],
  // Nom de famille flouté dans l'image elle-même.
  photoCoaching: {
    src: "/eleves/bettina/coaching.jpg",
    alt: "Coaching entre Bettina et Baptiste sur un exercice de montage dans Premiere Pro",
    width: 1200,
    height: 599,
  },
  resultats: [
    "Un niveau technique validé pour proposer des prestations payantes.",
    "Elle sait exactement quoi faire, et dans quel ordre.",
    "« C’est très créatif et j’adore ça. » Sa vidéo de présentation est prête pour démarcher son réseau.",
  ],
  // À compléter : libellés et liens YouTube non répertoriés.
  // Tant qu'un lien est vide, la vidéo (et la section si les deux sont vides) n'apparaît pas.
  avant: { label: "", url: "" },
  apres: { label: "", url: "" },
  citation: {
    texte:
      "Je suis sortie de cette phase où j’essayais un truc, je n’étais pas sûre de moi, je perdais beaucoup de temps. Il y a eu une forme de déclic. Je sais exactement ce que je dois faire, même si je dois recommencer, ce n’est pas grave. Je suis beaucoup plus à l’aise.",
  },
  meta: {
    titre: "Bettina — Profil d'élève | L'École des Monteurs",
    description:
      "25 ans dans l'administratif, en reconversion vers le montage vidéo.",
  },
};
