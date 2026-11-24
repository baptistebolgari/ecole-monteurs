/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/footer";
import { Reveal } from "@/components/sales/reveal";
import { YoutubeEmbed, getYoutubeId } from "@/components/eleves/youtube-embed";
import { ELEVES, getEleve } from "@/lib/eleves";

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

/** **mot** → gras surligné en vert. */
function rich(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <strong key={i} className="hl-mint font-bold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

function Bullets({ points }: { points: string[] }) {
  return (
    <ul className="space-y-3.5">
      {points.map((point) => (
        <li key={point} className="flex gap-3">
          <ArrowRight className="mt-1 size-4 shrink-0 text-mint-d" />
          <span>{rich(point)}</span>
        </li>
      ))}
    </ul>
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
      <Reveal className="mx-auto w-full max-w-3xl px-4">
        <img
          src={eleve.photo.src}
          alt={eleve.photo.alt}
          width={eleve.photo.width}
          height={eleve.photo.height}
          className="h-auto w-full rounded-3xl border border-border"
        />
      </Reveal>

      {/* Au départ */}
      <section className="mx-auto w-full max-w-3xl px-4 pt-14">
        <Reveal className="rounded-3xl border border-border p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-[-0.035em] text-foreground sm:text-3xl">
            {eleve.depart.titre}
          </h2>
          <div className="mt-5 text-base leading-relaxed text-muted-foreground">
            <Bullets points={eleve.depart.points} />
          </div>
        </Reveal>
      </section>

      {/* Grand titre */}
      <section className="mx-auto w-full max-w-3xl px-4 py-16 text-center sm:py-24">
        <Reveal>
          <h2 className="text-4xl font-bold tracking-[-0.045em] text-balance text-foreground sm:text-6xl sm:leading-[1.08]">
            {rich(eleve.declic)}
          </h2>
        </Reveal>
      </section>

      {/* Parcours (carte grise) */}
      <section className="mx-auto w-full max-w-3xl px-4">
        <Reveal className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-[-0.035em] text-foreground sm:text-3xl">
            {eleve.parcours.titre}
          </h2>
          <div className="mt-5 text-base leading-relaxed text-muted-foreground">
            <Bullets points={eleve.parcours.points} />
          </div>
        </Reveal>
      </section>

      {/* Aujourd'hui (carte verte) */}
      <section className="mx-auto w-full max-w-3xl px-4 pt-6">
        <Reveal className="rounded-3xl border border-mint-d/40 bg-mint/20 p-6 sm:p-8">
          <h2 className="text-2xl font-bold tracking-[-0.035em] text-foreground sm:text-3xl">
            {eleve.aujourdhui.titre}
          </h2>
          <div className="mt-5 text-base leading-relaxed text-muted-foreground">
            <Bullets points={eleve.aujourdhui.points} />
          </div>
        </Reveal>
      </section>

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

      {/* Citation */}
      <section className="mx-auto w-full max-w-3xl px-4 py-16 sm:py-24">
        <Reveal>
          <figure className="rounded-3xl border border-mint-d/40 border-t-4 border-t-mint-d bg-card p-7 sm:p-10">
            <blockquote className="text-xl leading-relaxed font-medium tracking-tight text-foreground text-pretty sm:text-2xl">
              « {eleve.citation.texte} »
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-mint-d text-sm font-bold text-white">
                {eleve.prenom.charAt(0)}
              </span>
              <span className="text-sm font-semibold text-foreground">
                {eleve.citation.auteur}
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <Footer showFacebookDisclaimer={false} />
    </main>
  );
}
