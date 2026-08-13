import type { Game } from '@entities/game';

export type AddGameToWishlistArgs = {
  game: Game;
  userId: string;
};

export type ToggleGameStatusWishlistProps = {
  type: 'iconButton' | 'textButton';
  wishlistGame: Game;
};

export type RemoveGameFromWishlistArgs = {
  userId: string;
  gameId: number;
};
