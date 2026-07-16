import type { GameSlide } from '@entities/game/types.ts';
import type { GameSlideDTO } from '@entities/game/schemas/GameSlidesSchema.ts';

export const mapGameSlides = (dto: GameSlideDTO): GameSlide => ({
  id: dto.id,
  name: dto.name,
  cover: dto.background_image,
});
