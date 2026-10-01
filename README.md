# Tulas International School - Homepage Redesign

## Overview

A modern, editorial, animated, and high-converting single-page website redesign for **Tula's International School (TIS)**, Dehradun ("The Modern Gurukul"). 

Built as a frontend developer hiring assessment, this project reimagines the school's digital presence with a bespoke design system, fluid micro-interactions, dark/light theme switching, and accessible, responsive architecture while preserving official brand identity, authentic academic streams, 16+ verified sports disciplines, and factual achievements.

---

## Live Demo

- **Live Deployment**: `https://tis-homepage-redesign.vercel.app/` *(Placeholder for deployed URL)*

## Repository

- **GitHub Repository**: `https://github.com/your-username/tis-homepage-redesign` *(Placeholder for GitHub URL)*

---

## Tech Stack

- **React.js** (v19) – Component-driven UI development
- **Vite** (v8) – Next-generation frontend tooling and rapid bundling
- **Tailwind CSS** (v3) – Utility-first bespoke design system and responsive layout tokens
- **Framer Motion** (v13) – Hardware-accelerated entrance reveals, physics springs, and interactive states
- **Lucide React** – Clean, modern, accessible iconography
- **JavaScript / JSX** – Clean, maintainable standard JavaScript

---

## Standout Features

### 1. Custom Cursor Follower (Desktop Only)
- Smooth spring-based follower circle powered by `framer-motion` and transform matrix acceleration.
- Dynamically scales and shifts appearance over interactive controls (`button`, `a`, `input`, `select`, cards).
- Completely disabled on touchscreens (`pointer: coarse`) and small viewports.
- Zero interference with clicking (`pointer-events: none`).

### 2. Scroll-Triggered Reveals
- Reusable `<Reveal />` wrapper utilizing `whileInView` with `viewport={{ once: true, amount: 0.15 }}`.
- Supports directional offsets (`up`, `down`, `left`, `right`, `zoom`, `fade`) and staggered delays.
- Fully honors the user's `prefers-reduced-motion` operating system preference.

### 3. Dark & Light Theme Switcher
- Instant toggle between a regal dark theme (deep obsidian slate `#070B14`, sapphire card `#11192C`, and gold accents `#C89B3C`) and an editorial light theme.
- Persisted in `localStorage` (`tis-theme`) with automatic fallback to system OS preferences.
- Zero flash of unstyled theme on initial load.

### 4. Scroll Depth Progress Indicator
- Fixed, non-blocking 3.5px progress indicator anchored at the top viewport.
- Uses `useScroll` and `useSpring` to deliver a silky-smooth Crimson-to-Gold-to-Teal gradient indicator.

### 5. Interactive Admissions Fast-Track & Modals
- Validated admission enquiry form with student grade selection (Classes IV–XII), parent contact validation, and instant confirmation state.
- Interactive 360° Virtual Campus Tour modal preview.

---

## Page Architecture & Sections

```
1.  Announcement Bar    — Admissions 2025–26 alerts & verified phone helpline (+91-9837983791)
2.  Navbar              — Sticky blur header, logo crest, quick links, theme toggle, mobile drawer
3.  Hero Section        — "Where Curiosity Becomes Capability", dual CTAs, floating metric pills
4.  About TIS           — Modern Gurukul philosophy, Rishabh Educational Trust, 22-acre Dehradun setting
5.  Tulas Experience    — 6 core pillars of holistic growth (Values, Sports, Academics, Boarding, Arts, MUN)
6.  Academics           — CBSE curriculum (Classes 4–12), Science/Commerce/Humanities streams, STEM labs
7.  Campus Life         — Climate-controlled dorms, pure vegetarian multi-cuisine dining, 24/7 medical infirmary
8.  Sports Showcase     — 16+ verified disciplines (Equestrian, Archery, Shooting Range, Swimming, Squash, Cricket)
9.  Statistics Section  — Animated viewport number counters (22+ Acres, 16+ Sports, 8:1 Ratio, 100% Residential)
10. Achievements        — Forbes "Great Indian School", EducationWorld Rankings, Indian School Awards
11. Testimonials        — Authentic parent, alumni, and student reflections + core family values
12. Virtual Tour CTA    — Panoramic Dehradun foothills showcase & campus visit scheduler
13. Admissions CTA      — 4-step clear admission roadmap from enquiry to induction
14. Contact & Enquiry   — Official campus address, helpline numbers, and interactive enquiry form
15. Footer              — Semantic footer with accreditation badges, quick links, and back-to-top action
```

---

## Project Structure

