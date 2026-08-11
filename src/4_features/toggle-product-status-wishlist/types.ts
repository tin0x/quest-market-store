export type Product = {
  id: number;
  title: string;
  price: string;
  poster: string | null;
  summary?: string;
  gameId: number;
};

export type AddItemToWishlistArgs = {
  product: Product;
  userId: string;
};

export type ToggleProductStatusWishlistProps = {
  type: 'iconButton' | 'textButton';
  product: Product;
};

export type RemoveItemFromWishlistArgs = {
  userId: string;
  gameId: number;
};
