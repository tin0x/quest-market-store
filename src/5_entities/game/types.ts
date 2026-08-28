import React from 'react';

export type Game = {
  id: number;
  title: string;
  poster?: string;
  price: number;
  summary?: string;
  gameId: number;
};

export type GameList = {
  results: Game[];
  hasMore?: boolean;
};

export type GamesListArgs = {
  ordering: 'topRated' | 'popular' | 'mostReviewed' | 'newest' | 'anticipated' | 'trending' | 'classics';
  limit?: number;
};

export type SlideItemProps = {
  gameSlide: Game;
  purchaseSlot: React.ReactNode;
  favoriteSlot: React.ReactNode;
};

export type GameCategoryCardProps = {
  heroImage: string;
  cover: string;
  genre: string;
  pathTo: string;
};

export type GameProductCardProps = {
  pathTo: string;
  poster: string;
  title: string;
  price: number;
};

export type GameProductListProps = {
  gameList: Game[];
};

export type GameListWithPaginationArgs = {
  limit: number;
  offset: number;
  searchParams: string;
};
