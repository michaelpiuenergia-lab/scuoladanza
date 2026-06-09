import type { Metadata } from "next";
import { Phone, Mail, MapPin, CheckCircle2, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { EnrollmentForm } from "@/components/forms/EnrollmentForm";
import { getCourse } from "@/data/courses";
import { STEPS } from "@/data/content";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Iscrizione online",
  description:
    "Iscriviti ai corsi di danza della scuola Khaybullova a Bagheria. Compila il modulo: sarai ricontattato per la lezione di prova gratuita.",
};

export default async function IscrizionePage({
  searchParams,
}: {
  searchParams: Promise<{ corso?: string }>;
}) {
  const sp = await searchParams;
  const course = sp.corso ? getCourse(sp.corso) : undefined;

  return (
    <>
      <PageHero
        eyebrow="Iscrizione online"
        title={
          <>
            Unisciti alla nostra <span className="text-gold-gradient">scuola</span>
          </>
        }
        subtitle="Compila il modulo in pochi minuti. Riceveremo la tua richiesta e ti ricontatteremo per fissare la lezione di prova gratuita."
        crumbs={[{ label: "Home", href: "/" }, { label: "Iscrizione" }]}
      />

      <section className="py-20 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.45fr_1fr]">
          {/* Modulo */}
          <div>
            {course && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm text-gold-deep">
                <CheckCircle2 className="h-4 w-4" />
                Corso preselezionato: <strong className="font-semibold">{course.title}</strong>
              </div>
            )}
            <EnrollmentForm defaultCourse={course?.title} />
          </div>

          {/* Riepilogo / rassicurazioni */}
          <aside className="space-y-6">
            <div className="panel p-7">
              <h2 className="font-display text-xl u-ink">Come funziona</h2>
              <ol className="mt-5 space-y-5">
                {STEPS.map((s) => (
                  <li key={s.n} className="flex gap-4">
                    <span className="font-display text-lg text-gold-deep">{s.n}</span>
                    <div>
                      <p className="text-sm font-medium u-ink">{s.title}</p>
                      <p className="mt-1 text-sm u-body">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="panel p-7">
              <h2 className="font-display text-xl u-ink">Preferisci parlarci?</h2>
              <p className="mt-2 text-sm u-body">
                La segreteria è a tua disposizione per ogni domanda.
              </p>
              <ul className="mt-5 space-y-3.5 text-sm">
                <li>
                  <a href={SITE.phoneHref} className="flex items-center gap-3 u-body transition-colors hover:text-gold-deep">
                    <Phone className="h-4 w-4 text-gold-deep" /> {SITE.phone}
                  </a>
                </li>
                <li>
                  <a href={SITE.emailHref} className="flex items-center gap-3 u-body transition-colors hover:text-gold-deep">
                    <Mail className="h-4 w-4 text-gold-deep" /> {SITE.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 u-body">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep" /> {SITE.address.full}
                </li>
              </ul>
            </div>

            <div className="flex items-start gap-3 rounded-xl2 border border-majolica/20 bg-majolica/5 p-5 text-sm u-body">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-majolica" />
              I tuoi dati sono trattati con riservatezza e usati solo per
              ricontattarti in merito all&apos;iscrizione.
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
