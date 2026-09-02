import type { Game } from '@entities/game/types.ts';
import type { GameDTO } from '@entities/game/schemas/GameSchema.ts';
import getIGDBImageUrl from '@entities/game/lib/getIGDBImageUrl.ts';
import generateRandomPrice from '@entities/game/lib/generateRandomPrice.ts';
import formatDate from '@shared/lib/utils/formatDate.ts';

export const mapGame = (dto: GameDTO): Game => ({
  id: dto.id,
  title: dto.name,
  poster: getIGDBImageUrl(dto.cover.url || null),
  price: dto?.first_release_date
    ? Date.now() > dto.first_release_date * 1000
      ? generateRandomPrice(dto.id, 30, 80)
      : null
    : null,
  summary: dto.summary ?? '',
  gameId: dto.id,
  firstRelease: dto?.first_release_date ? formatDate(dto.first_release_date * 1000) : null,
});
