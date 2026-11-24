// Modèle d'une page « profil d'élève » (/eleves/[slug]).
// Dans les textes, **mot** = gras surligné en vert.

export type EleveVideo = {
  /** Libellé affiché au-dessus du lecteur. */
  label: string;
  /** Lien YouTube (non répertorié). Vide = la vidéo n'est pas affichée. */
  url: string;
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
  depart: { titre: string; points: string[] };
  /** Grand titre de section. */
  declic: string;
  parcours: { titre: string; points: string[] };
  aujourdhui: { titre: string; points: string[] };
  avant: EleveVideo;
  apres: EleveVideo;
  citation: { texte: string; auteur: string };
  /** Aperçu WhatsApp / réseaux (l'image est la photo de l'élève). */
  meta: { titre: string; description: string };
};
