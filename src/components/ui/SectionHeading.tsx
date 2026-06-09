import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: Props) {
  const centered = align === "center";
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        centered ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className={cn("eyebrow", centered && "is-centered")}>{eyebrow}</span>
      )}
      <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05] u-ink text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 u-body leading-relaxed text-pretty",
            centered ? "mx-auto max-w-xl" : "max-w-xl",
          )}
        >
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
