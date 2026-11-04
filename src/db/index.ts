import { env } from '@/lib/env/server';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { relations } from './relations';

const sql = neon(env.DATABASE_URL);
const db = drizzle({ client: sql, relations, logger: true });

export default db;
