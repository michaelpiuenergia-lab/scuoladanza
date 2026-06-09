import { MapPin, Users, Drama } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { MajolicaPattern, MajolicaRibbon, Trinacria, Pigna } from "@/components/ui/Ornament";
import { SICILIA } from "@/data/content";

const CARD = [
  { icon: MapPin, ring: "border-terracotta/40 bg-terracotta/10 text-terracotta-deep" },
  { icon: Users, ring: "border-majolica/40 bg-majolica/10 text-majolica-deep" },
  { icon: Drama, ring: "border-sun/50 bg-sun/15 text-gold-deep" },
];

export function Sicilia() {
  return (
    <section id="sicilia" className="relative overflow-hidden bg-cream-2">
      {/* Nastro di maioliche in apertura */}
      <MajolicaRibbon />

      {/* Calore mediterraneo */}
      <MajolicaPattern className="text-majolica" opacity={0.06} />
      {/* Trinacria in filigrana — identità siciliana */}
      <Trinacria className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 text-majolica opacity-[0.05]" />
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-terracotta/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sun/15 blur-[120px]" />

      <div className="container-x relative z-10 py-16 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow is-centered">{SICILIA.eyebrow}</span>
          <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.25rem)] leading-tight u-ink text-balance">
            {SICILIA.title}
          </h2>
          <p className="mt-6 leading-relaxed u-body">{SICILIA.text}</p>
        </Reveal>

        <div className="my-12 flex items-center justify-center gap-5">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-terracotta/50" />
          <Pigna className="h-12 w-8 text-terracotta" />
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-majolica/50" />
        </div>

        <RevealGroup className="grid gap-6 sm:grid-cols-3">
          {SICILIA.points.map((p, i) => {
            const c = CARD[i] ?? CARD[0];
            const Icon = c.icon;
            return (
              <RevealItem key={p.title}>
                <div className="panel ring-gold-hover group h-full p-7 text-center">
                  <span
                    className={`mx-auto grid h-14 w-14 place-items-center rounded-full border ${c.ring}`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl u-ink">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed u-body">{p.text}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>

      <MajolicaRibbon />
    </section>
  );
}
