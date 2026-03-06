# Canvey Foot Clinic Website

A responsive, component-driven front-end project for a local podiatry clinic. This build focuses on clear information hierarchy, approachable branding, and mobile-first usability for users looking for opening hours, contact details, and services.

## Portfolio Summary

This project demonstrates:

- Building a modern React single-page interface with reusable components.
- Using a central content model (`src/web-data.js`) to keep UI text and business data editable in one place.
- Implementing responsive navigation patterns (desktop nav + full-screen mobile menu).
- Creating a branded UI theme with Tailwind CSS v4 and custom design tokens.

## Current Features

- Sticky header that includes desktop navigation links and a mobile menu toggle.
- Contact utility bar showing email, phone, and address.
- Full-screen mobile overlay navigation for small-screen devices.
- Hero section rendered from content data, including CTA buttons.
- Reusable `Section` component pattern for scalable page sections.
- Footer with opening hours, current day highlighting (Europe/London), and contact links.
- Local font loading (`Inter` variable font) via `@font-face`.

## Tech Stack

- React
- Vite
- Tailwind CSS v4
- React Icons
- ESLint (JS + React Hooks + React Refresh rules)

## Project Structure

Key files and folders:

- `src/App.jsx`: App shell and mobile-nav state management.
- `src/web-data.js`: Content and global clinic data source.
- `src/components/Header/`: Header modules (logo, nav, contact bar, mobile nav).
- `src/components/Sections/`: Reusable section components and hero implementation.
- `src/components/Footer/Footer.jsx`: Footer layout and opening-hours rendering.
- `src/index.css`: Tailwind import, theme tokens, and global base styles.
- `src/fonts.css`: Local font-face declarations.

## Running Locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npx vite
```

Create a production build:

```bash
npx vite build
```

Preview the production build locally:

```bash
npx vite preview
```

## Why This Is A Strong Portfolio Piece

- Shows practical UI architecture for a real business use case.
- Demonstrates reusable, data-driven React component design.
- Balances visual branding and functional accessibility for local-service users.
- Leaves room for clear next-phase enhancements without rewriting core structure.

## Suggested Next Iteration

- Add service detail sections and real page anchors for nav links.
- Connect CTA buttons to booking/contact flows.
- Add image assets and SEO metadata for production readiness.
- Introduce basic automated tests for critical UI rendering paths.

## Author

Built as a front-end portfolio project for Canvey Foot Clinic.
