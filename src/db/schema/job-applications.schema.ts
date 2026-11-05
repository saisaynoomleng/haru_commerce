import * as t from 'drizzle-orm/pg-core';
import { JobTable } from './jobs.schema';
import { jobApplicationStatus, salaryType, timestamps } from './schema-helper';

export const JobApplicationTable = t.pgTable(
  'job_applications',
  {
    id: t.uuid('id').primaryKey().defaultRandom(),
    jobId: t
      .uuid('job_id')
      .references(() => JobTable.id, { onDelete: 'cascade' })
      .notNull(),

    firstName: t.varchar('first_name', { length: 255 }).notNull(),
    lastName: t.varchar('last_name', { length: 255 }).notNull(),
    email: t.varchar('email', { length: 255 }).notNull(),
    phone: t.varchar('phone', { length: 255 }).notNull(),
    address1: t.varchar('address_1', { length: 255 }).notNull(),
    address2: t.varchar('address_2', { length: 255 }),
    city: t.varchar('city', { length: 100 }).notNull(),
    state: t.varchar('state', { length: 100 }).notNull(),
    zip: t.varchar('zip', { length: 20 }).notNull(),
    country: t.varchar('country', { length: 100 }).notNull(),

    linkedInUrl: t.text('linked_in_url'),
    gitHubUrl: t.text('git_hub_url'),
    portfolioUrl: t.text('portfolio_url'),

    resumeUrl: t.text('resume_url').notNull(),
    coverLetterUrl: t.text('cover_letter_url'),

    status: jobApplicationStatus('status').notNull().default('new'),

    workAuthorized: t.boolean('work_authorized').notNull().default(false),
    requireSponsorship: t
      .boolean('require_sponsorship')
      .notNull()
      .default(false),
    salaryExpectation: t.integer('salary_expectation').notNull(),
    salaryType: salaryType('salary_type').notNull().default('yearly'),
    availableStartDate: t.date('available_start_date').notNull().defaultNow(),

    ...timestamps,
  },
  (table) => [
    t.index('application_job_idx').on(table.jobId),
    t.index('application_status_idx').on(table.status),
    t.index('application_email_idx').on(table.email),
  ],
);
