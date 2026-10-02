import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/sales/reveal";

export function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow?: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-3xl px-4 py-14 sm:py-20"
    >
      <Reveal>
        {eyebrow && (
          <span className="mb-3 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl font-bold tracking-tighter text-foreground text-balance md:text-4xl">
          {title}
        </h2>
      </Reveal>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return <strong className="font-semibold text-foreground">{children}</strong>;
}

export function ArrowList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <ArrowRight className="mt-1 size-4 shrink-0 text-light" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-light/30 bg-light/10 p-5 text-foreground">
      {children}
    </div>
  );
}
