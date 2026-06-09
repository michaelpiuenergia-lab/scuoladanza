import type { Metadata } from "next";
import Link from "next/link";
import { Settings2, Mail, Phone } from "lucide-react";
import { prisma } from "@/lib/db";
import { formatDate } from "@/lib/utils";
import { StatusBadge } from "@/components/dashboard/StatusBadge";

export const metadata: Metadata = { title: "Admin — Clienti" };

export default async function AdminClientiPage() {
  const clients = await prisma.user.findMany({
    where: { role: "CLIENT" },
    include: {
      subscriptions: { orderBy: { endDate: "desc" }, take: 1 },
      _count: { select: { memberships: true } },
    },
    orderBy: { lastName: "asc" },
  });

  return (
    <div>
      <span className="eyebrow">Gestione</span>
      <h1 className="mt-2 font-display text-[clamp(1.9rem,4vw,2.75rem)] u-ink">
        Clienti
      </h1>
      <p className="mt-2 u-body">
        {clients.length} iscritti. Apri una scheda per modificare l&apos;abbonamento e
        la scadenza.
      </p>

      <div className="mt-8 overflow-hidden rounded-xl2 border bg-surface shadow-card">
        {/* Intestazione (desktop) */}
        <div className="hidden grid-cols-12 gap-4 border-b bg-surface-2 px-6 py-3.5 text-xs font-medium uppercase tracking-[0.12em] u-mute lg:grid">
          <span className="col-span-4">Cliente</span>
          <span className="col-span-2">Corsi</span>
          <span className="col-span-2">Piano</span>
          <span className="col-span-2">Scadenza</span>
          <span className="col-span-2 text-right">Stato</span>
        </div>

        <ul className="divide-y">
          {clients.map((c) => {
            const sub = c.subscriptions[0];
            return (
              <li key={c.id}>
                <Link
                  href={`/admin/clienti/${c.id}`}
                  className="grid grid-cols-1 gap-3 px-6 py-4 transition-colors hover:bg-gold/5 lg:grid-cols-12 lg:items-center lg:gap-4"
                >
                  <div className="lg:col-span-4">
                    <p className="font-medium u-ink">
                      {c.firstName} {c.lastName}
                    </p>
                    <p className="mt-0.5 flex flex-wrap items-center gap-x-3 text-sm u-mute">
                      <span className="inline-flex items-center gap-1.5">
                        <Mail className="h-3.5 w-3.5" /> {c.email}
                      </span>
                      {c.phone && (
                        <span className="inline-flex items-center gap-1.5">
                          <Phone className="h-3.5 w-3.5" /> {c.phone}
                        </span>
                      )}
                    </p>
                  </div>
                  <div className="text-sm u-body lg:col-span-2">
                    {c._count.memberships} corso/i
                  </div>
                  <div className="text-sm u-body lg:col-span-2">
                    {sub?.plan ?? "—"}
                  </div>
                  <div className="text-sm u-body lg:col-span-2">
                    {sub ? formatDate(sub.endDate) : "—"}
                  </div>
                  <div className="flex items-center justify-between gap-2 lg:col-span-2 lg:justify-end">
                    {sub ? (
                      <StatusBadge endDate={sub.endDate} />
                    ) : (
                      <span className="text-xs u-mute">nessun abbonamento</span>
                    )}
                    <Settings2 className="hidden h-4 w-4 text-gold-deep lg:block" />
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
