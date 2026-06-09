import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "@/components/courses/CourseCard";
import { COURSES } from "@/data/courses";

export function CoursesPreview() {
  const featured = COURSES.filter((c) => c.highlight).slice(0, 3);

  return (
    <section id="corsi" className="relative bg-surface-2 py-16 sm:py-28">
      <div className="container-x">
        <div className="flex flex-col items-end justify-between gap-8 md:flex-row">
          <SectionHeading
            align="left"
            eyebrow="I nostri corsi"
            title={
              <>
                Trova il tuo
                <span className="text-gold-gradient"> palcoscenico</span>
              </>
            }
            subtitle="Dai primi passi dei più piccoli al repertorio sulle punte, fino alla danza moderna e contemporanea: un percorso per ogni età e ogni livello."
            className="max-w-xl"
          />
          <Button href="/corsi" variant="outline" className="shrink-0">
            Tutti i corsi
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((course) => (
            <RevealItem key={course.slug}>
              <CourseCard course={course} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
