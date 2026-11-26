// Modèle d'une page « profil d'élève » (/eleves/[slug]).
// Dans les trois blocs, **mots** = gras simple.

export type EleveVideo = {
  /** Libellé affiché au-dessus du lecteur. */
  label: string;
  /** Lien YouTube (non répertorié). Vide = la vidéo n'est pas affichée. */
  url: string;
};

/** Exactement 3 lignes : la ligne 1 d’un bloc répond à la ligne 1 des autres. */
export type TroisLignes = [string, string, string];

export type Eleve = {
  slug: string;
  prenom: string;
  /** Texte de la pastille en haut de page. */
  pastilleHaut: string;
  /** Pastilles sous le prénom. */
  pastilles: string[];
  objectif: string;
  photo: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  /** Bloc « Au départ ». */
  depart: TroisLignes;
  /** Bloc « Pendant les coachings ». */
  coachings: TroisLignes;
  /** Capture affichée en petit sous les 3 lignes des coachings (facultative). */
  photoCoaching?: { src: string; alt: string; width: number; height: number };
  /** Bloc « Les résultats ». */
  resultats: TroisLignes;
  avant: EleveVideo;
  apres: EleveVideo;
  citation: { texte: string };
  /** Aperçu WhatsApp / réseaux (l'image est la photo de l'élève). */
  meta: { titre: string; description: string };
};
