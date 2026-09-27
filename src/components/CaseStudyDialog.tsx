import { ExternalLink, Github } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ProjectVisual } from "@/components/ProjectVisual";
import type { Project } from "@/data/portfolio";

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border pt-5">
      <h4 className="eyebrow">{title}</h4>
      <div className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

export function CaseStudyDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const cs = project?.caseStudy;

  return (
    <Dialog open={!!project} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-h-[88vh] max-w-3xl overflow-y-auto border-border bg-popover">
        {project && cs ? (
          <>
            <DialogHeader>
              <p className="eyebrow">{project.category} · Case Study</p>
              <DialogTitle className="text-2xl leading-snug">{project.title}</DialogTitle>
              <DialogDescription className="text-sm leading-relaxed">{cs.overview}</DialogDescription>
            </DialogHeader>

            <div className="flex flex-wrap gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2 px-3.5 py-2 text-xs font-semibold"
              >
                <Github className="size-3.5" /> GitHub
              </a>
              {project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3.5 py-2 text-xs font-semibold text-accent"
                >
                  <ExternalLink className="size-3.5" /> Live Demo
                </a>
              ) : null}
            </div>

            <div className="mt-2 space-y-5">
              <Block title="Problem Statement">{cs.problem}</Block>
              <Block title="Solution">{cs.solution}</Block>
              <Block title="What It Does">{cs.whatItDoes}</Block>
              <Block title="Key Features">
                <ul className="space-y-1.5">
                  {cs.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="Technologies Used">
                <ul className="flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-border px-2 py-1 font-mono text-[0.66rem]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Block>
              <Block title="System Architecture / Workflow">
                <ProjectVisual project={project} />
              </Block>
              <Block title="Implementation">{cs.implementation}</Block>
              <Block title="Challenges">{cs.challenges}</Block>
              <Block title="Outcome">{cs.outcome}</Block>
              <Block title="My Contribution">{cs.contribution}</Block>
              <Block title="Future Improvements">
                <ul className="space-y-1.5">
                  {cs.future.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Block>
            </div>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
