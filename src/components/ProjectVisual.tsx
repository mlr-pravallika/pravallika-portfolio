import type { Project } from "@/data/portfolio";

/** Project-specific technical visual built from the project's architecture data. */
export function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  const isPipeline = project.slug === "riscv-pipeline";

  if (isPipeline) {
    return (
      <div className="rounded-xl border border-border bg-surface/60 p-4">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
          Pipeline
        </p>
        <div className="mt-3 flex items-center gap-1.5">
          {project.architecture.map((stage, i) => (
            <div key={stage} className="flex min-w-0 flex-1 items-center gap-1.5">
              <span
                className="animate-node min-w-0 flex-1 truncate rounded-md border border-primary/40 bg-primary/10 px-1.5 py-2 text-center font-mono text-[0.68rem] text-accent"
                style={{ animationDelay: `${i * 0.35}s` }}
              >
                {stage}
              </span>
              {i < project.architecture.length - 1 ? (
                <span className="h-px w-2.5 shrink-0 bg-accent/60" aria-hidden="true" />
              ) : null}
            </div>
          ))}
        </div>
        {!compact ? (
          <div className="mt-3 grid grid-cols-3 gap-1.5 font-mono text-[0.62rem] text-muted-foreground">
            {["Hazard Detection Unit", "Forwarding Unit", "Pipeline Registers"].map((u) => (
              <span key={u} className="rounded-md border border-border bg-surface-2 px-2 py-1.5 text-center">
                {u}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-surface/60 p-4">
      <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
        {project.domain === "hardware" ? "Signal flow" : "Architecture"}
      </p>
      <ol className="mt-3 space-y-1.5">
        {project.architecture.map((step, i) => (
          <li key={step} className="flex items-center gap-2.5">
            <span
              className="animate-node size-1.5 shrink-0 rounded-full bg-accent"
              style={{ animationDelay: `${i * 0.3}s` }}
              aria-hidden="true"
            />
            <span className="font-mono text-[0.72rem] text-foreground/85">{step}</span>
            {i < project.architecture.length - 1 ? (
              <span className="trace-line ml-auto h-px w-10 shrink-0" aria-hidden="true" />
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
