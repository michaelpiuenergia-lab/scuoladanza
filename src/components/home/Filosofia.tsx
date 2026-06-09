import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { MajolicaPattern } from "@/components/ui/Ornament";
import { PHILOSOPHY } from "@/data/content";
import { photo } from "@/data/photos";

export function Filosofia() {
  return (
    <section id="filosofia" className="relative overflow-hidden py-16 sm:py-28">
      <MajolicaPattern className="text-gold" opacity={0.04} />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-terracotta/10 blur-[120px]" />

      <div className="container-x relative z-10 grid items-center gap-14 lg:grid-cols-2">
        {/* Immagine reale */}
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[1.6rem] border border-gold/20 p-1.5 shadow-soft">
            <Media
              src={photo(4)}
              alt="Passo a due — la grazia di un gesto della nostra scuola"
              accent="terracotta"
              overlay="soft"
              className="aspect-[5/4] w-full rounded-[1.3rem]"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 -z-10 h-28 w-28 rounded-br-[1.6rem] border-b border-r border-gold/30" />
        </Reveal>

        {/* Testo */}
        <Reveal delay={0.1}>
          <span className="eyebrow">{PHILOSOPHY.eyebrow}</span>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-tight u-ink text-balance">
            {PHILOSOPHY.title}
          </h2>

          <figure className="my-7 rounded-xl2 border-l-2 border-gold/60 bg-surface-2 p-6">
            <Quote className="h-6 w-6 text-gold-deep" />
            <blockquote className="mt-3 font-display text-xl italic leading-snug u-ink">
              “{PHILOSOPHY.quote}”
            </blockquote>
          </figure>

          {PHILOSOPHY.body.map((p, i) => (
            <p key={i} className="mt-4 leading-relaxed u-body">
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
