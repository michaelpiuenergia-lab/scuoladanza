import {
  Sparkles,
  Feather,
  Music2,
  Crown,
  Flame,
  Wind,
  Zap,
  HeartHandshake,
  GraduationCap,
  Drama,
  Sun,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Sparkles,
  Feather,
  Music2,
  Crown,
  Flame,
  Wind,
  Zap,
  HeartHandshake,
  GraduationCap,
  Drama,
  Sun,
};

export function DynIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = MAP[name] ?? Sparkles;
  return <Icon className={className} aria-hidden="true" />;
}
