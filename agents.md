# Agents

## Overview

This document outlines the AI agents and tools available in the Canvey Foot Clinic React-Vite project.

## Tech Stack

- **Framework**: React 18+
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Language**: JavaScript

## Available Agents

### UI Agent

Handles component generation and styling with Tailwind CSS v4.

### Data Agent

Manages API calls and state management for clinic data.

### Form Agent

Processes form submissions and validation for appointments and inquiries.

## Tools

### Component Generator

Creates React components with Tailwind styling.

### API Client

Handles HTTP requests to clinic backend services.

### State Manager

Manages global application state.

## Integration Guidelines

- All components must use Tailwind v4 utility classes
- Components should be functional with React hooks
- API responses should be cached when appropriate
- Form validation should happen client-side first
- Inline comments should be short and to the point by default; use more than one sentence only when it adds clear value.

## Colour Conventions

- All colour values are defined as tokens in `src/styles/theme.css`
- All tokens (base and semantic) live in `@theme` using the `--color-app-*` prefix; Tailwind v4 auto-generates utilities from these (e.g. `text-app-primary`, `bg-app-surface`)
- **Never use bracket syntax** (`text-(--var)`) or raw `color: var(...)` or hardcoded hex values in component stylesheets
- **Always use the generated utility class** inside `@apply`:
  - `@apply text-app-primary` — brand blue; headings, accents, logos
  - `@apply text-app-text` — default body text grey
  - `@apply bg-app-surface` — white background
  - `@apply bg-app-muted` — off-white/alternate section background
  - `@apply bg-app-primary` — blue background (contact bar, footer)
- Current token → utility reference:

  | Token                 | Value     | Utility                               |
  | --------------------- | --------- | ------------------------------------- |
  | `--color-app-primary` | `#00236f` | `text-app-primary` / `bg-app-primary` |
  | `--color-app-text`    | `#444651` | `text-app-text`                       |
  | `--color-app-surface` | `#ffffff` | `bg-app-surface`                      |
  | `--color-app-muted`   | `#f8f9fa` | `bg-app-muted`                        |
