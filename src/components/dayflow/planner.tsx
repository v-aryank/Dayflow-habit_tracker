import { useState } from "react";
import { Check, ChevronLeft, ChevronRight, Clock, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { habits, weekDays, weekTasks, type Task } from "@/lib/mock-data";
import { PageHeader } from "./app-shell";
import { ProgressBar, SectionHeader } from "./progress";
import { Checkbox } from "@/components/ui/checkbox";
import { Code2, Dumbbell, Flame, GlassWater, Moon, BookOpen } from "lucide-react";

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <section className={cn("surface-card p-5", className)}>{children}</section>
);

const habitIcons = [Code2, BookOpen, Dumbbell, Flame, GlassWater, Moon];

export function PlannerPage() {
  const [selected, setSelected] = useState<string>("Tue");
  const [tasks, setTasks] = useState(weekTasks);

  const addTask = () =>
    setTasks(v => ({ ...v, [selected]: [...(v[selected] ?? []), { title: "New focus task", completed: false }] }));

  const toggleTask = (title: string) =>
    setTasks(v => ({
      ...v,
      [selected]: (v[selected] ?? []).map(t => (t.title === title ? { ...t, completed: !t.completed } : t)),
    }));

  const selectedIndex = weekDays.indexOf(selected as typeof weekDays[number]);
  const dayLabel = selected === "Tue" ? "Tuesday, September 15" : `${selected}, September ${14 + selectedIndex}`;

  return (
    <>
      <PageHeader
        title="Planner"
        subtitle="September 14 — 20, 2026"
        actions={
          <div className="flex gap-1">
            <Button variant="outline" size="icon" aria-label="Previous week"><ChevronLeft className="h-4 w-4" /></Button>
            <Button variant="outline" size="icon" aria-label="Next week"><ChevronRight className="h-4 w-4" /></Button>
          </div>
        }
      />

      {/* Seven-day columns */}
      <div className="df-scroll-thin overflow-x-auto pb-2">
        <div className="grid min-w-[1050px] grid-cols-7 gap-3">
          {weekDays.map((day, index) => {
            const dayTasks = tasks[day] ?? [];
            const done = dayTasks.filter(t => t.completed).length;
            const pct = dayTasks.length ? Math.round((done / dayTasks.length) * 100) : 0;
            const isToday = day === "Tue";
            const isSelected = selected === day;
            return (
              <button
                key={day}
                onClick={() => setSelected(day)}
                className={cn(
                  "surface-card surface-card-hover min-h-64 p-4 text-left transition hover:shadow-card-hover",
                  isSelected && "border-primary ring-2 ring-primary/10",
                  isToday && !isSelected && "border-primary/30",
                )}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className={cn("text-[11px] font-semibold uppercase", isToday ? "text-primary" : "text-muted-foreground")}>{day}</p>
                    <p className="mt-0.5 text-xl font-semibold text-foreground">{14 + index}</p>
                  </div>
                  <span className={cn("text-xs font-semibold", dayTasks.length ? "text-primary" : "text-muted-foreground")}>{pct}%</span>
                </div>
                <ProgressBar value={pct} className="my-3.5" />
                <div className="space-y-2">
                  {dayTasks.map(task => (
                    <TaskChip key={task.title} task={task} />
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail panel */}
      <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_.8fr]">
        <Card>
          <SectionHeader
            eyebrow="Today's tasks"
            title={dayLabel}
            action={<Button size="sm" onClick={addTask}><Plus className="h-4 w-4" />Add Task</Button>}
          />
          <div className="space-y-2">
            {(tasks[selected] ?? []).map(task => (
              <TaskRow key={task.title} task={task} onToggle={() => toggleTask(task.title)} />
            ))}
            {(tasks[selected] ?? []).length === 0 && (
              <div className="rounded-lg border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
                No tasks yet. Add one to get started.
              </div>
            )}
          </div>
        </Card>

        <Card>
          <SectionHeader eyebrow="Habits" title="Daily rhythm" />
          <div className="space-y-3">
            {habits.slice(0, 5).map((habit, i) => {
              const Icon = habitIcons[i] ?? Flame;
              return (
                <div key={habit.name} className="flex items-center gap-3 rounded-lg border border-border p-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-success-soft text-success-strong">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">{habit.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{habit.frequency} · {habit.streak} day streak</p>
                  </div>
                  <Checkbox checked={habit.completed} />
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </>
  );
}

function TaskChip({ task }: { task: Task }) {
  return (
    <div className="flex items-center gap-2 rounded-md border border-border bg-card p-2">
      <span className={cn("grid h-4 w-4 shrink-0 place-items-center rounded-full border", task.completed ? "border-success bg-success text-success-foreground" : "border-border")}>
        {task.completed && <Check className="h-2.5 w-2.5" />}
      </span>
      <span className={cn("min-w-0 flex-1 truncate text-xs", task.completed ? "text-muted-foreground line-through" : "text-foreground")}>{task.title}</span>
      {task.priority && <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", task.priority === "high" ? "bg-destructive" : "bg-warning")} />}
    </div>
  );
}

function TaskRow({ task, onToggle }: { task: Task; onToggle: () => void }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:border-primary/20">
      <button onClick={onToggle} className={cn("grid h-5 w-5 shrink-0 place-items-center rounded-full border transition-colors", task.completed ? "border-success bg-success text-success-foreground" : "border-border hover:border-primary")}>
        {task.completed && <Check className="h-3 w-3" />}
      </button>
      <span className={cn("min-w-0 flex-1 truncate text-sm", task.completed && "text-muted-foreground line-through")}>{task.title}</span>
      {task.time && (
        <span className="flex shrink-0 items-center gap-1 text-xs text-muted-foreground">
          <Clock className="h-3 w-3" />
          {task.time}
        </span>
      )}
      {task.priority && <span className={cn("h-2 w-2 shrink-0 rounded-full", task.priority === "high" ? "bg-destructive" : "bg-warning")} />}
    </div>
  );
}
