import { Download, ExternalLink } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { aboutCards, personal } from "@/data/portfolio";

export function ResumeStrip() {
  return (
    <section aria-label="Resume shortcut" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Reveal className="glass flex flex-col items-start justify-between gap-4 rounded-2xl p-6 sm:flex-row sm:items-center">
        <div>
          <p className="eyebrow">Curriculum Vitae</p>
          <p className="mt-2 text-lg font-medium">Want to know more about my experience?</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {personal.resumeUrl ? (
            <>
              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Download className="size-4" /> Download CV
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm font-semibold"
              >
                <ExternalLink className="size-4" /> View CV
              </a>
            </>
          ) : (
            <p className="max-w-xs text-sm text-muted-foreground">
              CV file not added yet — send me the PDF and it will appear here as Download and View buttons.
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section-pad relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="About Me"
        title="Software-first, technically versatile, hardware-aware."
      />
      <Reveal delay={0.05} className="mt-8 max-w-3xl">
        <p className="text-base leading-relaxed text-muted-foreground">{personal.about}</p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {aboutCards.map((card, i) => (
          <Reveal key={card.index} delay={i * 0.06}>
            <article className="glass glass-hover h-full rounded-2xl p-6">
              <span className="font-mono text-sm text-accent">{card.index}</span>
              <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1} className="mt-8">
        <ul className="flex flex-wrap gap-2">
          {[
            "Problem Solver",
            "Continuous Learner",
            "Research-oriented",
            "Hardware–Software Integration",
          ].map((t) => (
            <li
              key={t}
              className="rounded-full border border-border bg-surface/70 px-3 py-1.5 font-mono text-xs text-muted-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
