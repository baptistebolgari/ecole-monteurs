"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  text: string;
  name: string;
  cohort: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    text: "Baptiste explique le pourquoi de chaque technique. On comprend vraiment, on ne fait pas que copier.",
    name: "Theo",
    cohort: "Promo Novembre 2024",
    rating: 5,
  },
  {
    text: "J'avais déjà des bases mais je stagnais. Baptiste m'a donné les outils concrets pour enfin facturer sérieusement.",
    name: "Aurelie",
    cohort: "Promo Juin 2024",
    rating: 5,
  },
  {
    text: "Les coachings individuels avec Baptiste font vraiment la différence. Un retour précis sur mon travail, très motivant.",
    name: "Kevin",
    cohort: "Promo Février 2025",
    rating: 4.5,
  },
  {
    text: "Complète et bien organisée. Les modules sur l'analyse de contenu ont complètement changé la façon dont je regarde des vidéos.",
    name: "Lucie",
    cohort: "Promo Octobre 2024",
    rating: 5,
  },
  {
    text: "Baptiste sait vraiment comment transmettre. Même les concepts complexes deviennent accessibles. Formation au top.",
    name: "Julie",
    cohort: "Promo Août 2024",
    rating: 5,
  },
  {
    text: "En partant de zéro, portfolio construit en 6 semaines. La méthode de Baptiste est progressive et adaptée aux débutants.",
    name: "Romain",
    cohort: "Promo Juillet 2024",
    rating: 5,
  },
  {
    text: "La communauté fait vraiment partie de la formation. Les échanges avec les autres élèves m'ont autant apporté que le contenu.",
    name: "Pauline",
    cohort: "Promo Décembre 2024",
    rating: 4.5,
  },
  {
    text: "Je cherchais une méthode sérieuse pour me professionnaliser, portée par quelqu'un qui exerce vraiment le métier. Baptiste correspondait exactement à ce que je cherchais. Je recommande.",
    name: "Maxime",
    cohort: "Promo Avril 2025",
    rating: 5,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 8);

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1);
        return (
          <span key={i} className="relative inline-block size-4">
            <Star className="absolute inset-0 size-4 text-muted-foreground/30" />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star className="size-4 fill-light text-light" />
            </span>
          </span>
        );
      })}
    </div>
  );
}

function TestimonialsColumn(props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) {
  return (
    <div className={props.className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, name, cohort, rating }, i) => (
                <motion.li
                  key={`${index}-${i}`}
                  aria-hidden={index === 1 ? "true" : "false"}
                  tabIndex={index === 1 ? -1 : 0}
                  whileHover={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  whileFocus={{
                    scale: 1.03,
                    y: -8,
                    boxShadow:
                      "0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(0, 0, 0, 0.05)",
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                  className="relative p-10 rounded-3xl border border-border shadow-lg shadow-black/5 max-w-xs w-full bg-card transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <Quote className="absolute right-6 top-6 size-5 text-muted-foreground/20" />
                  <blockquote className="m-0 p-0">
                    <StarRating rating={rating} />
                    <p className="text-muted-foreground leading-relaxed font-normal mt-4 mb-0 transition-colors duration-300">
                      {text}
                    </p>
                    <footer className="mt-6 border-t border-border pt-4">
                      <cite className="block font-semibold not-italic tracking-tight leading-5 text-foreground transition-colors duration-300">
                        {name}
                      </cite>
                      <span className="text-sm italic leading-5 tracking-tight text-muted-foreground mt-0.5 transition-colors duration-300">
                        {cohort}
                      </span>
                    </footer>
                  </blockquote>
                </motion.li>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.ul>
    </div>
  );
}

export default function TestimonialsV2({
  id = "testimonials",
}: {
  id?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="bg-transparent py-16 sm:py-24 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-xl mx-auto mb-12 sm:mb-16">
          <div className="flex justify-center">
            <div className="border border-border py-1 px-4 rounded-full text-xs font-semibold tracking-wide uppercase text-muted-foreground bg-card/50 transition-colors">
              Témoignages
            </div>
          </div>

          <h2
            id={`${id}-heading`}
            className="text-3xl md:text-4xl font-bold tracking-tighter mt-6 text-center text-foreground transition-colors"
          >
            Ce que disent nos élèves
          </h2>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Témoignages défilants"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </motion.div>
    </section>
  );
}
