import { VercelRequest, VercelResponse } from '@vercel/node';

export const handler = async (req: VercelRequest, res: VercelResponse) => {
  const apiKey = process.env.RAWG_API_KEY;
  const params = new URLSearchParams(req.query as Record<string, string>).toString();

  const url = `https://api.rawg.io/api/games?${params}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json(`${error}: failed to fetch popular games`);
  }
};
