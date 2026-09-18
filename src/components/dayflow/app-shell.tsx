import { Link, useRouterState } from "@tanstack/react-router";
import {
  BarChart3,
  Bell,
  CalendarDays,
  CheckSquare2,
  ChevronLeft,
  Goal,
  History,
  LayoutDashboard,
  MoreHorizontal,
  NotebookTabs,
  Settings,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigation = [
  { label: "Dashboard", to: "/", icon: LayoutDashboard },
  { label: "Planner", to: "/planner", icon: NotebookTabs },
  { label: "Habits", to: "/habits", icon: CheckSquare2 },
  { label: "Goals", to: "/goals", icon: Goal },
  { label: "Calendar", to: "/calendar", icon: CalendarDays },
  { label: "Analytics", to: "/analytics", icon: BarChart3 },
  { label: "History", to: "/history", icon: History },
] as const;

const mobileNav = navigation.slice(0, 4);

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });

  return (
    <div className="min-h-screen bg-background md:grid" style={{ gridTemplateColumns: collapsed ? "72px minmax(0,1fr)" : "248px minmax(0,1fr)" }}>
      {/* Desktop sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 hidden border-r border-sidebar-border bg-sidebar transition-[width] duration-200 md:flex md:flex-col",
        collapsed ? "w-[72px]" : "w-[248px]",
      )}>
        <div className="flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <Sparkles className="h-4 w-4" />
            </span>
            {!collapsed && <span className="truncate text-[17px] font-semibold tracking-tight">DayFlow</span>}
          </Link>
          {!collapsed && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground" onClick={() => setCollapsed(true)} aria-label="Collapse sidebar">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">Collapse</TooltipContent>
            </Tooltip>
          )}
        </div>

        <nav className="flex-1 space-y-0.5 px-3 pt-2">
          {navigation.map(item => {
            const active = pathname === item.to;
            return (
              <Tooltip key={item.to}>
                <TooltipTrigger asChild>
                  <Link
                    to={item.to}
                    className={cn(
                      "flex h-9 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors",
                      active
                        ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                        : "text-sidebar-foreground hover:bg-sidebar-accent",
                    )}
                  >
                    <item.icon className="h-[18px] w-[18px] shrink-0" />
                    {!collapsed && <span className="truncate">{item.label}</span>}
                  </Link>
                </TooltipTrigger>
                {collapsed && <TooltipContent side="right">{item.label}</TooltipContent>}
              </Tooltip>
            );
          })}
        </nav>

        <div className="border-t border-sidebar-border p-3">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                to="/settings"
                className={cn(
                  "flex h-9 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors",
                  pathname === "/settings" ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm" : "text-sidebar-foreground hover:bg-sidebar-accent",
                )}
              >
                <Settings className="h-[18px] w-[18px] shrink-0" />
                {!collapsed && <span>Settings</span>}
              </Link>
            </TooltipTrigger>
            {collapsed && <TooltipContent side="right">Settings</TooltipContent>}
          </Tooltip>
        </div>
      </aside>

      {/* Main content column */}
      <div className="md:col-start-2">
        <MobileHeader />
        <main className="mx-auto min-h-screen max-w-[1600px] px-4 pb-24 pt-5 sm:px-6 md:px-8 md:pb-12 md:pt-8">
          {children}
        </main>
        <MobileBottomNav pathname={pathname} />
      </div>
    </div>
  );
}

function MobileHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-border bg-background/95 px-4 backdrop-blur-md md:hidden">
      <Link to="/" className="flex min-w-0 items-center gap-2">
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
          <Sparkles className="h-3.5 w-3.5" />
        </span>
        <span className="text-[15px] font-semibold">DayFlow</span>
      </Link>
      <div className="flex items-center gap-1.5">
        <Button variant="ghost" size="icon" className="h-8 w-8" aria-label="Notifications">
          <Bell className="h-4 w-4" />
        </Button>
        <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-soft text-[13px] font-semibold text-primary">AK</span>
      </div>
    </header>
  );
}

function MobileBottomNav({ pathname }: { pathname: string }) {
  const moreActive = ["/calendar", "/analytics", "/history", "/settings"].includes(pathname);
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-border bg-background px-1 pb-[max(.5rem,env(safe-area-inset-bottom))] pt-2 shadow-nav md:hidden">
      {mobileNav.map(item => {
        const active = pathname === item.to;
        return (
          <Link key={item.to} to={item.to} className={cn("flex flex-col items-center gap-0.5 py-1 text-[10px] font-medium transition-colors", active ? "text-primary" : "text-muted-foreground")}>
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        );
      })}
      <Link to="/analytics" className={cn("flex flex-col items-center gap-0.5 py-1 text-[10px] font-medium transition-colors", moreActive ? "text-primary" : "text-muted-foreground")}>
        <MoreHorizontal className="h-5 w-5" />
        <span>More</span>
      </Link>
    </nav>
  );
}

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle: string; actions?: React.ReactNode }) {
  return (
    <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <h1 className="truncate text-xl font-semibold text-foreground sm:text-[26px]">{title}</h1>
        <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>
      </div>
      {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
    </header>
  );
}
