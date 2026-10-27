"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-4 pt-16 pb-14 md:px-8 md:pt-24">
      <motion.div
        initial={{ y: 22, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", bounce: 0 }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-5 text-center"
      >
        <h1 className="text-balance text-4xl font-medium tracking-[-0.04em] md:text-6xl md:leading-[1.1]">
          Lancez votre carrière en{" "}
          <strong className="font-bold">
            apprenant une compétence (très) recherchée
          </strong>
        </h1>
        <p className="max-w-2xl text-balance text-lg text-muted-foreground">
          Et occupez une place centrale dans un{" "}
          <span className="ul-mint font-medium text-foreground">
            marché en pleine expansion
          </span>
        </p>
        <Button size="lg" className="mt-2" asChild>
          <a href="https://www.ecole-monteurs.com/methode">
            Découvrir la méthode <ArrowRight className="size-4" />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
