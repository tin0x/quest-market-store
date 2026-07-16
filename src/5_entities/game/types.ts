export type GameSlide = {
  id: number;
  name: string;
  cover: string | null;
};

export type GameSlides = {
  results: GameSlide[];
};
