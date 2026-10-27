import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-8">
      <div className="flex flex-col gap-y-6 rounded-3xl border border-mint-d/40 bg-mint/20 px-6 py-10 sm:px-10">
        <div className="space-y-3 text-center">
          <h2 className="text-balance text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
            Garantie : un premier client sous{" "}
            <span className="hl-mint">90 jours</span>
          </h2>
          <p className="text-muted-foreground">
            Après avoir suivi en intégralité L&apos;École Des Monteurs, nous
            vous garantissons que vous trouverez un client dans les 90 jours,
            ou vous pourrez demander un remboursement intégral de la
            formation.
          </p>
          <p className="text-muted-foreground">
            Vous ne prenez aucun risque. Si ce n&apos;est celui de changer
            votre vie à tout jamais.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Button size="lg" asChild>
            <a href="https://www.ecole-monteurs.com/methode">
              Découvrir la méthode <ArrowRightIcon className="size-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
