import { useState } from "react";
import { Download, ExternalLink, Mail, Phone, Send } from "lucide-react";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { personal, socialProfiles } from "@/data/portfolio";

export function Resume() {
  return (
    <section id="resume" className="section-pad relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Resume" title="Resume" />
      <Reveal delay={0.05} className="mt-8">
        <div className="glass flex flex-col items-start gap-5 rounded-2xl p-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            {personal.resumeUrl
              ? "Full resume with education, projects, skills and experience."
              : "The resume file isn't linked yet. Once the PDF is added, View and Download buttons appear here automatically."}
          </p>
          {personal.resumeUrl ? (
            <div className="flex flex-wrap gap-3">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm font-semibold"
              >
                <ExternalLink className="size-4" /> View Resume
              </a>
              <a
                href={personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                <Download className="size-4" /> Download Resume
              </a>
            </div>
          ) : null}
        </div>
      </Reveal>
    </section>
  );
}

export function Profiles() {
  return (
    <section className="section-pad relative mx-auto max-w-7xl px-4 pt-0 sm:px-6 lg:px-8">
      <SectionHeading eyebrow="Developer Profiles" title="Find Me Online" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {socialProfiles.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.05}>
            <a
              href={p.url}
              target="_blank"
              rel="noreferrer noopener"
              className="glass glass-hover flex items-center justify-between gap-4 rounded-2xl p-5"
            >
              <span>
                <span className="block text-sm font-semibold">{p.label}</span>
                <span className="mt-1 block font-mono text-xs text-muted-foreground">{p.handle}</span>
              </span>
              <ExternalLink className="size-4 text-accent" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

type Status = "idle" | "sending" | "error";
type FieldErrors = { name?: string; email?: string; subject?: string; message?: string };

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const values = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      subject: String(form.get("subject") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
    };
    const next: FieldErrors = {};
    if (values.name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = "Please enter a valid email address.";
    if (values.subject.length < 3) next.subject = "Please add a subject.";
    if (values.message.length < 10) next.message = "Please write a little more detail.";
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setStatus("error");
      return;
    }

    // No email backend is configured yet, so the message is handed to the
    // visitor's mail client instead of claiming a send that didn't happen.
    setStatus("sending");
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(
      values.subject,
    )}&body=${encodeURIComponent(body)}`;
    setTimeout(() => setStatus("idle"), 1200);
  };

  const field =
    "mt-2 w-full rounded-xl border border-input bg-surface/70 px-3.5 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary/60";

  return (
    <section id="contact" className="section-pad relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Meaningful"
        subtitle="Have an opportunity, project idea, or technical collaboration in mind? I'd love to connect."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Reveal>
          <form onSubmit={onSubmit} noValidate className="glass rounded-2xl p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input id="name" name="name" className={field} placeholder="Your name" autoComplete="name" />
                {errors.name ? <p className="mt-1.5 text-xs text-destructive">{errors.name}</p> : null}
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={field}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
                {errors.email ? <p className="mt-1.5 text-xs text-destructive">{errors.email}</p> : null}
              </div>
            </div>
            <div className="mt-5">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <input id="subject" name="subject" className={field} placeholder="What is this about?" />
              {errors.subject ? <p className="mt-1.5 text-xs text-destructive">{errors.subject}</p> : null}
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea id="message" name="message" rows={5} className={field} placeholder="Your message" />
              {errors.message ? <p className="mt-1.5 text-xs text-destructive">{errors.message}</p> : null}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              <Send className="size-4" />
              {status === "sending" ? "Opening your mail app…" : "Send Message"}
            </button>
            <p className="mt-3 text-xs text-muted-foreground">
              This opens your email app with the message ready to send, so nothing is lost. Connect an email
              service later to send directly from the site.
            </p>
          </form>
        </Reveal>

        <Reveal delay={0.08} className="space-y-4">
          <a
            href={`mailto:${personal.email}`}
            className="glass glass-hover flex items-center gap-4 rounded-2xl p-6"
          >
            <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface-2">
              <Mail className="size-4 text-accent" />
            </span>
            <span>
              <span className="block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                Email Me
              </span>
              <span className="mt-1 block break-all text-sm">{personal.email}</span>
            </span>
          </a>

          {personal.phone ? (
            <a
              href={`tel:${personal.phone.replace(/\s+/g, "")}`}
              className="glass glass-hover flex items-center gap-4 rounded-2xl p-6"
            >
              <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface-2">
                <Phone className="size-4 text-accent" />
              </span>
              <span>
                <span className="block font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
                  Call
                </span>
                <span className="mt-1 block text-sm">{personal.phone}</span>
              </span>
            </a>
          ) : null}

          <div className="glass rounded-2xl p-6">
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-4 space-y-2.5">
              {socialProfiles.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center justify-between text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {p.label}
                    <ExternalLink className="size-3.5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold">{personal.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{personal.title}</p>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground">
            Building across software, AI and intelligent hardware.
          </p>
        </div>
        <div className="lg:text-right">
          <ul className="flex flex-wrap gap-4 lg:justify-end">
            {socialProfiles.map((p) => (
              <li key={p.label}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {p.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${personal.email}`}
                className="text-sm text-muted-foreground transition-colors hover:text-accent"
              >
                Email
              </a>
            </li>
          </ul>
          <p className="mt-6 font-mono text-xs text-muted-foreground">© 2027 {personal.name}</p>
        </div>
      </div>
    </footer>
  );
}
