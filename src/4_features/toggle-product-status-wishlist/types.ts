export type Product = {
  title: string;
  price: number;
  poster: string;
  summary?: string;
  gameId: number;
};

export type AddItemToWishlistArgs = {
  product: Product;
  userId: string;
};

export type ToggleProductStatusWishlistProps = {
  product: Product;
};

export type RemoveItemFromWishlistArgs = {
  userId: string;
  gameId: number;
};
