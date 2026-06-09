import { Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TESTIMONIAL } from "@/data/content";

export function Testimonials() {
  return (
    <section className="relative bg-surface-2 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Le voci della scuola"
          title={
            <>
              Chi danza con noi,
              <span className="text-gold-gradient"> lo racconta</span>
            </>
          }
          subtitle="Un giudizio di 5 stelle su 5, confermato dalle famiglie che ci hanno scelto."
        />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <figure className="panel relative flex flex-col items-center p-9 text-center sm:p-12">
            <Quote className="h-10 w-10 text-gold-deep/70" />

            {/* Stelle (recensione reale 5/5) */}
            <div className="mt-6 flex items-center gap-1" aria-label={`${TESTIMONIAL.rating} stelle su 5`}>
              {Array.from({ length: TESTIMONIAL.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-gold text-gold" />
              ))}
            </div>

            <blockquote className="mt-6 font-display text-[clamp(1.25rem,2.6vw,1.7rem)] italic leading-snug u-ink text-balance">
              “{TESTIMONIAL.quote}”
            </blockquote>

            <figcaption className="mt-7 border-t pt-6">
              <span className="block text-sm font-semibold u-ink">
                {TESTIMONIAL.author}
              </span>
              <span className="mt-0.5 block text-xs u-mute">{TESTIMONIAL.role}</span>
            </figcaption>
          </figure>

          <p className="mt-6 text-center text-sm u-mute">
            <span className="font-semibold text-gold-deep">{TESTIMONIAL.rating}/5</span>{" "}
            di media su {TESTIMONIAL.reviewsCount} recensioni
          </p>
        </Reveal>
      </div>
    </section>
  );
}
