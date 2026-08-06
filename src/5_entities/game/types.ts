import React from 'react';

export type GameSlide = {
  id: number;
  name: string;
  cover: string | null;
  summary?: string;
};

export type GamesSlides = {
  results: GameSlide[];
};

export type GamesSlidesArgs = {
  ordering: '-added' | '-released' | '-rating' | '-metacritic';
};

export type SlideItemProps = {
  id: number;
  image: string | null;
  alt: string;
  name: string;
  summary?: string;
  actionSlot: React.ReactNode;
};

export type GameCategoryCardProps = {
  heroImage: string;
  cover: string;
  genre: string;
  pathTo: string;
};
