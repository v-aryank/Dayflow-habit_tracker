# DayFlow Productivity Prototype

## Goal
Build a polished, responsive, mock-data productivity application across eight working pages, using the supplied references only as visual and information-architecture guidance.

## Experience
- Create a calm light interface with sky-blue primary accents, green success states, and restrained lavender, yellow, and red status colors.
- Use a collapsible desktop sidebar, compact mobile header, and mobile bottom navigation.
- Make charts, progress indicators, planning grids, and habit matrices the visual focus.
- Add fast, subtle transitions and reduced-motion support.

## Pages
1. **Dashboard** — greeting, daily metrics, weekly progress, productivity trend, habit overview matrix, top habits, goals, and weekly summary.
2. **Planner** — navigable mock week, seven-day task layout, local add-task interaction, and selectable detailed daily view.
3. **Habits** — daily metrics, positive/reduction habit lists, completion toggles, calendar, streak metrics, and multi-series progress chart.
4. **Goals** — three populated goal cards with expandable milestone detail panels.
5. **Calendar** — September 2026 month view with productivity states and selectable daily summaries.
6. **Analytics** — five-week trends, weekly bars, habit consistency, task outcomes, best day, and comparisons.
7. **History** — reusable monthly habit matrix plus weekly performance, task, streak, and goal history with period filters.
8. **Settings** — UI-only profile, appearance, notification, productivity, and data controls.

## Shared Structure
- Centralize realistic static data and reusable types.
- Build shared application shell, navigation, top bar, cards, progress elements, chart wrappers, habit/task/goal displays, calendar, weekly planner, and habit matrix.
- Use existing accessible interface controls for buttons, toggles, tabs, checkboxes, and selections.
- Give every page distinct titles and social metadata.

## Responsive Behavior
- Desktop: persistent collapsible sidebar and dense multi-column layouts.
- Tablet: adaptive two-column sections with preserved chart readability.
- Mobile: stacked content, compact headers, bottom navigation, and horizontally scrollable planning/matrix areas where appropriate.

## Prototype Interactions
- Navigation works across every page.
- Planner day selection and local add-task behavior work in memory.
- Habit checkboxes update visually during the session.
- Goal cards expand to reveal milestones.
- Calendar days display matching summaries.
- Analytics/history filters and chart period controls switch mock views.

## Technical Notes
- TanStack Router route files for all eight destinations.
- React state only; no backend, authentication, persistence, APIs, or integrations.
- Recharts for responsive data visualization and Lucide line icons.
- Tailwind v4 semantic tokens in the global design system; no ad hoc page colors.
- Validate desktop and mobile layouts in the running preview after implementation.
