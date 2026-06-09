import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { STATS } from "@/data/content";

export function StatsBar() {
  return (
    <section className="relative border-y bg-surface-2">
      <div className="container-x py-12">
        <RevealGroup className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {STATS.map((s, i) => (
            <RevealItem
              key={s.label}
              className={`flex flex-col items-center text-center md:px-6 ${
                i !== 0 ? "md:border-l" : ""
              }`}
            >
              <span className="stat-num font-display text-[clamp(2rem,4vw,3rem)] leading-none">
                {s.value}
              </span>
              <span className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-gold-deep">
                {s.label}
              </span>
              <span className="mt-1.5 text-xs u-mute">{s.sub}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
