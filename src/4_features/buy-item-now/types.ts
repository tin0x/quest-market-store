export type Product = {
  title: string;
  price: number;
  poster: string;
  summary?: string;
  gameId: number;
};

export type BuyItemNowProps = {
  product: Product;
};
