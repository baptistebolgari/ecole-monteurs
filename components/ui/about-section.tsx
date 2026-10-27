"use client";
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { ArrowRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-24">
      <div className="flex flex-col items-center gap-10 rounded-3xl border border-border p-6 md:flex-row md:p-10">
        <div className="relative w-full shrink-0 overflow-hidden rounded-2xl md:max-w-sm">
          <img
            className="w-full rounded-2xl object-cover"
            src="/baptiste.webp"
            alt="Élève en train de monter une vidéo"
          />
          <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-border bg-background/95 p-3 pr-4 backdrop-blur">
            <div className="flex shrink-0 -space-x-3.5">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
                alt=""
                className="size-9 rounded-full border-[3px] border-background object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                alt=""
                className="size-9 rounded-full border-[3px] border-background object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
                alt=""
                className="size-9 rounded-full border-[3px] border-background object-cover"
              />
              <div className="flex size-9 items-center justify-center rounded-full border-[3px] border-background bg-mint-d text-[11px] font-semibold text-white">
                80+
              </div>
            </div>
            <p className="text-sm font-medium">+ 80 monteurs formés</p>
          </div>
        </div>

        <div className="max-w-lg text-[15px] leading-relaxed text-muted-foreground">
          <span className="mb-3 block text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Le fondateur
          </span>
          <h2 className="text-3xl font-bold tracking-[-0.04em] text-foreground">
            Baptiste, le fondateur de{" "}
            <span className="hl-mint">l’école</span>
          </h2>
          <p className="mt-6">
            Baptiste est le monteur de Marketing Mania depuis plus de 4 ans,
            l’une des plus grosses chaînes business en France (près de 500 000
            abonnés). Il a monté plusieurs centaines de vidéos qui cumulent
            environ 50 millions de vues. Il exerce toujours le métier au
            quotidien et forme depuis 3 ans les élèves de l’École des
            Monteurs.
          </p>
          <p className="mt-4">
            C’est lui qui a mis en place la méthode enseignée aux élèves pour
            maitriser le montage vidéo YouTube rapidement et être
            opérationnel en 3 mois.
          </p>
          <a
            href="https://www.ecole-monteurs.com/methode"
            className="mt-8 inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-[0_18px_32px_-16px_rgba(0,0,0,0.55)] transition hover:-translate-y-0.5"
          >
            Découvrir la méthode <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
