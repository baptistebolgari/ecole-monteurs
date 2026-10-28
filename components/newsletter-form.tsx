"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Une erreur est survenue.");
      }
      setStatus("done");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue.");
      setStatus("error");
    }
  }

  return (
    <section className={cn("mx-auto w-full max-w-2xl px-4 pb-8", className)}>
      <div className="relative isolate flex flex-col items-center gap-4 overflow-hidden rounded-3xl bg-foreground px-6 py-8 text-center text-background sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 -z-10 h-48 w-2/3 -translate-x-1/2 rounded-full bg-mint-d/40 blur-[80px]"
        />
        <h2 className="text-balance text-xl font-bold tracking-[-0.04em] sm:text-2xl">
          Rejoins <span className="text-mint">+1&nbsp;500 futurs monteurs</span>{" "}
          vidéo&nbsp;!
        </h2>
        <p className="max-w-lg text-balance text-sm text-background/70 sm:text-base">
          Chaque semaine, je partage mon expérience de monteur vidéo
          professionnel, mes meilleurs conseils, ou encore des
          inspirations&nbsp;!
        </p>

        {status === "done" ? (
          <p className="inline-flex items-center gap-2 rounded-xl border border-mint/40 bg-mint/15 px-4 py-3 font-medium">
            <Check className="size-4 text-mint" />
            C&apos;est noté, tu es inscrit !
          </p>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Adresse email
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              autoComplete="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 flex-1 rounded-xl border border-background/15 bg-background/10 px-4 text-base text-background outline-none transition-colors placeholder:text-background/50 focus:border-mint focus:ring-[3px] focus:ring-mint/25"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="bg-mint text-[#131316] hover:bg-mint"
            >
              {status === "loading" ? "Inscription…" : "Je m'inscris"}
              {status !== "loading" && <ArrowRight className="size-4" />}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p className="text-sm text-[#f0a48e]">{error}</p>
        )}
        <p className="max-w-md text-xs text-background/50">
          Désinscription en 1 clic.
        </p>
      </div>
    </section>
  );
}
