import type { WishlistDTOType } from '@entities/wishlist/schemas/WishlistSchema.ts';
import type { Wishlist } from '@entities/wishlist/types.ts';

const mapWishlist = (dto: WishlistDTOType): Wishlist => ({
  id: dto.id,
  title: dto.title,
  price: dto.price,
  userId: dto.user_id,
  gameId: dto.game_id,
  createdAt: dto.createdAt,
  summary: dto.summary ?? '',
  poster: dto.poster ?? '',
});

export default mapWishlist;
