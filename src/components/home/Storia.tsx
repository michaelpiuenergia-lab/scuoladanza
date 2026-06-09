import { Quote } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { MajolicaPattern, GoldDivider } from "@/components/ui/Ornament";
import { HISTORY } from "@/data/content";

export function Storia() {
  return (
    <section id="storia" className="relative overflow-hidden py-24 sm:py-28">
      <MajolicaPattern className="text-gold" opacity={0.04} />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-gold/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-majolica/10 blur-[120px]" />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="eyebrow is-centered">{HISTORY.eyebrow}</span>
          <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.25rem)] leading-tight u-ink text-balance">
            {HISTORY.title}
          </h2>
        </Reveal>

        {/* Racconto */}
        <Reveal className="mx-auto mt-10 max-w-3xl space-y-5">
          {HISTORY.paragraphs.map((p, i) => (
            <p key={i} className="leading-relaxed u-body text-pretty">
              {p}
            </p>
          ))}
        </Reveal>

        {/* Citazione */}
        <Reveal className="mx-auto mt-12 max-w-2xl">
          <figure className="panel-solid relative rounded-xl2 border-l-2 border-gold/60 p-8 text-center">
            <Quote className="mx-auto h-7 w-7 text-gold-deep" />
            <blockquote className="mt-4 font-display text-2xl italic leading-snug u-ink">
              {HISTORY.quote}
            </blockquote>
          </figure>
        </Reveal>

        <GoldDivider className="my-16" />

        {/* Tappe tematiche */}
        <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {HISTORY.timeline.map((t, i) => (
            <RevealItem key={t.label}>
              <article className="panel ring-gold-hover h-full p-7">
                <span className="font-display text-3xl text-gold-deep/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg u-ink">{t.label}</h3>
                <p className="mt-2.5 text-sm leading-relaxed u-body">{t.text}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
