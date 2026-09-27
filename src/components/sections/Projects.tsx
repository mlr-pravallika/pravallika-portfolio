import { useMemo, useState } from "react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { CaseStudyDialog } from "@/components/CaseStudyDialog";
import { projectFilters, projects, type Project } from "@/data/portfolio";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");
  const [open, setOpen] = useState<Project | null>(null);

  const software = useMemo(
    () => projects.filter((p) => p.domain === "software" && (filter === "All" || p.category === filter)),
    [filter],
  );
  const hardware = useMemo(
    () => projects.filter((p) => p.domain === "hardware" && (filter === "All" || p.category === filter)),
    [filter],
  );

  return (
    <>
      <section id="projects" className="section-pad relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Featured Projects"
          subtitle="Engineering ideas into practical solutions."
        />

        <Reveal delay={0.05} className="mt-8">
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project filters">
            {projectFilters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                  filter === f
                    ? "border-primary/60 bg-primary/15 text-foreground"
                    : "border-border bg-surface/60 text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        {software.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {software.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <ProjectCard project={p} onOpen={setOpen} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-sm text-muted-foreground">
            No software projects in this category — see the hardware section below.
          </p>
        )}
      </section>

      <section id="hardware" className="section-pad relative mx-auto max-w-7xl px-4 pt-0 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hardware Track"
          title="Hardware, Embedded & VLSI Projects"
          subtitle="Exploring the intersection of digital systems, embedded intelligence and hardware design."
        />
        {hardware.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {hardware.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <ProjectCard project={p} onOpen={setOpen} />
              </Reveal>
            ))}
          </div>
        ) : (
          <p className="mt-10 text-sm text-muted-foreground">
            No hardware projects match this filter.
          </p>
        )}
      </section>

      <CaseStudyDialog project={open} onClose={() => setOpen(null)} />
    </>
  );
}
