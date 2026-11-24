import type { Eleve } from "./types";
import { bettina } from "./bettina";

// Pour ajouter un élève : créer lib/eleves/<prenom>.ts puis l'ajouter ici.
export const ELEVES: Eleve[] = [bettina];

export function getEleve(slug: string): Eleve | undefined {
  return ELEVES.find((e) => e.slug === slug);
}
