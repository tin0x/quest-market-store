import React from 'react';

export type Game = {
  id: number;
  title: string;
  poster?: string;
  price: number | string | null;
  summary?: string;
  gameId: number;
  firstRelease?: string | null;
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
  purchaseSlot?: React.ReactNode;
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
  price: number | string | null;
};

export type GameProductListProps = {
  gameList: Game[];
};

export type GameListWithPaginationArgs = {
  limit: number;
  offset: number;
  searchParams: string;
};

export type GameByIdArgs = {
  gameId: number;
};

export type GameById = {
  id: number;
  name: string;
  storyline: string;
  summary: string;
  totalRating: number | string;
  ageRatings: {
    organization: string;
    ratingCategory: string;
  };
  cover: string;
  firstRelease: string | null;
  genres: string[];
  playerPerspective: string;
  screenshots: string[];
  videoId: string;
};

export type ShowCaseItemProps = {
  subtitle?: string;
  src?: string;
  text: string;
};

export type MetadataItemProps = {
  subtitle: string;
  value: string;
};
