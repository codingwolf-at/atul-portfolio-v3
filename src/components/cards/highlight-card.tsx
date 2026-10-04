import { LucideIcon } from "lucide-react";

export interface HighlightCardProps {
  highlight: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
}

export function HighlightCard({ highlight: h }: HighlightCardProps) {
  return (
    <div className="group h-full rounded-2xl border bg-card p-6 card-hover">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border bg-accent">
        <h.icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-semibold tracking-tight">{h.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.description}</p>
    </div>
  );
}
