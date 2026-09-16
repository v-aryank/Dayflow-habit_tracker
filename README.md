# DayFlow Productivity

Build a polished responsive productivity and habit-tracking web app prototype.

IMPORTANT:

This is ONLY the first UI/UX prototype.

Do not build a backend, database, authentication, API integrations, notifications, AI features, or complex data persistence yet.

Use realistic static/mock data so the entire application feels functional visually.

Focus on the architecture, page structure, reusable components, responsive layout, and visual polish.

I have attached two reference screenshots.

REFERENCE DIRECTION:

- The FIRST screenshot is the primary inspiration for the information architecture and tracking system.

- The SECOND screenshot is the primary inspiration for the modern application UI and sidebar/dashboard presentation.

- Do NOT copy either screenshot literally.

- Combine the strongest ideas from both into an original productivity application.

PRODUCT CONCEPT:

Create a personal productivity system that combines:

- daily planning

- weekly planning

- task tracking

- habit tracking

- goals

- calendar

- productivity analytics

- historical progress

The main idea is:

PLAN → EXECUTE → TRACK → ANALYZE → IMPROVE

The application should feel like a serious modern productivity SaaS rather than a simple habit checklist.

--------------------------------------------------

DESIGN SYSTEM

--------------------------------------------------

Visual style:

- clean modern productivity SaaS

- light/white interface

- very light gray backgrounds

- sky blue as the primary accent

- light green as the secondary/success accent

- subtle lavender/yellow/red status accents where appropriate

- rounded cards

- thin subtle borders

- soft shadows

- clean spacing

- modern sans-serif typography

- professional and calm

- data-focused

- minimal visual noise

Do not use:

- dark mode

- excessive gradients

- excessive glassmorphism

- neon effects

- overly decorative illustrations

- excessive animations

The data and progress visualizations should be the visual focus.

Use responsive design from the beginning.

Desktop should have a left sidebar.

Mobile should use a compact top header and bottom navigation.

--------------------------------------------------

APPLICATION STRUCTURE

--------------------------------------------------

Create these main routes/pages:

1. Dashboard

2. Planner

3. Habits

4. Goals

5. Calendar

6. Analytics

7. History

8. Settings

Navigation should work between all pages.

Use mock data throughout the prototype.

--------------------------------------------------

SIDEBAR

--------------------------------------------------

Create a clean desktop sidebar.

Brand:

"DayFlow"

Navigation:

Dashboard

Planner

Habits

Goals

Calendar

Analytics

History

Bottom:

Settings

The sidebar should have:

- simple line icons

- active page state

- subtle hover states

- clean spacing

- responsive collapse behavior

On mobile, replace the sidebar with bottom navigation.

--------------------------------------------------

DASHBOARD

--------------------------------------------------

The Dashboard is the most important page.

It should combine the information architecture of the first reference with the clean UI style of the second reference.

Header:

"Good evening, Aryan"

"Tuesday, September 15"

Include:

- notification icon

- profile/avatar

- date

Top summary cards:

Today's Progress

78%

Active Habits

6

Completed Tasks

8

Remaining

3

Then create a prominent:

"WEEKLY PROGRESS" section.

Show:

- overall weekly percentage

- progress bar

- completed tasks

- remaining tasks

- habit completion

- goal progress

Add a productivity trend chart showing the last several days.

Then create a:

"WEEKLY HABIT OVERVIEW"

This should be one of the signature components of the application.

Create a compact interactive-looking matrix:

Habit | Mon | Tue | Wed | Thu | Fri | Sat | Sun

Example habits:

- Coding

- Reading

- Exercise

- Meditation

- Water

- Sleep

Use:

- check marks

- empty states

- subtle colored indicators

Show a completion percentage at the right of each habit.

Then add:

"TOP HABITS"

Show the most consistent habits with percentage bars.

Then:

"GOALS"

Show 3 example goals with progress bars.

Finally:

"THIS WEEK"

Show a small weekly summary.

The Dashboard should feel information-rich but not cluttered.

--------------------------------------------------

PLANNER PAGE

--------------------------------------------------

Create a weekly planner.

Header:

"Planner"

Show:

"September 14 — 20, 2026"

Include previous/next week controls.

Create a seven-column weekly layout:

Monday

Tuesday

Wednesday

Thursday

Friday

Saturday

Sunday

Each day should display:

- date

- completion percentage

- task list

- habit indicators

Example tasks:

- Study React

- Work on portfolio

- Exercise

- Read 30 minutes

- Complete project

- Review notes

Tasks should visually support:

- completed

- pending

- priority

Include a "+ Add Task" button.

This is a visual prototype, so task interactions can be simulated locally without backend persistence.

On smaller screens, transform the weekly grid into a scrollable or stacked layout rather than breaking the UI.

--------------------------------------------------

DAILY VIEW

--------------------------------------------------

Inside the Planner experience, provide a detailed day view when a day is selected.

Show:

Tuesday

September 15

Today's Progress

78%

Sections:

TODAY'S TASKS

- completed tasks

- pending tasks

- priority indicators

HABITS

- Drink Water

- Read

- Coding

- Exercise

- Meditation

Each habit should show:

- icon

- frequency

- streak

- completion state

--------------------------------------------------

HABITS PAGE

--------------------------------------------------

Create a dedicated Habits page inspired strongly by the second reference.

Top summary cards:

Today's Progress

Active Habits

Completed

Left Today

Main content:

POSITIVE HABITS

Example:

Drink Water

Daily · 12 day streak

Read Books

Daily · 7 day streak

Workout

3× per week · 13 day streak

Each habit should be displayed as a polished card/list item with:

