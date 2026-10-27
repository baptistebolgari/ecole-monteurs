"use client";

import { motion } from "framer-motion";
import CountUp from "@/components/ui/count-up";

const reveal = {
  initial: { y: 22, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, type: "spring" as const, bounce: 0 },
};

export default function FeaturedSectionStats() {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-16 sm:py-24">
      <motion.h2
        {...reveal}
        className="mx-auto max-w-3xl text-balance text-center text-3xl font-bold tracking-[-0.04em] sm:text-4xl"
      >
        91 % des entreprises cherchent activement des{" "}
        <span className="hl-mint">monteurs pour leurs vidéos</span>&nbsp;!
        <span className="ml-[0.06em] font-semibold">*</span>
      </motion.h2>

      <motion.p
        {...reveal}
        className="mx-auto mt-6 max-w-2xl text-balance text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        <strong className="font-medium text-foreground">
          Aujourd’hui, YouTube, Instagram ou TikTok sont devenus le pilier de
          business entiers.
        </strong>{" "}
        C’est ce qui a déclenché la fameuse guerre de l’attention, dans
        laquelle il est nécessaire de publier régulièrement des vidéos
        captivantes pour survivre.
      </motion.p>
      <motion.p
        {...reveal}
        className="mx-auto mt-3.5 max-w-2xl text-balance text-center text-base leading-relaxed text-muted-foreground sm:text-lg"
      >
        Les écoles audiovisuelles classiques continuent de former des monteurs
        pour la télé et les boîtes de production, ce qui crée une pénurie de
        monteurs vidéo spécialisés réseaux sociaux dans un marché en plein
        essor.
      </motion.p>
      <p className="mt-2.5 text-center text-[11px] text-muted-foreground/80">
        * Source : enquête Wyzowl « State of Video Marketing 2026 »
      </p>

      <motion.div
        {...reveal}
        className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3"
      >
        <div>
          <p className="text-4xl font-medium tracking-[-0.04em]">
            <CountUp to={397000} />
          </p>
          <p className="mt-1.5 text-[15px] text-muted-foreground">
            créateurs français monétisent aujourd’hui leur contenu
          </p>
        </div>
        <div>
          <p className="text-4xl font-medium tracking-[-0.04em]">
            <CountUp to={7} sep="" /> Milliards d’€
          </p>
          <p className="mt-1.5 text-[15px] text-muted-foreground">
            de revenus générés par la creator economy en France en 2025
          </p>
        </div>
        <div>
          <p className="text-4xl font-medium tracking-[-0.04em]">
            +<CountUp to={10} sep="" /> à <CountUp to={20} sep="" />&nbsp;%
          </p>
          <p className="mt-1.5 text-[15px] text-muted-foreground">
            de croissance annuelle du nombre de créateurs dans le monde, sur
            les 5 prochaines années
          </p>
        </div>
      </motion.div>
    </section>
  );
}
