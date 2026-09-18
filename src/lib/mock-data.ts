export type Task = { title: string; completed: boolean; priority?: "high" | "medium"; time?: string };
export type Habit = {
  name: string;
  frequency: string;
  streak: number;
  completed: boolean;
  tone?: "positive" | "reduce";
  icon?: string;
  goal?: string;
  rate?: number;
};

export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;
export const fullWeekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;

export const habits: Habit[] = [
  { name: "Coding", frequency: "Daily", streak: 18, completed: true, icon: "code", goal: "1 hour", rate: 96 },
  { name: "Reading", frequency: "Daily", streak: 7, completed: true, icon: "book", goal: "30 min", rate: 91 },
  { name: "Exercise", frequency: "3× per week", streak: 13, completed: false, icon: "dumbbell", goal: "45 min", rate: 84 },
  { name: "Meditation", frequency: "Daily", streak: 9, completed: true, icon: "flame", goal: "10 min", rate: 72 },
  { name: "Drink Water", frequency: "8 glasses daily", streak: 12, completed: true, icon: "water", goal: "8 glasses", rate: 88 },
  { name: "Sleep", frequency: "8 hours daily", streak: 5, completed: false, icon: "moon", goal: "8 hours", rate: 76 },
];

export const habitsToReduce = [
  { name: "Excessive Screen Time", frequency: "Daily limit · 3h", streak: 11, current: "2h 14m", target: "Under 3h" },
  { name: "Junk Food", frequency: "Weekly limit · 2×", streak: 5, current: "1× this week", target: "Max 2×" },
];

export const habitCompletions = [
  [true, true, true, false, true, true, true],
  [true, true, false, true, true, true, true],
  [false, true, true, false, true, true, false],
  [true, false, true, true, true, false, true],
  [true, true, true, true, true, true, false],
  [false, true, true, true, false, true, true],
];

export const weekTasks: Record<string, Task[]> = {
  Mon: [
    { title: "Study React patterns", completed: true, time: "9:00" },
    { title: "Review weekly goals", completed: true, time: "11:00" },
  ],
  Tue: [
    { title: "Work on portfolio site", completed: true, priority: "high", time: "10:00" },
    { title: "Exercise session", completed: false, time: "17:00" },
    { title: "Read 30 minutes", completed: true, time: "21:00" },
  ],
  Wed: [
    { title: "Complete project draft", completed: false, priority: "high", time: "9:30" },
    { title: "Review design notes", completed: true, time: "14:00" },
    { title: "Team check-in", completed: false, time: "16:00" },
  ],
  Thu: [
    { title: "Build dashboard widgets", completed: false, time: "10:00" },
    { title: "Code review", completed: true, time: "15:00" },
  ],
  Fri: [
    { title: "Portfolio polish pass", completed: false, priority: "medium", time: "11:00" },
    { title: "Weekly review", completed: false, time: "17:00" },
  ],
  Sat: [
    { title: "Long outdoor workout", completed: false, time: "8:00" },
    { title: "Read 30 minutes", completed: false, time: "20:00" },
  ],
  Sun: [
    { title: "Plan next week", completed: false, time: "10:00" },
    { title: "Reset workspace", completed: false, time: "16:00" },
  ],
};

export const goals = [
  {
    title: "Build Personal Portfolio",
    description: "Publish a polished portfolio with four case studies and a clean, responsive design.",
    progress: 82,
    deadline: "Sep 30",
    milestones: 6,
    done: 5,
    color: "primary" as const,
  },
  {
    title: "Learn React Fundamentals",
    description: "Build confident foundations through projects, hooks, and component patterns.",
    progress: 64,
    deadline: "Oct 18",
    milestones: 8,
    done: 4,
    color: "success" as const,
  },
  {
    title: "Ship AI Research Assistant",
    description: "Prototype a useful personal research companion with smart summarization.",
    progress: 38,
    deadline: "Nov 12",
    milestones: 7,
    done: 3,
    color: "lavender" as const,
  },
];

export const goalMilestones = [
  { name: "JSX & Components", done: true },
  { name: "Props & State", done: true },
  { name: "Hooks & Effects", done: true },
  { name: "Context API", done: true },
  { name: "React Router", done: false },
  { name: "Forms & Validation", done: false },
  { name: "Performance Patterns", done: false },
  { name: "Build Final Project", done: false },
];

export const trendData = [
  { day: "Wed", productivity: 62, habits: 58 },
  { day: "Thu", productivity: 74, habits: 69 },
  { day: "Fri", productivity: 68, habits: 75 },
  { day: "Sat", productivity: 82, habits: 71 },
  { day: "Sun", productivity: 71, habits: 78 },
  { day: "Mon", productivity: 86, habits: 84 },
  { day: "Tue", productivity: 78, habits: 89 },
];

export const weeklyData = [
  { week: "Week 1", completed: 68, previous: 64 },
  { week: "Week 2", completed: 74, previous: 69 },
  { week: "Week 3", completed: 71, previous: 72 },
  { week: "Week 4", completed: 83, previous: 75 },
  { week: "Week 5", completed: 88, previous: 79 },
];

export const monthDays = Array.from({ length: 30 }, (_, index) => ({
  day: index + 1,
  score: [82, 66, 91, 74, 0, 88, 57, 93, 78, 65, 85, 72, 0, 90, 68, 81, 95, 73, 0, 86, 59, 92, 77, 70, 84, 0, 89, 62, 80, 87][index] ?? 0,
}));

export const matrixData = habits.slice(0, 5).map((habit, habitIndex) => ({
  name: habit.name,
  values: Array.from({ length: 30 }, (_, day) => ((day * 3 + habitIndex * 2) % 7) > 1),
}));

export const topHabits = [
  { name: "Coding", value: 96 },
  { name: "Reading", value: 91 },
  { name: "Water", value: 88 },
];

export const weeklyHighlights = [
  { label: "Focus time", value: "18h 40m" },
  { label: "Best day", value: "Tuesday" },
  { label: "Longest streak", value: "18 days" },
  { label: "Improvement", value: "+9%" },
];

export const historyHighlights = [
  { icon: "check", title: "142 completed tasks", desc: "18 more than August" },
  { icon: "flame", title: "18 day coding streak", desc: "Personal best" },
  { icon: "medal", title: "Portfolio reached 82%", desc: "Up 14% this month" },
  { icon: "calendar", title: "19 strong days", desc: "63% of September" },
];

export const analyticsPieData = [
  { name: "Completed", value: 68, color: "var(--primary)" },
  { name: "Incomplete", value: 22, color: "var(--warning)" },
  { name: "Skipped", value: 10, color: "var(--lavender)" },
];

export const analyticsHabitConsistency = [
  { name: "Coding", value: 96 },
  { name: "Reading", value: 91 },
  { name: "Exercise", value: 84 },
  { name: "Meditation", value: 72 },
];
