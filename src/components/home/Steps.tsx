import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { STEPS } from "@/data/content";

export function Steps() {
  return (
    <section className="relative bg-surface-2 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Come iniziare"
          title={
            <>
              Dal primo clic alla
              <span className="text-gold-gradient"> prima piroetta</span>
            </>
          }
          subtitle="Iniziare è semplice. Bastano pochi passi per entrare a far parte della nostra scuola."
        />

        <RevealGroup className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => (
            <RevealItem key={step.n}>
              <div className="group relative h-full">
                <span className="font-display text-5xl text-gold/35 transition-colors duration-300 group-hover:text-gold/70">
                  {step.n}
                </span>
                <div className="mt-3 h-px w-full bg-gradient-to-r from-gold/50 to-transparent" />
                <h3 className="mt-5 font-display text-xl u-ink">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed u-body">{step.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
