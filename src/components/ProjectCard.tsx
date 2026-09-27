import { ExternalLink, Github, Layers } from "lucide-react";
import { ProjectVisual } from "@/components/ProjectVisual";
import type { Project } from "@/data/portfolio";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (p: Project) => void;
}) {
  return (
    <article className="glass glass-hover flex h-full flex-col overflow-hidden rounded-2xl p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[0.68rem] text-accent">
          {project.category}
        </span>
        {project.featured ? (
          <span className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-muted-foreground">
            Featured
          </span>
        ) : null}
      </div>

      <h3 className="mt-4 text-lg font-semibold leading-snug">{project.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

      <div className="mt-5">
        <ProjectVisual project={project} compact />
      </div>

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <li
            key={t}
            className="rounded-md border border-border px-2 py-1 font-mono text-[0.66rem] text-muted-foreground"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap items-center gap-2 pt-1">
        <button
          onClick={() => onOpen(project)}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground"
        >
          <Layers className="size-3.5" /> View Case Study
        </button>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-3.5 py-2 text-xs font-semibold transition-colors hover:border-primary/50"
        >
          <Github className="size-3.5" /> GitHub
        </a>
        {project.liveDemoUrl ? (
          <a
            href={project.liveDemoUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs font-semibold text-accent transition-colors hover:border-primary/50"
          >
            <ExternalLink className="size-3.5" /> Live Demo
          </a>
        ) : null}
      </div>
    </article>
  );
}
