// Modèle d'une page « profil d'élève » (/eleves/[slug]).
// Dans les trois blocs, **mots** = gras simple.
// Dans la citation, **mots** = gras surligné en vert.

export type EleveVideo = {
  /** Libellé affiché au-dessus du lecteur. */
  label: string;
  /** Lien YouTube (non répertorié). Vide = la vidéo n'est pas affichée. */
  url: string;
};

/** Exactement 3 lignes : la ligne 1 d’un bloc répond à la ligne 1 des autres. */
export type TroisLignes = [string, string, string];

export type EleveImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Courte légende sous l’image (facultative). */
  legende?: string;
};

/** Carte « chaîne YouTube » de l’élève, affichée sous les trois blocs. */
export type EleveChaine = {
  /** Deux images côte à côte. Liste vide = pas de grille. */
  images: EleveImage[];
  /** Vidéo à regarder sur la page (lecteur 16:9, chargement différé). */
  video?: { url: string; titre: string };
  bouton: { label: string; url: string };
};

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
  /** Facultatif : sans cette carte, rien ne s’affiche. */
  chaine?: EleveChaine;
  /** Citation de l’élève en grand, sous la photo (facultative, sans les guillemets). */
  citation?: { texte: string; auteur: string };
  /**
   * Exemple de travail à la fin de la page : lien YouTube (recommandé) ou lien
   * d’un fichier vidéo Google Drive (la lecture sans compte Google n’est pas garantie).
   */
  exemple?: { titre: string; url: string; format?: "vertical" };
  /** Aperçu WhatsApp / réseaux (l'image est la photo de l'élève). */
  meta: { titre: string; description: string };
};
