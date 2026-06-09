"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ } from "@/data/content";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Domande frequenti"
          title={
            <>
              Tutto quello che
              <span className="text-gold-gradient"> c&apos;è da sapere</span>
            </>
          }
        />

        <Reveal className="mx-auto mt-14 max-w-3xl">
          <div className="divide-y overflow-hidden rounded-xl2 border bg-surface shadow-card">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-gold/5"
                  >
                    <span
                      className={cn(
                        "font-display text-lg transition-colors",
                        isOpen ? "text-gold-deep" : "u-ink",
                      )}
                    >
                      {item.q}
                    </span>
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/40 text-gold-deep transition-transform duration-300",
                        isOpen && "rotate-45",
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-[0.95rem] leading-relaxed u-body">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
