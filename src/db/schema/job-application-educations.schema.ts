import * as t from 'drizzle-orm/pg-core';
import { JobApplicationTable } from './job-applications.schema';
import { educationLevel } from './schema-helper';

export const JobApplicationEducationTable = t.pgTable(
  'job_application_educations',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    applicationId: t
      .uuid('application_id')
      .references(() => JobApplicationTable.id, {
        onDelete: 'cascade',
      })
      .notNull(),
    institution: t.varchar('institution', { length: 255 }).notNull(),
    degree: t.varchar('degree', { length: 255 }),
    fieldOfStudy: t.varchar('field_of_study', { length: 255 }),
    educationLevel: educationLevel('education_level').notNull(),
    startDate: t.date('start_date'),
    endDate: t.date('end_date'),
    isCurrentlyStudying: t
      .boolean('is_currently_studying')
      .notNull()
      .default(false),
    grade: t.varchar('grade', { length: 50 }),
    description: t.text('description'),
    createdAt: t
      .timestamp('created_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [t.index('application_education_idx').on(table.applicationId)],
);
