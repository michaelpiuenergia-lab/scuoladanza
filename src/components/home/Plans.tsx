import { Check, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { PLANS } from "@/data/content";

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

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <RevealItem key={plan.name}>
              <div
                className={cn(
                  "relative flex h-full flex-col p-8",
                  plan.featured
                    ? "panel-solid border-gold/40 shadow-gold"
                    : "panel ring-gold-hover",
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge tone="gold">
                      <Star className="h-3 w-3" /> Più scelto
                    </Badge>
                  </div>
                )}
                <h3 className="font-display text-2xl u-ink">{plan.name}</h3>
                <p className="mt-2 text-sm u-mute">{plan.tagline}</p>

                <div className="my-6 hairline" />

                <ul className="flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm u-body">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  href="/iscrizione"
                  variant={plan.featured ? "gold" : "outline"}
                  className="mt-8 w-full"
                >
                  Iscriviti
                </Button>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>

        <p className="mt-8 text-center text-xs u-mute">
          Le quote indicative e le promozioni stagionali sono disponibili in
          segreteria o durante la lezione di prova.
        </p>
      </div>
    </section>
  );
}
