"use client";
/* eslint-disable @next/next/no-img-element */

import { motion } from "framer-motion";

const LOGOS = [
  { src: "/partners/logo-5.jpg", name: "Marketing Mania", subs: "480 k abonnés" },
  { src: "/partners/logo-2.jpg", name: "Ahrefs", subs: "662 k abonnés" },
  { src: "/partners/logo-3.jpg", name: "Shades", subs: "211 k abonnés" },
  { src: "/partners/mouratoglou.webp", name: "Patrick Mouratoglou", subs: "715 k abonnés" },
  { src: "/partners/swan-neo.webp", name: "Swan et Néo", subs: "7,16 M abonnés" },
];

export default function Partners() {
  return (
    <section className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-4 py-14 text-center md:px-8">
      <motion.h2
        initial={{ y: 16, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", bounce: 0 }}
        className="text-sm font-semibold tracking-tight"
      >
        Nos membres ont collaboré avec
      </motion.h2>
      <div className="grid w-full grid-cols-3 place-items-start gap-x-4 gap-y-8 sm:grid-cols-5">
        {LOGOS.map((logo, index) => (
          <motion.div
            key={logo.name}
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.08, type: "spring", bounce: 0 }}
            className="flex w-full flex-col items-center gap-1.5 text-center"
          >
            <img
              src={logo.src}
              alt={`Logo ${logo.name}`}
              className="size-14 rounded-full border border-border object-cover"
            />
            <b className="mt-1 text-[11px] leading-tight font-semibold">{logo.name}</b>
            <span className="text-[10px] leading-none text-muted-foreground">
              {logo.subs}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
