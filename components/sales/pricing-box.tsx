import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CHECKOUT } from "@/lib/checkout-links";

export function PricingBox({
  id,
  showQuestionLink = true,
}: {
  id?: string;
  showQuestionLink?: boolean;
}) {
  return (
    <div id={id} className="mx-auto w-full max-w-3xl px-4 py-12">
      <div className="relative flex flex-col items-center gap-y-5 rounded-3xl border border-mint-d/40 bg-mint/20 px-6 py-10 text-center">

        <span className="text-xs font-semibold uppercase tracking-widest text-light">
          Prix de lancement
        </span>

        <p className="text-4xl font-bold text-foreground">500 €</p>

        <Button size="lg" asChild>
          <a href={CHECKOUT.full}>
            Je rejoins la formation <ArrowRight className="size-4" />
          </a>
        </Button>

        <p className="text-sm text-muted-foreground">
          Paiement disponible en{" "}
          <a
            href={CHECKOUT.twice}
            className="ul-mint font-medium text-foreground hover:opacity-80"
          >
            2 × 275 €
          </a>{" "}
          ou{" "}
          <a
            href={CHECKOUT.thrice}
            className="ul-mint font-medium text-foreground hover:opacity-80"
          >
            3 × 200 €
          </a>
        </p>

        <p className="text-sm text-muted-foreground">
          Accès immédiat et à vie · Paiement sécurisé
        </p>

        {showQuestionLink && (
          <a
            href="#faq"
            className="text-sm text-muted-foreground underline underline-offset-4 hover:text-light"
          >
            J’ai une question
          </a>
        )}
      </div>
    </div>
  );
}
