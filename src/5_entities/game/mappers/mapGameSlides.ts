import type { GameSlide } from '@entities/game/types.ts';
import type { GameSlideDTO } from '@entities/game/schemas/GameSlidesSchema.ts';
import getIGDBImageUrl from '@entities/game/lib/getIGDBImageUrl.ts';
import generateRandomPrice from '@entities/game/lib/generateRandomPrice.ts';

export const mapGameSlides = (dto: GameSlideDTO): GameSlide => ({
  id: dto.id,
  title: dto.name,
  poster: getIGDBImageUrl(dto.cover.url || null),
  price: generateRandomPrice(80, 30),
  summary: dto.summary ?? '',
  gameId: dto.id,
});
