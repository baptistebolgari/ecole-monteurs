"use client";

import React from "react";

export default function AboutSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="relative shadow-2xl shadow-black/20 rounded-2xl overflow-hidden shrink-0">
          <img
            className="max-w-md w-full object-cover rounded-2xl"
            src="/eleve-montage.jpg"
            alt="Élève en train de monter une vidéo"
          />
          <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-card border border-border p-4 rounded-xl">
            <div className="flex -space-x-4 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
                alt=""
                className="size-9 rounded-full border-[3px] border-card hover:-translate-y-1 transition z-10"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100"
                alt=""
                className="size-9 rounded-full border-[3px] border-card hover:-translate-y-1 transition z-20"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100"
                alt=""
                className="size-9 rounded-full border-[3px] border-card hover:-translate-y-1 transition z-30"
              />
              <div className="flex items-center justify-center text-xs text-primary-foreground size-9 rounded-full border-[3px] border-card bg-primary hover:-translate-y-1 transition z-40">
                80+
              </div>
            </div>
            <p className="text-sm font-medium text-foreground">
              + 80 monteurs formés
            </p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground max-w-lg">
          <h2 className="text-xl uppercase font-semibold text-foreground">
            Baptiste, le fondateur de l&apos;école
          </h2>
          <div className="w-24 h-[3px] rounded-full bg-primary mt-2"></div>
          <p className="mt-8">
            Baptiste est le monteur de Marketing Mania depuis plus de 4 ans,
            l&apos;une des plus grosses chaînes business en France (près de
            500 000 abonnés). Il a monté plusieurs centaines de vidéos qui
            cumulent environ 50 millions de vues. Il exerce toujours le
            métier au quotidien et forme depuis 3 ans les élèves de
            l&apos;École des Monteurs.
          </p>
          <p className="mt-4">
            C&apos;est lui qui a mis en place la méthode enseignée aux élèves
            pour maitriser le montage vidéo YouTube rapidement et être
            opérationnel en 3 mois.
          </p>
          <a
            href="https://www.ecole-monteurs.com/methode"
            className="inline-flex items-center gap-2 mt-8 hover:-translate-y-0.5 transition bg-primary text-primary-foreground py-3 px-8 rounded-full"
          >
            <span>Découvrir la méthode</span>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
