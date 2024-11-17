import * as dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || '8080';
export const SERVER_URL = process.env.SERVER_URL || 'http://localhost:8080'
export const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';
export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const SESSION_SECRET = process.env.SESSION_SECRET;
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
export const GROQ_API_KEY = process.env.GROQ_API_KEY;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
export const DATABASE_CONNECTION_STRING =
  process.env.DATABASE_CONNECTION_STRING;
export const DATABASE_NAME = process.env.DATABASE_NAME;

const secrets = [
  'PORT',
  'SERVER_URL',
  'FRONTEND_URL',
  'SESSION_SECRET',
  'OPENAI_API_KEY',
  'GEMINI_API_KEY',
  'GROQ_API_KEY',
  'GOOGLE_CLIENT_ID',
  'GOOGLE_CLIENT_SECRET',
  'DATABASE_CONNECTION_STRING',
  'DATABASE_NAME'
];

secrets.some((secret: string) => {
  if (!process.env[secret]) {
    console.log(secret, 'is required.');
    process.exit(1);
  }
});
