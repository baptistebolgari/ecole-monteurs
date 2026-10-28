/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  Lightbulb,
  Play,
} from "lucide-react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { NewsletterForm } from "@/components/newsletter-form";
import { TutoCta } from "@/components/tuto-cta";
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
      <article className="mx-auto w-full max-w-4xl px-4 pt-10 pb-16 md:px-8">
        <Link
          href="/tuto"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          Tous les tutos
        </Link>

        <header className="mt-8 flex flex-col gap-4">
          <span className="w-fit rounded-full border border-mint-d/40 bg-mint/25 px-2.5 py-0.5 text-xs font-medium">
            {tuto.category}
          </span>
          <h1 className="text-balance text-3xl font-bold tracking-[-0.04em] md:text-5xl md:leading-[1.1]">
            {tuto.title}
          </h1>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            {tuto.intro}
          </p>
        </header>

        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1fr)_240px] md:items-start">
          <section>
            <span className="mb-4 block text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Mode d&apos;emploi
            </span>
            <ol className="flex flex-col gap-3">
              {tuto.steps.map((step, i) => (
                <li
                  key={i}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-mint-d text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <p className="pt-1 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>

            {tuto.tip && (
              <div className="mt-5 flex gap-3 rounded-2xl border border-mint-d/40 bg-mint/20 p-5">
                <Lightbulb className="size-5 shrink-0 text-mint-d" />
                <p className="leading-relaxed">
                  <strong className="font-semibold">Astuce : </strong>
                  {tuto.tip}
                </p>
              </div>
            )}

            {tuto.resources && (
              <div className="mt-8">
                <span className="mb-4 block text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                  Ressources
                </span>
                <ul className="flex flex-col gap-3">
                  {tuto.resources.map((r) => (
                    <li key={r.href}>
                      <a
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-mint-d"
                      >
                        <Download className="size-5 shrink-0 text-mint-d" />
                        <span className="flex-1 font-medium leading-relaxed">
                          {r.label}
                        </span>
                        <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <aside className="md:sticky md:top-24">
            <a
              href={`https://www.youtube.com/shorts/${tuto.youtubeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative mx-auto block aspect-9/16 max-w-60 overflow-hidden rounded-3xl border border-border bg-card"
            >
              <img
                src={`https://i.ytimg.com/vi/${tuto.youtubeId}/oardefault.jpg`}
                alt={tuto.title}
                loading="lazy"
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-black/20">
                <span className="flex size-14 items-center justify-center rounded-full bg-mint-d text-white shadow-lg transition-transform group-hover:scale-110">
                  <Play className="size-6 fill-current" />
                </span>
              </span>
            </a>
            <p className="mt-3 text-center text-sm font-medium text-muted-foreground">
              Voir le short
            </p>
          </aside>
        </div>
      </article>

      <NewsletterForm />
      <TutoCta />
      <Footer showFacebookDisclaimer={false} />
    </main>
  );
}
