# Canvey Foot Clinic

Responsive React + Vite website for a local foot health practitioner clinic, built to present services clearly and make it easy for patients to get in touch.

## Overview

This project provides a mobile-first clinic website with reusable UI components, JSON-driven content, and a simple global data flow. It is structured as an MVP: solid enough to extend, with ongoing improvements planned around content, UX, and production readiness.

## Key Features

- Responsive layout with mobile-first navigation
- JSON-driven content from `public/web-data.json`
- Reusable components including Section, Card, and section-specific views such as Hero, Services, and Contact
- Context API for shared site data plus loading and error states
- Semantic HTML to support accessibility and SEO
- GitHub Pages deployment support via Vite base path configuration

## Tech Stack

- React
- Vite
- Tailwind CSS v4
- Context API
- Vitest and Testing Library
- ESLint

## Development Notes

- Page structure and content are controlled through `public/web-data.json`
- Site data is loaded centrally through the context provider
- The component structure is designed for reuse and straightforward section expansion
- Vite base path configuration supports deployment to a subpath now and a custom domain later

## Running Locally

```bash
npm install
npm run dev
```

Available scripts:

```bash
npm run build
npm run preview
npm run test
npm run lint
```

## Deployment

The project is set up for static deployment with Vite. GitHub Pages is supported through the `base` setting in `vite.config.js`, which reads from `VITE_PUBLIC_BASE` when needed.

Typical deployment flow:

```bash
npm run build
```

Deploy the generated `dist/` output to GitHub Pages using your preferred workflow or action.

## Status

MVP in active development. The current structure is stable and practical, with further improvements planned for content depth, polish, and deployment workflow.
