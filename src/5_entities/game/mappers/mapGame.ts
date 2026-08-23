import type { Game } from '@entities/game/types.ts';
import type { GameDTO } from '@entities/game/schemas/GameSchema.ts';
import getIGDBImageUrl from '@entities/game/lib/getIGDBImageUrl.ts';
import generateRandomPrice from '@entities/game/lib/generateRandomPrice.ts';

export const mapGame = (dto: GameDTO): Game => ({
  id: dto.id,
  title: dto.name,
  poster: getIGDBImageUrl(dto.cover.url || null),
  price: generateRandomPrice(80, 30),
  summary: dto.summary ?? '',
  gameId: dto.id,
});
