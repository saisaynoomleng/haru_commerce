import { createEnv } from '@t3-oss/env-nextjs';
import * as z from 'zod';

export const env = createEnv({
  emptyStringAsUndefined: true,
  server: {
    SANITY_STUDIO_PROJECT_DATASET: z
      .enum(['production', 'development'])
      .default('production'),
    SANITY_STUDIO_PROJECT_ID: z
      .string()
      .min(1, { error: 'Sanity Studio project id is required' }),

    BETTER_AUTH_SECRET: z
      .string()
      .min(1, { error: 'Better Auth secret is required' }),

    DATABASE_URL: z.string().startsWith('postgresql://'),
  },
  runtimeEnv: {
    SANITY_STUDIO_PROJECT_DATASET: process.env.SANITY_STUDIO_PROJECT_DATASET,
    SANITY_STUDIO_PROJECT_ID: process.env.SANITY_STUDIO_PROJECT_ID,
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    DATABASE_URL: process.env.DATABASE_URL,
  },
  skipValidation: !!process.env.SKIP_VALIDATION,
});
