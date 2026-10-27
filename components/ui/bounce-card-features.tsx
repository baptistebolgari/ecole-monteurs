"use client";

import React from "react";
import { motion } from "framer-motion";

interface FeatureCard {
  title: string;
  description: string;
  panel: string;
  text: string;
  span: string;
}

const MINT = "bg-linear-to-br from-[#86d6b8] to-[#2fae8a]";
const SOFT = "border border-b-0 border-mint-d/40 bg-mint/25";

const CARDS: FeatureCard[] = [
  {
    title: "La méthode",
    description:
      "Plus de 10 heures de formation structurée, du premier raccourci clavier au « troisième œil » du monteur : celui qui fait qu'une vidéo retient l'attention jusqu'à la fin.",
    panel: MINT,
    text: "text-[#131316]",
    span: "col-span-12 md:col-span-4",
  },
  {
    title: "Coaching",
    description:
      "Douze semaines d'accompagnement avec Baptiste, en individuel puis en avec un retour personnalisé sur chacun de vos montages.",
    panel: SOFT,
    text: "text-[#131316]",
    span: "col-span-12 md:col-span-8",
  },
  {
    title: "La pratique",
    description:
      "Des exercices corrigés chaque semaine qui construisent, montage après montage, le portfolio que vous présenterez à vos futurs clients.",
    panel: SOFT,
    text: "text-[#131316]",
    span: "col-span-12 md:col-span-8",
  },
  {
    title: "Première mission",
    description:
      "Un job board alimenté par les demandes de créateurs et la garantie d'être accompagné jusqu'à votre premier contrat signé.",
    panel: MINT,
    text: "text-[#131316]",
    span: "col-span-12 md:col-span-4",
  },
];

export const BouncyCardsFeatures = () => {
  return (
    <section id="programme" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <div className="mb-10 text-center">
        <span className="mb-3 block text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          À l&apos;intérieur de l&apos;école
        </span>
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-[-0.04em] md:text-4xl">
          Un accompagnement <span className="hl-mint">complet</span>, de vos
          premiers rushs à votre premier client
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {CARDS.map((card) => (
          <BounceCard key={card.title} className={card.span}>
            <CardTitle>{card.title}</CardTitle>
            <div
              className={`absolute top-32 right-4 bottom-0 left-4 translate-y-8 rounded-t-2xl p-5 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] ${card.panel}`}
            >
              <p className={`text-sm leading-relaxed ${card.text}`}>
                {card.description}
              </p>
            </div>
          </BounceCard>
        ))}
      </div>
    </section>
  );
};

function BounceCard({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ scale: 0.97, rotate: "-1deg" }}
      className={`group relative min-h-[320px] cursor-pointer overflow-hidden rounded-3xl border border-border p-8 ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mx-auto text-center text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  );
}
