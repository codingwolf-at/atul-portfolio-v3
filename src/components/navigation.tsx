import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems } from "@/lib/constants";
import { mergeClassNames } from "@/lib/utils";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#hero");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
      const ids = ["#hero", ...navItems.map((n) => n.href)];
      let current = "#hero";
      for (const id of ids) {
        const el = document.querySelector(id);
        if (!el) continue;
        const rect = (el as HTMLElement).getBoundingClientRect();
        if (rect.top <= 140) current = id;
      }
      setActive(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-custom">
        <div
          className={mergeClassNames(
            "mt-4 flex h-14 items-center justify-between rounded-2xl border px-3 pl-4 transition-all duration-300",
            scrolled ? "glass-card shadow-[var(--shadow-soft)]" : "border-transparent bg-transparent"
          )}
        >
          <a href="#hero" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Atul logo" width={32} height={32} className="h-8 w-8 rounded-full object-cover ring-1 ring-border" />
            <span className="text-sm font-semibold tracking-tight">atul<span className="text-muted-foreground">.dev</span></span>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Open to work
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={mergeClassNames(
                  "rounded-full px-3.5 py-2 text-sm transition-colors",
                  active === item.href ? "bg-accent text-foreground font-medium" : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.dispatchEvent(new Event("open-command-palette"))}
              className="hidden sm:inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              aria-label="Open command palette"
            >
              <Command className="h-3.5 w-3.5" />
              <span className="font-mono">K</span>
            </button>
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="md:hidden h-9 w-9" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 rounded-2xl border glass-card p-2 shadow-xl"
            >
              {[{ name: "Top", href: "#hero" }, ...navItems].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium hover:bg-accent"
                >
                  {item.name}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
