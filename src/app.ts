import { Hono } from "hono";

const app = new Hono();

app.get("/health", (c) =>
  c.json({ status: true, message: "Server is up and running" }, 200)
);

app.get("/env", (c) =>
  c.json({
    status: true,
    message: "Environment variables are valid",
  })
);

app.notFound((c) => c.json({ status: false, message: "Route not found" }, 404));

export default app;
