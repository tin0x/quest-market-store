type WishlistErrorCode = 'FAVORITE_ITEM_EXISTS' | 'FAVORITE_ITEM_NOT_FOUND' | 'UNKNOWN_ERROR';

export type ApiError = {
  status: number | string;
  data: {
    code: WishlistErrorCode;
    message: string;
  };
};

export type Wishlist = {
  id: number;
  userId: string;
  title: string;
  price: number;
  poster?: string;
  createdAt: string;
  gameId: number;
  summary: string;
};

export type GetWishlistArgs = {
  userId: string;
};
