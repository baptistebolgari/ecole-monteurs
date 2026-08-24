"use client";

import React from "react";
import { motion } from "framer-motion";

interface FeatureCard {
  title: string;
  description: string;
  gradient: string;
  span: string;
}

const CARDS: FeatureCard[] = [
  {
    title: "La méthode",
    description:
      "Plus de 10 heures de formation structurée, du premier raccourci clavier au « troisième œil » du monteur : celui qui fait qu'une vidéo retient l'attention jusqu'à la fin.",
    gradient: "from-sky-500 to-blue-700",
    span: "col-span-12 md:col-span-4",
  },
  {
    title: "Coaching",
    description:
      "Douze semaines d'accompagnement avec Baptiste, en individuel puis en avec un retour personnalisé sur chacun de vos montages.",
    gradient: "from-neutral-700 to-neutral-900",
    span: "col-span-12 md:col-span-8",
  },
  {
    title: "La pratique",
    description:
      "Des exercices corrigés chaque semaine qui construisent, montage après montage, le portfolio que vous présenterez à vos futurs clients.",
    gradient: "from-blue-500 to-sky-700",
    span: "col-span-12 md:col-span-8",
  },
  {
    title: "Première mission",
    description:
      "Un job board alimenté par les demandes de créateurs et la garantie d'être accompagné jusqu'à votre premier contrat signé.",
    gradient: "from-neutral-800 to-black",
    span: "col-span-12 md:col-span-4",
  },
];

export const BouncyCardsFeatures = () => {
  return (
    <section id="programme" className="mx-auto max-w-7xl px-4 py-16 sm:py-24">
      <div className="mb-8 md:px-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 block">
          À l&apos;intérieur de l&apos;école
        </span>
        <h2 className="max-w-lg text-3xl font-bold text-foreground md:text-4xl">
          Un accompagnement complet, de vos premiers rushs à votre premier
          client
        </h2>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {CARDS.map((card) => (
          <BounceCard key={card.title} className={card.span}>
            <CardTitle>{card.title}</CardTitle>
            <div
              className={`absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-linear-to-br ${card.gradient} p-5 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]`}
            >
              <p className="text-sm leading-relaxed text-white/90">
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
      className={`group relative min-h-[320px] cursor-pointer overflow-hidden rounded-2xl border border-border bg-card p-8 ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mx-auto text-center text-2xl font-semibold text-foreground">
      {children}
    </h3>
  );
}
