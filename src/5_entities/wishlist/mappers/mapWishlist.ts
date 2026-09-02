import type { WishlistDTO } from '@entities/wishlist/schemas/WishlistSchema.ts';
import type { Wishlist } from '@entities/wishlist/types.ts';

const mapWishlist = (dto: WishlistDTO): Wishlist => ({
  id: dto.id,
  title: dto.title,
  price: dto?.price || null,
  userId: dto.user_id,
  gameId: dto.game_id,
  createdAt: dto.created_at,
  summary: dto.summary ?? '',
  poster: dto.poster ?? '',
  firstRelease: dto.created_at,
});

export default mapWishlist;
