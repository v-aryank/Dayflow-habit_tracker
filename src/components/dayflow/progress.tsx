import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeader({ title, eyebrow, action }: { title: string; eyebrow?: string; action?: React.ReactNode }) {
  return <div className="mb-4 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-3"><div className="min-w-0">{eyebrow && <p className="mb-1 text-xs font-semibold uppercase text-primary">{eyebrow}</p>}<h2 className="truncate text-lg font-semibold text-foreground">{title}</h2></div>{action}</div>;
}

export function ProgressBar({ value, tone = "primary", className }: { value: number; tone?: "primary" | "success" | "lavender" | "warning"; className?: string }) {
  return <div className={cn("h-2 overflow-hidden rounded-full bg-muted", className)}><div className={cn("h-full rounded-full transition-all duration-700", tone === "primary" && "bg-primary", tone === "success" && "bg-success", tone === "lavender" && "bg-lavender", tone === "warning" && "bg-warning")} style={{ width: `${value}%` }} /></div>;
}

export function ProgressRing({ value, size = "md" }: { value: number; size?: "sm" | "md" | "lg" }) {
  const radius = 42; const circumference = 2 * Math.PI * radius;
  return <div className={cn("relative shrink-0", size === "sm" && "h-12 w-12", size === "md" && "h-20 w-20", size === "lg" && "h-28 w-28")}><svg className="h-full w-full -rotate-90" viewBox="0 0 100 100"><circle cx="50" cy="50" r={radius} fill="none" stroke="currentColor" strokeWidth="8" className="text-muted"/><circle cx="50" cy="50" r={radius} fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={circumference * (1 - value / 100)} className="text-primary transition-all duration-700"/></svg><span className={cn("absolute inset-0 grid place-items-center font-semibold", size === "sm" ? "text-xs" : "text-lg")}>{value}%</span></div>;
}

export function StatCard({ label, value, icon: Icon, featured, detail }: { label: string; value: string | number; icon: LucideIcon; featured?: boolean; detail?: string }) {
  return <article className={cn("surface-card min-w-0 p-4", featured && "border-primary/20 bg-primary-soft")}><div className="grid grid-cols-[minmax(0,1fr)_auto] gap-3"><div className="min-w-0"><p className="truncate text-sm text-muted-foreground">{label}</p><p className="mt-2 text-2xl font-semibold text-foreground">{value}</p>{detail && <p className="mt-1 flex items-center gap-1 text-xs font-medium text-success"><ArrowUpRight className="h-3 w-3"/>{detail}</p>}</div><span className={cn("grid h-9 w-9 shrink-0 place-items-center rounded-lg", featured ? "bg-primary text-primary-foreground" : "bg-muted text-primary")}><Icon className="h-4 w-4"/></span></div></article>;
}