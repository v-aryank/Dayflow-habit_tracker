import { useState } from "react";
import { CalendarCheck, Flame, ListChecks, Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { historyHighlights } from "@/lib/mock-data";
import { PageHeader } from "./app-shell";
import { SectionHeader } from "./progress";
import { MonthlyHabitMatrix } from "./habit-matrix";
import { WeeklyBarChart } from "./charts";

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <section className={cn("surface-card p-5", className)}>{children}</section>
);

const Segments = ({ items, active, onChange }: { items: string[]; active: string; onChange: (v: string) => void }) => (
  <div className="inline-flex rounded-lg bg-muted p-1">
    {items.map(item => (
      <Button key={item} size="sm" variant={active === item ? "default" : "ghost"} className="h-7 px-3 text-xs" onClick={() => onChange(item)}>{item}</Button>
    ))}
  </div>
);

const highlightIcons = [ListChecks, Flame, Medal, CalendarCheck];

export function HistoryPage() {
  const [period, setPeriod] = useState("Monthly");

  return (
    <>
      <PageHeader
        title="History"
        subtitle="Your progress, transformed into a useful record"
        actions={<Segments items={["Weekly", "Monthly", "Yearly"]} active={period} onChange={setPeriod} />}
      />

      <Card>
        <SectionHeader eyebrow="September" title="Habit completion matrix" />
        <MonthlyHabitMatrix />
      </Card>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <Card>
          <SectionHeader title="Past weekly performance" />
          <WeeklyBarChart />
        </Card>
        <Card>
          <SectionHeader title="Progress highlights" />
          <div className="space-y-3">
            {historyHighlights.map((item, i) => {
              const Icon = highlightIcons[i] ?? ListChecks;
              return (
                <div key={item.title} className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/40">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </>
  );
}
