import { ArrowRight, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { MajolicaPattern, Diamond } from "@/components/ui/Ornament";
import { SITE } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="relative py-16 sm:py-28">
      <div className="container-x">
        <Reveal>
          <div className="on-dark relative overflow-hidden rounded-[2rem] border border-gold/25 bg-gradient-to-br from-scene-700 via-scene-800 to-scene px-6 py-16 text-center shadow-lift sm:px-12 sm:py-20">
            <MajolicaPattern className="text-gold" opacity={0.06} />
            <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-gold/15 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-terracotta/15 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-2xl">
              <Diamond className="mx-auto h-4 w-4" />
              <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.4rem)] leading-tight text-ivory text-balance">
                Il palcoscenico ti aspetta.
                <br />
                <span className="text-gold-gradient">Inizia a danzare.</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ivory-dim/90">
                Iscrizioni aperte per il nuovo anno. Prenota la tua lezione di
                prova gratuita e scopri la scuola dal vivo.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Button href="/iscrizione" variant="gold" size="lg">
                  Iscriviti ora
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href={SITE.phoneHref} variant="outline" size="lg">
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
