import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { monthDays } from "@/lib/mock-data";
import { PageHeader } from "./app-shell";
import { ProgressRing, SectionHeader } from "./progress";

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <section className={cn("surface-card p-5", className)}>{children}</section>
);

export function CalendarPage() {
  const [selected, setSelected] = useState(15);
  const score = monthDays[selected - 1]?.score ?? 0;

  return (
    <>
      <PageHeader
        title="Calendar"
        subtitle="September 2026"
        actions={
          <div className="flex gap-1">
            <Button variant="outline" size="icon" aria-label="Previous month"><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" aria-label="Next month"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        }
      />

      <div className="grid gap-5 xl:grid-cols-[1fr_340px]">
        <Card>
          <FullCalendar selected={selected} onSelect={setSelected} />
          <div className="mt-5 flex flex-wrap gap-4 text-xs text-muted-foreground">
            {[["bg-success", "Excellent"], ["bg-warning", "Average"], ["bg-destructive", "Low"], ["bg-muted-foreground", "No data"]].map(([c, l]) => (
              <span key={l} className="flex items-center gap-2">
                <i className={cn("h-2 w-2 rounded-full", c)} />
                {l}
              </span>
            ))}
          </div>
        </Card>

        <Card>
          <SectionHeader eyebrow={`September ${selected}`} title="Daily summary" />
          <div className="flex justify-center py-3">
            <ProgressRing value={score} size="lg" tone={score >= 75 ? "success" : "primary"} />
          </div>
          <div className="mt-4 space-y-3">
            {[
              ["Tasks completed", `${Math.round(score / 12)} of 8`],
              ["Habits completed", `${Math.round(score / 18)} of 6`],
              ["Focus time", `${Math.max(1, Math.round(score / 22))}h 20m`],
            ].map(([a, b]) => (
              <div key={a} className="flex justify-between rounded-lg bg-muted/70 p-3 text-sm">
                <span className="text-muted-foreground">{a}</span>
                <b className="text-foreground">{b}</b>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}

function FullCalendar({ selected, onSelect }: { selected: number; onSelect: (n: number) => void }) {
  return (
    <div>
      <div className="grid grid-cols-7 py-3 text-center text-[11px] font-medium text-muted-foreground">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => <span key={d}>{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {[...Array(2)].map((_, i) => <span key={`blank${i}`} />)}
        {monthDays.map(({ day, score }) => {
          const isSelected = selected === day;
          const isToday = day === 15;
          return (
            <button
              key={day}
              onClick={() => onSelect(day)}
              className={cn(
                "relative grid aspect-square place-items-center rounded-lg text-sm transition-all hover:ring-2 hover:ring-primary/10",
                isSelected ? "bg-primary text-primary-foreground shadow-sm" : isToday ? "bg-primary-soft text-primary font-semibold" : "hover:bg-muted",
              )}
            >
              <span>{day}</span>
              {score > 0 && !isSelected && (
                <span className={cn(
                  "absolute bottom-1.5 h-1.5 w-1.5 rounded-full",
                  score >= 85 ? "bg-success" : score >= 65 ? "bg-warning" : "bg-destructive",
                )} />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
