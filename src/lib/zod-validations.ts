import * as z from 'zod';

//==========================//
//=========Forms============//
//==========================//
export const NewsletterFormSchema = z.object({
  email: z.email({ error: 'Must be a valid email' }),
  readTerm: z.boolean().default(false),
});
export type NewsletterFormInput = z.input<typeof NewsletterFormSchema>;
