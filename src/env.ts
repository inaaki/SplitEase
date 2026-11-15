import { z } from "zod";

const EnvSchema = z.object({
  BETTER_AUTH_SECRET: z
    .string()
    .min(1, { message: "BETTER_AUTH_SECRET is required" }),
  APP_PORT: z.coerce.number().min(1, { message: "APP_PORT is required" }),
  POSTGRES_USER: z.string().min(1, { message: "POSTGRES_USER is required" }),
  POSTGRES_PASSWORD: z
    .string()
    .min(1, { message: "POSTGRES_PASSWORD is required" }),
  POSTGRES_DB: z.string().min(1, { message: "POSTGRES_DB is required" }),
  DB_PORT: z.string().min(1, { message: "DB_PORT is required" }),
});

const parsed = EnvSchema.safeParse(process.env);

if (!parsed.success) {
  console.error(
    "Failed to parse environment variables",
    z.flattenError(parsed.error).fieldErrors
  );

  throw new Error("Failed to parse env vars");
}

export const env = parsed.data;

/** Shape of the validated environment variables. */
export type AppEnv = z.infer<typeof EnvSchema>;
