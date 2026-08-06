export type AddToCartArgs = {
  title: string;
  price: number;
  poster: string;
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
