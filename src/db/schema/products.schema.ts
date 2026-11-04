import * as t from 'drizzle-orm/pg-core';
import { productStatus, timestamps } from './schema-helper';
import { sql } from 'drizzle-orm';

export const ProductTable = t.pgTable(
  'products',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    sanityId: t.varchar('sanity_id', { length: 255 }).notNull().unique(),
    name: t.varchar('name', { length: 255 }).notNull(),
    priceInKRW: t.integer('price_in_krw').notNull(),
    priceInUSDCents: t.integer('price_in_usd_cents').notNull(),
    status: productStatus('status').notNull().default('published'),
    ...timestamps,
  },
  (table) => [
    t.check('price_check_in_krw', sql`${table.priceInKRW} > 0`),
    t.check('price_check_in_usd', sql`${table.priceInUSDCents} > 0`),
  ],
);
