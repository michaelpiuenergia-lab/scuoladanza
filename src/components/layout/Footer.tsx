import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { MajolicaPattern, Trinacria } from "@/components/ui/Ornament";
import { SITE, NAV_LINKS } from "@/data/site";
import { COURSES } from "@/data/courses";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="on-dark relative overflow-hidden border-t border-gold/15 bg-scene-800">
      <MajolicaPattern className="text-gold" opacity={0.04} />
      {/* Trinacria — emblema della Sicilia, in filigrana sullo sfondo */}
      <Trinacria className="pointer-events-none absolute -right-12 top-8 z-0 h-72 w-72 text-gold opacity-[0.05]" />

      <div className="container-x relative z-10 py-16">
        {/* Trinacria al centro del divisore d'apertura */}
        <div className="mb-14 flex items-center justify-center gap-5">
          <span className="h-px w-20 bg-gradient-to-r from-transparent to-gold/50" />
          <Trinacria className="h-11 w-11 text-gold" />
          <span className="h-px w-20 bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ivory-dim/80">
              {SITE.claim} Danza classica e moderna nel cuore di Bagheria, secondo
              il metodo Vaganova.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { href: SITE.social.instagram, icon: Instagram, label: "Instagram" },
                { href: SITE.social.facebook, icon: Facebook, label: "Facebook" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-ivory-dim transition-colors hover:border-gold/50 hover:text-gold-light"
                >
                  <Icon className="h-[1.05rem] w-[1.05rem]" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigazione */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/80">
              Esplora
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-ivory-dim/85 transition-colors hover:text-gold-light"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Corsi */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/80">
              Corsi
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {COURSES.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/corsi/${c.slug}`}
                    className="text-ivory-dim/85 transition-colors hover:text-gold-light"
                  >
                    {c.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/80">
              Contatti
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3 text-ivory-dim/85">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <span>{SITE.address.full}</span>
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-3 text-ivory-dim/85 transition-colors hover:text-gold-light"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold/70" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex items-center gap-3 text-ivory-dim/85 transition-colors hover:text-gold-light"
                >
                  <Mail className="h-4 w-4 shrink-0 text-gold/70" />
                  {SITE.email}
                </a>
              </li>
              <li className="flex gap-3 text-ivory-dim/85">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold/70" />
                <span>
                  {SITE.hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-7 text-center text-xs text-ivory-mute md:flex-row md:text-left">
          <p>
            © {year} {SITE.legalName}. Tutti i diritti riservati.
          </p>
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            <Link href="/privacy" className="transition-colors hover:text-gold-light">
              Privacy &amp; Cookie
            </Link>
            <span className="text-white/15">·</span>
            <span>P.IVA / C.F. da inserire</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
