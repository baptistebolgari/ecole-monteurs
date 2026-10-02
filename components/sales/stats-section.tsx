"use client";

import { AreaChart, Area, ResponsiveContainer, Tooltip } from "recharts";
import { Section, Strong } from "@/components/sales/prose";

const data = [
  { name: "2024", value: 304 },
  { name: "2025", value: 348 },
  { name: "2026", value: 397 },
  { name: "2027", value: 452 },
  { name: "2028", value: 516 },
  { name: "2029", value: 588 },
];

const stats = [
  {
    value: "397 000",
    label: "créateurs français monétisent aujourd’hui leur contenu",
  },
  {
    value: "7 Milliards d’€",
    label: "de revenus générés par la creator economy en France en 2025",
  },
  {
    value: "+10 à 20 %",
    label:
      "de croissance annuelle du nombre de créateurs dans le monde, sur les 5 prochaines années",
  },
];

export function StatsSection() {
  return (
    <Section title="La creator economy a besoin de vous">
      <p>
        <Strong>
          Derrière la plupart des vidéos publiées sur les réseaux : il y a un
          monteur payé pour la faire.
        </Strong>{" "}
        Pendant que les écoles classiques continuent de former des monteurs
        pour la télé et les boîtes de production, l’écart entre la demande et
        l’offre se creuse chaque année dans un marché en plein essor.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.value}>
            <p className="text-2xl font-medium text-foreground sm:text-3xl">
              {stat.value}
            </p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="h-40 w-full sm:h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorStats" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--light)" stopOpacity={0.4} />
                <stop offset="95%" stopColor="var(--light)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "0.5rem",
                color: "var(--foreground)",
              }}
              formatter={(value) => [`${value} 000 créateurs`, ""]}
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
              fill="url(#colorStats)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Section>
  );
}
