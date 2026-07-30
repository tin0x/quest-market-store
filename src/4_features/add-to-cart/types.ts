export type AddToCartArgs = {
  title: string;
  price: number;
  poster: string;
  gameId: number;
  userId: string;
};

export type Product = Omit<AddToCartArgs, 'userId'>;

export type AddToCartProps = {
  product: Product;
};
