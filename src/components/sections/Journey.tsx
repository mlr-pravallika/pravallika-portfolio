import { Award, BadgeCheck, Building2, GraduationCap, Trophy } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { achievements, certifications, education, experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-pad relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Experience" title="Professional experience" />
      <div className="mt-12 max-w-3xl">
        <ol className="relative space-y-6 border-l border-border pl-6">
          {experience.map((e, i) => (
            <li key={`${e.role}-${i}`} className="relative">
              <span
                className="animate-node absolute -left-[1.6rem] top-6 size-2 rounded-full bg-accent"
                aria-hidden="true"
              />
              <Reveal>
                <article className="glass glass-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <Building2 className="size-4 text-accent" />
                    <h3 className="text-lg font-semibold">{e.role}</h3>
                    {e.duration ? (
                      <span className="ml-auto font-mono text-xs text-muted-foreground">{e.duration}</span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 text-sm text-foreground/85">{e.organization}</p>
                  {e.program ? (
                    <p className="mt-1 font-mono text-xs text-muted-foreground">{e.program}</p>
                  ) : null}
                  {e.description ? (
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
                  ) : null}
                  {e.responsibilities && e.responsibilities.length > 0 ? (
                    <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                      {e.responsibilities.map((r) => (
                        <li key={r} className="flex gap-2">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {e.technologies && e.technologies.length > 0 ? (
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {e.technologies.map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-border bg-surface-2 px-2 py-1 font-mono text-[0.66rem] text-muted-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="section-pad relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Education" title="Academic foundation" />
      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {education.map((e, i) => (
          <Reveal key={e.institution} delay={i * 0.06}>
            <article className="glass glass-hover h-full rounded-2xl p-6">
              <GraduationCap className="size-4 text-accent" />
              <h3 className="mt-4 text-base font-semibold leading-snug">{e.degree}</h3>
              <p className="mt-2 text-sm text-foreground/85">{e.institution}</p>
              <p className="mt-3 font-mono text-xs text-accent">{e.detail}</p>
              {e.status || e.period ? (
                <p className="mt-3 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground">
                  {[e.status, e.period].filter(Boolean).join(" · ")}
                </p>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="section-pad relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Certifications"
        title="Certifications"
        subtitle="NPTEL coursework including Elite grading. Credential links and dates can be added at any time."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {certifications.map((c, i) => (
          <Reveal key={c.name} delay={i * 0.06}>
            <article className="glass glass-hover h-full rounded-2xl p-6">
              <BadgeCheck className="size-4 text-accent" />
              <h3 className="mt-4 text-base font-semibold">{c.name}</h3>
              <p className="mt-2 font-mono text-xs text-muted-foreground">
                {[c.organization, c.date].filter(Boolean).join(" · ")}
              </p>
              {c.description ? (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
              ) : null}
              {c.credentialUrl ? (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-4 inline-block font-mono text-xs text-accent underline-offset-4 hover:underline"
                >
                  View credential
                </a>
              ) : null}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="section-pad relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Recognition" title="Achievements & Recognition" />
      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {achievements.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.05}>
            <article className="glass glass-hover flex h-full items-start gap-4 rounded-2xl p-6">
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2">
                {i % 2 === 0 ? (
                  <Trophy className="size-4 text-accent" />
                ) : (
                  <Award className="size-4 text-accent" />
                )}
              </span>
              <div>
                <h3 className="text-base font-semibold">{a.title}</h3>
                <p className="mt-1 font-mono text-xs text-muted-foreground">
                  {[a.organization, a.year].filter(Boolean).join(" · ")}
                </p>
                {a.description ? (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.description}</p>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
