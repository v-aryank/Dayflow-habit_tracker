import { createFileRoute } from "@tanstack/react-router";
import { DashboardPage } from "@/components/dayflow/pages";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({ head:()=>({meta:[{title:"Dashboard — DayFlow"},{name:"description",content:"Plan today and track weekly productivity, habits, and goals."},{property:"og:title",content:"Dashboard — DayFlow"},{property:"og:description",content:"Plan today and track weekly productivity, habits, and goals."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}), component: DashboardPage });

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
