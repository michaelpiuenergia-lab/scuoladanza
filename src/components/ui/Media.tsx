import { cn } from "@/lib/utils";
import type { Accent } from "@/data/courses";

// Immagine resa come background CSS: se la foto remota non carica,
// resta un elegante gradiente di fallback (nessuna icona "immagine rotta").

type Overlay = "none" | "soft" | "bottom" | "strong" | "side";

const OVERLAYS: Record<Overlay, string> = {
  none: "linear-gradient(0deg, rgba(11,11,15,0.1), rgba(11,11,15,0.1))",
  soft: "linear-gradient(180deg, rgba(11,11,15,0.15), rgba(11,11,15,0.45))",
  bottom:
    "linear-gradient(180deg, rgba(11,11,15,0.05) 0%, rgba(11,11,15,0.35) 45%, rgba(11,11,15,0.92) 100%)",
  strong:
    "linear-gradient(180deg, rgba(11,11,15,0.55) 0%, rgba(11,11,15,0.75) 100%)",
  side: "linear-gradient(90deg, rgba(11,11,15,0.85) 0%, rgba(11,11,15,0.35) 55%, rgba(11,11,15,0.1) 100%)",
};

const ACCENT_BASE: Record<Accent, string> = {
  gold: "linear-gradient(135deg, #1c160a 0%, #0b0b0f 70%)",
  terracotta: "linear-gradient(135deg, #251309 0%, #0b0b0f 70%)",
  majolica: "linear-gradient(135deg, #0c1d26 0%, #0b0b0f 70%)",
  sun: "linear-gradient(135deg, #271c08 0%, #0b0b0f 70%)",
};

export function Media({
  src,
  alt,
  className,
  overlay = "soft",
  accent = "gold",
}: {
  src: string;
  alt: string;
  className?: string;
  overlay?: Overlay;
  accent?: Accent;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("bg-cover bg-center bg-no-repeat", className)}
      style={{
        backgroundImage: `${OVERLAYS[overlay]}, url('${src}'), ${ACCENT_BASE[accent]}`,
      }}
    />
  );
}
