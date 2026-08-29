import type { VercelRequest, VercelResponse } from '@vercel/node';
import { configDotenv } from 'dotenv';
import * as path from 'node:path';
import getIGBDToken from './lib/getIGDBToken.ts';

configDotenv({ path: path.resolve(process.cwd(), '.env.local') });

const handler = async (req: VercelRequest, res: VercelResponse) => {
  const userId = process.env.TWITCH_CLIENT_ID;
  const gameId = req.query.id ?? '';

  try {
    const token = await getIGBDToken();

    const response = await fetch('https://api.igdb.com/v4/games', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        'Client-ID': userId,
      },
      body: `
        fields name, cover.url, age_ratings.organization.name, age_ratings.rating_category.rating, summary, videos.video_id, genres.name, storyline, first_release_date, screenshots.url, player_perspectives.name, total_rating;
        where cover != null & rating_count > 500 & id = ${gameId};
      `,
    });

    if (!response.ok) {
      throw new Error('Failed to fetch game by id');
    }

    const parsedResponse = await response.json();
    return res.status(200).json(parsedResponse);
  } catch (error) {
    const message = error instanceof Error ? error.message : error;
    return res.status(500).json({
      error: 'Internal Server Error',
      message,
    });
  }
};

export default handler;
