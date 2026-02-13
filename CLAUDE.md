# CLAUDE.md

## Project Overview

D&D 5.5 Helper Web Application — a Spanish-language resource and guide platform for Dungeons & Dragons 5th Edition (2024 revision). Provides game rules references, character creation guides, and a searchable note system with categorization, filtering, and tagging.

## Tech Stack

- **Framework**: Next.js 16 with App Router (React 19, Server Components)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS 4 + CSS custom properties (D&D parchment/dungeon theme)
- **Content**: Markdown files with YAML frontmatter (gray-matter, react-markdown, remark-gfm, rehype-raw)
- **Compiler**: React Compiler enabled via babel-plugin-react-compiler

## Repository Structure

```
DND-5E-Ayuda/
└── dnd-helper-app/                    # Main application root
    ├── src/
    │   ├── app/                       # Next.js App Router pages
    │   │   ├── layout.tsx             # Root layout (header/footer/nav)
    │   │   ├── page.tsx               # Home page
    │   │   ├── globals.css            # Global styles & CSS variables
    │   │   ├── character-creation/    # Character creation guide page
    │   │   ├── game-aids/             # Game aids & tables page
    │   │   └── notes/                 # Notes system
    │   │       ├── page.tsx           # Notes listing with filters
    │   │       └── [slug]/page.tsx    # Dynamic note detail page
    │   ├── components/                # Reusable React components
    │   │   ├── NoteCard.tsx
    │   │   ├── NoteFilters.tsx
    │   │   └── ScrollToTopButton.tsx
    │   └── lib/
    │       └── notes.ts               # Note data fetching & filtering utilities
    ├── notes_content/                 # Markdown content files (YAML frontmatter)
    ├── public/                        # Static assets
    └── package.json
```

## Common Commands

All commands run from `dnd-helper-app/`:

```bash
cd dnd-helper-app
npm run dev        # Start dev server (localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npx eslint .       # Run linter (ESLint 9 flat config)
```

There is no test framework configured — no test runner or test files exist.

## Code Conventions

### Naming
- **Components**: PascalCase files and exports (`NoteCard.tsx`)
- **Utilities**: camelCase files (`notes.ts`)
- **Routes**: kebab-case directories (`character-creation/`, `game-aids/`)
- **Dynamic routes**: bracket syntax (`[slug]/`)

### Patterns
- Pages are Server Components by default; add `'use client'` only when interactivity is needed
- Path alias: `@/*` maps to `./src/*`
- Props typed with TypeScript `interface` declarations — avoid `any`
- Data fetching uses filesystem reads from `notes_content/` at build/runtime (no database)
- Error handling with try-catch in data fetching, `notFound()` for missing resources

### Language
- UI copy, labels, categories, and content are in **Spanish**
- Date formatting uses `'es-ES'` locale
- Code comments mix Spanish (data files) and English (components)
- Type values use Spanish strings (e.g., `difficulty: 'Principiante' | 'Intermedio' | 'Avanzado' | 'DM'`)

### Styling
- Tailwind utility classes for layout and spacing
- CSS custom properties for theme colors (defined in `globals.css`)
- Two themes: light (parchment) and dark (dungeon) via `prefers-color-scheme`
- Typography: Cinzel for headings, Crimson Text/Georgia for body, Geist Mono for code

## Content System

Notes are Markdown files in `notes_content/` with required YAML frontmatter:

```yaml
---
title: "Note Title"
date: "YYYY-MM-DD"
author: "Author Name"
category: "Reglas Básicas"  # Must match NoteCategory type
tags: ["tag1", "tag2"]
difficulty: "Principiante"   # Principiante | Intermedio | Avanzado | DM
edition: "5.5"               # 5e | 5.5 | Ambas
description: "Short description"
relatedNotes: ["other-note-slug"]
---
```

Categories are defined as the `NoteCategory` union type in `src/lib/notes.ts`.

## Configuration

| File | Purpose |
|------|---------|
| `tsconfig.json` | TypeScript strict mode, ES2017 target, `@/*` path alias |
| `next.config.ts` | React Compiler enabled |
| `tailwind.config.ts` | Typography plugin, content paths |
| `eslint.config.mjs` | ESLint 9 flat config, Next.js core-web-vitals + TypeScript rules |
| `postcss.config.mjs` | Tailwind PostCSS plugin |
