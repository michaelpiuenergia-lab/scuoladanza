// Galleria — foto REALI di saggi e spettacoli della scuola.
import type { Accent } from "@/data/courses";
import { GALLERY_PHOTOS } from "@/data/photos";

export type Shot = { src: string; alt: string; accent: Accent };

const ACCENTS: Accent[] = ["gold", "terracotta", "majolica", "sun"];

export const GALLERY: Shot[] = GALLERY_PHOTOS.map((src, i) => ({
  src,
  alt: `Saggio della scuola di danza Khaybullova — foto ${i + 1}`,
  accent: ACCENTS[i % ACCENTS.length],
}));
