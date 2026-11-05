import * as t from 'drizzle-orm/pg-core';
import { timestamps, tokenStatus } from './schema-helper';

export const PromoTokenTable = t.pgTable('promo_tokens', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  status: tokenStatus('status').notNull().default('new'),
  ...timestamps,
});
