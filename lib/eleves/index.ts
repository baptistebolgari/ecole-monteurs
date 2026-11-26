import type { Eleve } from "./types";
import { bettina } from "./bettina";
import { thomas } from "./thomas";
import { florian } from "./florian";
import { jonathan } from "./jonathan";

// Pour ajouter un élève : créer lib/eleves/<prenom>.ts puis l'ajouter ici.
export const ELEVES: Eleve[] = [bettina, thomas, florian, jonathan];

export function getEleve(slug: string): Eleve | undefined {
  return ELEVES.find((e) => e.slug === slug);
}
