import {
  Feather,
  GraduationCap,
  Heart,
  Camera,
  Sun,
  CreditCard,
  HelpCircle,
} from "lucide-react";

const LINKS = [
  { href: "#corsi", label: "Corsi", icon: Feather },
  { href: "#metodo", label: "Metodo", icon: GraduationCap },
  { href: "#filosofia", label: "Filosofia", icon: Heart },
  { href: "#galleria", label: "Galleria", icon: Camera },
  { href: "#heritage", label: "Russia & Sicilia", icon: Sun },
  { href: "#abbonamenti", label: "Abbonamenti", icon: CreditCard },
  { href: "#faq", label: "Domande", icon: HelpCircle },
];

export function SectionNav() {
  return (
    <nav
      aria-label="Naviga nella pagina"
      className="relative z-20 border-b border-gold/12 bg-surface-2"
    >
      <div className="container-x flex items-center gap-2 overflow-x-auto py-3.5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden lg:justify-center">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-transparent px-4 py-2 text-sm u-body transition-colors hover:border-gold/40 hover:bg-gold/10 hover:text-gold-deep"
          >
            <l.icon className="h-4 w-4 text-gold-deep" />
            {l.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
