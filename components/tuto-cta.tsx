import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TutoCta() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 pb-20">
      <div className="flex flex-col items-center gap-5 rounded-3xl border border-mint-d/40 bg-mint/20 px-6 py-10 text-center sm:px-10">
        <h2 className="text-balance text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
          Envie d&apos;aller <span className="hl-mint">plus loin</span> ?
        </h2>
        <p className="text-balance text-muted-foreground">
          Apprenez à monter des vidéos qui retiennent l&apos;attention et
          lancez votre carrière de monteur.
        </p>
        <Button size="lg" asChild>
          <a href="https://www.ecole-monteurs.com/video">
            Découvrir la méthode <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
