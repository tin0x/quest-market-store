import type { VercelRequest, VercelResponse } from '@vercel/node';
import { configDotenv } from 'dotenv';
import * as path from 'node:path';
import getIGBDToken from './lib/getIGDBToken.ts';

configDotenv({ path: path.resolve(process.cwd(), '.env.local') });

const gameWithPagination = async (req: VercelRequest, res: VercelResponse) => {
  const userId = process.env.TWITCH_CLIENT_ID;

  const limit = Number(req.query.limit ?? 30);
  const offset = Number(req.query.offset ?? 0);
  const sort = req.query.sort ?? 'rating desc';

  const search = req.query.search ? `search "${req.query.search}"` : '';
  const genres = req.query.genres ? (Array.isArray(req.query.genres) ? req.query.genres : [req.query.genres]) : [];
  const platforms = req.query.platforms
    ? Array.isArray(req.query.platforms)
      ? req.query.platforms
      : [req.query.platforms]
    : [];

  const searchOrSortQuery = search ? search : `sort ${sort}`;
  let whereClause = 'cover != null & rating_count > 500';

  if (genres.length > 0) {
    whereClause += `& genres = (${genres.join(',')})`;
  }

  if (platforms.length > 0) {
    whereClause += `& platforms = (${platforms.join(',')})`;
  }

  try {
    if (!userId) {
      throw new Error('userId is missing');
    }

    const token = await getIGBDToken();

    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Client-ID': userId,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: `
        fields name, cover.url, rating, summary;
        where ${whereClause};
        ${searchOrSortQuery};
        limit ${limit};
        offset ${offset};
      `,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch IGDB response');
    }

    const parsedResponse = await response.json();
    res.status(200).json(parsedResponse);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : error;
    res.status(500).json({
      error: 'Internal Server Error',
      message: errorMessage,
    });
  }
};

export default gameWithPagination;
