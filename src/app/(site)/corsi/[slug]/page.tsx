import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Check,
  Users,
  UserRound,
  Clock,
  BarChart3,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { Media } from "@/components/ui/Media";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { DynIcon } from "@/components/ui/DynIcon";
import { GoldDivider } from "@/components/ui/Ornament";
import { CourseCard } from "@/components/courses/CourseCard";
import { CtaBanner } from "@/components/home/CtaBanner";
import { COURSES, getCourse } from "@/data/courses";

export function generateStaticParams() {
  return COURSES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) return { title: "Corso non trovato" };
  return {
    title: course.title,
    description: course.short,
  };
}

export default async function CorsoDettaglioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  // Altri corsi della stessa categoria; in mancanza, i primi corsi disponibili
  const related = (() => {
    const same = COURSES.filter(
      (c) => c.category === course.category && c.slug !== course.slug,
    );
    const pool = same.length >= 3 ? same : COURSES.filter((c) => c.slug !== course.slug);
    return pool.slice(0, 3);
  })();

  const meta = [
    { icon: BarChart3, label: "Livello", value: course.level },
    { icon: Users, label: "Età", value: course.ageGroup },
    { icon: UserRound, label: "Insegnante", value: course.teacher },
    { icon: Clock, label: "Orari", value: "Da concordare in segreteria" },
  ];

  return (
    <>
      <PageHero
        eyebrow={course.category}
        title={course.title}
        subtitle={course.short}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Corsi", href: "/corsi" },
          { label: course.title },
        ]}
      />

      {/* Presentazione: immagine + scheda dati */}
      <section className="py-20 sm:py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.15fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-[1.6rem] border border-gold/20 p-1.5 shadow-soft">
              <Media
                src={course.image}
                alt={`${course.title} — Centro Danza Khaybullova`}
                accent={course.accent}
                overlay="soft"
                className="aspect-[4/3] w-full rounded-[1.3rem]"
              />
            </div>

            {/* Punti chiave */}
            <div className="mt-7 flex flex-wrap gap-2.5">
              {course.highlights.map((h) => (
                <Badge key={h} tone="gold">
                  {h}
                </Badge>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold-deep">
                  <DynIcon name={course.icon} className="h-6 w-6" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                  {course.category}
                </span>
              </div>

              <p className="mt-6 leading-relaxed u-body">{course.description}</p>

              <dl className="mt-7 grid gap-px overflow-hidden rounded-xl2 border bg-[var(--line)] sm:grid-cols-2">
                {meta.map((m) => (
                  <div key={m.label} className="flex items-start gap-3 bg-surface p-4">
                    <m.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold-deep" />
                    <div>
                      <dt className="text-xs uppercase tracking-[0.12em] u-mute">
                        {m.label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-medium u-ink">{m.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <Button
                href={`/iscrizione?corso=${course.slug}`}
                variant="gold"
                size="lg"
                className="mt-7 w-full"
              >
                Iscriviti a questo corso <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Racconto della disciplina + cosa si impara */}
      <section className="bg-surface-2 py-20 sm:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <span className="eyebrow">La disciplina</span>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,4vw,2.6rem)] leading-tight u-ink text-balance">
              Che cos&apos;è {course.title}
            </h2>
            <div className="mt-6 space-y-4">
              {course.story.map((p, i) => (
                <p key={i} className="leading-relaxed u-body">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="panel p-7 sm:p-8">
              <h3 className="font-display text-xl u-ink">Cosa imparerai</h3>
              <ul className="mt-6 space-y-4">
                {course.learn.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold/40 bg-gold/15 text-gold-deep">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed u-body">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Altri corsi */}
      <section className="py-20 sm:py-24">
        <div className="container-x">
          <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
            <div>
              <span className="eyebrow">Continua a esplorare</span>
              <h2 className="mt-4 font-display text-[clamp(1.7rem,4vw,2.5rem)] leading-tight u-ink">
                Altri corsi che potrebbero piacerti
              </h2>
            </div>
            <Link
              href="/corsi"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold-deep transition-colors hover:text-gold"
            >
              <ArrowLeft className="h-4 w-4" /> Torna a tutti i corsi
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>

          <GoldDivider className="mt-16" />
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
