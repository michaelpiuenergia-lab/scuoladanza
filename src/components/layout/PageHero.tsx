import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { MajolicaPattern, MajolicaRibbon } from "@/components/ui/Ornament";

type Crumb = { label: string; href?: string };

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumbs,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative overflow-hidden bg-cream-2 pt-[4.75rem]">
      <MajolicaPattern className="text-gold" opacity={0.05} />
      <div className="pointer-events-none absolute -left-24 -top-10 h-72 w-72 rounded-full bg-gold/15 blur-[110px]" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-terracotta/12 blur-[110px]" />

      <div className="container-x relative z-10 py-16 text-center sm:py-24">
        <Reveal className="mx-auto max-w-3xl">
          {crumbs && (
            <nav
              aria-label="breadcrumb"
              className="mb-7 flex items-center justify-center gap-1.5 text-xs u-mute"
            >
              {crumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-gold-deep">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-gold-deep">{c.label}</span>
                  )}
                  {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
                </span>
              ))}
            </nav>
          )}

          <span className="eyebrow is-centered">{eyebrow}</span>
          <h1 className="mt-5 font-display text-[clamp(2.4rem,6vw,4rem)] leading-[1.02] u-ink text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="mx-auto mt-6 max-w-xl leading-relaxed u-body text-pretty">
              {subtitle}
            </p>
          )}
        </Reveal>
      </div>

      <MajolicaRibbon />
    </section>
  );
}
