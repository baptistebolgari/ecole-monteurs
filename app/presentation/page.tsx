/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Footer from "@/components/footer";
import { Reveal } from "@/components/sales/reveal";
import { YoutubeEmbed } from "@/components/eleves/youtube-embed";
import { TestimonialsWall } from "@/components/presentation/testimonials-wall";

export const metadata: Metadata = {
  title: "Pourquoi l’École | L’École des Monteurs",
  description: "Pourquoi j’ai créé l’École des Monteurs.",
  // Page non référencée tant que son usage n'est pas décidé.
  robots: { index: false, follow: false },
};

// Vidéos montées par Baptiste (affichées en petit, lisibles sur la page).
const VIDEOS = [
  {
    titre: "La psychologie diabolique des clubs de strip-tease",
    url: "https://www.youtube.com/watch?v=Usu8b7ibPzA",
  },
  {
    titre: "La psychologie tordue des arnaques en ligne",
    url: "https://www.youtube.com/watch?v=eDn6cy6Y1CU",
  },
];

// Capture du profil Instagram public (à refaire pour actualiser les chiffres).
const INSTAGRAM = {
  url: "https://www.instagram.com/baptiste.edm/",
  capture: "/presentation/instagram.jpg",
  width: 728,
  height: 264,
};

const HISTOIRE = [
  {
    titre: "Le constat.",
    texte:
      "De plus en plus de gens me demandent des conseils pour se lancer dans le montage. En parallèle, avec Marketing Mania, on voit énormément d’entreprises et de créateurs qui veulent se lancer sur YouTube. Alors en 2022, on crée une agence pour les accompagner.",
  },
  {
    titre: "Le problème.",
    texte:
      "Les clients, on les trouve sans difficulté. Mais pour répondre à la demande, il nous faut des monteurs, et on n’en trouve pas qui soient au niveau.",
    citation:
      "Le problème, ce n’était pas de trouver des clients. C’était de trouver des monteurs.",
  },
  {
    titre: "La révélation.",
    texte:
      "Le marché n’est pas au niveau. Ceux qui veulent se lancer apprennent seuls avec des tutos, et personne ne les corrige. Et avec une agence, on n’aide que 3 ou 4 clients, et sa gestion prend tout notre temps. En formant des monteurs, on peut aider beaucoup plus de monde.",
  },
  {
    titre: "L’École.",
    texte:
      "On arrête l’agence, et en 2023, je crée l’École des Monteurs. J’apprends le métier à ceux qui veulent se lancer, et je partage avec eux les demandes que je reçois pour les aider à trouver leur premier client.",
  },
];

const ENGAGEMENTS = [
  {
    titre: "Un coaching individuel chaque semaine.",
    texte:
      "Vous montez de vraies vidéos, et je vous corrige en direct. Regarder une formation seul ne suffit pas.",
  },
  {
    titre: "Uniquement ce qui sert.",
    texte:
      "Pas besoin de maîtriser tout le logiciel. Vous apprenez à monter des vidéos que les gens regardent jusqu’au bout, parce que c’est ce que recherchent les entreprises et les créateurs.",
  },
  {
    titre: "Une promesse honnête.",
    texte:
      "Je ne vous promets pas 10 000 € par mois en 3 semaines. Je vous apprends un vrai métier, avec un objectif concret : votre premier client.",
  },
  {
    titre: "Des élèves sélectionnés.",
    texte:
      "Quand je recommande un monteur à une entreprise, je mets mon nom en jeu.",
  },
];

const GARANTIE: ReactNode[] = [
  "Vous décrochez votre premier client dans les 90 jours qui suivent votre premier coaching. Sinon, je vous rembourse intégralement.",
  <>
    <strong className="font-semibold text-foreground">Condition :</strong>{" "}
    suivre l’accompagnement complet jusqu’au bout, c’est-à-dire tous les
    coachings et 100 % du parcours, exercices compris.
  </>,
  <>
    <strong className="font-semibold text-foreground">
      Pourquoi je peux m’y engager :
    </strong>{" "}
    je suis votre progression chaque semaine. Sans suivi individuel, impossible
    de garantir un résultat.
  </>,
];

const AUJOURDHUI = [
  "Plus de 70 monteurs formés.",
  "Plus de 350 vidéos montées.",
  "Des profils très différents : salariés en reconversion, étudiants, créateurs de contenu.",
];

const CONFIANCE = [
  { nom: "Les Stratèges", src: "/partners/les-strateges.webp" },
  { nom: "Arthur Villecourt", src: "/partners/arthur-villecourt.webp" },
  { nom: "Waalaxy", src: "/partners/waalaxy.webp" },
  { nom: "Ahrefs", src: "/partners/logo-2.jpg" },
  { nom: "Patrick Mouratoglou", src: "/partners/mouratoglou.webp" },
];

