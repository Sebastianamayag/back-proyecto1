import { Pool } from 'pg';

export const pool = new Pool({
  user: 'postgres',
    host: 'localhost',
    password: 'passwordpostgres',
    database: 'academialavictoria',
    port: 5432
});
