"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsletterForm() {
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
    <section className="mx-auto w-full max-w-3xl px-4 pb-8">
      <div className="flex flex-col items-center gap-5 rounded-3xl border border-border border-t-4 border-t-mint-d bg-card px-6 py-10 text-center sm:px-10">
        <h2 className="text-balance text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
          Recevez chaque <span className="hl-mint">nouvelle astuce</span>
        </h2>
        <p className="text-balance text-muted-foreground">
          Inscrivez-vous à la newsletter pour ne manquer aucun tuto de montage.
        </p>

        {status === "done" ? (
          <p className="inline-flex items-center gap-2 rounded-xl border border-mint-d/40 bg-mint/25 px-4 py-3 font-medium">
            <Check className="size-4 text-mint-d" />
            C&apos;est noté, vous êtes inscrit !
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
              className="h-11 flex-1 rounded-xl border border-border bg-background px-4 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-mint-d focus:ring-[3px] focus:ring-mint-d/25"
            />
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Inscription…" : "Je m'inscris"}
              {status !== "loading" && <ArrowRight className="size-4" />}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p className="text-sm text-destructive">{error}</p>
        )}
        <p className="max-w-md text-xs text-muted-foreground">
          En vous inscrivant, vous acceptez de recevoir la newsletter de
          L&apos;École des Monteurs. Désinscription en un clic.
        </p>
      </div>
    </section>
  );
}
