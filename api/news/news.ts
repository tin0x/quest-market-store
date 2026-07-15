import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function (req: VercelRequest, res: VercelResponse) {
  const apiKey = process.env.CURRENTS_NEWS_API_KEY;
  const params = new URLSearchParams(req.query as Record<string, string>).toString();

  const url = `https://api.currentsapi.services/v1/search?${params}&apiKey=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: `${error}: failed to fetch news` });
  }
}
