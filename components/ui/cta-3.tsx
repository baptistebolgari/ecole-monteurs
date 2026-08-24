import { ArrowRightIcon, PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="relative mx-auto flex w-full max-w-3xl flex-col justify-between gap-y-6 border-y border-light/30 bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-light/.16),transparent)] px-4 py-8">
      <PlusIcon
        className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6 text-light"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6 text-light"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6 text-light"
        strokeWidth={1}
      />
      <PlusIcon
        className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6 text-light"
        strokeWidth={1}
      />

      <div className="-inset-y-6 pointer-events-none absolute left-0 w-px border-l border-light/30" />
      <div className="-inset-y-6 pointer-events-none absolute right-0 w-px border-r border-light/30" />

      <div className="space-y-3">
        <h2 className="text-center font-bold text-2xl text-foreground">
          Garantie : un premier client sous{" "}
          <span className="text-light">90 jours</span>
        </h2>
        <p className="text-center text-muted-foreground">
          Après avoir suivi en intégralité L&apos;École Des Monteurs, nous
          vous garantissons que vous trouverez un client dans les 90 jours,
          ou vous pourrez demander un remboursement intégral de la
          formation.
        </p>
        <p className="text-center text-muted-foreground">
          Vous ne prenez aucun risque. Si ce n&apos;est celui de changer
          votre vie à tout jamais.
        </p>
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button asChild>
          <a href="https://www.ecole-monteurs.com/methode">
            Découvrir la méthode <ArrowRightIcon className="size-4 ml-1" />
          </a>
        </Button>
      </div>
    </div>
  );
}
