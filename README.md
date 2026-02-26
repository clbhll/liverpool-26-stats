single prompt test for Claude Code 
# LFC Stats 2025/26

A personal Liverpool FC statistics site for the 2025/26 season. Built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- **Home** — season summary, recent form (last 5), next fixtures, season leaders
- **Results** — all completed matches with stats, filterable by competition
- **Fixtures** — upcoming matches grouped by month with TV broadcaster info
- **Players** — full squad stats table, sortable by any column, filterable by position
- **Tables** — league standings for PL, Champions League, FA Cup, and Carabao Cup

## Stack

- [Next.js 15](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS (custom LFC color tokens)
- Deployed on Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available Scripts

```bash
npm run dev          # development server (localhost:3000)
npm run build        # production build
npm run start        # start production server
npm run type-check   # TypeScript type checking
npm run lint         # ESLint
```

## Swapping in a Real API

All data access is abstracted behind `src/lib/data.ts`. To swap mock data for a real football API:

1. Add your API key to `.env.local` (see `.env.example`)
2. Replace the function bodies in `src/lib/data.ts`
3. Everything else stays unchanged

## Deploy to Vercel

```bash
# Push to GitHub first
git init && git add . && git commit -m "Initial scaffold"
gh repo create liverpool-26-stats --public --push --source=.

# Then on vercel.com:
# New Project → Import from GitHub → zero-config deploy
```

Or deploy directly:

```bash
npx vercel
```

## Project Structure

```
src/
├── app/              — Next.js pages
├── components/
│   ├── layout/       — Navbar, Footer
│   ├── ui/           — Badge, Card, StatBox, SectionHeader, Tabs
│   ├── home/         — Home page components
│   ├── results/      — Results page components
│   ├── fixtures/     — Fixtures page components
│   ├── players/      — Players page components
│   └── tables/       — Tables page components
└── lib/
    ├── types.ts      — TypeScript interfaces
    ├── data.ts       — Data abstraction layer
    ├── utils.ts      — Formatters and helpers
    └── mock/         — Mock data
```
