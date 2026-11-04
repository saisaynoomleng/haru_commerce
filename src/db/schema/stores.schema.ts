import * as t from 'drizzle-orm/pg-core';
import { timestamps } from './schema-helper';

export const StoreTable = t.pgTable('stores', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  sanityId: t.varchar('sanity_id').notNull().unique(),
  name: t.varchar('name', { length: 255 }).notNull(),
  ...timestamps,
});
