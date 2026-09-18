import { Bell, Monitor, Moon, Palette, Sliders, User } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { PageHeader } from "./app-shell";
import { SectionHeader } from "./progress";

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <section className={cn("surface-card p-5", className)}>{children}</section>
);

export function SettingsPage() {
  return (
    <>
      <PageHeader title="Settings" subtitle="Shape DayFlow around the way you work" />

      <div className="grid gap-5 lg:grid-cols-2">
        {/* Profile */}
        <Card>
          <SectionHeader title="Profile" />
          <div className="space-y-4">
            <Field label="Display name" value="Aryan Kabir" />
            <Field label="Email address" value="aryan@example.com" />
            <div>
              <span className="mb-1.5 block text-xs text-muted-foreground">Time zone</span>
              <Select defaultValue="utc6">
                <SelectTrigger className="h-10"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="utc6">Dhaka (UTC+6)</SelectItem>
                  <SelectItem value="utc0">London (UTC+0)</SelectItem>
                  <SelectItem value="utc-5">New York (UTC-5)</SelectItem>
                  <SelectItem value="utc-8">Los Angeles (UTC-8)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </Card>

        {/* Appearance */}
        <Card>
          <SectionHeader title="Appearance" />
          <div className="space-y-3">
            <ToggleRow label="Compact interface" desc="Reduce spacing for denser information display" defaultChecked={false} />
            <ToggleRow label="Reduce motion" desc="Minimize animations and transitions" defaultChecked={false} />
            <div className="grid grid-cols-3 gap-2 pt-2">
              {[
                { icon: Monitor, label: "System" },
                { icon: Palette, label: "Light" },
                { icon: Moon, label: "Dark" },
              ].map(({ icon: Icon, label }, i) => (
                <button
                  key={label}
                  className={cn(
                    "flex flex-col items-center gap-2 rounded-lg border p-3 text-xs font-medium transition-colors",
                    i === 1 ? "border-primary bg-primary-soft text-primary" : "border-border text-muted-foreground hover:bg-muted",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </Card>

        {/* Notifications */}
        <Card>
          <SectionHeader title="Notifications" />
          <div className="space-y-3">
            <ToggleRow label="Daily planning reminder" desc="Get reminded to plan your morning" defaultChecked icon={Bell} />
            <ToggleRow label="Habit reminders" desc="Gentle nudges throughout the day" defaultChecked />
            <ToggleRow label="Weekly review" desc="A Sunday summary of your week" defaultChecked />
          </div>
        </Card>

        {/* Productivity */}
        <Card>
          <SectionHeader title="Productivity preferences" />
          <div className="space-y-3">
            <ToggleRow label="Show weekends" desc="Display Saturday and Sunday in planner" defaultChecked />
            <ToggleRow label="Start week on Monday" desc="Use Monday as the first day of the week" defaultChecked />
            <ToggleRow label="Celebrate completions" desc="Small visual feedback when you finish tasks" defaultChecked icon={Sliders} />
          </div>
        </Card>

        {/* Data */}
        <Card className="lg:col-span-2">
          <SectionHeader title="Data preferences" />
          <div className="grid gap-3 sm:grid-cols-2">
            <ToggleRow label="Include habits in score" desc="Factor habit completion into your productivity score" defaultChecked />
            <ToggleRow label="Include goals in weekly summary" desc="Show goal progress in weekly reviews" defaultChecked />
          </div>
        </Card>
      </div>
    </>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs text-muted-foreground">{label}</span>
      <input
        className="h-10 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none transition focus:ring-2 focus:ring-ring"
        value={value}
        readOnly
      />
    </label>
  );
}

function ToggleRow({ label, desc, defaultChecked = false, icon: Icon }: { label: string; desc: string; defaultChecked?: boolean; icon?: typeof Bell }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-border p-3 transition-colors hover:bg-muted/40">
      <div className="flex items-start gap-3">
        {Icon && <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-md bg-muted text-muted-foreground"><Icon className="h-3.5 w-3.5" /></span>}
        <div>
          <p className="text-sm font-medium text-foreground">{label}</p>
          <p className="text-xs text-muted-foreground">{desc}</p>
        </div>
      </div>
      <Switch defaultChecked={defaultChecked} />
    </div>
  );
}
