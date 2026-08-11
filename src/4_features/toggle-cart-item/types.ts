export type AddToCartArgs = {
  title: string;
  price: string;
  poster: string | null;
  summary?: string;
  gameId: number;
  userId: string;
};

export type RemoveFromCartArgs = {
  productId: number;
  userId: string;
};

export type Product = Omit<AddToCartArgs, 'userId'>;

export type ToggleCartItemForCardProps = {
  product: Product;
};

export type ToggleCartItemForItemProps = ToggleCartItemForCardProps;
