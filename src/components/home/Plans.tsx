import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PlanCards } from "@/components/home/PlanCards";

export function Plans() {
  return (
    <section id="abbonamenti" className="relative py-16 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Abbonamenti"
          title={
            <>
              Formule pensate
              <span className="text-gold-gradient"> per ogni passo</span>
            </>
          }
          subtitle="Scegli il ritmo che preferisci. Le quote e le agevolazioni vengono definite insieme alla segreteria, in base al corso scelto."
        />

        <PlanCards className="mt-16" />

        <div className="mt-10 text-center">
          <Link
            href="/abbonamenti"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-deep transition-colors hover:text-gold"
          >
            Tutti i dettagli sugli abbonamenti <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
