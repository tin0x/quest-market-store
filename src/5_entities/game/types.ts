import React from 'react';

export type GameSlide = {
  id: number;
  name: string;
  cover: string | null;
};

export type GamesSlides = {
  results: GameSlide[];
};

export type GamesSlidesArgs = {
  ordering: '-added' | '-released' | '-rating' | '-metacritic';
};

export type SlideItemProps = {
  image: string | null;
  alt: string;
  name: string;
  actionSlot: React.ReactNode;
};
