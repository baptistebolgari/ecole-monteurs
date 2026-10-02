"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PricingBox } from "@/components/sales/pricing-box";
import { motion } from "framer-motion";

export default function Faq({
  showCallCta = false,
}: {
  showCallCta?: boolean;
}) {
  const accordionItems = [
    {
      title: "La formation est-elle adaptée si je débute ?",
      content: (
        <div className="text-muted-foreground space-y-3">
          <p>
            Oui, la formation est construite comme un chemin structuré, depuis
            les bases jusqu&apos;aux techniques les plus avancées.
          </p>
          <p>
            Vous serez guidé de A à Z, de débutant à monteur d&apos;élite.
          </p>
          <p>
            C&apos;est un raccourci immense : au lieu de papillonner sur
            internet à la recherche de ressources fiables, vous allez
            directement suivre la méthode qui fait le succès des vidéos qui
            cartonnent.
          </p>
        </div>
      ),
    },
    {
      title:
        "J'ai déjà suivi d'autres formations sur le montage vidéo ou j'hésite avec une autre formation, en quoi celle-ci est différente ?",
      content: (
        <div className="text-muted-foreground space-y-3">
          <p>
            La plupart des formations se concentrent sur l&apos;aspect
            technique d&apos;un logiciel.
          </p>
          <p>
            Cette formation prend un angle différent en vous apprenant à
            monter spécifiquement des vidéos qui retiennent l&apos;attention.
          </p>
          <p>
            Personne ne va aussi loin sur la compréhension de la psychologie
            humaine.
          </p>
          <p>
            Au-delà de cette compétence de montage qui vous donnera un
            avantage injuste sur la concurrence, la formation vous donne
            aussi toutes les clés pour lancer votre carrière de monteur
            vidéo professionnel.
          </p>
          <p>
            Enfin, vous serez accompagné personnellement par Baptiste, le
            monteur principal de la chaîne Marketing Mania qui comptabilise
            plus de 485 000 abonnés.
          </p>
          <p>
            Vous pourrez vivre confortablement et sereinement de cette
            nouvelle compétence.
          </p>
        </div>
      ),
    },
    {
      title: "Combien pourrais-je vendre mes prestations de montage vidéo ?",
      content: (
        <div className="text-muted-foreground space-y-3">
          <p>
            Il y a énormément de prestations différentes à proposer en tant
            que monteur vidéo pro.
          </p>
          <p>
            Vous facturerez différemment selon la complexité du montage, la
            récurrence, la taille de l&apos;audience du client.
          </p>
          <p>Mais voici des fourchettes pour des projets courants :</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>Short basique : 20-35€</li>
            <li>Short avancé : 50-80€</li>
            <li>Vidéo YouTube classique d&apos;environ 10mn : 200€ - 400€</li>
            <li>
              Vidéo YouTube Style Marketing Mania (beaucoup
              d&apos;illustration, image IA, ...) d&apos;environ 15-20mn :
              500€ - 750€
            </li>
          </ul>
          <p>
            Ce sont des tarifs de base. Pour un monteur très expérimenté,
            j&apos;ai souvent vu des tarifs à 1000€ pour une vidéo de 10&apos;
          </p>
          <p>
            Gardez en tête que vous vendrez plusieurs montages chaque mois
            pour chaque client.
          </p>
          <p>Par exemple :</p>
          <ul className="list-disc space-y-1 pl-5">
            <li>1 short par jour à 30€ → 900€ par mois</li>
            <li>1 vidéo de 10&apos; par semaine à 300€ → 1200€ par mois</li>
            <li>
              1 vidéo avancé de 20&apos; par semaine à 600€ → 2400€ par mois
            </li>
          </ul>
          <p>
            Selon les missions, vous aurez besoin de seulement 1 à 3 clients
            pour vivre très confortablement.
          </p>
        </div>
      ),
    },
    {
      title: "En combien de temps puis-je rentabiliser la formation ?",
      content: (
        <div className="text-muted-foreground space-y-3">
          <p>Faisons un calcul simple :</p>
          <p>
            Vous décrochez votre premier contrat pour monter les vidéos
            d&apos;un Youtubeur. Ce créateur de contenu sort en moyenne 5
            vidéos par mois, et il vous rémunère 300€ par vidéo, soit un
            contrat à 1500€ par mois.
          </p>
          <p>
            Dès le deuxième mois, vous aurez gagné 3000€ grâce à ce seul
            client. Vous aurez déjà rentabilisé la formation.
          </p>
          <p>Tout le reste n&apos;est que pur bénéfice pour vous.</p>
          <p>
            Au-delà de l&apos;aspect financier, vous investissez pour vivre
            d&apos;un métier créatif et passionnant, qui vous offrira la
            liberté de vos horaires et de votre lieu de travail.
          </p>
        </div>
      ),
    },
    {
      title: "Comment se passe l'accompagnement sur ma 1ère mission ?",
      content: (
        <div className="text-muted-foreground space-y-3">
          <p>Vous serez accompagné par un monteur professionnel.</p>
          <p>
            Pendant 12 semaines, vous pourrez lui poser directement toutes
            vos questions lors d&apos;un appel hebdomadaire d&apos;environ 45
            minutes. Il vous fera également un retour sur vos travaux afin
            que cette 1ère mission se déroule parfaitement.
          </p>
        </div>
      ),
    },
    {
      title: "Le marché du montage vidéo ne risque-t-il pas d'être saturé ?",
      content: (
        <div className="text-muted-foreground space-y-3">
          <p>
            C&apos;est plutôt l&apos;inverse : la demande pour trouver de
            bons monteurs vidéos va grossir.
          </p>
          <p>
            La vidéo prend le dessus sur tous les réseaux sociaux, et de
            plus en plus de personnes vivent de leurs créations (et sont
            donc prêtes à déléguer). À côté de ça, la guerre de
            l&apos;attention est féroce, les créateurs ne pourront plus se
            contenter d&apos;avoir un montage amateur pour leurs vidéos.
          </p>
          <p>
            Avec L&apos;École Des Monteurs, vous allez apprendre une
            compétence demandée et rare qui vous placera directement dans
            l&apos;élite que les créateurs s&apos;arrachent.
          </p>
          <p>
            Vous serez un atout précieux pour les aider à développer leur
            chaîne. Ils ne voudront pas vous lâcher.
          </p>
          <p>
            Et rappelez-vous qu&apos;un bon monteur n&apos;a pas le temps de
            prendre plus de 3 clients en parallèle (vous pouvez même être
            rempli avec un seul gros client).
          </p>
          <p>Alors que des centaines de milliers de créateurs ont des besoins.</p>
          <p>
            Évidemment, plus tôt vous arriverez sur le marché, plus ça sera
            facile d&apos;établir votre réputation.
          </p>
          <p>
            Il y a peu de concurrence pour le moment. Rapidement,
            c&apos;est vous qui aurez le pouvoir de choisir les projets qui
            vous plaisent le plus ou les mieux rémunérés.
          </p>
          <p>
            Si vous préférez attendre un autre moment pour vous lancer,
            l&apos;opportunité sera toujours là, mais vous regretterez
            certainement de ne pas vous être lancé plus tôt.
          </p>
        </div>
      ),
    },
    {
      title: "Est-ce que j'ai besoin d'un ordinateur surpuissant ?",
      content: (
        <div className="text-muted-foreground space-y-3">
          <p>
            Vous n&apos;avez pas besoin d&apos;un ordinateur surpuissant et
            dernier cri pour commencer.
          </p>
          <p>
            La méthodologie de montage est avant tout basée sur la
            compréhension du rythme parfait plutôt que sur des effets
            spectaculaires qui demanderaient beaucoup de ressources.
          </p>
          <p>Vous n&apos;aurez donc pas besoin d&apos;un ordinateur dernier cri au départ.</p>
          <p>
            Dans le premier module de la formation, je vous détaille 4
            niveaux de matériel : du minimum viable au niveau expert.
          </p>
          <p>
            Dans le module 3, je vous partagerai aussi une méthode pour
            utiliser n&apos;importe quel effet sans être limité par la
            puissance de votre ordinateur.
          </p>
          <p>
            La formation va aussi plus loin avec des techniques avancées, si
            vous souhaitez réaliser des montages d&apos;un autre niveau (ce
            n&apos;est pas une obligation, mais vous verrez que le montage
            devient passionnant et on a toujours envie de plus 😉)
          </p>
          <p>
            Quand vous en serez à ce niveau d&apos;expertise, vous pourrez
            réinvestir une partie de ce que vous aurez gagné lors de vos
            missions pour acheter le matériel que vous voulez.
          </p>
        </div>
      ),
    },
    {
      title: "Puis-je financer la formation avec mon CPF ?",
      content: (
        <div className="text-muted-foreground space-y-3">
          <p>Non, le financement par CPF n&apos;est pas possible.</p>
          <p>
            La charge administrative est colossale et surtout ça
            impacterait la liberté que nous avons sur le contenu des
            formations.
          </p>
        </div>
      ),
    },
  ];

  return (
    <motion.section
      id="faq"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.5, type: "spring", bounce: 0 }}
      className="relative w-full max-w-(--breakpoint-xl) mx-auto px-4 py-28 gap-5 md:px-8 flex flex-col justify-center items-center"
    >
      <div className="flex flex-col gap-3 justify-center items-center">
        <h4 className="text-2xl font-bold sm:text-3xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          FAQ
        </h4>
        <p className="max-w-xl text-muted-foreground text-center">
          Voici les questions qu&apos;on nous pose le plus souvent.
        </p>
      </div>
      <div className="flex w-full max-w-3xl">
        <Accordion type="multiple" className="w-full">
          {accordionItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="text-muted-foreground"
            >
              <AccordionTrigger className="text-left">
                {item.title}
              </AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      {showCallCta && (
        <div className="flex w-full flex-col items-center gap-2">
          <p className="text-center text-lg font-medium text-foreground">
            Une question ?
            <br />
            <a
              href="https://calendly.com/maxime-ecoledesmonteurs/15min"
              className="text-light underline underline-offset-4 hover:opacity-80"
            >
              Réservez un appel avec un membre de l’équipe
            </a>
          </p>
          <PricingBox showQuestionLink={false} />
        </div>
      )}
    </motion.section>
  );
}
