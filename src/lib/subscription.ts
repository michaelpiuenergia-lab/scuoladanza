import { daysUntil } from "./utils";

export type SubStatus = "attivo" | "in_scadenza" | "scaduto";

export type SubStatusInfo = {
  status: SubStatus;
  label: string;
  days: number;
  // classi tailwind per badge (testo / bordo / sfondo)
  tone: string;
  dot: string;
};

const SOON_THRESHOLD = 14; // giorni entro cui l'abbonamento è "in scadenza"

export function subscriptionStatus(endDate: Date | string): SubStatusInfo {
  const days = daysUntil(endDate);

  if (days < 0) {
    return {
      status: "scaduto",
      label: "Scaduto",
      days,
      tone: "text-terracotta-deep border-terracotta/40 bg-terracotta/10",
      dot: "bg-terracotta",
    };
  }
  if (days <= SOON_THRESHOLD) {
    return {
      status: "in_scadenza",
      label: "In scadenza",
      days,
      tone: "text-amber-700 border-amber-500/40 bg-amber-500/10",
      dot: "bg-amber-500",
    };
  }
  return {
    status: "attivo",
    label: "Attivo",
    days,
    tone: "text-emerald-700 border-emerald-600/30 bg-emerald-500/10",
    dot: "bg-emerald-500",
  };
}
