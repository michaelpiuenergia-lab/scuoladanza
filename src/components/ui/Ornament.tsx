import { cn } from "@/lib/utils";

// Divisore ornamentale dorato: filetto — rombo — filetto
export function GoldDivider({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center gap-4", className)}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
      <Diamond />
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
    </div>
  );
}

export function Diamond({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      className={cn("text-gold", className)}
      aria-hidden="true"
    >
      <path
        d="M7 0L9.2 4.8 14 7l-4.8 2.2L7 14 4.8 9.2 0 7l4.8-2.2z"
        fill="currentColor"
        opacity="0.9"
      />
    </svg>
  );
}

// Trinacria — il simbolo della Sicilia: la testa (Gorgone/Medusa) con tre
// gambe piegate a girandola e le spighe di grano. Versione elegante a linea.
export function Trinacria({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={cn("text-gold", className)}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
    >
      <g strokeLinecap="round" strokeLinejoin="round">
        {/* tre spighe di grano, negli spazi fra le gambe */}
        {[60, 180, 300].map((a) => (
          <g key={`w-${a}`} transform={`rotate(${a} 60 60)`} strokeWidth="1.8" opacity="0.7">
            <path d="M60 56 L60 26" />
            <path d="M60 32 l-5 -4 M60 32 l5 -4 M60 40 l-5 -4 M60 40 l5 -4 M60 48 l-5 -4 M60 48 l5 -4" />
          </g>
        ))}
        {/* tre gambe piegate a girandola */}
        {[0, 120, 240].map((a) => (
          <g key={`l-${a}`} transform={`rotate(${a} 60 60)`} strokeWidth="3.2">
            <path d="M60 55 L60 30" />
            <path d="M60 30 L80 26" />
            <path d="M80 26 L83 34" />
          </g>
        ))}
        {/* testa centrale (roundel) */}
        <circle cx="60" cy="60" r="12" strokeWidth="3.2" />
        <circle cx="60" cy="60" r="6" strokeWidth="2" />
        <circle cx="60" cy="60" r="1.4" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

// Pigna siciliana in ceramica (Caltagirone) — portafortuna di prosperità e
// accoglienza. Versione decorativa a linea.
export function Pigna({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 116"
      className={cn("text-terracotta", className)}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
    >
      <g strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        {/* germoglio in cima */}
        <path d="M40 28 C40 16 34 9 29 6" />
        <path d="M40 28 C40 16 46 9 51 6" />
        <path d="M40 28 L40 10" />
        {/* corpo a goccia */}
        <path d="M40 28 C18 38 15 74 40 108 C65 74 62 38 40 28 Z" />
        {/* scaglie a chevron */}
        <g strokeWidth="1.7" opacity="0.85">
          <path d="M30 46 L40 52 L50 46" />
          <path d="M26 60 L40 68 L54 60" />
          <path d="M26 76 L40 84 L54 76" />
          <path d="M31 91 L40 97 L49 91" />
        </g>
      </g>
    </svg>
  );
}

// Ramo di limoni di Sicilia — il profumo del Mediterraneo. Linea elegante.
export function Limoni({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn("text-sun", className)}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
    >
      <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* ramo */}
        <path d="M14 16 C40 24 64 36 86 64" opacity="0.85" />
        {/* foglie a mandorla */}
        <path d="M28 18 Q40 9 53 19 Q41 28 28 18 Z" />
        <path d="M58 38 Q72 30 85 42 Q71 49 58 38 Z" />
        {/* limone 1 */}
        <g transform="rotate(20 39 50)">
          <ellipse cx="39" cy="50" rx="10" ry="13" />
          <path d="M39 37 l0 -4" />
        </g>
        {/* limone 2 */}
        <g transform="rotate(12 73 79)">
          <ellipse cx="73" cy="79" rx="11" ry="14" />
          <path d="M73 65 l0 -4" />
        </g>
      </g>
    </svg>
  );
}

// Nastro di maioliche siciliane COLORATE — divisore decorativo (terracotta,
// azzurro mediterraneo, sole, oro). Dà calore e identità al sito.
export function MajolicaRibbon({
  className,
  height = 44,
}: {
  className?: string;
  height?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative w-full overflow-hidden border-y border-gold/30",
        className,
      )}
      style={{ height }}
    >
      <svg className="h-full w-full" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern
            id="majo-ribbon"
            width="44"
            height="44"
            patternUnits="userSpaceOnUse"
          >
            <rect width="44" height="44" fill="#f3ecdf" />
            <g transform="translate(22,22)">
              <rect
                x="-12"
                y="-12"
                width="24"
                height="24"
                fill="#2e6e8e"
                opacity="0.9"
              />
              <rect
                x="-12"
                y="-12"
                width="24"
                height="24"
                fill="#2e6e8e"
                opacity="0.9"
                transform="rotate(45)"
              />
              <circle r="8" fill="#e0a33e" />
              <circle r="4.5" fill="#c56a3e" />
              <circle r="1.6" fill="#fbf7f0" />
            </g>
            {/* nodi d'angolo color terracotta */}
            <circle cx="0" cy="0" r="3" fill="#c56a3e" />
            <circle cx="44" cy="0" r="3" fill="#c56a3e" />
            <circle cx="0" cy="44" r="3" fill="#c56a3e" />
            <circle cx="44" cy="44" r="3" fill="#c56a3e" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#majo-ribbon)" />
      </svg>
    </div>
  );
}

// Trama ispirata alle maioliche siciliane — decorativa, molto soffusa.
export function MajolicaPattern({
  className,
  opacity = 0.06,
}: {
  className?: string;
  opacity?: number;
}) {
  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full", className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <defs>
        <pattern
          id="majolica"
          width="64"
          height="64"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <g fill="none" stroke="currentColor" strokeWidth="1.1">
            <circle cx="32" cy="32" r="11" />
            <path d="M32 6 L40 24 L32 22 L24 24 Z" />
            <path d="M32 58 L40 40 L32 42 L24 40 Z" />
            <path d="M6 32 L24 24 L22 32 L24 40 Z" />
            <path d="M58 32 L40 24 L42 32 L40 40 Z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#majolica)" />
    </svg>
  );
}
