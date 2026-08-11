import type { VercelRequest, VercelResponse } from '@vercel/node';
import getIGBDToken from './lib/getIGDBToken';
import { configDotenv } from 'dotenv';
import * as path from 'node:path';
import { orderingType } from './constants';

configDotenv({ path: path.resolve(process.cwd(), '.env.local') });

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const params = new URLSearchParams(req.query as Record<string, string>);

  const ordering = params.get('ordering') ?? 'topRated';
  const limit = params.get('limit') ?? 12;

  const currentOrdering = orderingType[ordering as keyof typeof orderingType];

  try {
    const currentToken = await getIGBDToken();

    if (!clientId) {
      throw new Error('Client ID is missing');
    }

    const response = await fetch('https://api.igdb.com/v4/games/', {
      method: 'POST',
      headers: {
        'Client-ID': clientId,
        Authorization: `Bearer ${currentToken}`,
        'Content-Type': 'text/plain',
      },
      body: `
        fields name, cover.url, rating, summary;
        where ${currentOrdering.where};
        sort ${currentOrdering.sort};
        limit ${limit};
      `,
    });

    if (!response.ok) {
      throw new Error(`IGDB API error: ${response.statusText}`);
    }

    const games = await response.json();

    return res.status(200).json(games);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : error;

    console.error('Failed to fetch top games:', errorMessage);

    return res.status(500).json({
      error: 'Internal Server Error',
      message: 'Failed to fetch top games, try again',
    });
  }
};

export default handler;