```
c:/Tulas International School/
├── public/
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx           # Reusable button with variants (primary, secondary, outline, ghost)
│   │   │   ├── SectionHeading.jsx   # Consistent editorial headings with badges & subtitles
│   │   │   ├── Card.jsx             # Glassmorphic card container with hover motion
│   │   │   ├── Badge.jsx            # Category & status pill badges
│   │   │   └── Modal.jsx            # Accessible dialog with escape key & backdrop blur
│   │   │
│   │   ├── layout/
│   │   │   ├── AnnouncementBar.jsx  # Top admissions announcement & contact helpline
│   │   │   ├── Navbar.jsx           # Sticky responsive navigation with theme toggle & mobile drawer
│   │   │   └── Footer.jsx           # Comprehensive semantic footer with verified details
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.jsx             # Hero display with animations & floating metric cards
│   │   │   ├── About.jsx            # Modern Gurukul ethos and heritage
│   │   │   ├── Experience.jsx       # 6 student life pillars
│   │   │   ├── Academics.jsx        # CBSE streams, STEM & Atal Tinkering Labs
│   │   │   ├── Campus.jsx           # Residential boarding, dining, and infirmary
│   │   │   ├── Sports.jsx           # 16+ sports disciplines with category switcher
│   │   │   ├── Statistics.jsx       # Animated counters for verified metrics
│   │   │   ├── Achievements.jsx     # National awards, Forbes & EducationWorld rankings
│   │   │   ├── Testimonials.jsx     # Parent voices & community value pillars
│   │   │   ├── VirtualTour.jsx      # Panoramic 360° visual walkthrough CTA
│   │   │   ├── AdmissionsCTA.jsx    # 4-step admission roadmap & application trigger
│   │   │   └── Contact.jsx          # Official contact directory & interactive enquiry form
│   │   │
│   │   └── animation/
│   │       ├── CustomCursor.jsx     # Desktop spring follower cursor
│   │       ├── ScrollProgress.jsx   # Top viewport scroll depth indicator
│   │       └── Reveal.jsx           # Reusable whileInView scroll animation component
│   │
│   ├── data/
│   │   ├── navigation.js            # Nav links, quick links, announcement text & verified contact info
│   │   ├── sports.js                # 16+ sports disciplines, categories, and infrastructure details
│   │   ├── statistics.js            # Verified school statistics & metrics
│   │   ├── testimonials.js          # Parent & alumni quotes and core value items
│   │   ├── academics.js             # CBSE curriculum details & learning stages
│   │   ├── experience.js            # 6 pillars of the Tulas experience
│   │   ├── achievements.js          # Verified awards & recognitions
│   │   └── campus.js                # Campus facility cards data
│   │
│   ├── hooks/
│   │   ├── useTheme.js              # Dark/light theme management with localStorage sync
│   │   └── useMediaQuery.js         # Reactive media query helper
│   │
│   ├── assets/
│   ├── App.jsx                      # Main application orchestrating all sections & modals
│   ├── main.jsx                     # React root mount
│   └── index.css                    # Tailwind directives, custom scrollbars, and design tokens
│
├── index.html                       # SEO meta tags, Google Fonts (Cinzel, Plus Jakarta Sans) & SVG favicon
├── tailwind.config.js               # Theme configuration, brand crimson/gold palette, and animations
├── postcss.config.js                # PostCSS configuration
├── package.json                     # Dependencies & build scripts
└── README.md                        # Documentation
```

---

## Getting Started

### Prerequisites
- Node.js (v18.0.0 or later)
- npm (v9.0.0 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## Production Build

To create an optimized, minified production build:

```bash
npm run build
```

To preview the production bundle locally:

```bash
npm run preview
```

---

## Deployment (Vercel)

This project is a standalone, client-side React SPA and is ready for one-click deployment on [Vercel](https://vercel.com/):

1. Push code to your GitHub repository.
2. In Vercel, click **"Add New Project"** and import the repository.
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Click **Deploy**.

---

## Responsive Testing

The project has been tested across all standard viewport breakpoints:
- **Mobile (375px – 480px)**: Compact navigation drawer, full-width touch-friendly CTAs, single-column cards, optimized typography.
- **Tablet (768px – 1024px)**: 2-column balanced grids, adapted spacing, touch-safe interactive elements.
- **Desktop (1280px – 1440px+)**: Multi-column editorial layouts, fluid spring cursor follower, interactive tabs, and side-by-side showcases.

---

## AI Assistance Disclosure

AI tools were utilized during development to accelerate boilerplate setup, research authentic Tula's International School information from `https://tis.edu.in/`, and iterate on UI design tokens. All architectural decisions, component implementations, animations, accessibility rules, and quality verification were reviewed and validated for production readiness.
