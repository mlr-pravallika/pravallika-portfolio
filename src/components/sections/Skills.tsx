import { useMemo, useState } from "react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { levelLabel, skillCategories, skills } from "@/data/portfolio";

export function Skills() {
  const [active, setActive] = useState<string>("All");
  const categories = useMemo(() => ["All", ...skillCategories], []);
  const grouped = useMemo(
    () =>
      skillCategories
        .filter((c) => active === "All" || c === active)
        .map((c) => ({ category: c, items: skills.filter((s) => s.category === c) }))
        .filter((g) => g.items.length > 0),
    [active],
  );

  return (
    <section id="skills" className="section-pad relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Skills"
        title="Technology ecosystem"
        subtitle="Tools and technologies I actually work with, grouped by domain, with my self-assessed proficiency level for each."
      />

      <Reveal delay={0.05} className="mt-8">
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Skill categories">
          {categories.map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={active === c}
              onClick={() => setActive(c)}
              className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                active === c
                  ? "border-primary/60 bg-primary/15 text-foreground"
                  : "border-border bg-surface/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {grouped.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <article className="glass glass-hover h-full rounded-2xl p-6">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-base font-semibold">{group.category}</h3>
                <span className="font-mono text-xs text-muted-foreground">
                  {String(group.items.length).padStart(2, "0")}
                </span>
              </div>
              <div className="trace-line mt-4 h-px w-full" aria-hidden="true" />
              <ul className="mt-5 space-y-4">
                {group.items.map((s) => (
                  <li key={s.name} title={s.description}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-sm">{s.name}</span>
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-muted-foreground">
                        {levelLabel(s.level)} · {s.level}%
                      </span>
                    </div>
                    <div
                      className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-surface-2"
                      role="img"
                      aria-label={`${s.name}: ${levelLabel(s.level)}, ${s.level} percent`}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
