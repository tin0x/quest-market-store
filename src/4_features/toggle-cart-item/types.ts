export type AddToCartArgs = {
  title: string;
  price: number;
  poster: string;
  gameId: number;
  userId: string;
};

export type RemoveFromCartArgs = {
  productId: number;
};

export type Product = Omit<AddToCartArgs, 'userId'>;

export type AddToCartProps = {
  product: Product;
};

export type ToggleCartItemForCardProps = {
  product: Product;
};

export type ToggleCartItemForItemProps = ToggleCartItemForCardProps;
