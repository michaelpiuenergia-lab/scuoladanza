import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { DynIcon } from "@/components/ui/DynIcon";
import { PILLARS } from "@/data/content";

const ACCENTS = [
  "border-gold/50 bg-gold/15 text-gold-deep group-hover:border-gold/70",
  "border-terracotta/50 bg-terracotta/15 text-terracotta-deep group-hover:border-terracotta/70",
  "border-majolica/50 bg-majolica/15 text-majolica-deep group-hover:border-majolica/70",
  "border-sun/60 bg-sun/20 text-gold-deep group-hover:border-sun/80",
];

export function Pillars() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Perché sceglierci"
          title={
            <>
              Una scuola dove la tecnica
              <br className="hidden sm:block" />
              <span className="text-gold-gradient"> diventa emozione</span>
            </>
          }
          subtitle="Non formiamo soltanto ballerini: accompagniamo persone a crescere con grazia, disciplina e fiducia in sé."
        />

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <RevealItem key={p.title}>
              <div className="panel ring-gold-hover group h-full p-7">
                <span
                  className={`grid h-14 w-14 place-items-center rounded-2xl border transition-colors duration-300 ${ACCENTS[i % ACCENTS.length]}`}
                >
                  <DynIcon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-display text-xl u-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed u-body">{p.text}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
