import { describe, expect, it } from "vitest";

import app from "./app.js";

const HTTP_OK = 200;

describe("GET /health", () => {
  it("responds with 200 and a healthy status payload", async () => {
    const res = await app.request("/health");

    expect(res.status).toBe(HTTP_OK);
    expect(res.headers.get("content-type")).toContain("application/json");
    expect(await res.json()).toStrictEqual({
      message: "Server is up and running",
      status: true,
    });
  });
});
