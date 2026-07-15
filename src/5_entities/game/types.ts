export type TrendingGameDTO = {
  id: number;
  name: string;
  background_image: string;
};

export type TrendingGame = {
  id: number;
  name: string;
  cover: string;
};

export type TrendingGamesDTO = {
  results: TrendingGameDTO[];
};

export type TrendingGames = {
  results: TrendingGame[];
};
