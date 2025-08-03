# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 medical practice website for Dr. Κωνσταντίνος Κωστογλάνης, a Greek general surgeon. The site is built with React 19, TypeScript, and uses Tailwind CSS v4 with shadcn/ui components. All content is in Greek language.

## Development Commands

```bash
# Install dependencies - MUST use npm with legacy peer deps flag
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production  
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

**Critical**: Always use `npm install --legacy-peer-deps` due to React 19 peer dependency conflicts with some packages.

## Architecture

### Tech Stack
- **Framework**: Next.js 15.2.4 with App Router
- **UI Components**: shadcn/ui (New York style) with Radix UI primitives  
- **Styling**: Tailwind CSS v4 with CSS variables and custom teal/cyan brand colors
- **Icons**: Lucide React icons throughout
- **Language**: TypeScript with build errors ignored for deployment
- **Package Manager**: npm (not pnpm despite lockfile presence)

### Project Structure
- `/app` - Next.js App Router with required error boundaries
  - `layout.tsx` - Root layout with Greek metadata and Inter font
  - `page.tsx` - Single-page homepage with all sections
  - `error.tsx` & `global-error.tsx` - Required error boundary components
  - `not-found.tsx` - 404 page component
  - Individual pages: `/about`, `/contact`, `/faq`
- `/components/ui` - Complete shadcn/ui component library
- `/public/images` - Medical practice assets including:
  - `Hero-image.webp` - Transparent hero image (preferred)
  - `kkostoglanis-logo.svg` - Official practice logo
  - Legacy placeholder images

### Key Configuration Details
- **Build Config**: ESLint and TypeScript errors ignored during builds (next.config.mjs)
- **Images**: Unoptimized for static deployment compatibility
- **shadcn/ui**: New York style with neutral base, CSS variables enabled
- **Path Aliases**: Standard `@/*` mapping to root directory
- **Language**: Greek (`lang="el"`) with Greek content throughout

### Content Structure & Branding
The homepage (`/app/page.tsx`) contains all sections in order:
1. **Hero Section**: Features transparent doctor image, teal gradient background
2. **Emergency Banner**: Dark slate background with teal accents (not red)
3. **Services Grid**: Medical services with professional icons
4. **Credentials Section**: Doctor's biography and qualifications
5. **Testimonials**: Patient reviews using "κύριος Κωστογλάνης" (not "Δρ.")
6. **CTA Section**: Appointment booking with contact information

### Important Content Guidelines
- **Doctor's Name**: "Δρ. Κωνσταντίνος Κωστογλάνης" in headers/titles
- **Testimonials**: Use "Ο κύριος Κωστογλάνης" (not "Ο Δρ. Κωστογλάνης") 
- **Brand Colors**: Teal/cyan primary colors, avoid red except for CTAs
- **Emergency Section**: Dark professional styling, not bright red
- **Button Text**: "Περισσότερες Κριτικές" (not "Μαρτυρίες")

### Error Handling Requirements
Next.js App Router requires these error boundary files:
- `app/error.tsx` - Page-level error handling
- `app/global-error.tsx` - Global application error boundary  
- `app/not-found.tsx` - 404 page handling

Missing these files will cause "missing required error components" build failures.

### Development Notes
- Single-page architecture with all content in homepage
- No backend integration or form submission handlers
- Static deployment optimized (unoptimized images)
- Greek language content requires proper UTF-8 handling
- Brand consistency important for medical practice credibility