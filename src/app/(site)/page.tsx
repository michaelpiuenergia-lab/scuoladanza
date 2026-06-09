import { Hero } from "@/components/home/Hero";
import { StatsBar } from "@/components/home/StatsBar";
import { SectionNav } from "@/components/home/SectionNav";
import { Pillars } from "@/components/home/Pillars";
import { CoursesPreview } from "@/components/home/CoursesPreview";
import { Method } from "@/components/home/Method";
import { Filosofia } from "@/components/home/Filosofia";
import { Heritage } from "@/components/home/Heritage";
import { Gallery } from "@/components/home/Gallery";
import { Sicilia } from "@/components/home/Sicilia";
import { Steps } from "@/components/home/Steps";
import { Plans } from "@/components/home/Plans";
import { Testimonials } from "@/components/home/Testimonials";
import { Faq } from "@/components/home/Faq";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <SectionNav />
      <Pillars />
      <CoursesPreview />
      <Method />
      <Filosofia />
      <Heritage />
      <Gallery />
      <Sicilia />
      <Steps />
      <Plans />
      <Testimonials />
      <Faq />
      <CtaBanner />
    </>
  );
}
