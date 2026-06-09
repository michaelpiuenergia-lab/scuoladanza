import type { Metadata } from "next";
import { Quote } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { Method } from "@/components/home/Method";
import { Storia } from "@/components/home/Storia";
import { Heritage } from "@/components/home/Heritage";
import { Sicilia } from "@/components/home/Sicilia";
import { CtaBanner } from "@/components/home/CtaBanner";

export const metadata: Metadata = {
  title: "La Scuola",
  description:
    "La storia della scuola di danza Khaybullova a Bagheria: la tradizione accademica russa del metodo Vaganova che incontra il calore della Sicilia.",
};

const STORY_IMG = "/images/scuola/foto-14.jpg";

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero
        eyebrow="La nostra storia"
        title={
          <>
            Una vita dedicata alla <span className="text-gold-gradient">danza</span>
          </>
        }
        subtitle="La grande tradizione accademica russa che fiorisce nel cuore della Sicilia, per crescere ballerini e, prima ancora, persone."
        crumbs={[{ label: "Home", href: "/" }, { label: "La Scuola" }]}
      />

      {/* Storia */}
      <section className="py-16 sm:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-[1.6rem] border border-gold/20 p-1.5 shadow-soft">
              <Media
                src={STORY_IMG}
                alt="La maestra durante una lezione di danza classica"
                accent="terracotta"
                overlay="soft"
                className="aspect-[4/5] w-full rounded-[1.3rem]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Chi siamo</span>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-tight u-ink text-balance">
              L&apos;eleganza si impara, la passione si trasmette
            </h2>
            <p className="mt-6 leading-relaxed u-body">
              La nostra scuola nasce dall&apos;amore per la danza classica e dalla
              volontà di portare a Bagheria un insegnamento serio, costruito sul
              metodo Vaganova — la pedagogia che ha formato i più grandi ballerini
              del mondo.
            </p>
            <p className="mt-4 leading-relaxed u-body">
              Negli anni siamo diventati una grande famiglia: bambini che muovono i
              primi passi, ragazzi che salgono sulle punte, adulti che riscoprono il
              piacere di danzare. Ognuno con il proprio ritmo, tutti accompagnati con
              la stessa cura.
            </p>

            <figure className="mt-8 rounded-xl2 border-l-2 border-gold/60 bg-surface-2 p-6">
              <Quote className="h-6 w-6 text-gold-deep" />
              <blockquote className="mt-3 font-display text-xl italic leading-snug u-ink">
                “La tecnica dà le ali. Ma è il cuore a far volare.”
              </blockquote>
              <figcaption className="mt-3 text-sm u-mute">
                — La nostra maestra
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <Storia />
      <Heritage />
      <Method />
      <Sicilia />
      <CtaBanner />
    </>
  );
}
