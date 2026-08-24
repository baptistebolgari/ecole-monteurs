"use client";

import { motion } from "framer-motion";

export default function Partners() {
  const logos = [
    { src: "/partners/logo-1.png", alt: "Logo partenaire 1" },
    { src: "/partners/logo-2.jpg", alt: "Logo partenaire 2" },
    { src: "/partners/logo-3.jpg", alt: "Logo partenaire 3" },
    { src: "/partners/logo-4.png", alt: "Logo partenaire 4" },
    { src: "/partners/logo-5.jpg", alt: "Logo partenaire 5" },
  ];

  return (
    <section className="max-w-(--breakpoint-md) w-full mx-auto px-4 py-24 gap-10 md:px-8 flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ y: 20, opacity: 0, filter: "blur(3px)" }}
        whileInView={{
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, type: "spring", bounce: 0 }}
        className="flex flex-col gap-3"
      >
        <h2 className="text-xl font-semibold sm:text-2xl bg-linear-to-b from-foreground to-muted-foreground text-transparent bg-clip-text">
          Nos membres ont collaboré avec
        </h2>
      </motion.div>
      <div className="w-full grid grid-cols-3 sm:grid-cols-5 gap-8 place-items-center">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.src}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: index * 0.1,
              type: "spring",
              bounce: 0,
            }}
            className="shrink-0"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-10 rounded-lg object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
