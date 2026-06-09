"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, UserRound } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // La home ha l'hero scuro: in cima la navbar è in modalità chiara (testo avorio).
  // Sulle altre pagine il contenuto è chiaro fin da subito.
  const onLightPage = pathname !== "/";
  const solid = scrolled || onLightPage;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        // modalità scura (testo chiaro) in cima alla home e quando il menu è aperto
        (!solid || open) && "on-dark",
        open
          ? "border-b border-gold/15 bg-scene"
          : solid
            ? "border-b border-gold/15 bg-cream/85 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container-x flex h-[4.75rem] items-center justify-between">
        <Logo />

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                data-active={isActive(link.href)}
                className="nav-link relative text-sm tracking-wide"
              >
                {link.label}
                {isActive(link.href) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-2 left-0 h-px w-full bg-gold"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/area-riservata" variant="ghost" size="sm">
            <UserRound className="h-4 w-4" />
            Area riservata
          </Button>
          <Button href="/iscrizione" variant="gold" size="sm">
            Iscriviti ora
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-full border border-gold/40 u-ink transition-colors hover:border-gold lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="on-dark fixed inset-0 top-[4.75rem] z-40 bg-scene lg:hidden"
          >
            <div className="container-x flex flex-col gap-2 py-8">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "block border-b border-white/5 py-4 font-display text-2xl",
                      isActive(link.href) ? "text-gold-light" : "text-ivory",
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-3">
                <Button href="/iscrizione" variant="gold" size="lg">
                  Iscriviti ora
                </Button>
                <Button href="/area-riservata" variant="outline" size="lg">
                  <UserRound className="h-4 w-4" />
                  Area riservata
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
