import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, personal } from "@/data/portfolio";

export function Nav() {
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      setProgress(total > 0 ? (doc.scrollTop / total) * 100 : 0);
      setSolid(doc.scrollTop > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0.01, 0.2, 0.6] },
    );
    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-2 font-mono text-sm tracking-tight"
          aria-label="Back to top"
        >
          <span className="inline-flex size-7 items-center justify-center rounded-md border border-border bg-surface-2 text-xs text-accent">
            ML
          </span>
          <span className="hidden font-display text-sm font-semibold sm:inline">
            {personal.shortName.split(" ")[0]} {personal.shortName.split(" ").slice(-1)}
          </span>
        </button>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Sections">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              aria-current={active === item.id ? "true" : undefined}
              className={`relative rounded-md px-2.5 py-2 text-[0.8rem] transition-colors ${
                active === item.id
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
              {active === item.id ? (
                <span className="absolute inset-x-2 -bottom-px h-px bg-accent" aria-hidden="true" />
              ) : null}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => go("contact")}
            className="hidden rounded-lg border border-border bg-surface-2 px-3.5 py-2 text-xs font-medium transition-colors hover:border-primary/50 md:inline-flex"
          >
            Get in touch
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-9 items-center justify-center rounded-lg border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <div className="h-px w-full bg-border">
        <div
          className="h-px bg-accent transition-[width] duration-150"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
      </div>

      {open ? (
        <nav className="glass border-t border-border px-4 pb-5 pt-3 lg:hidden" aria-label="Sections">
          <ul className="grid grid-cols-2 gap-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={`w-full rounded-md px-3 py-2.5 text-left text-sm ${
                    active === item.id ? "bg-surface-2 text-accent" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
