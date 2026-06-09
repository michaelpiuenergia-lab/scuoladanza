import type { Metadata } from "next";
import { ArrowRight, Phone, Users, Sparkles, CalendarClock } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PlanCards } from "@/components/home/PlanCards";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { GoldDivider } from "@/components/ui/Ornament";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Abbonamenti",
  description:
    "Gli abbonamenti del Centro Danza Khaybullova a Bagheria: formule mensile, trimestrale e annuale, con agevolazioni famiglia e prima lezione di prova gratuita.",
};

const INFO = [
  {
    icon: Sparkles,
    title: "Prima lezione gratuita",
    text: "Provi senza impegno: scegli l'abbonamento solo dopo aver conosciuto la scuola e i maestri.",
  },
  {
    icon: Users,
    title: "Agevolazioni famiglia",
    text: "Quote ridotte per fratelli e sorelle iscritti e per chi frequenta più di un corso.",
  },
  {
    icon: CalendarClock,
    title: "Quote su misura",
    text: "L'importo dipende dal corso e dalla frequenza: lo definiamo insieme in segreteria, senza sorprese.",
  },
];

export default function AbbonamentiPage() {
  return (
    <>
      <PageHero
        eyebrow="Abbonamenti"
        title={
          <>
            Formule pensate <span className="text-gold-gradient">per ogni passo</span>
          </>
        }
        subtitle="Mensile, trimestrale o annuale: scegli il ritmo che preferisci. Le quote e le agevolazioni si definiscono in segreteria, in base al corso scelto."
        crumbs={[{ label: "Home", href: "/" }, { label: "Abbonamenti" }]}
      />

      <section className="py-16 sm:py-24">
        <div className="container-x">
          <PlanCards />
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm u-mute">
            Le quote indicative e le promozioni stagionali sono disponibili in segreteria
            o durante la lezione di prova gratuita.
          </p>
        </div>
      </section>

      {/* Come funziona */}
      <section className="bg-surface-2 py-16 sm:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow is-centered">Come funziona</span>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-tight u-ink text-balance">
              Trasparenza e flessibilità
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {INFO.map((i) => (
              <Reveal key={i.title}>
                <div className="panel h-full p-7 text-center">
                  <span className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold-deep">
                    <i.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl u-ink">{i.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed u-body">{i.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chiusura */}
      <section className="py-16 sm:py-24">
        <div className="container-x text-center">
          <GoldDivider className="mb-10" />
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.8rem,4vw,2.75rem)] leading-tight u-ink text-balance">
            Pronto a salire sul palco?
          </h2>
          <p className="mx-auto mt-5 max-w-lg u-body">
            Prenota la tua lezione di prova gratuita: ti consiglieremo il corso e
            l&apos;abbonamento più adatti a te.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/iscrizione" variant="gold" size="lg">
              Iscriviti ora <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={SITE.phoneHref} variant="outline" size="lg">
              <Phone className="h-4 w-4" />
              {SITE.phone}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
