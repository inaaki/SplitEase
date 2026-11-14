import { env as rawEnv } from "cloudflare:workers";
import { z } from "zod";

const EnvSchema = z.object({
  BETTER_AUTH_SECRET: z
    .string()
    .min(1, { message: "BETTER_AUTH_SECRET is required" }),
});

const parsed = EnvSchema.safeParse(rawEnv);

if (!parsed.success) {
  console.error("Failed to parse environment variables");

  throw new Error("Failed to parse env vars");
}

export const env = parsed.data;

/** Shape of the validated environment variables. */
export type AppEnv = z.infer<typeof EnvSchema>;
