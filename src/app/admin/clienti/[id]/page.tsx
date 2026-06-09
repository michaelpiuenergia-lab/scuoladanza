import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CreditCard,
  UserRound,
  GraduationCap,
  Megaphone,
  Mail,
  Phone,
  Cake,
  Clock,
} from "lucide-react";
import { prisma } from "@/lib/db";
import { formatDate } from "@/lib/utils";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { SubscriptionEditor } from "@/components/admin/SubscriptionEditor";
import { CommunicationForm } from "@/components/admin/CommunicationForm";

export const metadata: Metadata = { title: "Admin — Scheda cliente" };

const iso = (d: Date) => d.toISOString().slice(0, 10);

export default async function ClienteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      subscriptions: { orderBy: { endDate: "desc" } },
      memberships: { include: { course: true } },
      communications: { orderBy: { createdAt: "desc" } },
    },
  });

  if (!user || user.role !== "CLIENT") notFound();

  const sub = user.subscriptions[0];

  return (
    <div>
      <Link
        href="/admin/clienti"
        className="inline-flex items-center gap-2 text-sm u-body transition-colors hover:text-gold-deep"
      >
        <ArrowLeft className="h-4 w-4" /> Tutti i clienti
      </Link>

      <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-[clamp(1.8rem,4vw,2.6rem)] u-ink">
            {user.firstName} {user.lastName}
          </h1>
          <p className="mt-1 u-mute">{user.email}</p>
        </div>
        {sub && <StatusBadge endDate={sub.endDate} />}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* Editor abbonamento */}
        <section className="panel p-7 lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold-deep">
              <CreditCard className="h-5 w-5" />
            </span>
            <div>
              <h2 className="font-display text-xl u-ink">Abbonamento</h2>
              <p className="text-sm u-mute">
                Modifica piano e scadenza. Le modifiche sono immediate.
              </p>
            </div>
          </div>

          {sub && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl2 border bg-surface-2 p-4">
                <p className="text-xs uppercase tracking-[0.12em] u-mute">Scadenza attuale</p>
                <p className="mt-1.5 font-display text-lg u-ink">{formatDate(sub.endDate)}</p>
              </div>
              <div className="rounded-xl2 border bg-surface-2 p-4">
                <p className="text-xs uppercase tracking-[0.12em] u-mute">Piano attuale</p>
                <p className="mt-1.5 font-display text-lg u-ink">{sub.plan}</p>
              </div>
            </div>
          )}

          <div className="mt-6">
            <SubscriptionEditor
              userId={user.id}
              plan={sub?.plan}
              startDate={sub ? iso(sub.startDate) : undefined}
              endDate={sub ? iso(sub.endDate) : undefined}
            />
          </div>
        </section>

        {/* Dati cliente */}
        <section className="panel p-7">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-majolica/30 bg-majolica/10 text-majolica-deep">
              <UserRound className="h-5 w-5" />
            </span>
            <h2 className="font-display text-xl u-ink">Dati personali</h2>
          </div>
          <dl className="mt-6 space-y-4 text-sm">
            <DRow icon={Mail} label="Email">{user.email}</DRow>
            <DRow icon={Phone} label="Telefono">{user.phone ?? "—"}</DRow>
            <DRow icon={Cake} label="Nascita">
              {user.birthDate ? formatDate(user.birthDate) : "—"}
            </DRow>
            <DRow icon={Clock} label="Iscritto dal">{formatDate(user.createdAt)}</DRow>
          </dl>
        </section>

        {/* Corsi */}
        <section className="panel p-7">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-terracotta/30 bg-terracotta/10 text-terracotta-deep">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h2 className="font-display text-xl u-ink">Corsi iscritti</h2>
          </div>
          {user.memberships.length > 0 ? (
            <ul className="mt-5 space-y-3">
              {user.memberships.map((m) => (
                <li key={m.id} className="rounded-xl2 border bg-surface-2 p-4">
                  <p className="font-medium u-ink">{m.course.title}</p>
                  <p className="mt-1 text-sm u-mute">{m.course.schedule}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-5 u-body">Nessun corso associato.</p>
          )}
        </section>

        {/* Invia comunicazione */}
        <section className="panel p-7 lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold-deep">
              <Megaphone className="h-5 w-5" />
            </span>
            <h2 className="font-display text-xl u-ink">Invia una comunicazione</h2>
          </div>
          <p className="mt-2 text-sm u-mute">
            Sarà visibile a {user.firstName} nella sua area riservata.
          </p>
          <div className="mt-5">
            <CommunicationForm userId={user.id} />
          </div>

          {user.communications.length > 0 && (
            <div className="mt-7">
              <p className="text-xs font-medium uppercase tracking-[0.12em] u-mute">
                Comunicazioni inviate
              </p>
              <ul className="mt-3 space-y-3">
                {user.communications.map((c) => (
                  <li key={c.id} className="rounded-xl2 border bg-surface-2 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-medium u-ink">{c.title}</p>
                      <span className="text-xs u-mute">{formatDate(c.createdAt)}</span>
                    </div>
                    <p className="mt-1.5 text-sm u-body">{c.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function DRow({
  icon: Icon,
  label,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" />
      <div>
        <dt className="text-xs uppercase tracking-[0.12em] u-mute">{label}</dt>
        <dd className="mt-0.5 u-ink">{children}</dd>
      </div>
    </div>
  );
}
