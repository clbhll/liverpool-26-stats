# LFC Stats 2025/26 — Claude Instructions

## Stack
- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** with custom LFC color tokens
- **Deployed to Vercel**

## Key Architecture Decisions

### Data Layer
All data access **must go through `src/lib/data.ts`** — pages and components never import from `src/lib/mock/` directly.

To swap mock data for a real API:
1. Replace function bodies in `src/lib/data.ts` only
2. Everything else stays unchanged

### Server vs Client Components
- **Server by default**: all `page.tsx` files, MatchRow, FixtureCard, PlayerRow, StandingsTable, Footer, UI primitives
- **Client (`'use client'`)**: Navbar (usePathname), Tabs, CompetitionTabs (useState), ResultsTable (filter), PlayerTable (sort/filter)

## Custom Tailwind Tokens
```
lfc-red         #C8102E  — primary brand, navbar, accents
lfc-red-dark    #A50E26  — hover states
lfc-gold        #F6EB61  — secondary accent
surface-900     #0D0D0F  — page background
surface-800     #141418  — card background
surface-700     #1E1E24  — table row alternates
surface-600     #2A2A33  — borders/dividers
surface-200     #C4C4CF  — secondary text
```

## CSS Utilities (globals.css)
- `.stats-table` — standard dark-themed data table
- `.lfc-row` — highlighted row for Liverpool in standings
- `.accent-border-left` — left red border for section headers

## Commands
```bash
npm run dev          # development server
npm run build        # production build
npm run type-check   # TypeScript check (no emit)
npm run lint         # ESLint
```

## File Structure
```
src/
├── app/           — Next.js pages (server components)
├── components/
│   ├── layout/    — Navbar, Footer
│   ├── ui/        — Badge, Card, StatBox, SectionHeader, Tabs
│   ├── home/      — SeasonSummary, RecentForm, QuickStats
│   ├── results/   — ResultsTable (client), MatchRow
│   ├── fixtures/  — FixtureList, FixtureCard
│   ├── players/   — PlayerTable (client), PlayerRow
│   └── tables/    — CompetitionTabs (client), StandingsTable
└── lib/
    ├── types.ts   — all TypeScript interfaces
    ├── data.ts    — abstraction layer (only file to import from)
    ├── utils.ts   — formatters and helpers
    └── mock/      — mock data (never import directly)
```
