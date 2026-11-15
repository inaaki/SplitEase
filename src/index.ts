import { serve } from "@hono/node-server";

import app from "./app.js";
import { env } from "./env.js";

const server = serve({ fetch: app.fetch, port: env.APP_PORT }, (info) => {
  console.info(`Server is running on http://localhost:${info.port}`);
});

const shutdown = () => {
  server.close();
  process.exit(0);
};

process.on("SIGINT", shutdown);

process.on("SIGTERM", shutdown);
