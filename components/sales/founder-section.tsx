import { Section } from "@/components/sales/prose";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100",
];

export function FounderSection() {
  return (
    <Section title="Votre enseignant">
      <div className="grid items-center gap-8 md:grid-cols-[minmax(0,260px)_1fr] md:gap-10">
        <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl shadow-black/20 md:mx-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/eleve-montage.jpg"
            alt="Baptiste, fondateur de l’École des Monteurs"
            className="h-auto w-full object-cover"
          />
          <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-xl border border-border bg-card p-3">
            <div className="flex shrink-0 -space-x-3">
              {avatars.map((src, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt=""
                  className="size-8 rounded-full border-2 border-card object-cover"
                  style={{ zIndex: index + 1 }}
                />
              ))}
              <div className="z-40 flex size-8 items-center justify-center rounded-full border-2 border-card bg-primary text-xs text-primary-foreground">
                80+
              </div>
            </div>
            <p className="text-sm font-medium text-foreground">
              + 80 monteurs formés
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-foreground">
            Baptiste, le fondateur de l’école
          </h3>
          <p>
            Baptiste est le monteur de Marketing Mania depuis plus de 4 ans,
            l’une des plus grosses chaînes business en France (près de 500 000
            abonnés). Il a monté plusieurs centaines de vidéos qui cumulent
            environ 50 millions de vues. Il exerce toujours le métier au
            quotidien et forme depuis 3 ans les élèves de l’École des Monteurs.
          </p>
          <p>
            C’est lui qui a mis en place la méthode enseignée aux élèves pour
            maîtriser le montage vidéo YouTube rapidement et être opérationnel
            en 3 mois.
          </p>
        </div>
      </div>
    </Section>
  );
}
