"use client";

import { useEffect, useState } from "react";

const words = ["de monteurs vidéo", "de vous"];

export default function AnimatedTextRoller() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 flex-wrap w-full text-center">
      <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
        La creator economy a besoin
      </p>
      <div className="overflow-hidden h-14 text-left">
        <div
          className="transition-transform duration-700 ease-in-out"
          style={{ transform: `translateY(-${index * 3.5}rem)` }}
        >
          {words.map((word, i) => (
            <p
              key={i}
              className="h-14 flex items-center justify-start text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary tracking-tight"
            >
              {word}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
