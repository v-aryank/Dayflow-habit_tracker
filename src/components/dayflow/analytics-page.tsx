import { TrendingUp, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { analyticsHabitConsistency, analyticsPieData } from "@/lib/mock-data";
import { PageHeader } from "./app-shell";
import { ProgressBar, SectionHeader } from "./progress";
import { ProductivityLineChart, TaskPieChart, WeeklyBarChart } from "./charts";

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <section className={cn("surface-card p-5", className)}>{children}</section>
);

export function AnalyticsPage() {
  return (
    <>
      <PageHeader title="Analytics" subtitle="Understand your patterns and improve with clarity" />

      <div className="grid gap-5 xl:grid-cols-2">
        <Card>
          <SectionHeader eyebrow="Overall productivity" title="Last 5 weeks" />
          <ProductivityLineChart />
        </Card>
        <Card>
          <SectionHeader eyebrow="Weekly completion" title="Tasks completed" />
          <WeeklyBarChart />
        </Card>

        <Card>
          <SectionHeader title="Habit consistency" />
          <div className="space-y-4">
            {analyticsHabitConsistency.map(({ name, value }) => (
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
          <SectionHeader title="Task completion" />
          <div className="grid items-center gap-4 sm:grid-cols-[1fr_160px]">
            <TaskPieChart />
            <div className="space-y-3">
              {analyticsPieData.map(item => (
                <div key={item.name} className="flex items-center gap-2 text-sm">
                  <i className="h-2.5 w-2.5 rounded-full" style={{ background: item.color }} />
                  <span className="flex-1 text-foreground">{item.name}</span>
                  <b className="text-foreground">{item.value}%</b>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <Card>
          <SectionHeader title="Best productivity day" />
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-warning-soft text-warning-strong">
              <Trophy className="h-6 w-6" />
            </span>
            <div>
              <p className="text-2xl font-semibold text-foreground">Tuesday — 94%</p>
              <p className="text-sm text-muted-foreground">Your strongest focus and completion day</p>
            </div>
          </div>
        </Card>
        <Card>
          <SectionHeader title="Weekly comparison" />
          <div className="flex items-center gap-4">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-success-soft text-success-strong">
              <TrendingUp className="h-6 w-6" />
            </span>
            <div>
              <p className="text-2xl font-semibold text-foreground">+9.2%</p>
              <p className="text-sm text-muted-foreground">Improvement from the previous week</p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
