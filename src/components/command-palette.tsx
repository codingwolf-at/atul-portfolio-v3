import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { ArrowUpRight, Search } from "lucide-react";
import { navItems, projects } from "@/lib/constants";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      } else if (
        e.key === "/" &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        setOpen(true);
      }
    }
    function onOpenPalette() {
      setOpen(true);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-command-palette", onOpenPalette);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-command-palette", onOpenPalette);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  function go(href: string) {
    setOpen(false);
    requestAnimationFrame(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-[14vh]" role="dialog" aria-modal="true" aria-label="Site search">
      <div
        className="absolute inset-0 bg-background/60 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <Command
        label="Site command palette"
        loop
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border bg-popover text-popover-foreground shadow-2xl"
      >
        <div className="flex items-center gap-2 border-b px-4">
          <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
          <Command.Input
            autoFocus
            placeholder="Go to section, project…"
            className="cmkd-input h-12 w-full bg-transparent text-[15px] font-sans normal-case tracking-normal outline-none border-0 ring-0 shadow-none placeholder:text-muted-foreground focus:outline-none focus-visible:outline-none focus:ring-0"
          />
          <kbd className="hidden shrink-0 sm:inline-flex items-center rounded border px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
            ESC
          </kbd>
        </div>
        <Command.List className="max-h-[320px] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-center text-sm normal-case tracking-normal text-muted-foreground">
            No results. Try “projects”.
          </Command.Empty>
          <Command.Group heading="Sections" className="px-2">
            {navItems.map((n) => (
              <Command.Item
                key={n.href}
                value={`section ${n.name}`}
                onSelect={() => go(n.href)}
                className="mt-1 flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 font-sans text-[15px] normal-case tracking-normal text-popover-foreground aria-selected:bg-accent"
              >
                <span>{n.name}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </Command.Item>
            ))}
          </Command.Group>
          <Command.Group heading="Projects" className="px-2">
            {projects.map((p) => (
              <Command.Item
                key={p.title}
                value={`project ${p.title}`}
                onSelect={() => {
                  setOpen(false);
                  window.open(p.liveUrl, "_blank");
                }}
                className="mt-1 flex cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2.5 font-sans text-[15px] normal-case tracking-normal text-popover-foreground aria-selected:bg-accent"
              >
                <span className="truncate">{p.title}</span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" />
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
        <div className="flex items-center justify-between border-t px-4 py-2.5 text-[11px] text-muted-foreground">
          <span className="font-mono">⌘K to toggle · / to open</span>
          <span className="font-mono">atul.dev</span>
        </div>
      </Command>
    </div>
  );
}
