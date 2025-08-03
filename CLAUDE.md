# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Dr. Kostoglanis, a Greek general surgeon. The site is built with React 19, TypeScript, and uses Tailwind CSS v4 with shadcn/ui components. The content is in Greek language.

## Development Commands

```bash
# Install dependencies (using pnpm)
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint
```

## Architecture

### Tech Stack
- **Framework**: Next.js 15.2.4 with App Router
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives
- **Styling**: Tailwind CSS v4 with CSS variables
- **Language**: TypeScript with strict mode
- **Package Manager**: pnpm

### Project Structure
- `/app` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with metadata in Greek
  - `page.tsx` - Homepage with hero, services, testimonials sections
  - `/about`, `/contact`, `/faq` - Additional pages
- `/components/ui` - shadcn/ui components library
- `/lib/utils.ts` - Utility functions including `cn()` for className merging
- `/public/images` - Static assets including doctor images

### Key Configuration
- **Path Aliases**: `@/*` maps to root directory
- **Build Settings**: ESLint and TypeScript errors are ignored during builds (see next.config.mjs)
- **Images**: Unoptimized image handling enabled
- **Font**: Inter from Google Fonts

### Component Library
The project uses shadcn/ui components with Lucide icons. All UI components are in `/components/ui/` and follow the shadcn/ui patterns with Radix UI as the headless component base.

### Important Notes
- The site content is entirely in Greek language
- No authentication or backend API integration currently exists
- Forms are presentational only (no submission handlers)
- The project appears to be generated from v0.dev