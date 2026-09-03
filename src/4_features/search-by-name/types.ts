export type SearchGame = {
  id: number;
  gameId: number;
  name: string;
};

export type SearchGameList = SearchGame[];
export type SearchGameArgs = {
  str: string;
};

export type SearchByNameProps = {
  className?: string;
};
