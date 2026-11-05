import * as t from 'drizzle-orm/pg-core';
import { JobApplicationTable } from './job-applications.schema';
import { employmentType, timestamps } from './schema-helper';

export const JobApplicationExperienceTable = t.pgTable(
  'job_application_experiences',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),

    applicationId: t
      .uuid('application_id')
      .references(() => JobApplicationTable.id, {
        onDelete: 'cascade',
      })
      .notNull(),

    company: t.varchar('company', { length: 255 }).notNull(),

    jobTitle: t.varchar('job_title', { length: 255 }).notNull(),

    employmentType: employmentType('employment_type'),

    location: t.varchar('location', { length: 255 }),

    startDate: t.date('start_date'),

    endDate: t.date('end_date'),

    isCurrentlyWorking: t
      .boolean('is_currently_working')
      .notNull()
      .default(false),

    description: t.text('description'),

    ...timestamps,
  },
  (table) => [t.index('application_experience_idx').on(table.applicationId)],
);
