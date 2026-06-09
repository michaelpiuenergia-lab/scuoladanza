import type { Metadata } from "next";
import { Mail, Phone, Cake, BookOpen, MessageSquare, Check, Archive, RotateCcw } from "lucide-react";
import { prisma } from "@/lib/db";
import { formatDate } from "@/lib/utils";
import { updateRequestStatus } from "@/actions/admin";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Admin — Richieste" };

const STATUS_META: Record<string, { label: string; tone: string }> = {
  NUOVA: { label: "Nuova", tone: "border-majolica/30 bg-majolica/10 text-majolica-deep" },
  CONTATTATA: { label: "Contattata", tone: "border-emerald-600/30 bg-emerald-500/10 text-emerald-700" },
  ARCHIVIATA: { label: "Archiviata", tone: "border-gold/20 bg-black/[0.03] u-mute" },
};

export default async function AdminRichiestePage() {
  const requests = await prisma.enrollmentRequest.findMany({
    orderBy: [{ status: "asc" }, { createdAt: "desc" }],
  });

  return (
    <div>
      <span className="eyebrow">Dal sito</span>
      <h1 className="mt-2 font-display text-[clamp(1.9rem,4vw,2.75rem)] u-ink">
        Richieste di iscrizione
      </h1>
      <p className="mt-2 u-body">
        {requests.filter((r) => r.status === "NUOVA").length} nuove ·{" "}
        {requests.length} totali
      </p>

      {requests.length === 0 ? (
        <div className="panel mt-8 p-10 text-center u-body">
          Non sono ancora arrivate richieste dal modulo di iscrizione.
        </div>
      ) : (
        <ul className="mt-8 space-y-4">
          {requests.map((r) => {
            const meta = STATUS_META[r.status] ?? STATUS_META.NUOVA;
            return (
              <li key={r.id} className="panel p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-xl u-ink">
                      {r.firstName} {r.lastName}
                    </h2>
                    <p className="mt-1 text-sm u-mute">
                      Ricevuta il {formatDate(r.createdAt)}
                    </p>
                  </div>
                  <span className={cn("rounded-full border px-3 py-1 text-xs font-medium", meta.tone)}>
                    {meta.label}
                  </span>
                </div>

                <div className="mt-5 grid gap-x-6 gap-y-2.5 text-sm sm:grid-cols-2">
                  <a href={`mailto:${r.email}`} className="flex items-center gap-2 u-body hover:text-gold-deep">
                    <Mail className="h-4 w-4 text-gold-deep" /> {r.email}
                  </a>
                  <a href={`tel:${r.phone}`} className="flex items-center gap-2 u-body hover:text-gold-deep">
                    <Phone className="h-4 w-4 text-gold-deep" /> {r.phone}
                  </a>
                  {r.birthDate && (
                    <span className="flex items-center gap-2 u-body">
                      <Cake className="h-4 w-4 text-gold-deep" /> {r.birthDate}
                    </span>
                  )}
                  {r.courseName && (
                    <span className="flex items-center gap-2 u-body">
                      <BookOpen className="h-4 w-4 text-gold-deep" /> {r.courseName}
                    </span>
                  )}
                </div>

                {r.message && (
                  <p className="mt-4 flex gap-2 rounded-xl2 border bg-surface-2 p-4 text-sm u-body">
                    <MessageSquare className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
                    {r.message}
                  </p>
                )}

                {/* Azioni stato */}
                <div className="mt-5 flex flex-wrap gap-2 border-t pt-5">
                  <StatusButton id={r.id} status="CONTATTATA" current={r.status} icon={Check} label="Segna contattata" />
                  <StatusButton id={r.id} status="ARCHIVIATA" current={r.status} icon={Archive} label="Archivia" />
                  <StatusButton id={r.id} status="NUOVA" current={r.status} icon={RotateCcw} label="Riapri" />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function StatusButton({
  id,
  status,
  current,
  icon: Icon,
  label,
}: {
  id: string;
  status: string;
  current: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  const active = current === status;
  return (
    <form action={updateRequestStatus}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="status" value={status} />
      <button
        type="submit"
        disabled={active}
        className={cn(
          "inline-flex h-9 cursor-pointer items-center gap-2 rounded-full border px-4 text-sm transition-colors",
          active
            ? "border-gold/40 bg-gold/10 text-gold-deep cursor-default"
            : "u-line u-body hover:border-gold/50 hover:text-gold-deep",
        )}
      >
        <Icon className="h-4 w-4" /> {label}
      </button>
    </form>
  );
}
