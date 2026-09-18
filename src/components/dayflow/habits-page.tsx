import { useState } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight, Clock3, Code2, Dumbbell, Flame, GlassWater, Moon, BookOpen, Plus, Sparkles, TrendingUp, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { habits, habitsToReduce, monthDays } from "@/lib/mock-data";
import { PageHeader } from "./app-shell";
import { ProgressBar, SectionHeader, StatCard } from "./progress";
import { HabitLineChart } from "./charts";

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

const habitIcons = [Code2, BookOpen, Dumbbell, Flame, GlassWater, Moon];

export function HabitsPage() {
  const [states, setStates] = useState(habits.map(h => h.completed));
  const [period, setPeriod] = useState("Weekly");

  return (
    <>
      <PageHeader title="Habits" subtitle="Small actions, repeated with intention" />

      <div className="df-stagger grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Today's Progress" value="67%" icon={TrendingUp} featured detail="4% from last week" />
        <StatCard label="Active Habits" value="6" icon={Sparkles} />
        <StatCard label="Completed" value="4" icon={CheckCircle2} />
        <StatCard label="Left Today" value="2" icon={Clock3} />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.05fr_.95fr]">
        <div className="space-y-5">
          {/* Positive habits */}
          <Card>
            <SectionHeader
              eyebrow="Positive habits"
              title="Build more of what matters"
              action={<Button size="sm"><Plus className="h-4 w-4" />Add New</Button>}
            />
            <div className="space-y-3">
              {habits.slice(0, 3).map((habit, index) => {
                const Icon = habitIcons[index] ?? Flame;
                return (
                  <div key={habit.name} className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:border-success/20">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-success-soft text-success-strong">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">{habit.name}</p>
                      <p className="truncate text-xs text-muted-foreground">{habit.frequency} · {habit.streak} day streak</p>
                    </div>
                    <div className="hidden w-20 sm:block">
                      <ProgressBar value={habit.rate ?? 0} tone="success" />
                    </div>
                    <Checkbox
                      checked={states[index] ?? false}
                      onCheckedChange={() => setStates(s => s.map((v, i) => (i === index ? !v : v)))}
                    />
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Habits to reduce */}
          <Card className="border-lavender/20">
            <SectionHeader eyebrow="Habits to reduce" title="Create healthier limits" />
            <div className="space-y-3">
              {habitsToReduce.map(habit => (
                <div key={habit.name} className="flex items-center gap-3 rounded-lg border border-lavender/20 bg-lavender-soft/50 p-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-lavender-soft text-lavender">
                    <XCircle className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-foreground">{habit.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{habit.frequency} · {habit.streak} day improvement streak</p>
                  </div>
                  <div className="hidden text-right sm:block">
                    <p className="text-xs font-medium text-foreground">{habit.current}</p>
                    <p className="text-[11px] text-muted-foreground">{habit.target}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Calendar */}
        <Card>
          <SectionHeader
            title="September 2026"
            action={
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-7 w-7"><ChevronLeft className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="h-7 w-7"><ChevronRight className="h-4 w-4" /></Button>
              </div>
            }
          />
          <MiniCalendar />
        </Card>
      </div>

      {/* Progress over time */}
      <Card className="mt-5">
        <SectionHeader
          eyebrow="Habit progress over time"
          title="Your consistency is improving"
          action={<Segments items={["Weekly", "Monthly", "Yearly"]} active={period} onChange={setPeriod} />}
        />
        <div className="mb-4 grid gap-3 sm:grid-cols-3">
          {[["Current streak", "25 days"], ["Longest streak", "62 days"], ["Completed total", "215"]].map(([a, b]) => (
            <div key={a} className="rounded-lg bg-muted/70 p-3 text-center">
              <p className="text-lg font-semibold text-foreground">{b}</p>
              <p className="text-xs text-muted-foreground">{a}</p>
            </div>
          ))}
        </div>
        <HabitLineChart />
      </Card>
    </>
  );
}

function MiniCalendar({ selected = 15 }: { onSelect?: (n: number) => void; selected?: number }) {
  return (
    <div>
      <div className="grid grid-cols-7 py-3 text-center text-[11px] font-medium text-muted-foreground">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => <span key={d}>{d}</span>)}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {[...Array(2)].map((_, i) => <span key={`blank${i}`} />)}
        {monthDays.map(({ day, score }) => (
          <button
            key={day}
            className={cn(
              "relative grid aspect-square place-items-center rounded-lg text-xs transition-colors hover:bg-muted",
              selected === day && "bg-primary text-primary-foreground hover:bg-primary",
            )}
          >
            <span>{day}</span>
            {score > 0 && (
              <span className={cn(
                "absolute bottom-1 h-1 w-1 rounded-full",
                selected === day ? "bg-primary-foreground" : score >= 85 ? "bg-success" : score >= 65 ? "bg-warning" : "bg-destructive",
              )} />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
