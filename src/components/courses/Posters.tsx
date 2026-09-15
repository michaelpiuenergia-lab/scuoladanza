"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Maximize2, ArrowRight } from "lucide-react";
import { COURSES } from "@/data/courses";
import { cn } from "@/lib/utils";

type Poster = { src: string; title: string; slug: string };

// Le locandine ufficiali, prese dai corsi che ne hanno una. Una stessa
// locandina può coprire due corsi (moderna + hip hop): la mostro una volta sola.
function collectPosters(): Poster[] {
  const byPoster = new Map<string, Poster>();
  for (const c of [...COURSES].sort((a, b) => a.order - b.order)) {
    if (!c.poster) continue;
    const found = byPoster.get(c.poster);
    if (found) {
      // Stessa locandina per più corsi (moderna + hip hop): un solo riquadro,
      // ma la didascalia li nomina entrambi.
      found.title = `${found.title} · ${c.title}`;
      continue;
    }
    byPoster.set(c.poster, { src: c.poster, title: c.title, slug: c.slug });
  }
  return [...byPoster.values()];
}

/** Locandina a schermo intero, chiudibile con Esc o con un clic fuori. */
function Lightbox({
  poster,
  onClose,
}: {
  poster: Poster | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!poster) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    // Blocco lo scroll del sito mentre la locandina è aperta
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [poster, onClose]);

  // Il pannello va montato sul <body>: dentro la pagina finirebbe dentro un
  // contenitore con transform (le animazioni), e un position:fixed lì dentro
  // si ancora al contenitore invece che allo schermo.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {poster && (
        <motion.div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-scene/95 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Locandina ${poster.title}`}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Chiudi"
            className="absolute right-4 top-4 grid h-11 w-11 cursor-pointer place-items-center rounded-full border border-gold/40 bg-scene-800/80 text-gold-light transition-colors hover:border-gold hover:text-gold sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" />
          </button>

          <motion.img
            src={poster.src}
            alt={`Locandina del corso ${poster.title} — Centro Danza Khaybullova`}
            className="max-h-full w-auto max-w-full rounded-xl2 border border-gold/25 object-contain shadow-2xl"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

/** Una locandina cliccabile, sempre intera: mai ritagliata, il testo si legge. */
export function PosterFrame({
  src,
  title,
  className,
}: {
  src: string;
  title: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "group relative block w-full cursor-zoom-in overflow-hidden rounded-xl2 border border-gold/25 bg-scene-800 p-1.5 shadow-soft transition-all duration-300 hover:border-gold/60",
          className,
        )}
        aria-label={`Ingrandisci la locandina di ${title}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`Locandina del corso ${title} — Centro Danza Khaybullova`}
          loading="lazy"
          className="w-full rounded-[0.9rem] transition-transform duration-500 group-hover:scale-[1.02]"
        />
        <span className="pointer-events-none absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-gold/40 bg-scene/80 text-gold-light opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <Maximize2 className="h-4 w-4" />
        </span>
      </button>

      <Lightbox poster={open ? { src, title, slug: "" } : null} onClose={() => setOpen(false)} />
    </>
  );
}

/** Sezione "Le nostre locandine" — tutte le grafiche ufficiali dei corsi. */
export function PosterGrid() {
  const posters = collectPosters();
  const [active, setActive] = useState<Poster | null>(null);
  const reduce = useReducedMotion();

  return (
    <>
      {/* Muratura CSS: ogni locandina tiene il suo formato naturale */}
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
        {posters.map((p, i) => (
          <motion.figure
            key={p.src}
            className="break-inside-avoid"
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: reduce ? 0 : (i % 3) * 0.08 }}
          >
            <button
              type="button"
              onClick={() => setActive(p)}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl2 border border-gold/25 bg-scene-800 p-1.5 shadow-soft transition-all duration-300 hover:border-gold/60"
              aria-label={`Ingrandisci la locandina di ${p.title}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.src}
                alt={`Locandina del corso ${p.title} — Centro Danza Khaybullova`}
                loading="lazy"
                className="w-full rounded-[0.9rem] transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <span className="pointer-events-none absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-gold/40 bg-scene/80 text-gold-light opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="h-4 w-4" />
              </span>
            </button>

            <figcaption className="mt-3 flex items-center justify-between px-1">
              <span className="text-sm font-medium u-ink">{p.title}</span>
              <Link
                href={`/corsi/${p.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-deep transition-colors hover:text-gold"
              >
                Scopri
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <Lightbox poster={active} onClose={() => setActive(null)} />
    </>
  );
}
