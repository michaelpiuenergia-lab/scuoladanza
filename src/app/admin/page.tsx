import type { Metadata } from "next";
import Link from "next/link";
import { Users, Inbox, CalendarClock, AlertTriangle, ArrowRight } from "lucide-react";
import { prisma } from "@/lib/db";
import { subscriptionStatus } from "@/lib/subscription";
import { formatDate } from "@/lib/utils";
import { StatusBadge } from "@/components/dashboard/StatusBadge";

export const metadata: Metadata = { title: "Admin — Panoramica" };

export default async function AdminHome() {
  const clients = await prisma.user.findMany({
    where: { role: "CLIENT" },
    include: { subscriptions: { orderBy: { endDate: "desc" }, take: 1 } },
    orderBy: { lastName: "asc" },
  });

  const newRequests = await prisma.enrollmentRequest.count({
    where: { status: "NUOVA" },
  });

  const recentRequests = await prisma.enrollmentRequest.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
  });

  // Stato abbonamenti
  const withSub = clients
    .map((c) => ({ client: c, sub: c.subscriptions[0] }))
    .filter((x) => x.sub);
  const expiring = withSub.filter(
    (x) => subscriptionStatus(x.sub!.endDate).status === "in_scadenza",
  );
  const expired = withSub.filter(
    (x) => subscriptionStatus(x.sub!.endDate).status === "scaduto",
  );

  const stats = [
    { label: "Clienti", value: clients.length, icon: Users, accent: "text-gold-deep border-gold/30 bg-gold/10" },
    { label: "Richieste nuove", value: newRequests, icon: Inbox, accent: "text-majolica-deep border-majolica/30 bg-majolica/10" },
    { label: "In scadenza", value: expiring.length, icon: CalendarClock, accent: "text-amber-700 border-amber-500/40 bg-amber-500/10" },
    { label: "Scaduti", value: expired.length, icon: AlertTriangle, accent: "text-terracotta-deep border-terracotta/30 bg-terracotta/10" },
  ];

  return (
    <div>
      <span className="eyebrow">Amministrazione</span>
      <h1 className="mt-2 font-display text-[clamp(1.9rem,4vw,2.75rem)] u-ink">
        Panoramica
      </h1>

      {/* Statistiche */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="panel p-6">
            <span className={`grid h-11 w-11 place-items-center rounded-full border ${s.accent}`}>
              <s.icon className="h-5 w-5" />
            </span>
            <p className="mt-4 font-display text-4xl u-ink">{s.value}</p>
            <p className="mt-1 text-sm u-mute">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        {/* Ultime richieste */}
        <section className="panel p-7">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl u-ink">Ultime richieste</h2>
            <Link href="/admin/richieste" className="inline-flex items-center gap-1.5 text-sm text-gold-deep hover:text-gold">
              Tutte <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {recentRequests.length > 0 ? (
            <ul className="mt-5 divide-y">
              {recentRequests.map((r) => (
                <li key={r.id} className="flex items-center justify-between gap-3 py-3.5">
                  <div>
                    <p className="font-medium u-ink">
                      {r.firstName} {r.lastName}
                    </p>
                    <p className="text-sm u-mute">{r.courseName ?? "Corso non specificato"}</p>
                  </div>
                  <RequestStatusChip status={r.status} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 u-body">Nessuna richiesta ricevuta.</p>
          )}
        </section>

        {/* Scadenze da gestire */}
        <section className="panel p-7">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-xl u-ink">Scadenze da gestire</h2>
            <Link href="/admin/clienti" className="inline-flex items-center gap-1.5 text-sm text-gold-deep hover:text-gold">
              Clienti <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          {[...expiring, ...expired].length > 0 ? (
            <ul className="mt-5 divide-y">
              {[...expiring, ...expired].map(({ client, sub }) => (
                <li key={client.id} className="flex items-center justify-between gap-3 py-3.5">
                  <div>
                    <Link
                      href={`/admin/clienti/${client.id}`}
                      className="font-medium u-ink hover:text-gold-deep"
                    >
                      {client.firstName} {client.lastName}
                    </Link>
                    <p className="text-sm u-mute">Scadenza: {formatDate(sub!.endDate)}</p>
                  </div>
                  <StatusBadge endDate={sub!.endDate} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 u-body">Tutto in ordine: nessuna scadenza imminente.</p>
          )}
        </section>
      </div>
    </div>
  );
}

function RequestStatusChip({ status }: { status: string }) {
  const map: Record<string, string> = {
    NUOVA: "border-majolica/30 bg-majolica/10 text-majolica-deep",
    CONTATTATA: "border-emerald-600/30 bg-emerald-500/10 text-emerald-700",
    ARCHIVIATA: "border-gold/30 bg-black/[0.03] u-mute",
  };
  const labels: Record<string, string> = {
    NUOVA: "Nuova",
    CONTATTATA: "Contattata",
    ARCHIVIATA: "Archiviata",
  };
  return (
    <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${map[status] ?? map.NUOVA}`}>
      {labels[status] ?? status}
    </span>
  );
}
