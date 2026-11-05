import * as t from 'drizzle-orm/pg-core';
import { JobApplicationTable } from './job-applications.schema';
import {
  eeoRace,
  eeoEthnicity,
  eeoVeteranStatus,
  eeoDisabilityStatus,
} from './schema-helper';

export const JobApplicationEEOTable = t.pgTable('job_application_eeo', {
  id: t.uuid('id').primaryKey().defaultRandom(),

  applicationId: t
    .uuid('application_id')
    .references(() => JobApplicationTable.id, {
      onDelete: 'cascade',
    })
    .notNull()
    .unique(),

  race: eeoRace('race'),

  ethnicity: eeoEthnicity('ethnicity'),

  veteranStatus: eeoVeteranStatus('veteran_status'),

  disabilityStatus: eeoDisabilityStatus('disability_status'),

  voluntarilySubmitted: t
    .boolean('voluntarily_submitted')
    .notNull()
    .default(false),

  createdAt: t
    .timestamp('created_at', {
      withTimezone: true,
    })
    .defaultNow()
    .notNull(),

  updatedAt: t
    .timestamp('updated_at', {
      withTimezone: true,
    })
    .defaultNow()
    .notNull(),
});
