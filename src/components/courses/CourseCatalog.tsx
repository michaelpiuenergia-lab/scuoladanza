"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CourseCard } from "./CourseCard";
import { COURSES, COURSE_CATEGORIES } from "@/data/courses";
import { cn } from "@/lib/utils";

export function CourseCatalog() {
  const [active, setActive] = useState<string>("Tutti");
  const reduce = useReducedMotion();

  const filtered =
    active === "Tutti"
      ? COURSES
      : COURSES.filter((c) => c.category === active);

  return (
    <div>
      {/* Filtri categoria */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {COURSE_CATEGORIES.map((cat) => {
          const isActive = active === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              className={cn(
                "cursor-pointer rounded-full border px-4 py-2 text-sm transition-all duration-200",
                isActive
                  ? "border-transparent bg-gold-grad font-medium text-scene"
                  : "u-line u-body hover:border-gold/50 hover:text-gold-deep",
              )}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Griglia */}
      <motion.div
        layout={!reduce}
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((course) => (
            <motion.div
              key={course.slug}
              layout={!reduce}
              initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <CourseCard course={course} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center u-mute">Nessun corso in questa categoria.</p>
      )}
    </div>
  );
}
