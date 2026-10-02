"use client";

import { motion } from "framer-motion";

export default function Partners() {
  const logos = [
    { src: "/partners/logo-1.png", name: "Les Stratèges" },
    { src: "/partners/logo-2.jpg", name: "Ahrefs" },
    { src: "/partners/logo-3.jpg", name: "Shades" },
    { src: "/partners/logo-4.png", name: "Waalaxy" },
    { src: "/partners/logo-5.jpg", name: "MarketingMania" },
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
            className="group relative shrink-0 outline-none"
            tabIndex={0}
          >
            <img
              src={logo.src}
              alt={`Logo ${logo.name}`}
              className="h-10 w-10 rounded-lg object-cover"
            />
            <span
              role="tooltip"
              className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-xs font-medium text-background opacity-0 transition duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"
            >
              {logo.name}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
