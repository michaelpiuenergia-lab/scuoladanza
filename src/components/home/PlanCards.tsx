import { Check, Star } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { PLANS } from "@/data/content";

// I tre piani di abbonamento — riusati sia in home (sezione) sia nella pagina /abbonamenti
export function PlanCards({ className }: { className?: string }) {
  return (
    <RevealGroup className={cn("grid gap-6 lg:grid-cols-3", className)}>
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
  );
}
