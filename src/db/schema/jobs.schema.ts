import * as t from 'drizzle-orm/pg-core';
import { jobStatus, timestamps } from './schema-helper';
import { sql } from 'drizzle-orm';

export const JobTable = t.pgTable(
  'job_offers',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    sanityId: t.varchar('sanity_id', { length: 255 }).notNull().unique(),
    name: t.varchar('name').notNull(),
    status: jobStatus('status').notNull().default('open'),
    ...timestamps,
  },
  (table) => [
    t
      .index('open_offer_idx')
      .on(table.createdAt)
      .where(sql`${table.status} = "open"`),
  ],
);
