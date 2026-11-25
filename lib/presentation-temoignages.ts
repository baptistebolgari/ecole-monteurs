// Verbatims issus des sondages de fin de formation et des entretiens filmés
// (dossier Drive des témoignages). Coupes signalées par […], seules les fautes
// de frappe et les hésitations à l'oral sont corrigées.
// Pour les sondages, prénoms ou initiales déduits des adresses : à confirmer.
// promo : à renseigner uniquement avec les réponses des élèves.
// note : 5 pour les élèves ayant répondu qu'ils recommandent la formation, 4 pour
// les autres. Règle donnée par Baptiste, qui indique avoir l'accord des élèves.

export type Temoignage = {
  nom: string;
  texte: string;
  /** Année de promotion réelle. Rien ne s’affiche tant qu’elle n’est pas renseignée. */
  promo?: 2023 | 2024 | 2025 | 2026;
  /** Note donnée par l’élève. Pas d’étoiles tant qu’elle n’est pas renseignée. */
  note?: 4 | 4.5 | 5;
};

export const TEMOIGNAGES: Temoignage[] = [
  {
    nom: "Laetitia",
    note: 5,
    texte:
      "Je ne savais pas du tout faire de montage, je n’en avais jamais fait et je me sens aujourd’hui légitime de proposer mes services pour du montage vidéo. […] Avoir des coachings toutes les semaines et des projets à rendre est très motivant. On apprend énormément avec les commentaires faits sur chaque vidéo.",
  },
  {
    nom: "Alain",
    note: 5,
    texte:
      "La promesse de la formation a été au rendez-vous : être potentiellement capable de proposer mes services assez rapidement.",
  },
  {
    nom: "Charlotte",
    note: 5,
    texte:
      "Ça m’a permis de mieux appréhender Premiere Pro et de pouvoir monter sereinement avec, et je me suis beaucoup amusée avec les différents exercices du coaching, je me sens plus confiante dans mes compétences.",
  },
  {
    nom: "Vincent",
    note: 4,
    texte:
      "J’étais très novice, je n’avais jamais utilisé un vrai logiciel de montage. J’aimais bien le fait que ça montait crescendo. […] J’ai aimé les critiques : des critiques honnêtes, sincères, mais de façon toujours positive.",
  },
  {
    nom: "Myriam",
    note: 5,
    texte:
      "Baptiste est très pro et pédagogue. En étant newbie sur Premiere Pro, cela ne m’a pas fait peur de faire beaucoup beaucoup d’erreurs. Je sentais qu’il était là si besoin.",
  },
  {
    nom: "Pierre-Davy",
    note: 5,
    texte:
      "C’est un bon raccourci pour faire du montage YouTube et aller droit au but, dans la bonne direction.",
  },
  {
    nom: "Nico",
    note: 5,
    texte:
      "La formation est bien construite. Étape par étape. Baptiste est vraiment pédagogue et explique très bien tous les aspects de ce métier.",
  },
  {
    nom: "Florian",
    note: 4,
    texte:
      "Le mieux, c’était d’avoir déjà de la matière, comme tu nous donnais des rushs. […] Les retours étaient toujours sympas, et il y avait pas mal de matière, même en dehors des sessions hebdomadaires.",
  },
  {
    nom: "Rob",
    note: 5,
    texte:
      "Je suis monteur vidéo depuis 1 an et quelques mois, et j’ai appris en autodidacte. Beaucoup de conseils vont m’être bien utiles.",
  },
  {
    nom: "M. P.",
    note: 5,
    texte:
      "Super équilibre entre éléments théoriques à connaître et comprendre et pratique. […] La formation m’a donné envie d’explorer.",
  },
];
