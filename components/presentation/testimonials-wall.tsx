import { Star } from "lucide-react";
import { TEMOIGNAGES, type Temoignage } from "@/lib/presentation-temoignages";

/** Répartit les cartes en n colonnes. */
function colonnes(items: Temoignage[], n: number) {
  return Array.from({ length: n }, (_, c) =>
    items.filter((_, i) => i % n === c),
  );
}

function Etoiles({ note }: { note: number }) {
  return (
    <div
      className="mt-1 flex shrink-0 gap-0.5"
      role="img"
      aria-label={`${String(note).replace(".", ",")} sur 5`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="relative size-3.5">
          <Star className="absolute inset-0 size-3.5 text-muted-foreground/30" />
          <span
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${Math.min(Math.max(note - i, 0), 1) * 100}%` }}
          >
            <Star className="size-3.5 max-w-none fill-[#f5b301] text-[#f5b301]" />
          </span>
        </span>
      ))}
    </div>
  );
}

function Carte({ t }: { t: Temoignage }) {
  return (
    <figure className="rounded-3xl border border-border bg-white p-6 shadow-[0_14px_34px_-24px_rgba(0,0,0,0.35)] dark:bg-card">
      <figcaption className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-base font-semibold tracking-tight text-foreground">
            {t.nom}
          </p>
          {t.promo && (
            <p className="text-[13px] leading-snug text-muted-foreground">
              Promotion {t.promo}
            </p>
          )}
        </div>
        {t.note && <Etoiles note={t.note} />}
      </figcaption>
      <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/85">
        {t.texte}
      </blockquote>
    </figure>
  );
}

/**
 * Colonne à défilement vertical infini : la liste est répétée 4 fois et décalée
 * de 50 % (2 listes), pour qu’une colonne courte ne laisse jamais de vide.
 */
function Colonne({ items, duree }: { items: Temoignage[]; duree: number }) {
  return (
    <div className="min-w-0">
      <ul
        className="edm-defile group-hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duree * 2}s` }}
      >
        {[0, 1, 2, 3].map((copie) =>
          items.map((t) => (
            <li
              key={`${copie}-${t.texte}`}
              aria-hidden={copie > 0 ? true : undefined}
              className={`pb-4 ${copie > 0 ? "edm-copie" : ""}`}
            >
              <Carte t={t} />
            </li>
          )),
        )}
      </ul>
    </div>
  );
}

const MUR =
  "edm-mur group max-h-[640px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_9%,black_91%,transparent)]";

export function TestimonialsWall() {
  const trois = colonnes(TEMOIGNAGES, 3);
  const deux = colonnes(TEMOIGNAGES, 2);

  return (
    <>
      <style>{`
        .edm-defile{animation:edm-defile linear infinite;will-change:transform}
        @keyframes edm-defile{from{transform:translateY(0)}to{transform:translateY(-50%)}}
        @media (prefers-reduced-motion:reduce){
          .edm-defile{animation:none}
          .edm-copie{display:none}
          .edm-mur{max-height:none;mask-image:none;-webkit-mask-image:none}
        }
      `}</style>

      {/* Téléphone : une colonne avec tous les avis */}
      <div className={`${MUR} md:hidden`}>
        <Colonne items={TEMOIGNAGES} duree={80} />
      </div>
      {/* Tablette : deux colonnes */}
      <div className={`${MUR} hidden grid-cols-2 items-start gap-4 md:grid lg:hidden`}>
        <Colonne items={deux[0]} duree={44} />
        <Colonne items={deux[1]} duree={52} />
      </div>
      {/* Ordinateur : trois colonnes, vitesses différentes */}
      <div className={`${MUR} hidden grid-cols-3 items-start gap-4 lg:grid`}>
        <Colonne items={trois[0]} duree={34} />
        <Colonne items={trois[1]} duree={42} />
        <Colonne items={trois[2]} duree={30} />
      </div>
    </>
  );
}