- icon

- habit name

- frequency

- streak

- progress/completion state

- checkbox

Add a "+ Add New" button.

Then:

HABITS TO REDUCE

Example:

Excessive Screen Time

Junk Food

Use a slightly different visual accent to distinguish them.

Also include a calendar on the right side for desktop.

Then include:

"HABIT PROGRESS OVER TIME"

Create a polished line chart with:

- weekly/monthly/yearly toggle

- progress percentage

- multiple habit lines

- clean grid

Above the chart show:

Current Streak

Longest Streak

Completed in Total

Use mock data.

--------------------------------------------------

HABIT MATRIX / HISTORY COMPONENT

--------------------------------------------------

Create a reusable habit tracking matrix component.

It should visually resemble the powerful tracking system from the first reference.

Example:

SEPTEMBER

Habit

1 2 3 4 5 6 7 8 9 10 ...

Coding

✓ ✓ ✓ ✓ ✓ ○ ✓ ✓ ✓ ✓

Reading

✓ ✓ ○ ✓ ✓ ✓ ✓ ✓ ○ ✓

Exercise

○ ✓ ✓ ○ ✓ ✓ ○ ✓ ✓ ○

This component should appear in the History or Analytics experience.

Make it visually clean and readable rather than spreadsheet-like.

--------------------------------------------------

GOALS PAGE

--------------------------------------------------

Create a Goals page.

Show goal cards such as:

Build Personal Portfolio

82%

Learn React

64%

Build AI Assistant

38%

Each goal should have:

- title

- description

- progress bar

- deadline

- milestone count

Clicking a goal should visually open an expanded detail panel.

Example:

Learn React

✓ JSX

✓ Components

✓ Props

✓ State

○ Hooks

○ Context

○ React Router

○ Build Project

No backend functionality is required.

--------------------------------------------------

CALENDAR PAGE

--------------------------------------------------

Create a monthly calendar.

Default:

September 2026

Show:

- month navigation

- days

- productivity indicators

- habit completion indicators

- selected day state

Use subtle visual indicators to show:

- excellent day

- average day

- low productivity day

- no data

Selecting a day should show a small daily summary panel.

--------------------------------------------------

ANALYTICS PAGE

--------------------------------------------------

Create a data-focused Analytics page.

Sections:

1. Overall Productivity

Line chart showing the last 5 weeks.

2. Weekly Completion

Bar chart:

Week 1

Week 2

Week 3

Week 4

Week 5

3. Habit Consistency

Coding

96%

Reading

91%

Exercise

84%

Meditation

72%

4. Task Completion

Completed

Incomplete

Skipped

5. Best Productivity Day

Example:

Tuesday — 94%

6. Weekly Comparison

Show improvement/decline compared with previous weeks.

Use polished charts with mock data.

--------------------------------------------------

HISTORY PAGE

--------------------------------------------------

Create a historical overview.

Show:

- monthly habit matrix

- past weekly performance

- completed tasks

- habit streak history

- goal progress history

Include filters:

Weekly

Monthly

Yearly

This page should feel like the spreadsheet reference transformed into a modern application.

--------------------------------------------------

SETTINGS PAGE

--------------------------------------------------

Create a simple settings page with sections:

Profile

Appearance

Notifications

Productivity preferences

Data preferences

These are UI-only for now.

--------------------------------------------------

REUSABLE COMPONENTS

--------------------------------------------------

Create reusable components instead of duplicating UI.

Examples:

- Sidebar

- MobileBottomNav

- TopBar

- ProgressCard

- ProgressRing

- ProgressBar

- HabitCard

- HabitMatrix

- TaskCard

- GoalCard

- WeeklyPlanner

- Calendar

- AnalyticsChart

- StatCard

- SectionHeader

- EmptyState

Keep components organized and maintainable.

--------------------------------------------------

MOCK DATA

--------------------------------------------------

Use realistic mock data for:

Tasks

Habits

Habit completion

Streaks

Goals

Calendar data

Weekly progress

Analytics

The application should look populated immediately after loading.

--------------------------------------------------

RESPONSIVE DESIGN

--------------------------------------------------

Desktop:

- left sidebar

- multi-column dashboard

- charts beside relevant cards

- weekly grid

Tablet:

- adaptive two-column layouts

Mobile:

- no large desktop grid

- stacked cards

- horizontal scrolling where appropriate

- compact weekly planner

- bottom navigation

- mobile-friendly habit cards

- readable charts

Do not simply shrink the desktop layout.

--------------------------------------------------

ANIMATION

--------------------------------------------------

Use subtle professional animations only:

- page transitions

- card hover

- progress animation

- chart entrance

- checkbox completion feedback

- sidebar transitions

Keep animations fast and understated.

Respect reduced-motion preferences.

--------------------------------------------------

IMPORTANT SCOPE LIMIT

--------------------------------------------------

For this first prototype DO NOT implement:

- authentication

- Supabase

- database

- backend

- API

- real notifications

- email

- AI assistant

- payment system

- external integrations

- complex persistence

- advanced task scheduling algorithms

- real habit calculations

Use static/mock data.

The goal of this first build is to establish:

1. application architecture

2. navigation

3. page structure

4. visual design system

5. reusable components

6. responsive layouts

7. realistic prototype data

8. polished overall UX

Do not over-engineer the project.

Prioritize completing the entire visual prototype cleanly over implementing advanced functionality.

The final result should feel like a polished modern productivity SaaS prototype combining the powerful tracking/analytics concept of the first reference with the clean application UI of the second reference.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bfd42c7b-911a-40e4-9aac-55a466a7a174).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
