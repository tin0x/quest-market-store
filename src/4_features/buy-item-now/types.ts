export type Product = {
  id: number;
  title: string;
  price: string;
  poster: string | null;
  summary?: string;
  gameId: number;
};

export type BuyItemNowProps = {
  product: Product;
};
