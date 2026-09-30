import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Code2, Cpu } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { TechCanvas } from "@/components/TechCanvas";
import { personal, rotatingRoles } from "@/data/portfolio";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function RotatingRole() {
  const [i, setI] = useState(0);
  const reduced = useReducedMotion();
  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((v) => (v + 1) % rotatingRoles.length), 2600);
    return () => clearInterval(t);
  }, [reduced]);
  return (
    <span className="relative inline-flex h-[1.6em] items-center overflow-hidden align-bottom">
      <motion.span
        key={i}
        initial={reduced ? false : { y: "0.9em", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
        className="font-mono text-sm text-accent sm:text-base"
      >
        {rotatingRoles[i]}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pb-20 pt-28 lg:pb-28 lg:pt-36">
      <div className="hero-bg absolute inset-0 -z-20" aria-hidden="true" />
      <div className="grid-lines absolute inset-0 -z-20 opacity-60" aria-hidden="true" />
      <TechCanvas className="absolute inset-0 -z-10 h-full w-full" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8">
        <div>
          {personal.availabilityStatus ? (
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs backdrop-blur">
              <span className="animate-node size-1.5 rounded-full bg-accent" aria-hidden="true" />
              {personal.availabilityLabel}
            </div>
          ) : null}

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.7rem]">
            <span className="block text-muted-foreground text-lg font-normal font-mono sm:text-xl">Hi, I&apos;m</span>
            <span className="text-gradient mt-2 block">{personal.name}</span>
          </h1>

          <p className="mt-5 text-lg font-medium text-foreground/90 sm:text-xl">{personal.title}</p>
          <p className="mt-2 text-sm text-muted-foreground sm:text-base">{personal.tagline}</p>

          <div className="mt-5 flex items-center gap-3 text-muted-foreground">
            <span className="font-mono text-xs uppercase tracking-[0.18em]">Focus</span>
            <span className="h-px w-8 bg-border" aria-hidden="true" />
            <RotatingRole />
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            {personal.heroBio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            {personal.resumeUrl ? (
              <a
                href={personal.resumeDownloadUrl}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50"
              >
                <Download className="size-4" /> Download CV
              </a>
            ) : (
              <button
                onClick={() => scrollTo("resume")}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-5 py-3 text-sm font-semibold transition-colors hover:border-primary/50"
              >
                <Download className="size-4" /> Download CV
              </button>
            )}
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" /> Contact Me
            </button>
          </div>

          <div className="mt-8 flex items-center gap-4 text-muted-foreground">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="transition-colors hover:text-accent"
            >
              <Github className="size-5" />
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="transition-colors hover:text-accent"
            >
              <Linkedin className="size-5" />
            </a>
            <a
              href={personal.leetcode}
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-xs uppercase tracking-[0.18em] transition-colors hover:text-accent"
            >
              LeetCode
            </a>
          </div>
        </div>

        {/* Portrait + technology visual */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="animate-float relative mx-auto aspect-square w-[240px] sm:w-[300px] lg:w-[340px]">
            <div
              className="absolute inset-0 rounded-full border border-border"
              style={{ background: "var(--gradient-hero)" }}
              aria-hidden="true"
            />
            <div className="ring-glow absolute inset-3 overflow-hidden rounded-full border border-primary/40">
              <img
                src={personal.profileImage}
                alt={personal.profileAlt}
                width={680}
                height={680}
                loading="eager"
                className="size-full object-cover object-top"
              />
            </div>
            <div
              className="absolute -inset-4 rounded-full border border-dashed border-primary/25"
              aria-hidden="true"
            />
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="glass glass-hover rounded-2xl p-4">
              <Code2 className="size-4 text-accent" />
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                Software / AI
              </p>
              <p className="mt-1 text-sm">Applications, ML pipelines, Generative AI features</p>
            </div>
            <div className="glass glass-hover rounded-2xl p-4">
              <Cpu className="size-4 text-accent" />
              <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-muted-foreground">
                Embedded / VLSI
              </p>
              <p className="mt-1 text-sm">Firmware, sensors, Verilog RTL, RISC-V pipelines</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
