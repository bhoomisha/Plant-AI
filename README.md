# 🌿 PlantAI — AI Plant Detection & Care Platform

> A production-level React.js SaaS frontend demonstrating advanced state management, AI simulation, real-time analytics, and premium UI/UX engineering.

![PlantAI Banner](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript) ![Redux](https://img.shields.io/badge/Redux_Toolkit-2.1-purple?style=flat-square&logo=redux) ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-teal?style=flat-square&logo=tailwindcss)

---

## ✨ Live Features

| Feature | Description |
|---|---|
| 🔍 **AI Plant Scanner** | Upload images → mock AI detection → confidence % + care summary |
| 🌿 **Plant Database** | 53 plants with detailed care, diseases, watering, sunlight |
| 📊 **Live Dashboard** | Real-time analytics with Recharts, activity history |
| ❤️ **Favorites System** | Add/remove with Redux + localStorage persistence |
| 🦠 **Health Analyzer** | Disease detection, severity levels, treatment guides |
| 🎓 **Video Learning** | Curated YouTube embed player by plant type |
| 🔐 **Auth System** | Login/Signup with React Hook Form validation |
| 🌙 **Dark/Light Mode** | Persistent theme with smooth transitions |

---

## 🏗️ Architecture

```
src/
├── app/              # Redux store config
├── features/
│   ├── auth/         # authSlice — login/logout state
│   ├── plants/       # plantsSlice — search, filters, favorites
│   ├── scanner/      # scannerSlice — scan history, results
│   ├── dashboard/    # dashboardSlice — activity tracking
│   └── theme/        # themeSlice — dark/light persistence
├── components/
│   ├── ui/           # PlantCard, Skeleton loaders
│   └── layout/       # Navbar with animated active indicator
├── pages/            # Lazy-loaded route pages
├── services/         # Mock API layer with delay simulation
├── data/             # plants.ts — 53 plant dataset
├── hooks/            # Typed Redux hooks
└── utils/
```

---

## ⚙️ Tech Stack

- **React 18** — Concurrent features, lazy loading
- **TypeScript** — Full type safety across all layers
- **Redux Toolkit** — Global state with slices
- **TanStack Query** — Server state caching & loading states
- **Framer Motion** — Page transitions, card animations, micro-interactions
- **Tailwind CSS 3** — Custom design system (forest/sage/earth palette)
- **Recharts** — Activity area charts, disease bar charts
- **React Router v6** — Lazy route loading
- **React Hook Form** — Performant form validation
- **localStorage** — Persistent favorites, scans, theme

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/plant-ai-platform.git
cd plant-ai-platform

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm start

# Build for production
npm run build
```

**Demo login:** `demo@plantai.com` / `demo1234`

---

## 🌐 Netlify Deployment

1. Run `npm run build` to generate `/build` folder
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Connect your GitHub repo
4. Set build command: `npm run build`
5. Set publish directory: `build`
6. Add environment variable: `CI=false` (to skip ESLint warnings as errors)
7. Click Deploy!

**Or drag & drop:** Just drag the `/build` folder to Netlify's drop zone.

---

## 🎯 Key Engineering Decisions

### State Architecture
- **Redux Toolkit** for global UI state (auth, favorites, scan history, theme)
- **TanStack Query** for server/async state with automatic caching
- Separation of concerns: Redux = client state, React Query = server state

### Performance
- All routes are **lazy-loaded** via `React.lazy` + `Suspense`
- Plant search uses **debouncing** (300ms) to minimize re-renders
- Components use `useMemo` for filtered plant calculations
- Skeleton loaders instead of spinners for better perceived performance

### Mock API Layer
- Realistic `delay()` simulation (300ms–2500ms based on operation)
- 10% random error simulation for realistic error handling
- Full TypeScript typed API responses

### Persistence Strategy
- favorites, scanHistory, activityData, theme, user → localStorage
- Redux reads localStorage on init, writes on every mutation
- No data loss on page refresh

---

## 🦠 Disease Detection System

Each plant has 2 diseases with:
- `severity: 'low' | 'medium' | 'high'`
- Symptom arrays
- Treatment instructions

The Health Analyzer renders animated progress bars per severity level and expandable treatment cards.

---

## 📊 Interview Q&A

**Q: Why Redux Toolkit instead of Context API?**
A: For a platform with cross-cutting state (favorites, scanner, dashboard, auth) that multiple components read/write, Redux provides predictable state transitions, DevTools debugging, and prevents prop drilling. Context re-renders all consumers on any change.

**Q: How does the mock AI scanner work?**
A: The `scanPlant()` service accepts a File, applies a fake delay (2–3.5s), randomly selects a plant from the dataset, generates a confidence score (70–98%), and returns a care summary. 10% of calls throw errors to test error handling.

**Q: Why TanStack Query alongside Redux?**
A: Redux manages client/UI state (favorites, theme, auth). React Query manages server state (plant data fetch, caching, background refresh). This separation follows the recommended pattern — don't store server data in Redux.

**Q: How is dark mode implemented?**
A: A `themeSlice` persists `isDark` to localStorage. The root `AppContent` component uses `useEffect` to toggle the `dark` class on `<html>`. Tailwind's `darkMode: 'class'` strategy applies dark variants. All CSS transitions are `duration-300` for smooth switching.

**Q: How are skeleton loaders implemented?**
A: Custom CSS `@keyframes shimmer` animation with `background-size: 200% 100%` creates a sweeping highlight effect. Skeleton components match the exact shape of the real content to prevent layout shift on load.

**Q: What makes this recruiter-worthy?**
A: Real state management architecture, API simulation layer with errors + loading states, TypeScript throughout, production patterns (lazy loading, memoization, debouncing), persistence strategy, and a real design system — not just a tutorial todo app.

---

## 📁 Plant Data Model

```typescript
interface Plant {
  id: string;
  name: string;
  scientificName: string;
  type: 'succulent' | 'tropical' | 'herb' | 'flowering' | 'tree' | 'fern' | 'cactus' | 'vegetable';
  difficulty: 'beginner' | 'intermediate' | 'expert';
  sunlight: 'full-sun' | 'partial-sun' | 'shade' | 'indirect';
  wateringFrequency: string;
  diseases: Disease[];
  healthScore: number;       // 0-100
  popularityScore: number;   // 0-100
  // ...16 more fields
}
```

---

## 🎨 Design System

Custom Tailwind palette:
- **Forest** — Primary greens (#22c55e base)  
- **Sage** — Neutral dark backgrounds (#293729 → #052e16)
- **Earth** — Accent oranges for warnings

Typography:
- **Playfair Display** — Display headings (elegant, botanical)
- **DM Sans** — Body text (clean, readable)

---

## 📄 License

MIT — Free for personal and commercial use.
