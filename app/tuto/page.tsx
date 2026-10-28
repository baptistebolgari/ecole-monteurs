import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { NewsletterForm } from "@/components/newsletter-form";
import { TutoCta } from "@/components/tuto-cta";
import { TUTOS } from "@/lib/tutos";

export const metadata: Metadata = {
  title: "Tutos montage Premiere Pro | L'École des Monteurs",
  description:
    "Toutes les astuces de montage des shorts de Baptiste, expliquées pas à pas.",
};

export default function TutosPage() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />
      <section className="mx-auto w-full max-w-6xl px-4 pt-16 pb-16 md:px-8 md:pt-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
          <h1 className="text-balance text-4xl font-medium tracking-[-0.04em] md:text-6xl md:leading-[1.1]">
            Toutes mes{" "}
            <strong className="font-bold">
              astuces de <span className="hl-mint">montage</span>
            </strong>
          </h1>
          <p className="max-w-2xl text-balance text-lg text-muted-foreground">
            Expliquées{" "}
            <span className="ul-mint font-medium text-foreground">
              étape par étape
            </span>
          </p>
        </div>

        <NewsletterForm className="mt-12 px-0 pb-0" />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TUTOS.map((tuto) => (
            <Link
              key={tuto.slug}
              href={`/tuto/${tuto.slug}`}
              className="group flex flex-col gap-4 rounded-3xl border border-border border-t-4 border-t-mint-d bg-card p-7 transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="w-fit rounded-full border border-mint-d/40 bg-mint/25 px-2.5 py-0.5 text-xs font-medium">
                {tuto.category}
              </span>
              <h2 className="text-xl font-semibold leading-snug tracking-tight">
                {tuto.title}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {tuto.summary}
              </p>
              <span className="mt-auto inline-flex items-center gap-1.5 border-t border-border pt-4 text-sm font-semibold tracking-tight">
                Voir le tuto
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <TutoCta />
      <Footer showFacebookDisclaimer={false} />
    </main>
  );
}
