import React from 'react';

export type Game = {
  id: number;
  title: string;
  poster?: string;
  price: number;
  summary?: string;
  gameId: number;
};

export type GameSlide = Game;

export type GamesSlides = {
  results: GameSlide[];
};

export type GamesSlidesArgs = {
  ordering: 'topRated' | 'popular' | 'mostReviewed' | 'newest' | 'anticipated' | 'trending' | 'classics';
  limit?: number;
};

export type SlideItemProps = {
  gameSlide: GameSlide;
  purchaseSlot: React.ReactNode;
  favoriteSlot: React.ReactNode;
};

export type GameCategoryCardProps = {
  heroImage: string;
  cover: string;
  genre: string;
  pathTo: string;
};
