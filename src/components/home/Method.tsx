import { Check } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { Diamond } from "@/components/ui/Ornament";
import { METHOD } from "@/data/content";

export function Method() {
  return (
    <section id="metodo" className="relative py-24 sm:py-28">
      <div className="container-x">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Immagine */}
          <Reveal className="relative order-last lg:order-first">
            <div className="relative">
              <div className="overflow-hidden rounded-[1.6rem] border border-gold/20 p-1.5 shadow-lift">
                <Media
                  src={METHOD.image}
                  alt="Allieve alla sbarra durante una lezione di danza classica"
                  accent="gold"
                  overlay="soft"
                  className="aspect-[4/5] w-full rounded-[1.3rem] sm:aspect-[5/5]"
                />
              </div>
              {/* Riquadro decorativo sfalsato */}
              <div className="absolute -right-4 -top-4 -z-10 h-32 w-32 rounded-tr-[1.6rem] border-r border-t border-gold/30" />
              <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-bl-[1.6rem] border-b border-l border-gold/30" />
            </div>
          </Reveal>

          {/* Testo */}
          <Reveal delay={0.1}>
            <span className="eyebrow">{METHOD.eyebrow}</span>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-tight u-ink text-balance">
              {METHOD.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed u-body">{METHOD.lead}</p>
            {METHOD.paragraphs.map((p, i) => (
              <p key={i} className="mt-4 leading-relaxed u-body">
                {p}
              </p>
            ))}

            <div className="my-7 flex items-center gap-4">
              <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
              <Diamond />
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {METHOD.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-sm u-body">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
