import * as t from 'drizzle-orm/pg-core';
import { contactStatus, timestamps } from './schema-helper';

export const ContactTable = t.pgTable('contacts', {
  id: t.uuid('id').primaryKey().defaultRandom(),
  name: t.varchar('name', { length: 255 }).notNull(),
  email: t.varchar('email', { length: 255 }).notNull(),
  subject: t.text('subject').notNull(),
  body: t.text('body').notNull(),
  status: contactStatus('status').notNull().default('new'),
  ...timestamps,
});
