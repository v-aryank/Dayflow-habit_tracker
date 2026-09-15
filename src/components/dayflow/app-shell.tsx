import { Link, useRouterState } from "@tanstack/react-router";
import { BarChart3, CalendarDays, CheckSquare2, ChevronLeft, CircleUserRound, Goal, History, LayoutDashboard, Menu, NotebookTabs, Settings, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";

const navigation = [
  { label:"Dashboard",to:"/",icon:LayoutDashboard }, { label:"Planner",to:"/planner",icon:NotebookTabs },
  { label:"Habits",to:"/habits",icon:CheckSquare2 }, { label:"Goals",to:"/goals",icon:Goal },
  { label:"Calendar",to:"/calendar",icon:CalendarDays }, { label:"Analytics",to:"/analytics",icon:BarChart3 },
  { label:"History",to:"/history",icon:History },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const [collapsed,setCollapsed]=useState(false); const pathname=useRouterState({select:s=>s.location.pathname});
  return <div className="min-h-screen bg-background md:grid" style={{gridTemplateColumns: collapsed ? "76px minmax(0,1fr)" : "244px minmax(0,1fr)"}}>
    <aside className={cn("fixed inset-y-0 left-0 z-40 hidden border-r border-sidebar-border bg-sidebar transition-[width] duration-200 md:flex md:flex-col",collapsed?"w-[76px]":"w-[244px]")}>
      <div className="grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 px-5"><Link to="/" className="flex min-w-0 items-center gap-3"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground"><Sparkles className="h-4 w-4"/></span>{!collapsed&&<span className="text-lg font-semibold">DayFlow</span>}</Link><Tooltip><TooltipTrigger asChild><Button variant="ghost" size="icon" onClick={()=>setCollapsed(v=>!v)} aria-label={collapsed?"Expand sidebar":"Collapse sidebar"}><ChevronLeft className={cn("transition-transform",collapsed&&"rotate-180")}/></Button></TooltipTrigger><TooltipContent side="right">{collapsed?"Expand":"Collapse"}</TooltipContent></Tooltip></div>
      <nav className="flex-1 space-y-1 px-3">{navigation.map(item=>{const active=pathname===item.to;return <Tooltip key={item.to}><TooltipTrigger asChild><Link to={item.to} className={cn("flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium transition-colors",active?"bg-sidebar-primary text-sidebar-primary-foreground":"text-sidebar-foreground hover:bg-sidebar-accent")}><item.icon className="h-[18px] w-[18px] shrink-0"/>{!collapsed&&<span>{item.label}</span>}</Link></TooltipTrigger>{collapsed&&<TooltipContent side="right">{item.label}</TooltipContent>}</Tooltip>})}</nav>
      <div className="border-t border-sidebar-border p-3"><Link to="/settings" className={cn("flex h-11 items-center gap-3 rounded-lg px-3 text-sm font-medium",pathname==="/settings"?"bg-sidebar-primary text-sidebar-primary-foreground":"hover:bg-sidebar-accent")}><Settings className="h-[18px] w-[18px] shrink-0"/>{!collapsed&&"Settings"}</Link></div>
    </aside>
    <div className={collapsed?"md:col-start-2":"md:col-start-2"}><MobileHeader/><main className="mx-auto min-h-screen max-w-[1600px] px-4 pb-24 pt-5 sm:px-6 md:px-8 md:pb-10 md:pt-7">{children}</main><MobileBottomNav pathname={pathname}/></div>
  </div>;
}

function MobileHeader(){return <header className="sticky top-0 z-30 grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center border-b border-border bg-background/95 px-4 backdrop-blur md:hidden"><Link to="/" className="flex min-w-0 items-center gap-2"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground"><Sparkles className="h-4 w-4"/></span><span className="font-semibold">DayFlow</span></Link><div className="flex items-center gap-1"><Button variant="ghost" size="icon" aria-label="Open menu"><Menu/></Button><CircleUserRound className="h-7 w-7 text-primary"/></div></header>}
function MobileBottomNav({pathname}:{pathname:string}){const mobile=[navigation[0],navigation[1],navigation[2],navigation[3],{label:"More",to:"/analytics",icon:BarChart3} as const];return <nav className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-5 border-t border-border bg-background px-2 pb-[max(.5rem,env(safe-area-inset-bottom))] pt-2 shadow-nav md:hidden">{mobile.map(item=><Link key={item.label} to={item.to} className={cn("flex flex-col items-center gap-1 text-[10px] font-medium",pathname===item.to?"text-primary":"text-muted-foreground")}><item.icon className="h-5 w-5"/><span>{item.label}</span></Link>)}</nav>}

export function PageHeader({ title, subtitle, actions }: { title:string; subtitle:string; actions?:React.ReactNode }) { return <header className="mb-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4"><div className="min-w-0"><h1 className="truncate text-2xl font-semibold text-foreground sm:text-3xl">{title}</h1><p className="mt-1 text-sm text-muted-foreground">{subtitle}</p></div>{actions}</header>; }