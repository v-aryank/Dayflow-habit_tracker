export type Task = { title: string; completed: boolean; priority?: "high" | "medium" };
export type Habit = { name: string; frequency: string; streak: number; completed: boolean; tone?: "positive" | "reduce" };

export const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export const habits: Habit[] = [
  { name: "Coding", frequency: "Daily", streak: 18, completed: true },
  { name: "Reading", frequency: "Daily", streak: 7, completed: true },
  { name: "Exercise", frequency: "3× per week", streak: 13, completed: false },
  { name: "Meditation", frequency: "Daily", streak: 9, completed: true },
  { name: "Drink Water", frequency: "8 glasses daily", streak: 12, completed: true },
  { name: "Sleep", frequency: "8 hours daily", streak: 5, completed: false },
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
  Mon: [{ title: "Study React", completed: true }, { title: "Review weekly goals", completed: true }],
  Tue: [{ title: "Work on portfolio", completed: true, priority: "high" }, { title: "Exercise", completed: false }, { title: "Read 30 minutes", completed: true }],
  Wed: [{ title: "Complete project", completed: false, priority: "high" }, { title: "Review notes", completed: true }],
  Thu: [{ title: "Build dashboard", completed: false }, { title: "Team check-in", completed: true }],
  Fri: [{ title: "Portfolio polish", completed: false, priority: "medium" }, { title: "Weekly review", completed: false }],
  Sat: [{ title: "Long workout", completed: false }, { title: "Read 30 minutes", completed: false }],
  Sun: [{ title: "Plan next week", completed: false }, { title: "Reset workspace", completed: false }],
};

export const goals = [
  { title: "Build Personal Portfolio", description: "Publish a polished portfolio with four case studies.", progress: 82, deadline: "Sep 30", milestones: 6, done: 5 },
  { title: "Learn React", description: "Build confident foundations through projects and practice.", progress: 64, deadline: "Oct 18", milestones: 8, done: 4 },
  { title: "Build AI Assistant", description: "Prototype a useful personal research companion.", progress: 38, deadline: "Nov 12", milestones: 7, done: 3 },
];

export const trendData = [
  { day: "Wed", productivity: 62, habits: 58 }, { day: "Thu", productivity: 74, habits: 69 },
  { day: "Fri", productivity: 68, habits: 75 }, { day: "Sat", productivity: 82, habits: 71 },
  { day: "Sun", productivity: 71, habits: 78 }, { day: "Mon", productivity: 86, habits: 84 },
  { day: "Tue", productivity: 78, habits: 89 },
];

export const weeklyData = [
  { week: "Week 1", completed: 68, previous: 64 }, { week: "Week 2", completed: 74, previous: 69 },
  { week: "Week 3", completed: 71, previous: 72 }, { week: "Week 4", completed: 83, previous: 75 },
  { week: "Week 5", completed: 88, previous: 79 },
];

export const monthDays = Array.from({ length: 30 }, (_, index) => ({
  day: index + 1,
  score: [82, 66, 91, 74, 0, 88, 57, 93, 78, 65][index % 10],
}));

export const matrixData = habits.slice(0, 5).map((habit, habitIndex) => ({
  name: habit.name,
  values: Array.from({ length: 30 }, (_, day) => ((day * 3 + habitIndex * 2) % 7) > 1),
}));