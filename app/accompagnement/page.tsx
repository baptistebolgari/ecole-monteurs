import type { Metadata } from "next";
import { ArrowRight, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/footer";
import { Reveal } from "@/components/sales/reveal";
import {
  ArrowList,
  Callout,
  Section,
  Strong,
} from "@/components/sales/prose";
import { PricingBox } from "@/components/sales/pricing-box";
import { CHECKOUT } from "@/lib/checkout-links";

export const metadata: Metadata = {
  title: "Devenez monteur vidéo YouTube professionnel | L’École des Monteurs",
  description:
    "Apprenez le montage vidéo YouTube depuis zéro, décrochez votre premier client en 90 jours et vivez de cette compétence.",
};

const quotes = [
  "« Je n’ai aucune connaissance. »",
  "« Trop d’informations contradictoires, je ne sais pas par où commencer. »",
  "« Trop de formations sur le web, je suis perdu. »",
];

const steps = [
  {
    title: "Apprenez une compétence recherchée",
    meta: "1 à 3 mois",
    body: [
      "Environ 1 heure par jour, à votre rythme. Le soir, le matin, le week-end.",
      "Vous apprenez les bases, puis la compétence qui fait la différence : le rythme qui retient les spectateurs. Sous chaque vidéo, les étapes à suivre. Vous savez toujours quoi faire ensuite.",
    ],
  },
  {
    title: "Décrochez votre premier client",
    meta: "Environ 1 mois",
    body: [
      "Les clients ne viennent pas frapper à votre porte tout seuls. La plupart des monteurs se contentent de répondre à quelques annonces. Vous, vous aurez une méthode.",
      "Environ 1 heure par jour, pour contacter 2 ou 3 créateurs de façon personnalisée.",
      "Faisons un calcul volontairement pessimiste. Si seulement 20 % des créateurs vous répondent, et que 10 % de ceux-là travaillent avec vous, il vous faut une cinquantaine de contacts. À 2 ou 3 par jour, c’est environ un mois.",
      "Et un premier client ne veut pas dire une première expérience. Pendant la formation, vous aurez déjà monté plusieurs projets. Vous aurez de quoi montrer votre travail.",
    ],
  },
  {
    title: "Progressez, puis augmentez vos tarifs",
    meta: "Ensuite",
    body: [
      "Chaque montage va plus vite que le précédent. Vos clients vous recommandent. Et vous pouvez choisir : prendre plus de projets, ou augmenter vos prix.",
    ],
  },
];

const modules = [
  {
    title: "Enjeux et choix de vos armes",
    text: "Quel logiciel choisir selon votre situation (Premiere Pro, DaVinci Resolve, CapCut, Final Cut Pro), et les 4 niveaux de matériel, du minimum viable au niveau expert.",
    result:
      "À la fin, vous savez exactement avec quoi commencer, sans dépenser plus que nécessaire.",
  },
  {
    title: "Formatez votre cerveau à la créativité",
    text: "La matrice ANCA pour optimiser la rétention de n’importe quelle vidéo, la technique de la bulle pour être créatif à la demande, et la méthode pour développer votre 3ème œil de monteur.",
    result:
      "À la fin, vous comprenez ce qui retient un spectateur, et vous ne dépendez plus de l’inspiration.",
  },
  {
    title: "Maîtrisez les bases du montage",
    text: "Le logiciel repris de zéro, les bons réglages pour chaque projet, et une ressource pour utiliser n’importe quel effet même avec un ordinateur modeste.",
    result: "À la fin, vous êtes prêt à monter un projet de A à Z.",
  },
  {
    title: "Divisez votre temps de montage par 2",
    text: "La méthode de l’armoire pour organiser vos projets, les raccourcis qui font gagner des heures, et comment dérusher une vidéo de 30 minutes en moins de 10 minutes.",
    result:
      "À la fin, les tâches répétitives vont vite, et vous gardez votre énergie pour la partie créative.",
  },
  {
    title: "Le montage qui hypnotise votre audience",
    text: "L’art du cut (savoir exactement où couper), les overlays, le choix des B-rolls, et le sound design qui crée l’ambiance.",
    result:
      "À la fin, vous savez créer un montage qui retient les spectateurs jusqu’au bout.",
  },
  {
    title: "Démultipliez vos capacités grâce à l’IA",
    text: "Les meilleurs outils IA pour chaque étape du montage, et comment générer gratuitement des images cohérentes pour vos vidéos.",
    result: "À la fin, l’IA travaille pour vous, pas contre vous.",
  },
  {
    title: "Montez chaque type de vidéo",
    text: "Les codes de chaque format : short, storytelling, gaming, business, documentaire, vlog.",
    result:
      "À la fin, vous pouvez monter n’importe quel type de production en respectant ses codes.",
  },
  {
    title: "Trouvez vos premiers clients",
    text: "Les prestations à vendre, comment fixer vos prix, les 3 façons de facturer, comment vous démarquer de 99 % des monteurs, et comment garder vos clients sur le long terme.",
    result:
      "À la fin, vous avez un plan, étape par étape, pour décrocher votre premier client.",
  },
];

// Passer `confirmed` à true pour afficher un bonus sur la page.
const bonuses = [
  {
    label: "Bonus 1",
    title: "La boîte à outils",
    text: "Les meilleures ressources pour trouver vos B-rolls, musiques, effets sonores, overlays, templates et plugins. Fini les heures perdues à chercher.",
    confirmed: true,
  },
  {
    label: "Bonus 2",
    title: "Le montage d’une intro Marketing Mania, de A à Z",
    text: "Vous regardez par-dessus mon épaule pendant que je transforme un rush brut en introduction pour une chaîne à 485 000 abonnés.",
    confirmed: true,
  },
  {
    label: "Bonus 3",
    title: "Comment trouver un client en moins de 12 heures",
    text: "La méthode qui a permis de décrocher un client à 750 € par mois en une soirée, en partant d’un profil de débutant anonyme.",
    confirmed: false,
  },
  {
    label: "Masterclass",
    title: "Techniques avancées",
    text: "After Effects, animations, caméras virtuelles 3D, Photoshop dans vos montages.",
    confirmed: false,
  },
].filter((bonus) => bonus.confirmed);

export default function AccompagnementPage() {
  return (
    <main className="flex min-h-dvh flex-col">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <section className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 pt-28 pb-20 text-center md:px-8">
          <Reveal className="flex flex-col items-center gap-6">
            <span className="w-fit rounded-full border border-border bg-card px-2 py-1 text-sm">
              L’École des Monteurs
            </span>
            <h1 className="mx-auto bg-linear-to-b from-sky-800 to-foreground bg-clip-text text-4xl font-medium tracking-tighter text-pretty text-transparent md:text-6xl dark:from-sky-100 dark:to-foreground">
              Devenez monteur vidéo YouTube professionnel, même si vous n’avez
              jamais ouvert un logiciel de montage
            </h1>
            <Button size="lg" className="shadow-lg" asChild>
              <a href={CHECKOUT.full}>
                Rejoindre l’accompagnement <ArrowRight className="size-4" />
              </a>
            </Button>
          </Reveal>
        </section>
        <div className="pointer-events-none absolute inset-x-0 -top-32 flex h-full items-center justify-end">
          <div className="flex w-3/4 items-center justify-center">
            <div className="h-150 w-12 rounded-3xl bg-light blur-[70px] will-change-transform max-sm:rotate-15 sm:rotate-35" />
          </div>
        </div>
      </div>

      <Section title="Les créateurs YouTube ont un problème. Vous pouvez être la solution.">
        <p>La vidéo a pris le dessus sur tous les réseaux.</p>
        <p>
          Et de plus en plus de créateurs en vivent : publicités, sponsors,
          vente de leurs propres produits.
        </p>
        <p>
          Dès qu’un créateur commence à gagner de l’argent, la première chose
          qu’il cherche à déléguer, c’est le montage.
        </p>
        <p>Mais il se heurte à un mur.</p>
        <p>
          Trouver quelqu’un qui sait utiliser un logiciel, c’est facile.
          Trouver un monteur qui :
        </p>
        <ArrowList
          items={[
            "comprend comment rythmer une vidéo pour qu’elle accroche,",
            "s’adapte aux codes de sa niche,",
            "gère un projet de façon fiable et professionnelle,",
          ]}
        />
        <p>c’est presque impossible.</p>
        <p>Et quand un créateur trouve ce monteur, il ne le lâche plus.</p>
        <p>
          Un bon monteur est complet avec 1 à 3 clients. Il sort du marché.
          Pendant ce temps, la demande continue d’augmenter.
        </p>
        <Callout>
          Pour vous, ça veut dire une chose : vous n’avez pas besoin de
          centaines de clients. <Strong>1 à 3 suffisent pour en vivre.</Strong>
        </Callout>
      </Section>

      <Section title="Le vrai problème">
        <p>
          Si vous n’avez pas encore commencé, ce n’est pas un manque de
          motivation.
        </p>
        <p>Voici ce que vous êtes des centaines à nous avoir écrit :</p>
        <div className="grid gap-3">
          {quotes.map((quote) => (
            <blockquote
              key={quote}
              className="rounded-2xl border border-border bg-card p-5 text-foreground italic"
            >
              {quote}
            </blockquote>
          ))}
        </div>
        <p>Vous l’avez peut-être vécu.</p>
        <p>
          Un tuto sur un effet. Un autre sur un logiciel différent. Un
          troisième qui contredit le premier.
        </p>
        <p>
          Des heures de vidéos regardées, et toujours la même question : par
          quoi je commence ?
        </p>
        <p>
          <Strong>Le problème n’est pas vous.</Strong> C’est que les tutos vous
          apprennent à utiliser un logiciel. Personne ne vous apprend :
        </p>
        <ArrowList
          items={[
            "comment créer un montage qui retient les spectateurs jusqu’à la fin,",
            "comment adapter votre montage aux codes d’une niche,",
            "comment trouver un client et gérer un projet comme un professionnel.",
          ]}
        />
        <p>Or c’est exactement ce que les créateurs recherchent.</p>
        <Callout>
          Ce qu’il vous manque, ce n’est pas plus d’informations.{" "}
          <Strong>C’est un cadre.</Strong>
        </Callout>
      </Section>

      <Section title="Ce qui sépare un monteur remplaçable d’un monteur qu’on s’arrache">
        <p>Il existe deux façons d’apprendre le montage.</p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold text-foreground">
              La compétence basique
            </h3>
            <p className="mt-3">
              Maîtriser le logiciel. Aligner les plans, couper les blancs,
              ajouter des transitions, poser une musique du début à la fin.
            </p>
            <p className="mt-4 text-sm">
              <Strong>Résultat :</Strong> un montage mécanique, qui fait amateur
              même s’il est techniquement propre. Et un monteur remplaçable par
              n’importe qui.
            </p>
          </div>
          <div className="rounded-3xl border border-light/40 bg-light/10 p-6">
            <h3 className="text-lg font-semibold text-foreground">
              La compétence profonde
            </h3>
            <p className="mt-3 text-foreground">
              Savoir créer le rythme qui retient l’attention.
            </p>
            <ol className="mt-3 list-decimal space-y-1 pl-5">
              <li>Construire le rythme et l’atmosphère de la vidéo</li>
              <li>Créer une bande-son cohérente (le sound design)</li>
              <li>Ajouter des effets seulement quand c’est utile</li>
            </ol>
            <p className="mt-4 text-sm">
              <Strong>Résultat :</Strong> des vidéos que les spectateurs
              regardent jusqu’au bout. Et un monteur dont le créateur ne veut
              plus se passer.
            </p>
          </div>
        </div>
        <p>
          Bonne nouvelle : cette compétence ne dépend pas de la technique.
        </p>
        <p>
          80 % des fonctions d’un logiciel ne vous serviront jamais pour
          YouTube. Vous apprenez les 20 % utiles, puis vous vous concentrez sur
          ce qui fait la différence.
        </p>
        <p>
          Et vous n’avez pas besoin d’être un génie créatif. La méthode repose
          sur ce qu’on appelle le « 3ème œil du monteur » : au lieu d’attendre
          l’inspiration, vous analysez ce qui fonctionne déjà, vous comprenez
          pourquoi, et vous l’adaptez à votre vidéo.
        </p>
        <Callout>
          <Strong>La créativité devient un processus, pas un don.</Strong>
        </Callout>
      </Section>

      <Section
        eyebrow="Le plan en 3 étapes"
        title="Votre plan pour les 90 prochains jours"
      >
        <div className="space-y-4">
          {steps.map((step, index) => (
            <Reveal
              key={step.title}
              className="rounded-3xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-light/15 text-sm font-semibold text-light">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Étape {index + 1} : {step.title}
                  </h3>
                  <span className="text-sm">{step.meta}</span>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                {step.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <p>
          C’est l’objectif de la méthode :{" "}
          <Strong>
            devenir monteur professionnel et trouver votre première mission en
            90 jours.
          </Strong>{" "}
          Le résultat dépend du temps que vous y mettez, et de votre application
          de la méthode.
        </p>
      </Section>

      <Section title="Ils partaient de zéro">
        <div className="grid gap-4">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Laetitia travaillait dans une grande surface.
            </h3>
            <p className="mt-3">
              Elle n’avait jamais ouvert un logiciel de montage. Ses deux
              peurs : que ce soit trop compliqué, et ne pas trouver de clients.
            </p>
            <div className="mt-4">
              <ArrowList
                items={[
                  <>
                    <Strong>Son premier client :</Strong> elle a appliqué la
                    méthode de prospection de la formation. Elle a remonté
                    l’intro d’une vidéo d’un créateur, puis la lui a envoyée par
                    mail. Première vidéo facturée : 130 €.
                  </>,
                  <>
                    <Strong>Son deuxième client :</Strong> grâce aux missions
                    relayées aux élèves.
                  </>,
                  <>
                    <Strong>Aujourd’hui :</Strong> 3 clients réguliers
                    (publicités, podcast, Reels), jusqu’à 3 600 € dans ses
                    meilleurs mois, et environ 10 000 € générés grâce au
                    montage.
                  </>,
                ]}
              />
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground">
              Vincent était au chômage.
            </h3>
            <p className="mt-3">
              Avant, il était conseiller en insertion professionnelle. Il
              n’avait jamais utilisé un vrai logiciel de montage.
            </p>
            <div className="mt-4">
              <ArrowList
                items={[
                  <>
                    <Strong>Sa première vidéo facturée :</Strong> 200 € pour 12
                    minutes. Il y avait passé 4 jours.
                  </>,
                  <>
                    <Strong>Son plus gros client :</Strong> une chaîne YouTube
                    trouvée grâce à une annonce relayée aux élèves.
                  </>,
                  <>
                    <Strong>Quelques mois plus tard :</Strong> il facturait
                    1 000 € des vidéos de 25 minutes, montées en 5 jours.
                  </>,
                ]}
              />
            </div>
          </div>
        </div>
        <p className="text-sm">
          Laetitia et Vincent ont suivi l’accompagnement complet. La méthode de
          prospection et les missions relayées aux élèves sont incluses dans
          cette formation.
        </p>
      </Section>

      <Section
        eyebrow="L’École des Monteurs : la formation"
        title="Ce que vous recevez"
      >
        <p>
          <Strong>+ de 10 heures de formation vidéo</Strong>, avec les étapes à
          suivre sous chaque vidéo.
        </p>
        <div className="space-y-4">
          {modules.map((module, index) => (
            <Reveal
              key={module.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-light">
                Module {index + 1}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {module.title}
              </h3>
              <p className="mt-2">{module.text}</p>
              <p className="mt-3 flex gap-2 text-sm text-foreground">
                <ArrowRight className="mt-0.5 size-4 shrink-0 text-light" />
                {module.result}
              </p>
            </Reveal>
          ))}
        </div>

        <h3 className="pt-4 text-xl font-semibold text-foreground">
          Vous n’êtes pas seul :
        </h3>
        <ArrowList
          items={[
            <>
              <Strong>Les consultations, à vie.</Strong> Vous posez votre
              question, vous recevez une réponse en vidéo. Un doute sur le
              logiciel, un retour sur l’intro de votre montage, une question sur
              le prix à proposer à un client.
            </>,
            <>
              <Strong>La communauté.</Strong> D’autres monteurs qui avancent en
              même temps que vous, pour échanger et rester motivé.
            </>,
            <>
              <Strong>Le job board.</Strong> Les demandes de créateurs qui
              cherchent un monteur, relayées directement aux élèves.
            </>,
          ]}
        />
        <Callout>
          <Strong>Accès à vie, y compris aux mises à jour.</Strong>
        </Callout>
      </Section>

      <PricingBox id="rejoindre" />

      <Section title="Les bonus">
        <div className="grid gap-4 sm:grid-cols-2">
          {bonuses.map((bonus) => (
            <Reveal
              key={bonus.title}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-light">
                {bonus.label}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {bonus.title}
              </h3>
              <p className="mt-2">{bonus.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section title="Soyons clairs sur ce que cette version ne contient pas">
        <ul className="space-y-3">
          {[
            "Les coachings hebdomadaires en individuel",
            "Le suivi hebdomadaire de vos exercices",
            "L’accompagnement sur votre première mission",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <X className="mt-1 size-4 shrink-0 text-destructive" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>Tout cela reste réservé à l’accompagnement complet.</p>

        <div className="grid gap-4 pt-2 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground">
              Cette version est faite pour vous si :
            </h3>
            <ul className="mt-3 space-y-3">
              {[
                "vous partez de zéro, ou presque,",
                "vous pouvez dégager environ 1 heure par jour,",
                "vous êtes prêt à avancer en autonomie, avec une méthode claire.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="mt-1 size-4 shrink-0 text-light" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6">
            <h3 className="font-semibold text-foreground">
              Elle n’est pas faite pour vous si :
            </h3>
            <ul className="mt-3 space-y-3">
              <li className="flex gap-3">
                <X className="mt-1 size-4 shrink-0 text-destructive" />
                <span>
                  vous savez que, sans quelqu’un qui vous attend chaque semaine,
                  vous n’ouvrirez pas la formation. Dans ce cas,
                  l’accompagnement complet, sur appel, vous conviendra mieux.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Pourquoi la formation est accessible sans appel (et seulement jusqu’à dimanche)">
        <p>
          Jusqu’ici, l’École des Monteurs n’était accessible que sur appel. La
          raison : c’est avant tout un accompagnement, et l’appel sert à
          vérifier que c’est le bon choix pour vous.
        </p>
        <p>Mais beaucoup d’entre vous nous ont dit :</p>
        <div className="grid gap-3">
          {[
            "« Je veux apprendre, mais pas avec un accompagnement complet pour l’instant. »",
            "« J’ai un travail à côté. Je veux avancer à mon rythme, le soir. »",
          ].map((quote) => (
            <blockquote
              key={quote}
              className="rounded-2xl border border-border bg-card p-5 text-foreground italic"
            >
              {quote}
            </blockquote>
          ))}
        </div>
        <p>
          Alors cette semaine, un test : la formation seule, sans coaching et
          sans appel.
        </p>
        <p>
          C’est un test, donc aucune décision n’est prise sur l’avenir de cette
          version. <Strong>Dimanche à 23h59, cette page ferme.</Strong> Ensuite,
          l’École redevient accessible uniquement sur appel.
        </p>
      </Section>

      <Section eyebrow="La rentabilité" title="600 €, qu’est-ce que ça représente ?">
        <p>Voici ce que les créateurs paient couramment pour un montage :</p>
        <ArrowList
          items={[
            "Short simple : 20 à 35 €",
            "Vidéo YouTube d’environ 10 minutes : 200 à 400 €",
            "Vidéo travaillée de 15 à 20 minutes : 500 à 750 €",
          ]}
        />
        <p>
          Et un créateur ne commande pas une vidéo. Il en commande chaque
          semaine.
        </p>
        <ArrowList
          items={[
            "1 short par jour à 30 € = 900 € par mois",
            "1 vidéo de 10 minutes par semaine à 300 € = 1 200 € par mois",
          ]}
        />
        <p>
          <Strong>600 €, c’est 2 vidéos de 10 minutes.</Strong> Et même avec des
          tarifs de débutant, comme les 130 € de Laetitia ou les 200 € de
          Vincent, la formation est rentabilisée entre la 3e et la 5e vidéo
          facturée.
        </p>
        <p>
          Au-delà de l’argent, vous investissez dans une compétence qui vous
          servira toute votre vie. Un métier concret, qui se pratique depuis
          chez vous, avec vos horaires.
        </p>
      </Section>

      <PricingBox />

      <Footer />
    </main>
  );
}
