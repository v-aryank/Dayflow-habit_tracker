import { Bell, CheckCircle2, Clock3, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "./app-shell";
import { ProgressBar, ProgressRing, SectionHeader, StatCard } from "./progress";
import { TrendChart } from "./charts";
import { WeeklyHabitMatrix } from "./habit-matrix";
import { goals, topHabits, weeklyHighlights } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <section className={cn("surface-card p-5", className)}>{children}</section>
);

export function DashboardPage() {
  return (
    <>
      <PageHeader
        title="Good evening, Aryan"
        subtitle="Tuesday, September 15"
        actions={
          <div className="hidden items-center gap-2 sm:flex">
            <Button variant="outline" size="icon" aria-label="Notifications">
              <Bell className="h-4 w-4" />
            </Button>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary-soft text-[13px] font-semibold text-primary">AK</span>
          </div>
        }
      />

      {/* Summary stat cards */}
      <div className="df-stagger grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Today's Progress" value="78%" icon={TrendingUp} featured detail="6% from yesterday" />
        <StatCard label="Active Habits" value={6} icon={Sparkles} />
        <StatCard label="Completed Tasks" value={8} icon={CheckCircle2} detail="2 more than average" />
        <StatCard label="Remaining" value={3} icon={Clock3} />
      </div>

      {/* Weekly progress + Productivity trend */}
      <div className="mt-5 grid gap-5 xl:grid-cols-[1.15fr_.85fr]">
        <Card className="df-animate-fade-up">
          <SectionHeader eyebrow="Weekly progress" title="You're building momentum" />
          <div className="flex items-center gap-5">
            <ProgressRing value={81} size="lg" />
            <div className="min-w-0 flex-1">
              <p className="text-3xl font-semibold text-foreground">81%</p>
              <p className="mt-1 text-sm text-muted-foreground">Overall completion this week</p>
              <ProgressBar value={81} className="mt-4" />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[["Tasks", "31 / 38"], ["Remaining", "7"], ["Habits", "86%"], ["Goals", "68%"]].map(([a, b]) => (
              <div key={a} className="rounded-lg bg-muted/70 p-3">
                <p className="text-xs text-muted-foreground">{a}</p>
                <p className="mt-1 font-semibold text-foreground">{b}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card className="df-animate-fade-up">
          <SectionHeader eyebrow="Productivity trend" title="Last 7 days" />
          <TrendChart compact />
        </Card>
      </div>

      {/* Weekly habit overview */}
      <Card className="mt-5 df-animate-fade-up">
        <SectionHeader eyebrow="Weekly habit overview" title="Consistency at a glance" />
        <WeeklyHabitMatrix />
      </Card>

      {/* Top habits, Goals, Weekly summary */}
      <div className="mt-5 grid gap-5 lg:grid-cols-3">
        <Card>
          <SectionHeader title="Top habits" />
          <div className="space-y-4">
            {topHabits.map(({ name, value }) => (
              <div key={name}>
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-foreground">{name}</span>
                  <b className="text-foreground">{value}%</b>
                </div>
                <ProgressBar value={value} tone="success" />
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <SectionHeader title="Goals" />
          <div className="space-y-4">
            {goals.map(goal => (
              <div key={goal.title}>
                <div className="mb-2 flex justify-between gap-3 text-sm">
                  <span className="truncate text-foreground">{goal.title}</span>
                  <b className="text-foreground">{goal.progress}%</b>
                </div>
                <ProgressBar value={goal.progress} tone={goal.color === "success" ? "success" : goal.color === "lavender" ? "lavender" : "primary"} />
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <SectionHeader title="This week" />
          <div className="grid grid-cols-2 gap-3">
            {weeklyHighlights.map(({ label, value }) => (
              <div key={label} className="rounded-lg bg-muted/70 p-3">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </>
  );
}
