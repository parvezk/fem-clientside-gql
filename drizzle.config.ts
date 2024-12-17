import 'dotenv/config'
import type { Config } from 'drizzle-kit'
export default {
  schema: './db/schema.ts',
  out: './migrations',
  driver: 'turso',
  /* dbCredentials: {
    url: process.env.TURSO_CONNECTION_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN!,
  }, */
  dbCredentials: {
    url: 'libsql://my-db-parvezk.turso.io',
    authToken:
      'eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJhIjoicnciLCJpYXQiOjE3Mjk2MDkwNjYsImlkIjoiMWNmNmQ1ZmMtY2E3NS00Nzk0LWFmMjAtMzhmNDkwMGM1ZmFlIn0.wiWt7av98z6o9Jvdu6i4HLKAd84tb3jtHYdiec8vl4WE9dAuggILMzhT5wfzozrgu10MDT4PNQVVnENwX7guCQ',
  },
  verbose: true,
  strict: true,
} satisfies Config
