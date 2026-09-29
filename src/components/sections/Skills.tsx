import { useMemo, useState } from "react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { skillCategories, skills } from "@/data/portfolio";

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
        subtitle="Tools and technologies I actually work with, grouped by domain. Hover a chip for a short note on how I use it."
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
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((s) => (
                  <li key={s.name} className="group relative">
                    <span
                      tabIndex={0}
                      className="block cursor-default rounded-lg border border-border bg-surface-2 px-3 py-1.5 text-sm transition-colors group-hover:border-primary/50 group-hover:text-accent"
                    >
                      {s.name}
                      {s.level ? (
                        <span className="ml-2 inline-flex items-center gap-1.5 align-middle">
                          <span className="font-mono text-[0.66rem] uppercase tracking-wide text-accent">
                            {s.level.label}
                          </span>
                          <span className="relative inline-block h-1 w-10 overflow-hidden rounded-full bg-border align-middle">
                            <span
                              className="absolute inset-y-0 left-0 rounded-full bg-accent"
                              style={{ width: `${s.level.percent}%` }}
                              aria-hidden="true"
                            />
                          </span>
                          <span className="font-mono text-[0.66rem] text-muted-foreground">{s.level.percent}%</span>
                        </span>
                      ) : null}
                    </span>
                    <span
                      role="tooltip"
                      className="pointer-events-none absolute bottom-full left-0 z-20 mb-2 hidden w-52 rounded-lg border border-border bg-popover p-3 text-xs leading-relaxed text-muted-foreground shadow-lg group-hover:block group-focus-within:block"
                    >
                      {s.description}
                    </span>
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
