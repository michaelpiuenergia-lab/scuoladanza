import { cn } from "@/lib/utils";
import { subscriptionStatus } from "@/lib/subscription";

export function StatusBadge({
  endDate,
  className,
}: {
  endDate: Date | string;
  className?: string;
}) {
  const s = subscriptionStatus(endDate);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium",
        s.tone,
        className,
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
      {s.label}
    </span>
  );
}
