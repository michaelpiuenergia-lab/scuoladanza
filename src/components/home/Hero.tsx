"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight, Play, ChevronDown, MapPin, Crown, Sun } from "lucide-react";
import { Media } from "@/components/ui/Media";
import { Button } from "@/components/ui/Button";
import { MajolicaPattern, Limoni } from "@/components/ui/Ornament";
import { HERO } from "@/data/content";
import { PHOTOS } from "@/data/photos";

const HERO_IMG = PHOTOS.hero;

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="on-dark relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Sfondo cinematografico a tutto schermo — foto reale, nitida */}
      <Media
        src={HERO_IMG}
        alt="Ballerina in tutù sul palcoscenico di un teatro"
        accent="gold"
        overlay="none"
        className="absolute inset-0 z-0 bg-center"
      />
      {/* Velatura LEGGERA solo a sinistra (per leggere il testo) e un filo in
          basso: la foto resta luminosa e ben visibile, niente effetto scuro */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-scene/85 via-scene/45 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-scene/70 via-transparent to-transparent" />
      {/* Striscia scura morbida dietro la navbar, così il menu chiaro si legge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-32 bg-gradient-to-b from-scene/85 to-transparent" />

      {/* Glow caldi mediterranei, soffusi */}
      <div className="pointer-events-none absolute -left-40 top-24 z-0 h-96 w-96 rounded-full bg-gold/15 blur-[130px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 z-0 h-96 w-96 rounded-full bg-terracotta/15 blur-[130px]" />

      {/* Anima siciliana: trama di maiolica e un ramo di limoni */}
      <MajolicaPattern className="text-gold" opacity={0.08} />
      <Limoni className="pointer-events-none absolute -bottom-2 -right-4 z-0 h-44 w-44 rotate-[195deg] text-sun opacity-50 sm:bottom-10 sm:right-8 sm:h-60 sm:w-60" />

      <div className="container-x relative z-10 py-24 sm:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item}>
            <span className="eyebrow">
              <MapPin className="h-3.5 w-3.5" />
              {HERO.badge}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-[clamp(2.9rem,8vw,6rem)] font-medium leading-[0.95] text-ivory drop-shadow-[0_2px_30px_rgba(0,0,0,0.55)]"
          >
            {HERO.titleTop}
            <br />
            <span className="shimmer-line animate-shimmer italic">
              {HERO.titleHighlight}
            </span>{" "}
            <span className="text-ivory">{HERO.titleBottom}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ivory-dim drop-shadow-[0_1px_12px_rgba(0,0,0,0.5)]"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href={HERO.primaryCta.href} variant="gold" size="lg">
              {HERO.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={HERO.secondaryCta.href} variant="outline" size="lg">
              <Play className="h-4 w-4" />
              {HERO.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex items-center gap-3 text-sm text-ivory-dim/90"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-gold/70" />
              <span className="inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            Iscrizioni aperte · prima lezione di prova gratuita
          </motion.div>

          {/* Mini-firma: metodo + sede */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-gold/20 pt-7"
          >
            <span className="flex items-center gap-2 text-sm text-ivory-dim">
              <Crown className="h-4 w-4 text-majolica-light" />
              Tradizione russa · Vaganova
            </span>
            <span className="hidden h-4 w-px bg-gold/30 sm:block" />
            <span className="flex items-center gap-2 text-sm text-ivory-dim">
              <Sun className="h-4 w-4 text-sun-light" />
              Anima siciliana · Bagheria
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory-mute lg:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.25em]">Scorri</span>
        <ChevronDown className="h-4 w-4 animate-bounce text-gold-light" />
      </motion.div>
    </section>
  );
}
