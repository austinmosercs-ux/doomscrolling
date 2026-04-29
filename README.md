# Doomscrolling - React Edition

A React conversion of the doomscrolling awareness website. Built with Vite, React Router, and modern hooks.

## Features

- **Home Page** - Research slides about social media consumption with logo slideshow
- **Opinion Page** - Scrollable essay with fade effects and progress tracking
- **Doomscrolling Page** - Infinite scroll feed with meme API integration and scroll timer
- **Purpose Page** - Project context and information

## Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Start development server:**
```bash
npm run dev
```
The app will be available at `http://localhost:3000`

3. **Build for production:**
```bash
npm run build
```

## Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Router setup
├── components/
│   ├── Navigation.jsx    # Navigation component
│   └── PostCard.jsx      # Individual post component
├── pages/
│   ├── Home.jsx          # Home page with research slides
│   ├── Opinion.jsx       # Opinion essay page
│   ├── Doomscrolling.jsx # Infinite scroll feed
│   └── Purpose.jsx       # Purpose/about page
├── utils/
│   ├── helpers.js        # Utility functions and data
│   └── memeApi.js        # Meme API integration
└── styles/
    ├── shared.css
    ├── index.css
    ├── doomscrolling.css
    ├── purpose.css
    └── animations/
```

## Tech Stack

- **React 18** - UI framework
- **React Router v6** - Client-side routing
- **Vite** - Build tool and dev server
- **Meme API** - Reddit meme source

## Key Differences from Vanilla JS

- Replaced DOM manipulation with React components and state
- Converted vanilla JS to React hooks (useState, useEffect, useCallback)
- Implemented React Router for multi-page navigation (instead of separate HTML files)
- Used useCallback to optimize infinite scroll performance
- Maintained all original CSS and animations

## Features

### Home Page
- Logo carousel that auto-rotates
- Research slides with fade-in-out effects
- Progress dot indicator on the right
- Responsive layout with fixed positioning

### Opinion Page  
- Scrollable essay broken into paragraphs
- Each paragraph fades in as you scroll
- Scroll hint animation
- Progress indicator

### Doomscrolling Page
- Infinite scroll feed powered by IntersectionObserver
- Real-time scroll timer (warns at 2min and 5min)
- Random post generation with real Reddit memes
- "Stop scrolling" button appears after 20 posts
- Sponsored posts and commentary interspersed

### Purpose Page
- Information about the project and its goals
