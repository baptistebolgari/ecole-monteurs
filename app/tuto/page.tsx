import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { TUTOS } from "@/lib/tutos";

export const metadata: Metadata = {
  title: "Tutos montage Premiere Pro | L'École des Monteurs",
  description:
    "Toutes les astuces de montage des shorts de Baptiste, expliquées pas à pas.",
};

export default function TutosPage() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />
      <section className="max-w-6xl w-full mx-auto px-4 pt-16 pb-24 md:px-8">
        <div className="flex flex-col items-center text-center space-y-5 max-w-3xl mx-auto">
          <span className="w-fit text-sm bg-card px-2 py-1 border border-border rounded-full">
            Banque de tutos
          </span>
          <h1 className="text-4xl font-medium tracking-tighter md:text-6xl text-pretty">
            Toutes les astuces de montage
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground text-balance">
            Chaque astuce de mes shorts, expliquée pas à pas sur Premiere Pro.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TUTOS.map((tuto) => (
            <Link
              key={tuto.slug}
              href={`/tuto/${tuto.slug}`}
              className="group flex flex-col gap-3 rounded-xl border bg-card p-6 transition-colors hover:border-foreground/30"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground bg-background px-2 py-1 border border-border rounded-full">
                  {tuto.category}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </div>
              <h2 className="text-lg font-medium tracking-tight leading-snug">
                {tuto.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {tuto.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
