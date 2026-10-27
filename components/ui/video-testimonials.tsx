"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { ArrowRight, Play } from "lucide-react";

interface VideoCase {
  id: string;
  name: string;
  thumb: string;
  title: React.ReactNode;
  points: { lead: string; text: string }[];
}

const CASES: VideoCase[] = [
  {
    id: "gm8s28ddpkg",
    name: "Laetitia",
    thumb: "/students/thumb-laetitia.webp",
    title: (
      <>
        Laetitia, monteuse vidéo qui facture 3&nbsp;600&nbsp;€/mois
        <span className="mt-1 block text-sm font-normal text-muted-foreground italic">
          (Elle n’avait jamais ouvert un logiciel de montage)
        </span>
      </>
    ),
    points: [
      {
        lead: "Son premier client :",
        text: "elle a appliqué la méthode de prospection de la formation. Elle a remonté l’intro d’une vidéo d’un créateur, puis la lui a envoyée par mail.",
      },
      {
        lead: "Son deuxième client :",
        text: "grâce aux missions relayées aux élèves.",
      },
      {
        lead: "Aujourd’hui :",
        text: "3 clients réguliers (publicités, podcast, Reels) qui la payent 3 600 € par mois.",
      },
    ],
  },
  {
    id: "O3TMGXMN4nA",
    name: "Vincent",
    thumb: "/students/thumb-vincent.webp",
    title: <>Vincent, de conseiller pôle emploi à monteur vidéo professionnel</>,
    points: [
      {
        lead: "Son plus gros client :",
        text: "une chaîne YouTube trouvée grâce à une annonce relayée aux élèves.",
      },
      {
        lead: "Quelques mois plus tard :",
        text: "il facturait 1 000 € des vidéos de 25 minutes, montées en 5 jours.",
      },
    ],
  },
  {
    id: "iL7wrtyzLzI",
    name: "Florian",
    thumb: "/students/thumb-florian.webp",
    title: <>Florian, sa première mission : 800&nbsp;€</>,
    points: [
      {
        lead: "Sa première mission :",
        text: "il a suivi les méthodes de l’accompagnement et a postulé via Twitter.",
      },
      {
        lead: "Aujourd’hui :",
        text: "il monte pour sa propre chaîne YouTube et pour les pubs de l’atelier qu’il a ouvert.",
      },
      {
        lead: "Son conseil :",
        text: "ne pas se sous-estimer. Un tarif trop bas ne fait pas sérieux.",
      },
    ],
  },
];

function VideoPlayer({ id, name, thumb }: { id: string; name: string; thumb: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video bg-[#131316]">
      {playing ? (
        <iframe
          className="absolute inset-0 size-full border-0"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={`Témoignage de ${name}, élève de l’École des Monteurs`}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Lancer le témoignage de ${name}`}
          className="group absolute inset-0 flex items-center justify-center"
        >
          <img
            src={thumb}
            alt=""
            className="absolute inset-0 size-full object-cover"
          />
          <span className="absolute inset-0 bg-[#131316]/5 transition-colors group-hover:bg-transparent" />
          <span className="relative flex size-[68px] items-center justify-center rounded-full bg-background text-foreground shadow-[0_12px_30px_-8px_rgba(0,0,0,0.45)] transition-transform group-hover:scale-110">
            <Play className="ml-1 size-6 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}

export default function VideoTestimonials() {
  return (
    <div className="mx-auto mb-12 grid w-full max-w-xl grid-cols-1 gap-5 sm:mb-16 lg:max-w-6xl lg:grid-cols-3">
      {CASES.map((c) => (
        <article
          key={c.id}
          className="flex flex-col overflow-hidden rounded-3xl border border-mint-d/40 bg-mint/15"
        >
          <VideoPlayer id={c.id} name={c.name} thumb={c.thumb} />
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-lg leading-snug font-semibold tracking-tight">
              {c.title}
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-[15px] leading-relaxed text-muted-foreground">
              {c.points.map((p) => (
                <li key={p.lead} className="flex gap-3">
                  <ArrowRight className="mt-1 size-4 shrink-0 text-mint-d" />
                  <span>
                    <b className="hl-mint font-semibold text-foreground">
                      {p.lead}
                    </b>{" "}
                    {p.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
