"use client";
import { ResponsiveContainer, AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { trendData, weeklyData, analyticsPieData } from "@/lib/mock-data";

const tooltipStyle: React.CSSProperties = {
  borderRadius: 10,
  border: "1px solid var(--border)",
  boxShadow: "var(--shadow-popover)",
  fontSize: 12,
  padding: "8px 12px",
  background: "var(--card)",
};

const axisProps = {
  tickLine: false,
  axisLine: false,
  fontSize: 11,
  fill: "var(--muted-foreground)",
} as const;

const gridProps = {
  stroke: "var(--border)",
  vertical: false,
  strokeDasharray: "3 3",
} as const;

export function TrendChart({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "h-56" : "h-64"}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={trendData} margin={{ left: -20, right: 10, top: 10, bottom: 0 }}>
          <defs>
            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.18} />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="day" {...axisProps} />
          <YAxis {...axisProps} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: "var(--border)", strokeWidth: 1 }} />
          <Area type="monotone" dataKey="productivity" stroke="var(--primary)" strokeWidth={2.5} fill="url(#trendFill)" dot={{ r: 3, fill: "var(--primary)", strokeWidth: 0 }} activeDot={{ r: 5 }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function HabitLineChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer>
        <LineChart data={trendData} margin={{ left: -20, right: 10, top: 12, bottom: 0 }}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="day" {...axisProps} />
          <YAxis {...axisProps} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: "var(--border)", strokeWidth: 1 }} />
          <Line type="monotone" dataKey="habits" stroke="var(--success)" strokeWidth={2.5} dot={{ r: 3, fill: "var(--success)", strokeWidth: 0 }} activeDot={{ r: 5 }} />
          <Line type="monotone" dataKey="productivity" stroke="var(--lavender)" strokeWidth={2.5} dot={{ r: 3, fill: "var(--lavender)", strokeWidth: 0 }} activeDot={{ r: 5 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function WeeklyBarChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer>
        <BarChart data={weeklyData} margin={{ left: -20, right: 10, top: 12, bottom: 0 }}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="week" {...axisProps} />
          <YAxis {...axisProps} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ fill: "var(--muted)", fillOpacity: 0.4 }} />
          <Bar dataKey="completed" fill="var(--primary)" radius={[6, 6, 0, 0]} maxBarSize={36} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ProductivityLineChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer>
        <LineChart data={weeklyData} margin={{ left: -20, right: 10, top: 12, bottom: 0 }}>
          <CartesianGrid {...gridProps} />
          <XAxis dataKey="week" {...axisProps} />
          <YAxis {...axisProps} />
          <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: "var(--border)", strokeWidth: 1 }} />
          <Line type="monotone" dataKey="completed" stroke="var(--primary)" strokeWidth={3} dot={{ r: 4, fill: "var(--primary)", strokeWidth: 0 }} activeDot={{ r: 6 }} />
          <Line type="monotone" dataKey="previous" stroke="var(--muted-foreground)" strokeWidth={2} strokeDasharray="5 5" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function TaskPieChart() {
  return (
    <div className="h-48">
      <ResponsiveContainer>
        <PieChart>
          <Pie data={analyticsPieData} dataKey="value" innerRadius={52} outerRadius={75} paddingAngle={3} stroke="none">
            {analyticsPieData.map(item => <Cell key={item.name} fill={item.color} />)}
          </Pie>
          <Tooltip contentStyle={tooltipStyle} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
