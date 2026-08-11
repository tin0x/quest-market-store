import React from 'react';

export type GameSlide = {
  id: number;
  title: string;
  poster: string | null;
  price: string;
  summary?: string;
  gameId: number;
};

export type GamesSlides = {
  results: GameSlide[];
};

export type GamesSlidesArgs = {
  ordering: 'topRated' | 'popular' | 'mostReviewed' | 'newest' | 'anticipated' | 'trending' | 'classics';
  limit?: number;
};

export type SlideItemProps = {
  product: GameSlide;
  purchaseSlot: React.ReactNode;
  favoriteSlot: React.ReactNode;
};

export type GameCategoryCardProps = {
  heroImage: string;
  cover: string;
  genre: string;
  pathTo: string;
};
