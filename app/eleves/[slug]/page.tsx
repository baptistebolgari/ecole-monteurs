/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/footer";
import { Reveal } from "@/components/sales/reveal";
import { YoutubeEmbed, getYoutubeId } from "@/components/eleves/youtube-embed";
import { ELEVES, getEleve } from "@/lib/eleves";
import type { Eleve, EleveChaine, TroisLignes } from "@/lib/eleves/types";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ELEVES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const eleve = getEleve((await params).slug);
  if (!eleve) return {};
  const image = {
    url: eleve.photo.src,
    width: eleve.photo.width,
    height: eleve.photo.height,
    alt: eleve.photo.alt,
  };
  return {
    metadataBase: new URL("https://www.ecole-monteurs.fr"),
    title: eleve.meta.titre,
    description: eleve.meta.description,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false },
    },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "L'École des Monteurs",
      title: eleve.meta.titre,
      description: eleve.meta.description,
      url: `/eleves/${eleve.slug}`,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: eleve.meta.titre,
      description: eleve.meta.description,
      images: [eleve.photo.src],
    },
  };
}

/** Met les **mots** en gras, avec la classe demandée. */
function rich(text: string, className: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <strong key={i} className={className}>
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

const CARTE_GRISE = "border-border bg-card";
const CARTE_VERTE = "border-mint-d/40 bg-mint/20";

/**
 * Un bloc : titre + 3 lignes numérotées. Sur ordinateur, ses 4 rangées sont
 * partagées avec les blocs voisins (subgrid) pour aligner les lignes.
 */
function Bloc({
  titre,
  lignes,
  carte,
  photo,
}: {
  titre: string;
  lignes: TroisLignes;
  carte: string;
  photo?: Eleve["photoCoaching"];
}) {
  return (
    <div
      className={`rounded-3xl border p-6 lg:grid lg:grid-rows-subgrid ${photo ? "lg:row-span-5" : "lg:row-span-4 lg:self-stretch"} ${carte}`}
    >
      <h2 className="text-2xl font-bold tracking-[-0.035em] text-balance text-foreground lg:text-[22px]">
        {titre}
      </h2>
      <ol className="lg:row-span-3 lg:grid lg:grid-rows-subgrid">
        {lignes.map((ligne, i) => (
          <li key={ligne} className="flex items-start gap-3 pt-5">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-mint text-[13px] font-bold text-[#131316]">
              {i + 1}
            </span>
            <span className="text-base leading-relaxed text-muted-foreground lg:text-[15px]">
              {rich(ligne, "font-semibold text-foreground")}
            </span>
          </li>
        ))}
      </ol>
      {photo && (
        <img
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          loading="lazy"
          className="mt-5 h-auto w-full self-start rounded-xl border border-border"
        />
      )}
    </div>
  );
}

/** Colonne de flèches : une par ligne, à la hauteur des numéros (ordinateur). */
function Fleches() {
  return (
    <div
      aria-hidden="true"
      className="hidden border-y border-transparent py-6 lg:row-span-4 lg:grid lg:grid-rows-subgrid"
    >
      <span />
      {[0, 1, 2].map((i) => (
        <span key={i} className="flex h-12 items-end self-start pb-1.5">
          <ArrowRight className="size-4 text-mint-d" />
        </span>
      ))}
    </div>
  );
}

function Citation({ texte }: { texte: string }) {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-14 sm:py-20">
      <Reveal>
        <figure className="rounded-3xl border border-mint-d/40 border-t-4 border-t-mint-d bg-card p-7 sm:p-10">
          <blockquote className="text-xl leading-relaxed font-medium tracking-tight text-foreground text-pretty sm:text-2xl">
            « {texte} »
          </blockquote>
        </figure>
      </Reveal>
    </section>
  );
}

/** Carte verte pleine largeur : images légendées, vidéo et lien vers la chaîne. */
function Chaine({ chaine }: { chaine: EleveChaine }) {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 pt-6 lg:max-w-6xl">
      <Reveal>
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-mint-d/40 bg-mint/20 p-6 sm:p-8">
          {chaine.images.length > 0 && (
            <div
              className={`grid w-full items-start gap-4 ${chaine.images.length > 1 ? "max-w-2xl sm:grid-cols-2" : "max-w-md"}`}
            >
              {chaine.images.map((image) => (
                <figure key={image.src} className="flex flex-col gap-2">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    className="h-auto w-full rounded-2xl border border-border bg-white"
                  />
                  {image.legende && (
                    <figcaption className="text-center text-sm text-muted-foreground">
                      {image.legende}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          )}
          {chaine.video && (
            <div className="w-full max-w-md">
              <YoutubeEmbed url={chaine.video.url} title={chaine.video.titre} />
            </div>
          )}
          <Button size="lg" asChild>
            <a
              href={chaine.bouton.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {chaine.bouton.label} <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

export default async function ElevePage({ params }: Props) {
  const eleve = getEleve((await params).slug);
  if (!eleve) notFound();

  const videos = [
    { ...eleve.avant, tag: "Avant" },
    { ...eleve.apres, tag: "Après" },
  ].filter((v) => getYoutubeId(v.url));

  return (
    <main className="flex min-h-dvh flex-col">
      {/* En-tête */}
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-5 px-4 pt-12 pb-10 text-center sm:pt-20">
        <Reveal className="flex flex-col items-center gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card py-1 pr-3.5 pl-1.5 text-[13px] font-medium tracking-tight">
            <img
              src="/logo-edm.webp"
              alt=""
              width={22}
              height={22}
              className="size-[22px] rounded-md"
            />
            {eleve.pastilleHaut}
          </span>
          <h1 className="text-5xl font-bold tracking-[-0.045em] text-balance sm:text-6xl">
            {eleve.prenom}
          </h1>
          <div className="flex flex-wrap justify-center gap-2">
            {eleve.pastilles.map((p) => (
              <span
                key={p}
                className="rounded-full border border-mint-d/40 bg-mint/25 px-3 py-1 text-[13px] font-medium"
              >
                {p}
              </span>
            ))}
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground">
            {eleve.objectif}
          </p>
        </Reveal>
      </section>

      {/* Photo de l'appel, affichée telle quelle */}
      <Reveal className="mx-auto w-full max-w-lg px-4">
        <img
          src={eleve.photo.src}
          alt={eleve.photo.alt}
          width={eleve.photo.width}
          height={eleve.photo.height}
          className="h-auto w-full rounded-3xl border border-border"
        />
      </Reveal>

      {/* Citation */}
      <Citation texte={eleve.citation.texte} />

      {/* Au départ → Pendant les coachings → Les résultats */}
      <section className="mx-auto w-full max-w-3xl px-4 lg:max-w-6xl">
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:grid-rows-[repeat(5,auto)] lg:gap-x-3 lg:gap-y-0">
            <Bloc titre="Au départ" lignes={eleve.depart} carte={CARTE_GRISE} />
            <Fleches />
            <Bloc
              titre="Pendant les coachings"
              lignes={eleve.coachings}
              carte={CARTE_GRISE}
              photo={eleve.photoCoaching}
            />
            <Fleches />
            <Bloc
              titre="Les résultats"
              lignes={eleve.resultats}
              carte={CARTE_VERTE}
            />
          </div>
        </Reveal>
      </section>

      {/* Sa chaîne YouTube (facultatif) */}
      {eleve.chaine && <Chaine chaine={eleve.chaine} />}

      {/* Avant / Après : masqué si aucun lien vidéo */}
      {videos.length > 0 && (
        <section className="mx-auto w-full max-w-4xl px-4 pt-16">
          <Reveal>
            <h2 className="text-center text-3xl font-bold tracking-[-0.04em] text-foreground sm:text-4xl">
              Avant / <span className="hl-mint">Après</span>
            </h2>
            <div
              className={`mt-8 grid gap-6 ${videos.length > 1 ? "md:grid-cols-2" : "mx-auto max-w-xl"}`}
            >
              {videos.map((v) => (
                <figure key={v.tag} className="flex flex-col gap-3">
                  <figcaption className="flex items-center gap-2">
                    <span className="rounded-full border border-mint-d/40 bg-mint/25 px-2.5 py-0.5 text-xs font-semibold tracking-wide uppercase">
                      {v.tag}
                    </span>
                    {v.label && (
                      <span className="text-sm font-medium text-foreground">
                        {v.label}
                      </span>
                    )}
                  </figcaption>
                  <YoutubeEmbed
                    url={v.url}
                    title={`${eleve.prenom} — ${v.tag}${v.label ? ` : ${v.label}` : ""}`}
                  />
                </figure>
              ))}
            </div>
          </Reveal>
        </section>
      )}

      <div className="pt-16 sm:pt-24">
        <Footer showFacebookDisclaimer={false} />
      </div>
    </main>
  );
}
