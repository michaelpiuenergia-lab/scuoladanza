import type { Metadata } from "next";
import Link from "next/link";
import {
  CreditCard,
  CalendarClock,
  UserRound,
  Mail,
  Phone,
  Cake,
  GraduationCap,
  Clock,
  Megaphone,
  BellRing,
  ArrowRight,
} from "lucide-react";
import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { subscriptionStatus } from "@/lib/subscription";
import { formatDate } from "@/lib/utils";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = { title: "La mia area" };

export default async function DashboardPage() {
  const session = await requireUser();

  const user = await prisma.user.findUnique({
    where: { id: session.id },
    include: {
      subscriptions: { orderBy: { endDate: "desc" } },
      memberships: { include: { course: true } },
    },
  });

  if (!user) return null;

  const comms = await prisma.communication.findMany({
    where: { OR: [{ userId: user.id }, { userId: null }] },
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  const sub = user.subscriptions[0];
  const status = sub ? subscriptionStatus(sub.endDate) : null;

  let pct = 0;
  if (sub) {
    const total = sub.endDate.getTime() - sub.startDate.getTime();
    const elapsed = Date.now() - sub.startDate.getTime();
    pct = total > 0 ? Math.min(100, Math.max(0, (elapsed / total) * 100)) : 0;
  }

  return (
    <div>
      {/* Saluto */}
      <div className="flex flex-col gap-2">
        <span className="eyebrow">La tua area</span>
        <h1 className="font-display text-[clamp(1.9rem,4vw,2.75rem)] u-ink">
          Bentornata/o, {user.firstName}
        </h1>
        <p className="u-body">
          Qui trovi il tuo abbonamento, i corsi attivi e le comunicazioni della
          scuola.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {/* Abbonamento */}
        <section className="panel p-7 lg:col-span-2">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold-deep">
                <CreditCard className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-xl u-ink">Il tuo abbonamento</h2>
                <p className="text-sm u-mute">
                  {sub ? `Piano ${sub.plan}` : "Nessun abbonamento attivo"}
                </p>
              </div>
            </div>
            {sub && status && <StatusBadge endDate={sub.endDate} />}
          </div>

          {sub ? (
            <>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl2 border bg-surface-2 p-4">
                  <p className="text-xs uppercase tracking-[0.12em] u-mute">Inizio</p>
                  <p className="mt-1.5 font-display text-lg u-ink">
                    {formatDate(sub.startDate)}
                  </p>
                </div>
                <div className="rounded-xl2 border bg-surface-2 p-4">
                  <p className="flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] u-mute">
                    <CalendarClock className="h-3.5 w-3.5" /> Scadenza
                  </p>
                  <p className="mt-1.5 font-display text-lg u-ink">
                    {formatDate(sub.endDate)}
                  </p>
                </div>
              </div>

              {/* Barra avanzamento */}
              <div className="mt-6">
                <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2">
                  <div
                    className="h-full rounded-full bg-gold-grad"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <p className="mt-2.5 text-sm u-body">
                  {status!.days >= 0
                    ? `Mancano ${status!.days} giorni alla scadenza.`
                    : `Scaduto da ${Math.abs(status!.days)} giorni.`}
                </p>
              </div>

              {status!.status !== "attivo" && (
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl2 border border-gold/25 bg-gold/[0.06] p-4">
                  <p className="text-sm u-body">
                    Per rinnovare l&apos;abbonamento contatta la segreteria.
                  </p>
                  <Button href="/contatti" variant="gold" size="sm">
                    Rinnova
                  </Button>
                </div>
              )}
            </>
          ) : (
            <p className="mt-6 u-body">
              Non risultano abbonamenti attivi. Contatta la segreteria per
              attivarne uno.
            </p>
          )}
        </section>

        {/* Dati personali */}
        <section className="panel p-7">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-majolica/30 bg-majolica/10 text-majolica-deep">
              <UserRound className="h-5 w-5" />
            </span>
            <h2 className="font-display text-xl u-ink">I tuoi dati</h2>
          </div>
          <dl className="mt-6 space-y-4 text-sm">
            <Row icon={UserRound} label="Nome">
              {user.firstName} {user.lastName}
            </Row>
            <Row icon={Mail} label="Email">
              {user.email}
            </Row>
            <Row icon={Phone} label="Telefono">
              {user.phone ?? "—"}
            </Row>
            <Row icon={Cake} label="Data di nascita">
              {user.birthDate ? formatDate(user.birthDate) : "—"}
            </Row>
          </dl>
        </section>

        {/* Corsi attivi */}
        <section className="panel p-7">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-terracotta/30 bg-terracotta/10 text-terracotta-deep">
              <GraduationCap className="h-5 w-5" />
            </span>
            <h2 className="font-display text-xl u-ink">I tuoi corsi</h2>
          </div>

          {user.memberships.length > 0 ? (
            <ul className="mt-6 space-y-4">
              {user.memberships.map((m) => (
                <li key={m.id} className="rounded-xl2 border bg-surface-2 p-4">
                  <p className="font-medium u-ink">{m.course.title}</p>
                  <p className="mt-1.5 flex items-center gap-2 text-sm u-body">
                    <Clock className="h-3.5 w-3.5 text-gold-deep" />
                    {m.course.schedule}
                  </p>
                  <p className="mt-1 text-sm u-mute">{m.course.teacher}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 u-body">Nessun corso attivo al momento.</p>
          )}

          <Link
            href="/corsi"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold-deep transition-colors hover:text-gold"
          >
            Esplora altri corsi <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        {/* Comunicazioni */}
        <section className="panel p-7 lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold-deep">
              <Megaphone className="h-5 w-5" />
            </span>
            <h2 className="font-display text-xl u-ink">Comunicazioni</h2>
          </div>

          {comms.length > 0 ? (
            <ul className="mt-6 space-y-4">
              {comms.map((c) => (
                <li
                  key={c.id}
                  className="rounded-xl2 border bg-surface-2 p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="flex items-center gap-2 font-medium u-ink">
                      <BellRing className="h-4 w-4 text-gold-deep" />
                      {c.title}
                    </p>
                    <span className="shrink-0 text-xs u-mute">
                      {formatDate(c.createdAt)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed u-body">{c.body}</p>
                  {c.userId === null && (
                    <span className="mt-3 inline-block rounded-full border border-majolica/30 bg-majolica/10 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-[0.12em] text-majolica-deep">
                      Avviso generale
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-6 u-body">Nessuna comunicazione al momento.</p>
          )}
        </section>
      </div>
    </div>
  );
}

function Row({
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
