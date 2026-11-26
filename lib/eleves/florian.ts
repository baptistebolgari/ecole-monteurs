import type { Eleve } from "./types";

export const florian: Eleve = {
  slug: "florian",
  prenom: "Florian",
  pastilleHaut: "L’École des Monteurs · Profil d’élève",
  pastilles: ["36 ans", "En reconversion professionnelle"],
  objectif: "Son objectif : vivre du montage vidéo, en indépendant.",
  // Nom de famille flouté dans l’image elle-même.
  photo: {
    src: "/eleves/florian/appel.jpg",
    alt: "Appel de coaching entre Florian et Baptiste",
    width: 1200,
    height: 919,
  },
  citation: {
    texte:
      "De base, j’étais perdu dans le logiciel, et maintenant tout est vraiment **plus simple et plus rapide**.",
    auteur: "Florian",
  },
  depart: [
    "Il n’avait jamais vraiment monté de vidéo.",
    "Sans études dans l’audiovisuel, il pensait que ce milieu lui était inaccessible.",
    "Il n’avait jamais démarché de clients.",
  ],
  coachings: [
    "**La méthode iceberg** pour construire chaque montage.",
    "**Une vraie vidéo Marketing Mania à monter de A à Z**, à partir des rushs bruts.",
    "**Un plan de lancement** : sa spécialité (le storytelling), ses tarifs et sa méthode de prospection.",
  ],
  resultats: [
    "Un niveau validé pour travailler avec des clients.",
    "Il a monté la vidéo complète, 20\u00a0minutes, dans un style plus épuré et plus moderne que l’originale.",
    "Une offre claire et définie à proposer à ses clients, pour un revenu prévisible.",
  ],
  avant: { label: "", url: "" },
  apres: { label: "", url: "" },
  exemple: {
    titre: "Un exemple de son travail",
    url: "https://drive.google.com/file/d/1yp--zFYi8DpJyQLtI11knAGLfgYBXdpi/view",
  },
  meta: {
    titre: "Florian — Profil d'élève | L'École des Monteurs",
    description:
      "En reconversion, il n'avait jamais monté de vidéo. Aujourd'hui, son niveau est validé pour travailler avec des clients.",
  },
};