function Puces({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <ArrowRight className="mt-1 size-4 shrink-0 text-mint-d" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Titre({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-10 text-center text-3xl font-bold tracking-[-0.04em] text-balance md:text-4xl">
      {children}
    </h2>
  );
}

export default function PresentationPage() {
  return (
    <main className="flex min-h-dvh flex-col">
      {/* En-tête */}
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 pt-12 text-center sm:pt-20">
        <Reveal className="flex flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card py-1 pr-3.5 pl-1.5 text-[13px] font-medium tracking-tight">
            <img
              src="/logo-edm.webp"
              alt=""
              width={22}
              height={22}
              className="size-[22px] rounded-md"
            />
            L’École des Monteurs · Pourquoi l’École
          </span>
          <h1 className="text-4xl font-bold tracking-[-0.045em] text-balance sm:text-6xl sm:leading-[1.08]">
            Pourquoi j’ai créé{" "}
            <span className="hl-mint">l’École des Monteurs</span>
          </h1>
          <div className="mt-4 flex flex-col items-center gap-6 sm:flex-row sm:gap-9 sm:text-left">
            <img
              src="/baptiste.webp"
              alt="Baptiste, fondateur de l’École des Monteurs"
              width={900}
              height={1125}
              className="h-auto w-56 shrink-0 rounded-3xl border border-border shadow-[0_24px_50px_-28px_rgba(0,0,0,0.45)] sm:w-60"
            />
            <div className="max-w-sm space-y-3 text-lg leading-relaxed text-pretty text-muted-foreground">
              <p>Moi, c’est Baptiste. Je monte des vidéos depuis 5 ans.</p>
              <p>
                J’ai géré le montage de Marketing Mania pendant 5 ans, et mes
                vidéos cumulent près de 50 millions de vues.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Visuel : vidéos montées puis compte Instagram */}
      <section className="mx-auto w-full max-w-3xl px-4 pt-10">
        <Reveal className="flex flex-col items-center gap-8">
          <div className="grid w-full gap-4 sm:grid-cols-2">
            {VIDEOS.map((v) => (
              <YoutubeEmbed key={v.url} url={v.url} title={v.titre} />
            ))}
          </div>
          <a
            href={INSTAGRAM.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full overflow-hidden rounded-3xl border border-border bg-white p-2 shadow-[0_24px_50px_-30px_rgba(0,0,0,0.35)] transition-transform duration-200 hover:-translate-y-1 sm:p-5"
          >
            <img
              src={INSTAGRAM.capture}
              alt="Profil Instagram @baptiste.edm"
              width={INSTAGRAM.width}
              height={INSTAGRAM.height}
              loading="lazy"
              className="h-auto w-full"
            />
          </a>
        </Reveal>
      </section>

      {/* L'histoire */}
      <section className="mx-auto w-full max-w-3xl px-4 pt-20 sm:pt-28">
        <Reveal>
          <Titre>
            L’<span className="hl-mint">histoire</span>
          </Titre>
        </Reveal>
        <div className="space-y-4">
          {HISTOIRE.map((etape, i) => (
            <Reveal key={etape.titre} className="space-y-4">
              <article className="flex gap-4 rounded-3xl border border-border bg-card p-6 sm:p-8">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-mint text-sm font-bold">
                  {i + 1}
                </span>
                <p className="leading-relaxed text-muted-foreground">
                  <strong className="mb-1 block text-xl font-bold tracking-tight text-foreground">
                    {etape.titre}
                  </strong>
                  {etape.texte}
                </p>
              </article>
              {etape.citation && (
                <blockquote className="py-8 text-center text-2xl font-bold tracking-[-0.035em] text-balance text-foreground sm:text-4xl sm:leading-[1.2]">
                  « {etape.citation} »
                </blockquote>
              )}
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mes engagements */}
      <section className="mx-auto w-full max-w-4xl px-4 pt-20 sm:pt-28">
        <Reveal>
          <Titre>
            Mes <span className="hl-mint">engagements</span>
          </Titre>
          <div className="grid gap-4 md:grid-cols-2">
            {ENGAGEMENTS.map((e) => (
              <article
                key={e.titre}
                className="rounded-3xl border border-border border-t-4 border-t-mint-d bg-card p-7"
              >
                <h3 className="text-lg leading-snug font-semibold tracking-tight">
                  {e.titre}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {e.texte}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* La garantie */}
      <section className="mx-auto w-full max-w-3xl px-4 pt-20 sm:pt-28">
        <Reveal>
          <Titre>
            La <span className="hl-mint">garantie</span>
          </Titre>
          <div className="rounded-3xl border border-mint-d/40 bg-mint/20 p-6 sm:p-9">
            <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-mint-d text-white">
              <ShieldCheck className="size-7" />
            </span>
            <blockquote className="mt-5 mb-8 text-center text-2xl font-bold tracking-[-0.035em] text-balance text-foreground sm:text-3xl">
              « Si vous faites le travail, c’est moi qui prends le risque. »
            </blockquote>
            <div className="leading-relaxed text-muted-foreground">
              <Puces items={GARANTIE} />
            </div>
          </div>
        </Reveal>
      </section>

      {/* L'École aujourd'hui */}
      <section className="mx-auto w-full max-w-3xl px-4 py-20 sm:py-28">
        <Reveal>
          <Titre>
            L’École <span className="hl-mint">aujourd’hui</span>
          </Titre>
          <div className="rounded-3xl border border-border bg-card p-6 leading-relaxed text-muted-foreground sm:p-8">
            <Puces items={AUJOURDHUI} />
            <div className="mt-8 border-t border-border pt-6">
              <p className="text-center text-sm font-semibold tracking-tight text-foreground">
                Ils nous ont fait confiance :
              </p>
              <ul className="mt-5 flex flex-wrap justify-center gap-y-5">
                {CONFIANCE.map((c) => (
                  <li
                    key={c.nom}
                    className="flex w-1/3 flex-col items-center gap-2 px-1 text-center sm:w-1/5"
                  >
                    <img
                      src={c.src}
                      alt={`Logo ${c.nom}`}
                      className="size-14 rounded-full border border-border object-cover"
                    />
                    <span className="text-xs leading-tight font-semibold text-foreground">
                      {c.nom}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Témoignages */}
      <section className="mx-auto w-full max-w-5xl px-4 pb-20 sm:pb-28">
        <Reveal>
          <Titre>
            Ce que disent <span className="hl-mint">nos élèves</span>
          </Titre>
        </Reveal>
        <TestimonialsWall />
      </section>

      <Footer showFacebookDisclaimer={false} />
    </main>
  );
}
