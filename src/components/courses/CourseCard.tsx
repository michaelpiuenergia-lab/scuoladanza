import Link from "next/link";
import { Users, UserRound, ArrowRight } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { DynIcon } from "@/components/ui/DynIcon";
import type { Accent, Course } from "@/data/courses";
import { cn } from "@/lib/utils";

const ICON_RING: Record<Accent, string> = {
  gold: "border-gold/50 text-gold-light",
  terracotta: "border-terracotta/50 text-terracotta-light",
  majolica: "border-majolica/50 text-majolica-light",
  sun: "border-sun/50 text-sun-light",
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <article
      id={course.slug}
      className="panel ring-gold-hover group relative flex scroll-mt-28 flex-col overflow-hidden"
    >
      {/* Immagine */}
      <div className="relative h-52 overflow-hidden">
        <Media
          src={course.image}
          alt={`${course.title} — ${course.category}`}
          accent={course.accent}
          overlay="bottom"
          className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full border border-gold/50 bg-scene/75 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-gold-light backdrop-blur">
            {course.category}
          </span>
        </div>
        <div
          className={cn(
            "absolute -bottom-6 right-5 grid h-12 w-12 place-items-center rounded-full border bg-scene-800/90 backdrop-blur",
            ICON_RING[course.accent],
          )}
        >
          <DynIcon name={course.icon} className="h-5 w-5" />
        </div>
      </div>

      {/* Corpo */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-gold-deep">
          <span>{course.level}</span>
        </div>
        {/* Il titolo è il link che apre la scheda completa del corso
            (link "stirato" su tutta la card grazie ad after:absolute) */}
        <h3 className="mt-2 font-display text-2xl u-ink transition-colors group-hover:text-gold-deep">
          <Link
            href={`/corsi/${course.slug}`}
            className="after:absolute after:inset-0 after:content-['']"
          >
            {course.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed u-body">{course.short}</p>

        {/* Meta — solo dati reali (età e insegnante; niente orari inventati) */}
        <dl className="mt-5 space-y-2.5 text-sm u-body">
          <div className="flex items-center gap-2.5">
            <Users className="h-4 w-4 shrink-0 text-gold-deep" />
            <dd>{course.ageGroup}</dd>
          </div>
          <div className="flex items-center gap-2.5">
            <UserRound className="h-4 w-4 shrink-0 text-gold-deep" />
            <dd>{course.teacher}</dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center justify-between border-t pt-5">
          <Link
            href={`/iscrizione?corso=${course.slug}`}
            className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-gold-deep transition-colors hover:text-gold"
          >
            Iscriviti
          </Link>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium u-mute transition-colors group-hover:text-gold-deep">
            Scopri
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </article>
  );
}
