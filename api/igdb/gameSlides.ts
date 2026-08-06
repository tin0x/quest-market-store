import type { VercelRequest, VercelResponse } from '@vercel/node';
import getIGBDToken from './lib/getIGDBToken';
import { configDotenv } from 'dotenv';
import * as path from 'node:path';

configDotenv({ path: path.resolve(process.cwd(), '.env.local') });

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const clientId = process.env.TWITCH_CLIENT_ID;
  const params = new URLSearchParams(req.query as Record<string, string>);

  const ordering = params.get('ordering') ?? 'topRated';
  const limit = params.get('limit') ?? 12;

  const orderingType = {
    topRated: {
      where: 'cover != null & rating_count > 500',
      sort: 'rating desc',
    },

    popular: {
      where: 'cover != null',
      sort: 'popularity desc',
    },

    mostReviewed: {
      where: 'cover != null',
      sort: 'rating_count desc',
    },

    newest: {
      where: 'cover != null',
      sort: 'first_release_date desc',
    },

    anticipated: {
      where: 'cover != null & hypes > 0',
      sort: 'hypes desc',
    },

    trending: {
      where: 'cover != null & follows > 100',
      sort: 'follows desc',
    },

    classics: {
      where: 'cover != null & rating > 90 & rating_count > 2000',
      sort: 'rating desc',
    },
  };

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
