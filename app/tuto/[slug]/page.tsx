/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Lightbulb, Play } from "lucide-react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { TUTOS, getTuto } from "@/lib/tutos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return TUTOS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const tuto = getTuto((await params).slug);
  if (!tuto) return {};
  return {
    title: `${tuto.title} | L'École des Monteurs`,
    description: tuto.summary,
  };
}

export default async function TutoPage({ params }: Props) {
  const tuto = getTuto((await params).slug);
  if (!tuto) notFound();

  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />
      <article className="max-w-3xl w-full mx-auto px-4 pt-10 pb-24 md:px-8">
        <Link
          href="/tuto"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Tous les tutos
        </Link>

        <header className="mt-8 space-y-4">
          <span className="w-fit inline-block text-sm bg-card px-2 py-1 border border-border rounded-full">
            {tuto.category}
          </span>
          <h1 className="text-3xl font-medium tracking-tighter md:text-5xl text-pretty">
            {tuto.title}
          </h1>
          <p className="text-lg text-muted-foreground text-pretty">
            {tuto.intro}
          </p>
        </header>

        <div className="mt-10 grid gap-10 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
          <section>
            <h2 className="text-xl font-medium tracking-tight">Mode d&apos;emploi</h2>
            <ol className="mt-5 space-y-3">
              {tuto.steps.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-xl border bg-card p-4"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-foreground text-background text-sm font-medium">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>

            {tuto.tip && (
              <div className="mt-6 flex gap-3 rounded-xl border border-dashed p-4 text-muted-foreground">
                <Lightbulb className="size-5 shrink-0 text-foreground" />
                <p className="leading-relaxed">{tuto.tip}</p>
              </div>
            )}
          </section>

          <aside className="md:sticky md:top-20">
            <a
              href={`https://www.youtube.com/shorts/${tuto.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mx-auto block max-w-60 overflow-hidden rounded-xl border bg-card aspect-9/16"
            >
              <img
                src={`https://i.ytimg.com/vi/${tuto.youtubeId}/oardefault.jpg`}
                alt={tuto.title}
                loading="lazy"
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-black shadow-lg">
                  <Play className="size-6 fill-current" />
                </span>
              </span>
            </a>
            <p className="mt-3 text-center text-sm text-muted-foreground">
              Voir le short
            </p>
          </aside>
        </div>

        <section className="mt-16 rounded-xl border bg-card p-8 text-center space-y-4">
          <h2 className="text-2xl font-medium tracking-tight">
            Envie d&apos;aller plus loin ?
          </h2>
          <p className="text-muted-foreground text-balance">
            Apprenez à monter des vidéos qui retiennent l&apos;attention et
            lancez votre carrière de monteur.
          </p>
          <Button className="shadow-lg" asChild>
            <Link href="/">Découvrir l&apos;École des Monteurs</Link>
          </Button>
        </section>
      </article>
      <Footer />
    </main>
  );
}
