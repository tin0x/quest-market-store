import type { CartDTO } from '@entities/cart/schemas/CartSchemas.ts';
import type { CartItem } from '@entities/cart/types.ts';

const mapCartWithItems = (dto: CartDTO): CartItem => ({
  id: dto.id,
  userId: dto.user_id,
  title: dto.title,
  price: dto.price,
  poster: dto.poster ?? '',
  createdAt: dto.created_at,
  gameId: dto.game_id,
});

export default mapCartWithItems;
