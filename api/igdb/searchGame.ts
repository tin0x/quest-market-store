import type { VercelRequest, VercelResponse } from '@vercel/node';
import { configDotenv } from 'dotenv';
import * as path from 'node:path';
import getIGBDToken from './lib/getIGDBToken.ts';

configDotenv({ path: path.resolve(process.cwd(), '.env.local') });

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const url = new URL(req.url ?? '', 'http://localhost');
  const searchParam = url.searchParams.get('search');

  try {
    const token = await getIGBDToken();

    if (!clientId) {
      throw new Error('Client ID is missing');
    }

    const response = await fetch('https://api.igdb.com/v4/search', {
      method: 'POST',
      headers: {
        'Client-ID': clientId,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'text/plain',
      },
      body: `
      fields name, game;
      search "${searchParam}";
      limit 5;
      `,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch list of games by name');
    }

    const games = await response.json();

    return res.status(200).json(games);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : error;

    return res.status(500).json({
      error: 'Internal Server Error',
      message: errorMessage,
    });
  }
};

export default handler;
