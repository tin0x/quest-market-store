import type { Game } from '@entities/game';

export type AddGameToWishlistArgs = {
  game: Game;
  userId: string;
};

export type ToggleGameStatusWishlistProps = {
  className?: string;
  type: 'iconButton' | 'textButton';
  wishlistGame: Game;
};

export type RemoveGameFromWishlistArgs = {
  userId: string;
  gameId: number;
};
