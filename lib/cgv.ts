// Contenu des conditions générales de vente (page /cgv)
// Syntaxe : **gras** dans les textes.

export type CgvBlock =
  | { t: "p"; x: string }
  | { t: "h"; x: string }
  | { t: "ul"; x: string[] }
  | { t: "ol"; x: string[] }
  | { t: "table"; head: string[]; rows: string[][] };

export type CgvArticle = {
  n: number;
  title: string;
  blocks: CgvBlock[];
};

export const CGV: CgvArticle[] = [
  {
    n: 1,
    title: "Identification du vendeur",
    blocks: [
      { t: "p", x: "Les présentes conditions générales de vente (« CGV ») sont proposées par :" },
      {
        t: "ul",
        x: [
          "**Vendeur :** Baptiste Bolgari, entrepreneur individuel, exerçant sous le nom commercial « L'École des Monteurs » (ci-après « l'École »)",
          "**Adresse :** Le Plan, 04320 Entrevaux",
          "**SIREN :** 893 019 794 — **SIRET :** 893 019 794 00013",
          "**N° de TVA intracommunautaire :** FR01893019794",
          "**E-mail :** contact@ecole-monteurs.fr",
          "**Téléphone :** 06 28 48 00 39",
          "**Site :** ecole-monteurs.fr",
        ],
      },
    ],
  },
  {
    n: 2,
    title: "Objet et champ d'application",
    blocks: [
      {
        t: "p",
        x: "Les CGV encadrent toute commande d'une offre de l'École par une personne physique ou morale (ci-après « l'Élève »). Elles prévalent sur tout autre document.",
      },
      {
        t: "ul",
        x: [
          "**Acceptation :** l'Élève accepte les CGV en cochant la case prévue avant le paiement. Sans cette case cochée, la commande ne peut pas être validée.",
          "**Version applicable :** celle en vigueur à la date de la commande. Les CGV sont accessibles en permanence sur ecole-monteurs.fr et jointes à l'e-mail de confirmation.",
          "**Consommateur ou professionnel :** certaines clauses ne visent que le consommateur (personne physique qui achète hors de son activité professionnelle) ou que le professionnel (par exemple un monteur déjà immatriculé qui achète pour son activité). Chaque article le précise.",
          "**Offres concernées :** l'« Accompagnement » (programme de 90 jours avec 12 coachings, article 3) et toute autre offre de l'École (formule allégée, contenu seul…). Le contenu exact de chaque offre figure sur sa page de vente ou son bon de commande.",
          "**Garantie :** la Garantie Première Mission (article 8) s'applique uniquement à l'Accompagnement à 12 coachings.",
        ],
      },
    ],
  },
  {
    n: 3,
    title: "Description de l'accompagnement",
    blocks: [
      {
        t: "p",
        x: "L'Accompagnement est une action de formation à distance de 90 jours. Son objectif : donner à l'Élève les compétences pour exercer comme monteur vidéo freelance pour des créateurs de contenu, et l'aider à décrocher une première mission rémunérée.",
      },
      { t: "h", x: "3.1 Programme" },
      { t: "p", x: "Un parcours de 90 jours en deux phases :" },
      {
        t: "ol",
        x: [
          "**Phase technique (environ 8 semaines) :** techniques de montage pour YouTube et les réseaux sociaux sur Adobe Premiere Pro, exercices de montage, constitution d'un portfolio.",
          "**Phase business (environ 4 semaines) :** positionnement, prospection de créateurs, tarification, gestion de la relation client, accompagnement sur le premier projet rémunéré.",
        ],
      },
      { t: "p", x: "Le programme détaillé, module par module, est communiqué avant la commande." },
      { t: "h", x: "3.2 Moyens pédagogiques" },
      {
        t: "ul",
        x: [
          "Accès à la plateforme de formation en ligne (vidéos, ressources, exercices), hébergée sur SchoolMaker.",
          "12 coachings en visioconférence, un par semaine : coachings individuels au démarrage, puis coachings en petits groupes de niveau.",
          "Sessions de questions-réponses en direct et accès à la communauté des élèves.",
          "Replays des coachings collectifs et des sessions en direct.",
          "Assistance pédagogique et technique par la messagerie de la plateforme, avec une réponse sous 48 h ouvrées.",
        ],
      },
      { t: "h", x: "3.3 Suivi et évaluation" },
      {
        t: "p",
        x: "Exercices de montage corrigés, validation du portfolio par le coach, suivi de la prospection via un tableau fourni par l'École. Une attestation de fin de formation est délivrée à l'Élève qui a suivi le parcours.",
      },
      { t: "h", x: "3.4 Prérequis" },
      { t: "p", x: "Aucune expérience du montage n'est requise. L'Élève doit disposer :" },
      {
        t: "ul",
        x: [
          "d'un ordinateur ;",
          "d'un accès à un logiciel de montage ;",
          "d'une connexion internet ;",
          "de temps disponible chaque semaine pour suivre le parcours et réaliser les exercices.",
        ],
      },
      { t: "h", x: "3.5 Formateur" },
      {
        t: "p",
        x: "Baptiste Bolgari, monteur vidéo freelance depuis 2020, monteur de la chaîne YouTube Marketing Mania de 2021 à 2026.",
      },
      { t: "h", x: "3.6 Durée d'accès" },
      {
        t: "p",
        x: "L'accompagnement (coachings, assistance) dure 90 jours à compter du premier coaching. L'accès à la plateforme et aux replays reste ouvert après cette période, tant que l'École exploite la plateforme. En cas d'arrêt, l'École prévient l'Élève au moins 3 mois à l'avance.",
      },
    ],
  },
  {
    n: 4,
    title: "Commande",
    blocks: [
      { t: "p", x: "La commande se passe à distance, après un appel de présentation." },
      {
        t: "ol",
        x: [
          "**Candidature :** l'Élève remplit le formulaire de candidature puis échange en visioconférence avec un conseiller de l'École. L'École peut refuser une candidature pour un motif légitime (prérequis de l'article 3.4 non remplis, capacité de coaching atteinte).",
          "**Informations avant la commande :** l'École envoie par e-mail le programme détaillé, les présentes CGV, le prix, l'échéancier, les règles de la Garantie Première Mission et le formulaire de rétractation.",
          "**Commande :** l'Élève valide et paie sa commande sur la page de commande et accepte les CGV en cochant la case prévue.",
          "**Confirmation :** l'École envoie par e-mail une confirmation reprenant l'offre, le prix, l'échéancier, les CGV et le formulaire de rétractation.",
        ],
      },
      {
        t: "p",
        x: "**Archivage :** l'École conserve la commande et les CGV acceptées pendant 10 ans et les transmet à l'Élève sur simple demande.",
      },
    ],
  },
  {
    n: 5,
    title: "Prix et modalités de paiement",
    blocks: [
      {
        t: "p",
        x: "Le prix est indiqué toutes taxes comprises sur la page de commande. Le paiement échelonné est sans frais.",
      },
      {
        t: "p",
        x: "**5.1 Paiement** — le prix est payé à la commande, en une fois ou selon l'échéancier choisi lors de la commande. En cas de rétractation, les sommes versées sont remboursées (article 6.3).",
      },
      {
        t: "p",
        x: "**5.2 Élève professionnel ou entreprise** — le prix est payable à la commande, sur facture. Tout retard entraîne des pénalités égales à trois fois le taux d'intérêt légal et une indemnité forfaitaire de 40 € pour frais de recouvrement (article L. 441-10 du Code de commerce).",
      },
      {
        t: "p",
        x: "**5.3 Moyens de paiement** — carte bancaire via Stripe, prélèvement SEPA ou virement. Une facture est émise pour chaque paiement.",
      },
      {
        t: "p",
        x: "**5.4 Retard de paiement (consommateur)** — en cas d'échéance impayée, l'École adresse une mise en demeure par e-mail. Sans régularisation sous 8 jours, l'accès aux coachings est suspendu jusqu'au paiement. Les sommes dues portent intérêt au taux légal. La suspension ne prolonge pas la période d'accompagnement.",
      },
    ],
  },
  {
    n: 6,
    title: "Droit de rétractation",
    blocks: [
      {
        t: "p",
        x: "L'Élève consommateur dispose de 14 jours à compter de sa commande pour se rétracter, sans motif et sans frais (article L. 221-18 du Code de la consommation).",
      },
      { t: "h", x: "6.1 Comment se rétracter" },
      { t: "p", x: "Par l'un de ces moyens, au choix :" },
      {
        t: "ul",
        x: [
          "le formulaire de rétractation joint à l'e-mail de confirmation, renvoyé à contact@ecole-monteurs.fr ;",
          "toute déclaration claire envoyée par e-mail ;",
          "une lettre recommandée avec accusé de réception à Le Plan, 04320 Entrevaux.",
        ],
      },
      { t: "p", x: "L'École envoie sans délai un accusé de réception daté sur support durable." },
      { t: "h", x: "6.2 Démarrage avant la fin du délai" },
      {
        t: "p",
        x: "L'Élève peut demander que l'accompagnement commence avant la fin du délai (accès à la plateforme, premier coaching). Cette demande ne le prive pas de son droit de rétractation. S'il se rétracte dans le délai, il ne doit aucune somme, même si l'accompagnement a commencé.",
      },
      { t: "h", x: "6.3 Remboursement" },
      {
        t: "p",
        x: "Toute somme déjà versée est remboursée dans les 14 jours suivant la rétractation, par le même moyen de paiement, sans frais.",
      },
      { t: "h", x: "6.4 Élève professionnel" },
      {
        t: "p",
        x: "Le droit de rétractation ne s'applique pas, sauf si l'Élève emploie 5 salariés au plus et que la formation n'entre pas dans le champ de son activité principale (article L. 221-3 du Code de la consommation).",
      },
    ],
  },
  {
    n: 7,
    title: "Accès, durée et déroulement",
    blocks: [
      { t: "p", x: "La période d'accompagnement de 90 jours démarre à la date du premier coaching individuel." },
      {
        t: "ul",
        x: [
          "**Ouverture des accès :** les identifiants de la plateforme sont envoyés sous 24 h après la fin du délai de rétractation, ou plus tôt à la demande de l'Élève (article 6.2).",
          "**Premier coaching :** il est fixé dans les 7 jours suivant l'ouverture des accès. Sa date figure dans l'e-mail de confirmation du rendez-vous.",
          "**Report par l'Élève :** un coaching annulé moins de 24 h à l'avance est considéré comme effectué, sauf force majeure.",
          "**Report par l'École :** l'École propose une nouvelle date sous 7 jours. La période d'accompagnement est prolongée d'autant.",
          "**Pause :** une fois pendant l'accompagnement, l'Élève peut demander une pause de 30 jours maximum pour un motif sérieux (santé, famille, contrainte professionnelle). La période d'accompagnement et la période de garantie sont prolongées de la même durée.",
          "**Compte personnel :** les accès sont strictement personnels et ne peuvent être ni partagés ni cédés.",
        ],
      },
    ],
  },
  {
    n: 8,
    title: "Garantie Première Mission en 90 jours",
    blocks: [
      {
        t: "p",
        x: "Si l'Élève remplit toutes les conditions de l'article 8.2 et n'a pas obtenu de Première Mission dans les 90 jours suivant son premier coaching, l'École lui rembourse 100 % des sommes versées pour l'Accompagnement.",
      },
      { t: "h", x: "8.1 Définitions" },
      {
        t: "ul",
        x: [
          "**Période de garantie :** 90 jours calendaires à compter du premier coaching individuel. Elle est prolongée en cas de pause ou de report d'un coaching par l'École (article 7).",
          "**Première Mission :** une prestation de montage vidéo rémunérée, quel que soit son montant, commandée par écrit (e-mail, message, devis accepté) par un client sans lien familial avec l'Élève. Elle est obtenue dès la commande, même si elle est réalisée ou payée après la Période de garantie.",
        ],
      },
      { t: "h", x: "8.2 Conditions" },
      {
        t: "p",
        x: "Elles sont cumulatives et vérifiées à partir de la progression enregistrée sur la plateforme et des présences aux coachings :",
      },
      {
        t: "ol",
        x: [
          "Avoir terminé 100 % des modules et exercices du parcours avant la fin de la Période de garantie.",
          "Avoir assisté aux 12 coachings. Un coaching reporté selon l'article 7 compte s'il a lieu à la nouvelle date.",
        ],
      },
      { t: "h", x: "8.3 Demande de remboursement" },
      {
        t: "ol",
        x: [
          "L'Élève envoie sa demande par e-mail à contact@ecole-monteurs.fr entre le 91e et le 120e jour suivant le premier coaching.",
          "L'École vérifie les conditions sous 14 jours. Si une condition n'est pas remplie, elle indique par écrit laquelle, preuves à l'appui.",
          "Une fois la demande validée, l'École rembourse sous 14 jours, par le même moyen de paiement. Les échéances restantes sont annulées.",
        ],
      },
      { t: "h", x: "8.4 Effets" },
      {
        t: "p",
        x: "Le remboursement met fin au contrat. L'accès aux coachings, à la communauté et à la plateforme est alors fermé.",
      },
      { t: "h", x: "8.5 Portée" },
      {
        t: "p",
        x: "La garantie s'applique uniquement à l'Accompagnement de 12 coachings et ne couvre aucune autre offre de l'École. Elle joue une seule fois par Élève. C'est une garantie commerciale : elle s'ajoute aux droits légaux de l'Élève (rétractation, conformité, article 13) et ne les réduit pas.",
      },
    ],
  },
  {
    n: 9,
    title: "Engagements de l'Élève",
    blocks: [
      { t: "p", x: "L'Élève s'engage à :" },
      {
        t: "ul",
        x: [
          "suivre le parcours avec assiduité et réaliser les exercices demandés ;",
          "respecter les autres élèves et l'équipe : aucun propos insultant ou discriminatoire, aucun démarchage commercial dans la communauté ;",
          "garder confidentielles les informations personnelles partagées par les autres élèves pendant les coachings collectifs.",
        ],
      },
    ],
  },
  {
    n: 10,
    title: "Propriété intellectuelle",
    blocks: [
      {
        t: "p",
        x: "Tous les contenus de l'École (vidéos, ressources, méthodes, supports, replays, marque « L'École des Monteurs ») appartiennent à Baptiste Bolgari ou à ses partenaires.",
      },
      {
        t: "ul",
        x: [
          "L'Élève reçoit un droit d'utilisation personnel, non exclusif et non cessible, limité à sa propre formation.",
          "Il est interdit de télécharger, copier, enregistrer, revendre ou diffuser tout ou partie de ces contenus, y compris les coachings.",
          "Les montages réalisés par l'Élève lui appartiennent. L'École ne peut les montrer publiquement (réseaux sociaux, publicités) qu'avec son accord écrit.",
          "Tout témoignage de l'Élève n'est utilisé qu'avec son accord écrit, recueilli séparément.",
        ],
      },
    ],
  },
  {
    n: 11,
    title: "Responsabilité et absence de garantie de revenus",
    blocks: [
      {
        t: "p",
        x: "L'École ne garantit aucun niveau de revenu ni aucun nombre de clients. Son seul engagement de résultat est le remboursement prévu à l'article 8.",
      },
      {
        t: "ul",
        x: [
          "**Résultats d'élèves :** les témoignages et chiffres présentés par l'École sont des résultats individuels. Ils dépendent du travail fourni, du temps investi et du marché, et ne préjugent pas des résultats de chaque Élève.",
          "**Activité de l'Élève :** l'Élève exerce ses missions en indépendant. Il est seul responsable de son statut, de ses déclarations, de ses contrats et de ses prestations. L'École n'est pas partie aux contrats entre l'Élève et ses clients.",
          "**Élève consommateur :** l'École est responsable de plein droit de la bonne exécution du contrat, y compris quand une partie est assurée par ses prestataires (plateforme, outils de visioconférence). Elle s'en exonère seulement en cas de faute de l'Élève, de fait imprévisible et insurmontable d'un tiers, ou de force majeure (article L. 221-15 du Code de la consommation).",
          "**Élève professionnel :** la responsabilité de l'École est limitée aux dommages directs et plafonnée au prix payé.",
        ],
      },
    ],
  },
  {
    n: 12,
    title: "Suspension et résiliation",
    blocks: [
      {
        t: "p",
        x: "Chaque partie peut mettre fin au contrat avant son terme dans les cas suivants. Le « prorata » se calcule sur les jours écoulés de la période d'accompagnement de 90 jours.",
      },
      {
        t: "table",
        head: ["Cas", "Ce que l'Élève doit"],
        rows: [
          [
            "Force majeure empêchant l'Élève de suivre la formation (article L. 6353-7 du Code du travail)",
            "Les prestations dispensées, au prorata. Le surplus versé est remboursé.",
          ],
          [
            "Abandon par l'Élève sans motif légitime, notifié par e-mail",
            "Les prestations dispensées, au prorata, plus une indemnité de 10 % du prix restant. Le surplus versé est remboursé.",
          ],
          [
            "Manquement grave de l'Élève (partage des accès, diffusion des contenus, harcèlement), non corrigé 8 jours après une mise en demeure",
            "Les prestations dispensées, au prorata.",
          ],
          [
            "Manquement de l'École, non corrigé 15 jours après une mise en demeure de l'Élève",
            "Rien de plus : les sommes correspondant aux prestations non fournies sont remboursées.",
          ],
        ],
      },
    ],
  },
  {
    n: 13,
    title: "Garanties légales",
    blocks: [
      {
        t: "p",
        x: "La plateforme, les vidéos et les replays sont couverts par la garantie légale de conformité des contenus et services numériques (articles L. 224-25-1 et suivants du Code de la consommation).",
      },
      {
        t: "ul",
        x: [
          "Pour une fourniture continue comme l'accès à la plateforme, l'École répond des défauts de conformité qui apparaissent pendant toute la durée de fourniture.",
          "En cas de défaut, l'Élève obtient d'abord la mise en conformité, sans frais et dans un délai raisonnable. À défaut, il peut obtenir une réduction du prix ou la résolution du contrat.",
          "Ces droits s'appliquent indépendamment de la Garantie Première Mission (article 8).",
        ],
      },
    ],
  },
  {
    n: 14,
    title: "Données personnelles",
    blocks: [
      {
        t: "p",
        x: "Baptiste Bolgari, pour l'École, est responsable du traitement des données de l'Élève. Le détail figure dans la politique de confidentialité sur ecole-monteurs.fr.",
      },
      {
        t: "ul",
        x: [
          "**Données traitées :** identité, coordonnées, progression sur la plateforme, tableau de suivi de prospection, enregistrements des coachings. Les données de carte bancaire sont traitées par le prestataire de paiement et ne sont pas conservées par l'École.",
          "**Finalités :** exécuter le contrat (formation, coachings, garantie), respecter les obligations légales (facturation, comptabilité), gérer les réclamations. L'utilisation d'un témoignage ou l'envoi d'offres commerciales hors formation repose sur le consentement de l'Élève.",
          "**Enregistrement des coachings :** les coachings sont enregistrés et transcrits avec Fathom, pour fournir les replays, assurer le suivi pédagogique et vérifier les conditions de la garantie. Le replay d'un coaching collectif est visible par les élèves du groupe. L'Élève peut couper sa caméra. Les enregistrements sont conservés 12 mois après la fin de l'accompagnement.",
          "**Prestataires :** SchoolMaker (plateforme), Stripe (paiement), Fillout (formulaires), Fathom (enregistrement), Google (suivi), Make (automatisations), WhatsApp (messages). Les transferts hors de l'Union européenne sont encadrés par des garanties appropriées.",
          "**Durées :** données du contrat conservées 3 ans après sa fin, ou jusqu'à la fin d'un litige en cours ; pièces comptables 10 ans.",
          "**Droits :** accès, rectification, effacement, limitation, opposition et portabilité, à exercer à contact@ecole-monteurs.fr. L'Élève peut saisir la CNIL (cnil.fr).",
        ],
      },
    ],
  },
  {
    n: 15,
    title: "Réclamations et médiation",
    blocks: [
      {
        t: "p",
        x: "Toute réclamation s'adresse par e-mail à contact@ecole-monteurs.fr. L'École répond sous 7 jours ouvrés.",
      },
      {
        t: "p",
        x: "Si aucune solution n'est trouvée, l'Élève consommateur peut saisir gratuitement le médiateur de la consommation dont relève l'École. Ses coordonnées figurent sur ecole-monteurs.fr.",
      },
      {
        t: "p",
        x: "L'Élève doit d'abord avoir adressé une réclamation écrite à l'École, puis saisir le médiateur dans l'année qui suit. La médiation est facultative : l'Élève reste libre de saisir le juge.",
      },
    ],
  },
  {
    n: 16,
    title: "Droit applicable et juridiction",
    blocks: [
      { t: "p", x: "Les CGV sont soumises au droit français." },
      {
        t: "ul",
        x: [
          "**Élève consommateur :** il peut saisir, à son choix, le tribunal du lieu où il demeurait au moment de la conclusion du contrat ou de la survenance du fait dommageable, ou tout tribunal compétent selon les règles de droit commun (article R. 631-3 du Code de la consommation).",
          "**Élève professionnel :** les règles de compétence de droit commun s'appliquent.",
          "**Clause nulle :** si une clause est jugée nulle, les autres restent applicables.",
          "**Modification :** l'École peut modifier les CGV. La version applicable reste celle acceptée lors de la commande.",
        ],
      },
    ],
  },
];
