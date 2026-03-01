# CineTrack

CineTrack is Minimal movie discovery app powered by the OMDb API.

## Tech stack

- React 19 + TypeScript
- Vite + TanStack Start (Router + Query)
- Tailwind CSS 4
- Axios + Zod env validation

## Prerequisites

- Node.js (LTS)
- npm
- OMDb API key

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create env file:
   ```bash
   cp .env.example .env
   ```
3. Set `VITE_OMDBAPI_API_KEY` in `.env`.
4. Start development server:
   ```bash
   npm run dev
   ```

App runs on `http://localhost:3000`.

## Environment variables

- `VITE_OMDBAPI_API_KEY`: required OMDb API key
- `VITE_API_URL`: OMDb base URL (default: `https://www.omdbapi.com/`)

## Scripts

- `npm run dev`: run local dev server
- `npm run build`: production build
- `npm run preview`: preview built app
- `npm run test`: run tests
- `npm run lint`: run ESLint
- `npm run format`: check formatting with Prettier
- `npm run check`: auto-fix Prettier + ESLint issues

## Deployment

Netlify config is in `netlify.toml`.
