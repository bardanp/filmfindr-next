# 🎬 FilmFindr

**FilmFindr** is an AI-powered movie and TV recommendation web app that combines intelligent discovery, rich personalization, and a modern, cinematic UI. Built with Next.js 15, React 19, Tailwind CSS 4, and a suite of best-in-class UI and animation libraries, FilmFindr is your smart, playful, and social companion for finding what to watch next.

---

## 🔍 Overview

FilmFindr solves the problem of endless scrolling and decision fatigue on streaming platforms. With AI-driven recommendations, mood-based filtering, and a vibrant social layer, users can get personalized suggestions, track releases, share opinions, and build collections—all tailored to their unique taste.

---

## 🧠 Core Features

- **AI Discovery Engine**: Personalized movie/TV recs based on your taste, mood, and history
- **Smart Watchlist**: Save, organize, and manage your watchlist with AI assistance
- **Social Platform**: Post reviews, follow friends, and see what others are watching (future phase)
- **Collections**: Create, share, and collaborate on themed lists
- **Release Tracking**: Follow franchises, get notified about new drops, and see a calendar of upcoming content
- **Streaming Integration**: See where to watch, compare platforms, and get unified recommendations

---

## 🛠 Tech Stack

- **Next.js 15 (App Router) & React 19**
- **Tailwind CSS 4** (dark/light/system themes)
- **shadcn/ui**, **AnimateUI**, **MagicUI**, **Aceternity UI** (JSX only)
- **framer-motion** and **motion** for animation
- **Firebase Auth** & **Firestore** (user data, watchlists)
- **Lucide Icons**, **React Hook Form**, **Zod**, **Sonner**, **CMDK**
- Fully responsive and theme-aware

---

## 🎨 Branding & Design

- **Brand Personality**: Smart, playful, cinematic, modern
- **Typography**: Inter (via `@next/font/google`), Tailwind sizing (`text-3xl`, `text-5xl`, `text-lg`)
- **Color Palette**: Uses Tailwind tokens (`bg-background`, `text-foreground`, `from-purple-600`, etc.)
- **Icons**: Only `lucide-react`, consistent sizing
- **Component Style**: shadcn/ui, MagicUI, AnimateUI, Aceternity UI (JSX), subtle transitions, animated entry
- **No hardcoded colors or custom CSS** (unless for keyframes/media queries)
- **Theme**: `next-themes` for light/dark/system

---

## 📁 Directory Structure

```
app/
├── layout.js               → Root layout, fonts, theme
├── page.js                 → Auth check + redirect logic
│
├── landing/                → Public homepage
├── auth/                   → Login, signup, redirects
├── dashboard/              → Authenticated app (watchlist, discover, preferences, profile, search)
components/                 → UI, animation, forms
lib/                        → Supabase client, utils
public/                     → Assets, icons, logos
```

---

## 🛣 Roadmap

### MVP (Phase 1)

- Email/password auth (Firebase)
- AI-powered recs, mood/genre filtering
- Watchlist (add/remove, per user)
- Responsive landing, dashboard, and auth pages

### Phase 2: Social Layer

- Posting feed, likes, comments
- Public user profiles, badges, followers
- User-created and collaborative collections

### Phase 3: Smart Matching & Enhanced AI

- Taste matching, compatibility scores
- Smarter recs, mood overlays

### Phase 4: Streaming & Platform Tools

- "Where to Watch" for every title
- Price/quality comparisons, Chrome extension, notifications
