import * as t from 'drizzle-orm/pg-core';
import { JobApplicationTable } from './job-applications.schema';
import { jobApplicationStatus } from './schema-helper';

export const JobApplicationStatusHistoryTable = t.pgTable(
  'job_application_status_history',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    applicationId: t
      .uuid('application_id')
      .references(() => JobApplicationTable.id, {
        onDelete: 'cascade',
      })
      .notNull(),
    previousStatus: jobApplicationStatus('previous_status'),
    newStatus: jobApplicationStatus('new_status').notNull(),

    changedBy: t.uuid('changed_by'),

    note: t.text('note'),

    createdAt: t
      .timestamp('created_at', {
        withTimezone: true,
      })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    t.index('application_status_history_idx').on(table.applicationId),
  ],
);
