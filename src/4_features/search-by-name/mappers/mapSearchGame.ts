import type { SearchGameDTO } from '@features/search-by-name/schemas/SearchGameSchema.ts';
import type { SearchGame } from '@features/search-by-name/types.ts';

const mapSearchGame = (dto: SearchGameDTO): SearchGame => ({
  id: dto.id,
  gameId: dto.game,
  name: dto.name,
});

export default mapSearchGame;
