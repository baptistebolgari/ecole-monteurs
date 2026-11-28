/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";

// Page de lancement fermée. La page de vente complète reste dans l'historique
// Git (commit fbb71d0, fichier app/lancement/page.tsx) pour un prochain lancement.
const RENDEZ_VOUS =
  "https://app.iclosed.io/e/ecole-monteurs/appel-de-candidature";

export const metadata: Metadata = {
  title: "L’École des Monteurs",
  description: "L’école n’est plus accessible sur cette page.",
};

export default function LancementFerme() {
  return (
    <main className="flex min-h-dvh flex-col">
      <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-4 py-20 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card py-1 pr-3.5 pl-1.5 text-[13px] font-medium tracking-tight">
          <img
            src="/logo-edm.webp"
            alt=""
            width={22}
            height={22}
            className="size-[22px] rounded-md"
          />
          L’École des Monteurs
        </span>

        <div className="mt-8 flex w-full flex-col items-center gap-6 rounded-3xl border border-mint-d/40 bg-mint/20 px-6 py-12 sm:px-10">
          <h1 className="text-3xl font-bold tracking-[-0.04em] text-balance text-foreground sm:text-4xl">
            L’école n’est plus accessible sur cette page.
          </h1>
          <p className="text-lg text-muted-foreground">
            Pour prendre rendez-vous :
          </p>
          <Button size="lg" asChild>
            <a href={RENDEZ_VOUS}>
              Prendre rendez-vous <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
      </section>

      <Footer showFacebookDisclaimer={false} />
    </main>
  );
}
