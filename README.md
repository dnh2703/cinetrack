# CineTrack

Minimal movie discovery app powered by the OMDb API.

## Tech stack

- React 19 + TypeScript
- Vite + TanStack Start (Router + Query)
- Tailwind CSS 4
- Axios + Zod env validation

## Prerequisites

- Bun (recommended)
- Node.js (LTS) + npm (alternative)
- OMDb API key

## Getting started

1. Install dependencies:
   ```bash
   bun install
   ```
   Alternative:
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
   bun run dev
   ```
   Alternative:
   ```bash
   npm run dev
   ```

App runs on `http://localhost:3000`.

## Environment variables

- `VITE_OMDBAPI_API_KEY`: required OMDb API key
- `VITE_API_URL`: OMDb base URL (default: `https://www.omdbapi.com/`)

## Scripts

- `bun run dev`: run local dev server
- `bun run build`: production build
- `bun run preview`: preview built app
- `bun run test`: run tests
- `bun run lint`: run ESLint
- `bun run format`: check formatting with Prettier
- `bun run check`: auto-fix Prettier + ESLint issues
- `bun run prepare`: install Husky Git hooks
- `npm run <script>` equivalents are also available.

## Commit message convention

This repository uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
Example:

```text
chore(ci): add lint and build workflows
```

`commit-msg` is enforced locally via Husky + commitlint.

## CI checks

GitHub Actions runs these required checks on pull requests and pushes to `main`:

- `lint`: `bun run lint`
- `build`: `bun run build`

## Deployment

Netlify config is in `netlify.toml`.
