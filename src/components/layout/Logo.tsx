import Link from "next/link";
import { cn } from "@/lib/utils";
import { Diamond } from "@/components/ui/Ornament";
import { SITE } from "@/data/site";

export function Logo({
  className,
  subtitle = true,
  href = "/",
}: {
  className?: string;
  subtitle?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label={`${SITE.name} — home`}
    >
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold/40 bg-scene-700/60 transition-colors duration-300 group-hover:border-gold">
        <Diamond className="transition-transform duration-500 group-hover:rotate-180" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl tracking-wide u-ink">
          {SITE.name}
        </span>
        {subtitle && (
          <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.3em] u-gold">
            Scuola di Danza
          </span>
        )}
      </span>
    </Link>
  );
}
