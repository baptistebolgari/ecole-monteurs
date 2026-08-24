"use client";

import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import AnimatedTextRoller from "@/components/ui/animated-text-roller";

export default function FeaturedSectionStats() {
  const data = [
    { name: "2024", value: 304 },
    { name: "2025", value: 348 },
    { name: "2026", value: 397 },
    { name: "2027", value: 452 },
    { name: "2028", value: 516 },
    { name: "2029", value: 588 },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto text-left py-16 sm:py-24 px-4">
      <div className="mb-8">
        <AnimatedTextRoller />
      </div>
      <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto text-center mb-16">
        <span className="text-foreground font-medium">
          Derrière la plupart des vidéos publiées sur les réseaux : il y a un
          monteur payé pour la faire.
        </span>{" "}
        Pendant que les écoles classiques continuent de former des monteurs
        pour la télé et les boîtes de production, l&apos;écart entre la
        demande et l&apos;offre se creuse chaque année dans un marché en
        plein essor.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
        <div>
          <p className="text-3xl font-medium text-foreground">397 000</p>
          <p className="text-muted-foreground text-md">
            créateurs français monétisent aujourd&apos;hui leur contenu
          </p>
        </div>
        <div>
          <p className="text-3xl font-medium text-foreground">7 Milliard€</p>
          <p className="text-muted-foreground text-md">
            de revenus générés par la creator economy en France en 2025
          </p>
        </div>
        <div>
          <p className="text-3xl font-medium text-foreground">+10 à 20 %</p>
          <p className="text-muted-foreground text-md">
            de croissance annuelle du nombre de créateurs dans le monde, sur
            les 5 prochaines années
          </p>
        </div>
      </div>

      <div className="w-full h-48 mt-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--light)"
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor="var(--light)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                color: "var(--foreground)",
              }}
              formatter={(value: number) => [
                `${value} 000 créateurs`,
                "",
              ]}
              labelFormatter={(_label, payload) =>
                payload?.[0]?.payload?.name ?? ""
              }
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="var(--light)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorPrimary)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
