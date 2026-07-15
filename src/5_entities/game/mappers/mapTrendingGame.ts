import type { TrendingGame, TrendingGameDTO } from '@entities/game/types.ts';

export const mapTrendingGames = (dto: TrendingGameDTO): TrendingGame => ({
  id: dto.id,
  name: dto.name,
  cover: dto.background_image,
});