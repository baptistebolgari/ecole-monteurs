export type Tuto = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  youtubeId: string;
  intro: string;
  steps: string[];
  tip?: string;
  resources?: { label: string; href: string }[];
};

// Le plus récent en premier. Pour ajouter un tuto : ajouter une entrée en haut de la liste.
export const TUTOS: Tuto[] = [
  {
    slug: "sous-titres-automatiques",
    title: "Générer des sous-titres automatiquement",
    summary:
      "Transcrire votre vidéo et créer des sous-titres synchronisés en quelques clics, puis les styliser.",
    category: "Texte",
    youtubeId: "1nE5y9xcftw",
    intro:
      "Les sous-titres sont l'un des meilleurs leviers de rétention, et Premiere Pro sait les générer tout seul à partir d'une transcription de votre rush.",
    steps: [
      "Ouvrez le panneau Texte (s'il n'est pas affiché : Fenêtre > Texte).",
      "Sélectionnez le rush à transcrire, puis cliquez sur Transcrire : Premiere Pro génère automatiquement le texte de votre vidéo.",
      "Une fois la transcription terminée, allez dans l'onglet Sous-titres et choisissez Créer des sous-titres à partir de la transcription.",
      "Dans les réglages, baissez le nombre maximal de caractères et la durée pour des sous-titres courts qui s'enchaînent régulièrement.",
      "Choisissez une seule ligne, puis lancez la création : les sous-titres sont automatiquement synchronisés avec la vidéo.",
      "Pour les styliser, sélectionnez-les tous et ouvrez le panneau Propriétés : changez la police, la taille et la position.",
      "Ajustez aussi l'espacement entre les lettres pour un rendu plus moderne.",
    ],
    tip: "Relisez la transcription avant de créer les sous-titres : corriger une faute à cette étape la corrige partout.",
  },
  {
    slug: "sites-inspiration-montage",
    title: "2 sites pour ne plus jamais manquer d'inspiration",
    summary:
      "Où trouver des idées de transitions, d'effets, de direction artistique et de polices quand on bloque sur un montage.",
    category: "Inspiration",
    youtubeId: "Ce0hAWux_PY",
    intro:
      "La pire chose qui puisse arriver à un monteur, c'est la panne d'inspiration. Ces deux sites vous donnent des idées en quelques minutes et vous font gagner énormément de temps.",
    steps: [
      "Ouvrez EyeCandy : il regroupe des inspirations de transitions, d'animations, d'effets et de compositions.",
      "Parcourez-le quand vous ne savez pas quoi faire sur un B-roll ou un rush, pour trouver une idée qui rendra votre montage plus professionnel.",
      "Sur Pinterest, recherchez « editing inspiration » : vous obtenez des dizaines de compositions (beaucoup de motion design, mais pas seulement).",
      "Servez-vous-en pour choisir la direction artistique de votre montage avant de commencer : vous saurez tout de suite quel style viser.",
      "Recherchez aussi des combinaisons de polices sur Pinterest : chaque visuel indique le nom des fontes qui vont bien ensemble.",
    ],
    tip: "Le choix des polices fait énormément pour le rendu professionnel d'un montage : gardez de côté les combinaisons qui vous plaisent.",
    resources: [
      { label: "EyeCandy", href: "https://eyecannndy.com" },
      {
        label: "Pinterest : « editing inspiration »",
        href: "https://fr.pinterest.com/search/pins/?q=editing%20inspiration",
      },
    ],
  },
  {
    slug: "explosion-derriere-personnage",
    title: "Faire apparaître une explosion derrière un personnage",
    summary:
      "Un effet d'explosion en green screen placé derrière votre sujet grâce au masque d'objet et à l'Incrustation Ultra.",
    category: "Effets",
    youtubeId: "nS7Jv4vTmrE",
    intro:
      "On utilise un green screen (une vidéo d'effet sur fond vert), on le glisse entre le personnage détouré et la vidéo d'origine, puis on supprime le vert.",
    steps: [
      "Dupliquez votre vidéo (Alt + glisser) et placez la copie deux pistes plus haut pour laisser une piste vide entre les deux : c'est là qu'ira le green screen.",
      "Au début de la vidéo du dessus, sélectionnez l'outil Masque d'objet et cliquez sur votre personnage.",
      "Faites un clic droit puis Passer au masque d'opacité.",
      "Dans Opacité > Masque d'objet, cliquez sur l'icône de suivi pour détourer le personnage tout au long du plan.",
      "Glissez votre green screen d'explosion sur la piste vide, sous le personnage détouré, et ajustez sa taille.",
      "Appliquez l'effet Incrustation Ultra (Ultra Key) sur le green screen.",
      "Avec la pipette de l'effet, cliquez sur la partie verte : le fond vert disparaît et l'explosion apparaît derrière le personnage.",
    ],
    tip: "Désactivez temporairement la vidéo du bas pour vérifier que tout le vert a bien été supprimé.",
    resources: [
      {
        label: "Télécharger le green screen d'explosion utilisé dans la vidéo",
        href: "https://www.youtube.com/watch?v=QmV14LtCBRY",
      },
    ],
  },
  {
    slug: "flouter-des-visages",
    title: "Anonymiser des visages en moins de 30 secondes",
    summary:
      "Flouter automatiquement un ou plusieurs visages qui bougent grâce au suivi de masque.",
    category: "Masques",
    youtubeId: "XeqqU9mPO24",
    intro:
      "Pour rendre des personnes anonymes, on applique un effet Mosaïque limité à un masque, puis on laisse Premiere Pro suivre le visage automatiquement.",
    steps: [
      "Appliquez l'effet Mosaïque sur votre rush.",
      "Augmentez le nombre de blocs (environ 75) pour obtenir un flou propre.",
      "Dans les options de l'effet Mosaïque, sélectionnez l'outil Masque ellipse et tracez une ellipse autour du visage à masquer.",
      "Placez-vous au début de la vidéo et cliquez sur l'icône de suivi du masque (lecture vers l'avant) : le masque suit le visage tout au long du plan.",
      "Pour un deuxième visage, dupliquez l'effet Mosaïque.",
      "Sur la copie, supprimez le suivi et le tracé existants, replacez l'ellipse sur le second visage, puis relancez le suivi.",
    ],
    tip: "Répétez l'opération (dupliquer l'effet, replacer, suivre) pour autant de visages que nécessaire.",
  },
  {
    slug: "synchroniser-audio-video",
    title: "Synchroniser l'audio et la vidéo automatiquement",
    summary:
      "Arrêtez de caler vos pistes à la main : Premiere Pro le fait parfaitement en un clic.",
    category: "Audio",
    youtubeId: "5fh0PijHijw",
    intro:
      "Plutôt que de zoomer sur les formes d'onde pour les aligner à l'œil, utilisez la synchronisation automatique basée sur l'audio.",
    steps: [
      "Sélectionnez dans la timeline la piste vidéo et la piste audio à synchroniser.",
      "Faites un clic droit puis choisissez Synchroniser.",
      "Choisissez la piste de référence : la piste 1, celle qui correspond à votre vidéo.",
      "Validez avec OK : après le traitement, les pistes sont parfaitement alignées.",
    ],
    tip: "La caméra doit avoir enregistré un son témoin : c'est lui qui sert de référence pour caler l'audio externe.",
  },
  {
    slug: "ralenti-fluide",
    title: "Faire un ralenti fluide (sans l'erreur classique)",
    summary:
      "Oubliez Vitesse/Durée : utilisez les images clés de vitesse et les courbes pour un ralenti progressif.",
    category: "Vitesse",
    youtubeId: "jcGNwlNigmg",
    intro:
      "L'erreur la plus fréquente est de passer par Vitesse/Durée et d'allonger le clip : le ralenti est brutal et peu esthétique. La bonne méthode passe par le remappage temporel.",
    steps: [
      "Faites un clic droit sur votre rush puis Afficher les images clés de l'élément > Remappage temporel > Vitesse.",
      "Avec l'outil Plume, ajoutez deux images clés pour délimiter le passage à ralentir.",
      "Reprenez l'outil de sélection et abaissez la ligne entre ces deux points pour réduire la vitesse.",
      "Cliquez sur l'image clé et étirez-la : une rampe de vitesse apparaît.",
      "Jouez avec la poignée de la courbe pour adoucir l'entrée dans le ralenti.",
      "Faites la même chose sur l'image clé de sortie pour une reprise de vitesse progressive.",
    ],
    tip: "Plus la rampe est étirée, plus la transition entre vitesse normale et ralenti est douce.",
  },
  {
    slug: "styliser-capture-ecran",
    title: "Styliser une capture d'écran (effet grille 3D)",
    summary:
      "Transformer une simple capture d'écran en visuel stylé avec quatre effets sur un calque d'effets.",
    category: "Effets",
    youtubeId: "-12oeNFR31Q",
    intro:
      "On empile quatre effets sur un calque d'effets placé au-dessus de la capture pour créer une grille légèrement bombée avec un relief façon 3D.",
    steps: [
      "Placez votre capture d'écran dans la timeline.",
      "Ajoutez un calque d'effets juste au-dessus.",
      "Sur le calque, appliquez l'effet Mosaïque : nombre de blocs à 1000 et quantité à 5 pour obtenir la grille.",
      "Ajoutez l'effet Déformation de l'objectif et montez la courbure (environ 20).",
      "Ajoutez l'effet Transformation et augmentez l'échelle pour masquer les bords courbés et remplir l'écran.",
      "Terminez avec l'effet Aberration chromatique, réglé avec modération pour un léger relief 3D.",
    ],
  },
  {
    slug: "transition-flash-masque",
    title: "Transition flash avec le masque d'objet",
    summary:
      "Une transition qui fait apparaître le sujet du plan suivant en flash, sur 4 images.",
    category: "Transitions",
    youtubeId: "liY5_z3kD1M",
    intro:
      "On fait déborder le plan suivant de 4 images sur le plan précédent, on détoure son sujet, puis on alterne avec l'effet Inverser pour créer le flash.",
    steps: [
      "Reculez de 4 images le clip qui doit apparaître avec la transition.",
      "Avec l'outil Cutter, coupez ces 4 premières images une par une.",
      "Sur la première image, sélectionnez l'outil Masque d'objet et détourez le sujet.",
      "Faites un clic droit et choisissez Passer au masque d'opacité.",
      "Copiez l'opacité de cette image et collez-la sur les 3 autres pour que le masque s'applique sur toutes.",
      "Appliquez l'effet Inverser sur la 1re et la 3e image pour créer l'effet de flash.",
    ],
  },
  {
    slug: "transition-trajectoire-mouvement",
    title: "Transition ultra fluide en quelques secondes",
    summary:
      "Déplacer un élément d'une position à une autre sans images clés.",
    category: "Transitions",
    youtubeId: "99KbbLLpmBM",
    intro:
      "Pas besoin d'animer la position à la main : une transition dédiée crée automatiquement le mouvement entre deux plans.",
    steps: [
      "Placez deux éléments à la suite, chacun à une position différente dans l'image.",
      "Appliquez la transition Trajectoire de mouvement entre les deux.",
      "Premiere Pro génère automatiquement un déplacement fluide d'une position à l'autre.",
    ],
  },
  {
    slug: "zoom-fluide-calque-effets",
    title: "Zoomer sur plusieurs éléments sans saut",
    summary:
      "Un zoom parfaitement fluide sur des éléments côte à côte grâce à un calque d'effets.",
    category: "Animation",
    youtubeId: "aF7kkCQ7VtA",
    intro:
      "Mettre des images clés d'échelle sur chaque élément séparément crée un zoom saccadé, car les réglages ne correspondent jamais exactement. Un seul calque d'effets règle le problème.",
    steps: [
      "Placez vos éléments côte à côte, à la même échelle.",
      "Ajoutez un calque d'effets au-dessus de tous les éléments.",
      "Appliquez l'effet Transformation sur le calque d'effets.",
      "Au début du plan, créez une image clé d'échelle.",
      "À l'endroit où le zoom doit s'arrêter, augmentez l'échelle : tous les éléments zooment ensemble.",
    ],
  },
  {
    slug: "texte-derriere-personnage",
    title: "Faire passer un texte derrière un personnage",
    summary:
      "Placer un titre derrière la personne à l'écran grâce au masque d'objet et à son suivi automatique.",
    category: "Masques",
    youtubeId: "mcBkxsKVrYA",
    intro:
      "On duplique le plan du personnage au-dessus du texte, on le détoure avec le masque d'objet et on laisse Premiere Pro suivre le personnage.",
    steps: [
      "Créez votre texte au-dessus du rush et placez-le où vous voulez.",
      "Dupliquez la piste du personnage (Alt + glisser) au-dessus du texte.",
      "Dans les masques, choisissez l'outil Masque d'objet et cliquez sur le personnage. Ajoutez les éléments à garder devant (micro, etc.).",
      "Reprenez l'outil de sélection, faites un clic droit puis Passer au masque d'opacité : le personnage passe devant le texte.",
      "Dans Opacité > Masque d'objet, cliquez sur Suivre le masque sélectionné pour l'appliquer à tout le plan.",
      "Modifiez ensuite le texte comme vous le souhaitez.",
    ],
  },
  {
    slug: "texte-incruste-broll",
    title: "Texte incrusté dans un B-roll",
    summary:
      "Un texte qui se fond dans l'image grâce au mode de fusion Différence.",
    category: "Texte",
    youtubeId: "0oZE_ZLJgYM",
    intro:
      "Un gros texte bien gras et un simple changement de mode de fusion suffisent à l'incruster dans votre B-roll.",
    steps: [
      "Créez un texte avec l'outil Texte et faites-lui occuper une grande partie de l'écran.",
      "Centrez-le et choisissez une police très grasse (par exemple SF Pro Heavy ou Black).",
      "Resserrez l'espacement des lettres pour un rendu moderne.",
      "Placez-le au centre, idéalement sur une zone plutôt sombre du B-roll, et ajustez la taille.",
      "Dans Opacité, passez le mode de fusion sur Différence.",
    ],
  },
];

export function getTuto(slug: string) {
  return TUTOS.find((t) => t.slug === slug);
}
