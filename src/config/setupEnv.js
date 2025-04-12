import dotenv from 'dotenv';
import path from 'path';

const env = process.env.APP_ENV || process.env.NODE_ENV || 'dev';

const envFilePath = path.resolve(process.cwd(), `.env.${env}`);

dotenv.config({ path: envFilePath });

console.log(`[env] Carregado: ${envFilePath}`);
