import { Camera } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { MajolicaPattern } from "@/components/ui/Ornament";
import { GALLERY, type Shot } from "@/data/gallery";

function Row({
  shots,
  reverse,
}: {
  shots: Shot[];
  reverse?: boolean;
}) {
  // Duplico le immagini per uno scorrimento infinito senza stacchi
  const items = [...shots, ...shots];
  return (
    <div className="group flex overflow-hidden py-2">
      <div
        className="flex w-max shrink-0 gap-4 pr-4 animate-marquee group-hover:[animation-play-state:paused]"
        style={reverse ? { animationDirection: "reverse" } : undefined}
      >
        {items.map((shot, i) => (
          <figure
            key={i}
            className="relative h-52 w-72 shrink-0 overflow-hidden rounded-xl2 border border-gold/20 sm:h-60 sm:w-80"
          >
            <Media
              src={shot.src}
              alt={shot.alt}
              accent={shot.accent}
              overlay="soft"
              className="absolute inset-0 transition-transform duration-700 hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

export function Gallery() {
  const half = Math.ceil(GALLERY.length / 2);
  return (
    <section id="galleria" className="on-dark relative overflow-hidden bg-scene py-16 sm:py-28">
      <MajolicaPattern className="text-gold" opacity={0.05} />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />

      <div className="container-x relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow is-centered">Galleria</span>
          <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.25rem)] leading-tight text-ivory text-balance">
            In sala e in scena
          </h2>
          <p className="mt-6 leading-relaxed text-ivory-dim">
            Lezioni, prove e luci del palcoscenico: i momenti che raccontano la
            vita della nostra scuola, saggio dopo saggio.
          </p>
        </Reveal>
      </div>

      {/* Strisce scorrevoli a tutta larghezza */}
      <div className="relative z-10 mt-14 space-y-4">
        <Row shots={GALLERY.slice(0, half)} />
        <Row shots={GALLERY.slice(half)} reverse />
      </div>

      <div className="container-x relative z-10 mt-12 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-5 py-2 text-sm text-ivory-dim">
          <Camera className="h-4 w-4 text-gold-light" />
          Oltre 140 momenti dai nostri saggi e spettacoli
        </span>
      </div>
    </section>
  );
}
