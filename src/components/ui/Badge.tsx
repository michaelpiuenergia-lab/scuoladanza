import { cn } from "@/lib/utils";

type Tone = "gold" | "terracotta" | "majolica" | "sun" | "neutral";

const tones: Record<Tone, string> = {
  gold: "border-gold/40 text-gold-deep bg-gold/12",
  terracotta: "border-terracotta/40 text-terracotta-deep bg-terracotta/12",
  majolica: "border-majolica/40 text-majolica-deep bg-majolica/12",
  sun: "border-sun/50 text-gold-deep bg-sun/15",
  neutral: "border u-line u-body bg-black/[0.03]",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em]",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
