import type { GameSlide } from '@entities/game/types.ts';
import type { GameSlideDTO } from '@entities/game/schemas/GameSlidesSchema.ts';
import getIGDBImageUrl from '@entities/game/lib/getIGDBImageUrl.ts';

export const mapGameSlides = (dto: GameSlideDTO): GameSlide => ({
  id: dto.id,
  name: dto.name,
  cover: getIGDBImageUrl(dto.cover.url || null),
  summary: dto.summary ?? '',
});
