import type { Metadata } from "next";
import { Users, Clock, UserRound, Megaphone } from "lucide-react";
import { prisma } from "@/lib/db";
import { CommunicationForm } from "@/components/admin/CommunicationForm";

export const metadata: Metadata = { title: "Admin — Corsi" };

export default async function AdminCorsiPage() {
  const courses = await prisma.course.findMany({
    orderBy: { order: "asc" },
    include: { _count: { select: { memberships: true } } },
  });

  return (
    <div>
      <span className="eyebrow">Offerta</span>
      <h1 className="mt-2 font-display text-[clamp(1.9rem,4vw,2.75rem)] u-ink">Corsi</h1>
      <p className="mt-2 u-body">{courses.length} corsi attivi nel catalogo.</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Avviso generale */}
        <section className="panel p-7 lg:col-span-1 lg:order-last">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold-deep">
              <Megaphone className="h-5 w-5" />
            </span>
            <h2 className="font-display text-xl u-ink">Avviso a tutti</h2>
          </div>
          <p className="mt-2 text-sm u-mute">
            Invia una comunicazione visibile a tutti gli iscritti nell&apos;area
            riservata.
          </p>
          <div className="mt-5">
            <CommunicationForm allowBroadcast />
          </div>
        </section>

        {/* Elenco corsi */}
        <section className="lg:col-span-2">
          <ul className="space-y-4">
            {courses.map((c) => (
              <li key={c.id} className="panel flex flex-wrap items-center justify-between gap-4 p-6">
                <div>
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-display text-lg u-ink">{c.title}</h3>
                    <span className="rounded-full border border-gold/30 bg-gold/10 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-[0.12em] text-gold-deep">
                      {c.category}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm u-mute">
                    <span className="flex items-center gap-1.5">
                      <UserRound className="h-3.5 w-3.5" /> {c.teacher}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {c.schedule}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 rounded-full border bg-surface-2 px-4 py-2 text-sm u-body">
                  <Users className="h-4 w-4 text-gold-deep" />
                  {c._count.memberships} iscritti
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
