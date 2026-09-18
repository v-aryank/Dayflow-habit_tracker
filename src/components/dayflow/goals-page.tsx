import { useState } from "react";
import { Check, MoreHorizontal, Plus, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { goals, goalMilestones } from "@/lib/mock-data";
import { PageHeader } from "./app-shell";
import { ProgressBar, SectionHeader } from "./progress";

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <section className={cn("surface-card p-5", className)}>{children}</section>
);

export function GoalsPage() {
  const [open, setOpen] = useState<number>(1);

  return (
    <>
      <PageHeader
        title="Goals"
        subtitle="Turn long-term ambitions into visible progress"
        actions={<Button><Plus className="h-4 w-4" />New Goal</Button>}
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {goals.map((goal, index) => {
          const isOpen = open === index;
          return (
            <article
              key={goal.title}
              className={cn(
                "surface-card surface-card-hover cursor-pointer p-5 transition hover:-translate-y-0.5 hover:shadow-card-hover",
                isOpen && "border-primary ring-2 ring-primary/10",
              )}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <div className="flex items-start justify-between">
                <span className={cn(
                  "grid h-10 w-10 place-items-center rounded-lg",
                  goal.color === "success" ? "bg-success-soft text-success-strong" :
                  goal.color === "lavender" ? "bg-lavender-soft text-lavender" :
                  "bg-primary-soft text-primary",
                )}>
                  <Target className="h-5 w-5" />
                </span>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground" aria-label="Goal options">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
              <h2 className="mt-4 text-base font-semibold text-foreground">{goal.title}</h2>
              <p className="mt-2 min-h-10 text-sm text-muted-foreground">{goal.description}</p>
              <div className="mt-4 flex justify-between text-sm">
                <span className="text-muted-foreground">{goal.done} of {goal.milestones} milestones</span>
                <b className="text-foreground">{goal.progress}%</b>
              </div>
              <ProgressBar
                value={goal.progress}
                tone={goal.color === "success" ? "success" : goal.color === "lavender" ? "lavender" : "primary"}
                className="mt-2"
              />
              <p className="mt-3 text-xs text-muted-foreground">Deadline · {goal.deadline}</p>
            </article>
          );
        })}
      </div>

      {open >= 0 && goals[open] && (
        <Card className="mt-5 df-animate-fade-up">
          <SectionHeader eyebrow="Goal details" title={goals[open].title} />
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {goalMilestones.map((m, i) => (
              <div key={m.name} className="flex items-center gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/40">
                <span className={cn(
                  "grid h-6 w-6 shrink-0 place-items-center rounded-full",
                  m.done ? "bg-success text-success-foreground" : "border border-border bg-card",
                )}>
                  {m.done && <Check className="h-3 w-3" />}
                </span>
                <span className={cn("text-sm", m.done ? "text-foreground" : "text-muted-foreground")}>{m.name}</span>
              </div>
            ))}
          </div>
        </Card>
      )}
    </>
  );
}
