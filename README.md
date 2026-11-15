# SplitEase

Hono API running on Node.js (>= 24).

## Setup

```sh
pnpm install
cp .env.example .env   # then fill in the values
docker compose up -d   # Postgres on localhost:5455
```

## Scripts

| Command          | Description                                  |
| ---------------- | -------------------------------------------- |
| `pnpm dev`       | Start the server with hot reload (tsx watch) |
| `pnpm build`     | Compile TypeScript to `dist/`                |
| `pnpm start`     | Run the compiled server                      |
| `pnpm typecheck` | Type-check without emitting                  |
| `pnpm test`      | Run tests with Vitest                        |
| `pnpm check`     | Lint and format check (Ultracite)            |
| `pnpm fix`       | Auto-fix lint and format issues              |

Environment variables are loaded from `.env` via Node's `--env-file-if-exists`
and validated in `src/env.ts`.
