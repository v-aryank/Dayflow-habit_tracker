import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeader({ title, eyebrow, action }: { title: string; eyebrow?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-3">
      <div className="min-w-0">
        {eyebrow && <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>}
        <h2 className="truncate text-base font-semibold text-foreground">{title}</h2>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function ProgressBar({ value, tone = "primary", className }: { value: number; tone?: "primary" | "success" | "lavender" | "warning"; className?: string }) {
  return (
    <div className={cn("h-2 overflow-hidden rounded-full bg-muted", className)}>
      <div
        className={cn("h-full rounded-full transition-all duration-700 ease-out", tone === "primary" && "bg-primary", tone === "success" && "bg-success", tone === "lavender" && "bg-lavender", tone === "warning" && "bg-warning")}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

const ringSizes = {
  sm: { box: "h-12 w-12", text: "text-[11px]", stroke: 6 },
  md: { box: "h-20 w-20", text: "text-lg", stroke: 8 },
  lg: { box: "h-28 w-28", text: "text-2xl", stroke: 8 },
} as const;

export function ProgressRing({ value, size = "md", tone = "primary" }: { value: number; size?: keyof typeof ringSizes; tone?: "primary" | "success" }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const sz = ringSizes[size];
  return (
    <div className={cn("relative shrink-0", sz.box)}>
      <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="currentColor" strokeWidth={sz.stroke} className="text-muted" />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={sz.stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - value / 100)}
          className={cn("transition-all duration-700 ease-out", tone === "primary" ? "text-primary" : "text-success")}
        />
      </svg>
      <span className={cn("absolute inset-0 grid place-items-center font-semibold text-foreground", sz.text)}>{value}%</span>
    </div>
  );
}

export function StatCard({ label, value, icon: Icon, featured, detail, trend }: {
  label: string;
  value: string | number;
  icon: LucideIcon;
  featured?: boolean;
  detail?: string;
  trend?: "up" | "down";
}) {
  return (
    <article className={cn("surface-card surface-card-hover min-w-0 p-4 hover:shadow-card-hover", featured && "border-primary/20 bg-primary-soft")}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-[13px] text-muted-foreground">{label}</p>
          <p className="mt-1.5 text-2xl font-semibold text-foreground">{value}</p>
          {detail && (
            <p className={cn("mt-1 flex items-center gap-1 text-xs font-medium", trend === "down" ? "text-destructive" : "text-success")}>
              {trend === "down" ? <ArrowDownRight className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3" />}
              {detail}
            </p>
          )}
        </div>
        <span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg transition-colors", featured ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-primary")}>
          <Icon className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}
