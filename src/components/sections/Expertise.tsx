import { Reveal, SectionHeading } from "@/components/Reveal";
import { expertise } from "@/data/portfolio";

export function Expertise() {
  return (
    <section id="expertise" className="section-pad relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Core Expertise"
        title="What I Work With"
        subtitle="Four working domains — software and AI lead the way, with digital hardware carrying equal professional weight."
      />

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {expertise.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.06}>
            <article
              className={`glass glass-hover group relative h-full overflow-hidden rounded-2xl p-7 ${
                pillar.emphasis ? "lg:p-9" : ""
              }`}
            >
              {pillar.emphasis ? (
                <div
                  className="absolute inset-x-0 top-0 h-px trace-line animate-flow"
                  aria-hidden="true"
                />
              ) : null}
              <h3
                className={`font-semibold ${pillar.emphasis ? "text-2xl" : "text-xl"}`}
              >
                {pillar.title}
              </h3>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">{pillar.blurb}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {pillar.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[0.7rem] text-foreground/80"
                  >
                    {tag}
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
