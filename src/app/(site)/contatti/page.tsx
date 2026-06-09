import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contatti",
  description: `Contatta la scuola di danza Khaybullova a Bagheria. ${SITE.address.full} — ${SITE.phone}.`,
};

const CONTACTS = [
  {
    icon: Phone,
    label: "Telefono",
    value: SITE.phone,
    href: SITE.phoneHref,
    accent: "border-gold/30 bg-gold/10 text-gold-deep",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Scrivici su WhatsApp",
    href: SITE.whatsappHref,
    accent: "border-majolica/30 bg-majolica/10 text-majolica-deep",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE.email,
    href: SITE.emailHref,
    accent: "border-terracotta/30 bg-terracotta/10 text-terracotta-deep",
  },
];

export default function ContattiPage() {
  return (
    <>
      <PageHero
        eyebrow="Dove trovarci"
        title={
          <>
            Vieni a <span className="text-gold-gradient">conoscerci</span>
          </>
        }
        subtitle="Siamo nel cuore di Bagheria. Passa a trovarci, chiamaci o scrivici: saremo felici di accoglierti."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contatti" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-x">
          {/* Card contatto rapido */}
          <div className="grid gap-6 sm:grid-cols-3">
            {CONTACTS.map((c) => (
              <Reveal key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="panel ring-gold-hover group flex h-full flex-col items-center p-8 text-center"
                >
                  <span className={`grid h-14 w-14 place-items-center rounded-full border ${c.accent}`}>
                    <c.icon className="h-6 w-6" />
                  </span>
                  <span className="mt-5 text-xs font-medium uppercase tracking-[0.16em] u-mute">
                    {c.label}
                  </span>
                  <span className="mt-2 font-display text-lg u-ink transition-colors group-hover:text-gold-deep">
                    {c.value}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Mappa + dettagli */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
            <Reveal className="overflow-hidden rounded-xl2 border border-gold/20 shadow-soft">
              <iframe
                title="Mappa — sede della scuola"
                src={SITE.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[360px] w-full"
              />
            </Reveal>

            <Reveal delay={0.1} className="panel flex flex-col p-8">
              <h2 className="font-display text-2xl u-ink">La sede</h2>
              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3 u-body">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
                  <span>{SITE.address.full}</span>
                </li>
                <li className="flex items-start gap-3 u-body">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
                  <span>
                    {SITE.hours.map((h) => (
                      <span key={h.day} className="block">
                        <strong className="font-medium u-ink">{h.day}:</strong> {h.time}
                      </span>
                    ))}
                  </span>
                </li>
              </ul>

              <div className="my-6 hairline" />

              <div className="flex items-center gap-3">
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 u-body transition-colors hover:border-gold hover:text-gold-deep"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={SITE.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 u-body transition-colors hover:border-gold hover:text-gold-deep"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>

              <Button href="/iscrizione" variant="gold" className="mt-7 w-full">
                Iscriviti ora <ArrowRight className="h-4 w-4" />
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
