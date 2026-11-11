import type { Metadata } from "next";
import type { ReactNode } from "react";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { CGV, type CgvBlock } from "@/lib/cgv";

export const metadata: Metadata = {
  title: "Conditions générales de vente | L'École des Monteurs",
  description: "Conditions générales de vente de L'École des Monteurs.",
};

/** Convertit **gras** en <strong>. */
function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") ? (
      <strong key={i} className="font-semibold text-foreground">
        {part.slice(2, -2)}
      </strong>
    ) : (
      part
    ),
  );
}

const BODY = "text-[15.5px] leading-relaxed text-foreground/80";

function Block({ b }: { b: CgvBlock }) {
  switch (b.t) {
    case "p":
      return <p className={`mt-3 ${BODY}`}>{inline(b.x)}</p>;
    case "h":
      return (
        <h3 className="mt-8 text-lg font-semibold tracking-tight text-foreground">
          {b.x}
        </h3>
      );
    case "ul":
      return (
        <ul className="mt-3 space-y-2">
          {b.x.map((li, i) => (
            <li key={i} className={`relative pl-5 ${BODY}`}>
              <span className="absolute top-[0.65em] left-1 size-1.5 rounded-full bg-mint-d" />
              {inline(li)}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="mt-3 space-y-2">
          {b.x.map((li, i) => (
            <li key={i} className={`flex gap-3 ${BODY}`}>
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-mint-d text-xs font-semibold text-white">
                {i + 1}
              </span>
              <span>{inline(li)}</span>
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="mt-4 overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <thead>
              <tr className="bg-mint/25">
                {b.head.map((h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-sm font-semibold text-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, i) => (
                <tr key={i} className="border-t border-border align-top">
                  {r.map((c, j) => (
                    <td key={j} className={`px-4 py-3 ${BODY}`}>
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function CgvPage() {
  return (
    <main className="flex min-h-dvh flex-col">
      <NavBar />

      <section className="mx-auto w-full max-w-3xl px-4 pt-14 pb-6 text-center md:pt-20">
        <h1 className="text-balance text-4xl font-bold tracking-[-0.04em] md:text-5xl md:leading-[1.1]">
          Conditions générales de <span className="hl-mint">vente</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-balance text-muted-foreground">
          L’École des Monteurs — Baptiste Bolgari, entrepreneur individuel.
        </p>
      </section>

      <section className="mx-auto w-full max-w-3xl px-4 pb-20">
        <nav aria-label="Sommaire" className="mb-12">
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {CGV.map((a) => (
              <li key={a.n}>
                <a
                  href={`#article-${a.n}`}
                  className="flex h-full items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3.5 text-[15px] font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:border-mint-d"
                >
                  <span className="flex size-[26px] shrink-0 items-center justify-center rounded-full bg-mint-d text-xs font-semibold text-white">
                    {a.n}
                  </span>
                  {a.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-8">
          {CGV.map((a) => (
            <article
              key={a.n}
              id={`article-${a.n}`}
              className="scroll-mt-6 rounded-3xl border border-border bg-card p-6 md:p-9"
            >
              <h2 className="flex items-start gap-3 text-2xl font-bold leading-tight tracking-[-0.035em] md:text-[28px]">
                <span className="mt-[0.2em] h-[1em] w-1.5 shrink-0 rounded-sm bg-mint-d" />
                <span>
                  Article {a.n} — {a.title}
                </span>
              </h2>
              {a.blocks.map((b, i) => (
                <Block key={i} b={b} />
              ))}
            </article>
          ))}
        </div>
      </section>

      <Footer showFacebookDisclaimer={false} />
    </main>
  );
}
