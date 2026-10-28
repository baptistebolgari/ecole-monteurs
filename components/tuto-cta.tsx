import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TutoCta() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-20 md:px-8">
      <div className="flex flex-col items-start gap-8 rounded-3xl bg-linear-to-br from-[#86d6b8] to-[#2fae8a] px-8 py-12 text-[#131316] sm:px-12 sm:py-16 md:flex-row md:items-end md:justify-between md:gap-12 md:px-16 md:py-20">
        <div className="flex max-w-2xl flex-col gap-5">
          <h2 className="text-balance text-4xl font-bold tracking-[-0.04em] sm:text-6xl sm:leading-[1.02]">
            Envie d&apos;aller plus loin&nbsp;?
          </h2>
          <p className="max-w-lg text-balance text-lg text-[#131316]/75 sm:text-xl">
            Apprends à monter des vidéos qui retiennent l&apos;attention et
            lance ta carrière de monteur.
          </p>
        </div>
        <Button
          size="lg"
          className="shrink-0 bg-[#131316] text-[#eeeeec] hover:bg-[#131316]"
          asChild
        >
          <a href="https://www.ecole-monteurs.com/video">
            Découvrir la méthode <ArrowRight className="size-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
