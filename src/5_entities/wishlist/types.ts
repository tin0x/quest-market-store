import React, { type ReactNode } from 'react';

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
  price: number | null;
  poster?: string;
  createdAt: string;
  gameId: number;
  summary: string;
  firstRelease: string | null;
};

export type GetWishlistArgs = {
  userId: string;
};

export type WishlistItemProps = {
  wishlistItem: Wishlist;
  actionSlots: {
    renderRemove: ReactNode;
    renderAdd: ReactNode;
  };
};

export type WishlistListProps = {
  wishlist: Wishlist[];
  actions: {
    renderRemove: (wishlistItem: Wishlist) => React.ReactNode;
    renderAdd: (wishlistItem: Wishlist) => React.ReactNode;
  };
};
