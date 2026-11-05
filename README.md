# DEVS REC — Flagship Web Platform

> Official flagship web platform for **DEVS REC** (Developers Club of Rajalakshmi Engineering College). Built with **Next.js 15**, **Tailwind CSS v4**, and animated components from **React Bits**.

---

## ⚡ Features

- **Design Language**: Pitch-black (`#000000`) aesthetic inspired by [learn.devsrec.com](https://learn.devsrec.com/), with subtle glassmorphism, glowing borders, and `Plus Jakarta Sans` + `JetBrains Mono` typography.
- **React Bits Components**:
  - `Squares`: Interactive moving canvas grid background.
  - `SpotlightCard`: Radial cursor spotlight tracking on domain cards.
  - `DecryptedText`: Cyberpunk scrambled glyph animation.
  - `ShinyText`: Iridescent shimmer badge animation.
  - `TiltedCard`: 3D perspective spring tilt on project showcases.
  - `CountUp`: Eased statistical number counters.
  - `Magnet`: Magnetic pull effect on CTA buttons.
  - `BlurText`: Staggered blur-to-sharp entrance animations.
  - `InfiniteScroll`: Seamless auto-scrolling tech stack marquee.
  - `TrueFocus`: Interactive word outline focus.
- **No-Code CMS Studio (`/admin`)**:
  - Built-in studio allowing non-technical club leads (PR, Operations, Content) to edit hero announcements, live counters, upcoming events, and project cards in real-time without touching code or redeploying.
- **Campus Platforms Showcase**:
  - Highlights *REC Virtual Experience 3D*, *DEVs P2P Platform*, *REC Explore: The Game*, and *DEVS Chat*.
- **Devathon & Events Radar**:
  - Real-time seat progress, category tags, and instant RSVP Pass generation with celebratory confetti.
- **Recruitment Application Portal (`/apply`)**:
  - Dedicated multi-domain onboarding application flow with tracking IDs.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router, Server Components)
- **Library**: React 19
- **Styling**: Tailwind CSS v4 & PostCSS
- **Animations**: Framer Motion & HTML5 Canvas
- **Icons**: Lucide React
- **Confetti**: Canvas Confetti
- **Typography**: Plus Jakarta Sans, JetBrains Mono

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Saisrikar20/DEVs-Website.git
cd DEVs-Website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Google fonts, global layout & navigation
│   │   ├── page.tsx           # Flagship homepage
│   │   ├── events/page.tsx    # Devathon & workshop hub with RSVP passes
│   │   ├── projects/page.tsx  # Interactive showcase of student platforms
│   │   ├── team/page.tsx      # Core board & alumni hall of fame
│   │   ├── apply/page.tsx     # Recruitment application portal
│   │   ├── admin/page.tsx     # No-code CMS Studio for club leads
│   │   ├── api/               # Server-side RSVP & application endpoints
│   │   └── globals.css        # Tailwind v4 styles, keyframes & scrollbars
│   ├── components/
│   │   ├── reactbits/         # React Bits interactive components
│   │   ├── navbar.tsx         # Responsive navigation & mobile drawer
│   │   ├── footer.tsx         # Domain links, socials & credits
│   │   ├── hero-section.tsx   # Canvas grid hero with magnetic CTAs
│   │   ├── stats-section.tsx  # Live counters
│   │   ├── domains-section.tsx# Spotlight domain cards
│   │   ├── flagship-projects.tsx # 3D tilted project cards
│   │   ├── events-radar.tsx   # Event list with RSVP trigger
│   │   └── rsvp-modal.tsx     # Digital pass generator
│   └── data/
│       ├── club-data.ts       # Initial schema & default data
│       └── cms-store.ts       # In-browser CMS reactive store
```

---

## 📜 License
MIT &copy; DEVS REC — Rajalakshmi Engineering College

