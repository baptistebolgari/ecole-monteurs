import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT } from "@/lib/checkout-links";

export function PricingBox({ id }: { id?: string }) {
  return (
    <div id={id} className="mx-auto w-full max-w-3xl px-4 py-12">
      <div className="relative flex flex-col items-center gap-y-5 border-y border-light/30 bg-[radial-gradient(35%_80%_at_25%_0%,--theme(--color-light/.16),transparent)] px-4 py-10 text-center">
        <Plus
          className="absolute top-[-12.5px] left-[-11.5px] z-1 size-6 text-light"
          strokeWidth={1}
        />
        <Plus
          className="absolute top-[-12.5px] right-[-11.5px] z-1 size-6 text-light"
          strokeWidth={1}
        />
        <Plus
          className="absolute bottom-[-12.5px] left-[-11.5px] z-1 size-6 text-light"
          strokeWidth={1}
        />
        <Plus
          className="absolute right-[-11.5px] bottom-[-12.5px] z-1 size-6 text-light"
          strokeWidth={1}
        />
        <div className="pointer-events-none absolute -inset-y-6 left-0 w-px border-l border-light/30" />
        <div className="pointer-events-none absolute -inset-y-6 right-0 w-px border-r border-light/30" />

        <Button size="lg" asChild>
          <a href={CHECKOUT.full}>
            Je rejoins la formation <ArrowRight className="size-4" />
          </a>
        </Button>

        <p className="text-lg font-medium text-foreground">
          600 € · ou{" "}
          <a
            href={CHECKOUT.twice}
            className="text-light underline underline-offset-4 hover:opacity-80"
          >
            2 × 300 €
          </a>{" "}
          · ou{" "}
          <a
            href={CHECKOUT.thrice}
            className="text-light underline underline-offset-4 hover:opacity-80"
          >
            3 × 200 €
          </a>
        </p>

        <p className="text-sm text-muted-foreground">
          Accès immédiat et à vie · Paiement sécurisé · Fermeture dimanche 23h59
        </p>
      </div>
    </div>
  );
}
