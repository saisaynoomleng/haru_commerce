import * as t from 'drizzle-orm/pg-core';

export const timestamps = {
  createdAt: t
    .timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),
  updatedAt: t
    .timestamp('updated_at', { withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
};

export const productStatus = t.pgEnum('product_status', [
  'draft',
  'published',
  'no_longer_available',
]);

export const contactStatus = t.pgEnum('contact_status', [
  'new',
  'resolved',
  'spam',
  'in_progress',
]);

export const jobStatus = t.pgEnum('job_offer_status', ['open', 'close']);

export const jobApplicationStatus = t.pgEnum('job_application_status', [
  'new',
  'reviewing',
  'shortlisted',
  'interview',
  'offered',
  'hired',
  'rejected',
  'withdrawn',
]);

export const salaryType = t.pgEnum('salary_type', ['hourly', 'yearly']);
export const eeoRace = t.pgEnum('eeo_race', [
  'american_indian_or_alaska_native',
  'asian',
  'black_or_african_american',
  'native_hawaiian_or_pacific_islander',
  'white',
  'two_or_more_races',
  'prefer_not_to_answer',
]);

export const eeoEthnicity = t.pgEnum('eeo_ethnicity', [
  'hispanic_or_latino',
  'not_hispanic_or_latino',
  'prefer_not_to_answer',
]);

export const eeoVeteranStatus = t.pgEnum('eeo_veteran_status', [
  'protected_veteran',
  'not_protected_veteran',
  'not_a_veteran',
  'prefer_not_to_answer',
]);

export const eeoDisabilityStatus = t.pgEnum('eeo_disability_status', [
  'yes',
  'no',
  'prefer_not_to_answer',
]);

export const educationLevel = t.pgEnum('education_level', [
  'high_school',
  'ged',
  'associate',
  'bachelor',
  'master',
  'doctorate',
  'professional',
  'other',
]);

export const employmentType = t.pgEnum('employment_type', [
  'full_time',
  'part_time',
  'contract',
  'temporary',
  'internship',
  'freelance',
  'self_employed',
  'other',
]);

export const tokenStatus = t.pgEnum('token_status', ['new', 'used']);
