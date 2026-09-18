import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { habitCompletions, habits, matrixData, weekDays } from "@/lib/mock-data";

export function WeeklyHabitMatrix() {
  return (
    <div className="df-scroll-thin overflow-x-auto">
      <div className="min-w-[640px]">
        <div className="grid grid-cols-[140px_repeat(7,1fr)_56px] items-center gap-2 border-b border-border pb-2.5 text-center text-[11px] font-medium text-muted-foreground">
          <span className="text-left">Habit</span>
          {weekDays.map(day => <span key={day}>{day}</span>)}
          <span>Rate</span>
        </div>
        {habits.map((habit, row) => {
          const completions = habitCompletions[row] ?? [];
          const rate = Math.round((completions.filter(Boolean).length / 7) * 100);
          return (
            <div key={habit.name} className="grid grid-cols-[140px_repeat(7,1fr)_56px] items-center gap-2 border-b border-border/60 py-2.5 last:border-0 transition-colors hover:bg-muted/40">
              <span className="truncate text-[13px] font-medium">{habit.name}</span>
              {weekDays.map((_, col) => {
                const done = completions[col] ?? false;
                return (
                  <span
                    key={col}
                    className={cn(
                      "mx-auto grid h-7 w-7 place-items-center rounded-md transition-colors",
                      done ? "bg-success-soft text-success-strong" : "bg-muted/60 text-muted-foreground/40",
                    )}
                    aria-label={done ? "Completed" : "Not completed"}
                  >
                    {done ? <Check className="h-3.5 w-3.5" /> : <Minus className="h-3 w-3" />}
                  </span>
                );
              })}
              <span className={cn("text-right text-xs font-semibold", rate >= 80 ? "text-success-strong" : "text-foreground")}>{rate}%</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function MonthlyHabitMatrix() {
  return (
    <div className="df-scroll-thin overflow-x-auto">
      <div className="min-w-[900px]">
        <div className="grid grid-cols-[120px_repeat(30,1fr)] gap-1 border-b border-border pb-2 text-center text-[10px] text-muted-foreground">
          <span className="text-left font-medium">September</span>
          {Array.from({ length: 30 }, (_, i) => <span key={i}>{i + 1}</span>)}
        </div>
        {matrixData.map(row => (
          <div key={row.name} className="grid grid-cols-[120px_repeat(30,1fr)] items-center gap-1 border-b border-border/50 py-2 last:border-0 transition-colors hover:bg-muted/30">
            <span className="truncate text-xs font-medium">{row.name}</span>
            {row.values.map((done, index) => (
              <span
                key={index}
                className={cn("mx-auto h-4 w-4 rounded-[4px] transition-colors", done ? "bg-primary/80" : "bg-muted")}
                title={`${row.name}, September ${index + 1}: ${done ? "complete" : "not complete"}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
