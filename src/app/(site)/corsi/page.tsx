import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { CourseCatalog } from "@/components/courses/CourseCatalog";
import { Button } from "@/components/ui/Button";
import { GoldDivider } from "@/components/ui/Ornament";

export const metadata: Metadata = {
  title: "I Corsi",
  description:
    "Tutti i corsi di danza della scuola Khaybullova a Bagheria: propedeutica, classica (metodo Vaganova), moderna, contemporanea, hip hop e danza per adulti.",
};

export default function CorsiPage() {
  return (
    <>
      <PageHero
        eyebrow="L'offerta formativa"
        title={
          <>
            Un corso per ogni <span className="text-gold-gradient">passo</span>
          </>
        }
        subtitle="Dalla propedeutica dei più piccoli al repertorio sulle punte, dalla danza moderna al contemporaneo: scegli il percorso più adatto a te."
        crumbs={[{ label: "Home", href: "/" }, { label: "Corsi" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <CourseCatalog />
        </div>
      </section>

      {/* Chiusura */}
      <section className="bg-cream-2 py-20 sm:py-24">
        <div className="container-x text-center">
          <GoldDivider className="mb-10" />
          <h2 className="mx-auto max-w-2xl font-display text-[clamp(1.8rem,4vw,2.75rem)] leading-tight u-ink text-balance">
            Non sai quale corso scegliere?
          </h2>
          <p className="mx-auto mt-5 max-w-lg u-body">
            Raccontaci chi sei e cosa cerchi: ti consiglieremo il percorso giusto e
            ti aspetteremo per una lezione di prova gratuita.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/iscrizione" variant="gold" size="lg">
              Iscriviti ora <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="/contatti" variant="outline" size="lg">
              Contattaci
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
