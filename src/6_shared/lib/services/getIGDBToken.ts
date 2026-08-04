import { configDotenv } from 'dotenv';
import * as path from 'node:path';

configDotenv({ path: path.resolve(process.cwd(), '.env.local') });

let cachedToken: string | null = null;
let tokenExpiredAt = 0;

const getIGBDToken = async () => {
  const now = Date.now();

  if (cachedToken && now < tokenExpiredAt) {
    return cachedToken;
  }

  if (!process.env.TWITCH_CLIENT_ID || !process.env.TWITCH_CLIENT_SECRET) {
    throw new Error('Missing Twitch credentials in environment variables');
  }

  const response = await fetch(`https://id.twitch.tv/oauth2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: process.env.TWITCH_CLIENT_ID,
      client_secret: process.env.TWITCH_CLIENT_SECRET,
      grant_type: 'client_credentials',
    }),
  });

  if (!response.ok) {
    throw new Error(`Token error: ${response.statusText}`);
  }

  const { access_token, expires_in } = await response.json();

  cachedToken = access_token;
  tokenExpiredAt = now + (expires_in - 300) * 1000;

  return cachedToken;
};

export default getIGBDToken;
