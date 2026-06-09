import { Crown, Sun, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { Diamond, MajolicaPattern } from "@/components/ui/Ornament";
import { HERITAGE } from "@/data/content";
import { PHOTOS, photo } from "@/data/photos";

export function Heritage() {
  return (
    <section id="heritage" className="relative overflow-hidden bg-cream-2 py-24 sm:py-28">
      <MajolicaPattern className="text-majolica" opacity={0.05} />
      <div className="pointer-events-none absolute left-1/4 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-majolica/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-72 w-72 translate-x-1/2 rounded-full bg-terracotta/12 blur-[120px]" />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow is-centered">{HERITAGE.eyebrow}</span>
          <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.25rem)] leading-tight u-ink text-balance">
            {HERITAGE.title}
          </h2>
          <p className="mt-6 leading-relaxed u-body">{HERITAGE.lead}</p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-[1fr_auto_1fr]">
          {/* Russia */}
          <Reveal>
            <article className="panel ring-gold-hover h-full overflow-hidden">
              <Media
                src={PHOTOS.founder}
                alt="La maestra — formazione nella tradizione del balletto russo"
                accent="majolica"
                overlay="soft"
                className="aspect-[16/10] w-full"
              />
              <div className="p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-majolica/40 bg-majolica/10 text-majolica-deep">
                  <Crown className="h-6 w-6" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-majolica-deep">
                  {HERITAGE.russia.tag}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl u-ink">
                {HERITAGE.russia.title}
              </h3>
              <p className="mt-3 leading-relaxed u-body">{HERITAGE.russia.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {HERITAGE.russia.points.map((p) => (
                  <li
                    key={p}
                    className="inline-flex items-center gap-1.5 rounded-full border border-majolica/30 bg-majolica/5 px-3 py-1 text-xs text-majolica-deep"
                  >
                    <Crown className="h-3 w-3" /> {p}
                  </li>
                ))}
              </ul>
              </div>
            </article>
          </Reveal>

          {/* Ponte centrale */}
          <div className="flex items-center justify-center md:flex-col">
            <span className="hidden h-full w-px bg-gradient-to-b from-majolica/40 via-gold/40 to-terracotta/40 md:block" />
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-gold/40 bg-cream text-gold-deep shadow-card">
              <Diamond className="h-4 w-4" />
            </span>
            <span className="hidden h-full w-px bg-gradient-to-b from-terracotta/40 via-gold/40 to-majolica/40 md:block" />
          </div>

          {/* Sicilia */}
          <Reveal delay={0.1}>
            <article className="panel ring-gold-hover h-full overflow-hidden">
              <Media
                src={photo(19)}
                alt="Saggio della scuola a Bagheria — gli allievi in scena"
                accent="terracotta"
                overlay="soft"
                className="aspect-[16/10] w-full"
              />
              <div className="p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-terracotta/40 bg-terracotta/10 text-terracotta-deep">
                  <Sun className="h-6 w-6" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-deep">
                  {HERITAGE.sicilia.tag}
                </span>
              </div>
              <h3 className="mt-5 font-display text-2xl u-ink">
                {HERITAGE.sicilia.title}
              </h3>
              <p className="mt-3 leading-relaxed u-body">{HERITAGE.sicilia.text}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {HERITAGE.sicilia.points.map((p) => (
                  <li
                    key={p}
                    className="inline-flex items-center gap-1.5 rounded-full border border-terracotta/30 bg-terracotta/5 px-3 py-1 text-xs text-terracotta-deep"
                  >
                    <MapPin className="h-3 w-3" /> {p}
                  </li>
                ))}
              </ul>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
