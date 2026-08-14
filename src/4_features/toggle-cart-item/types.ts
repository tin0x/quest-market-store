import type { Game } from '@entities/game';

export type AddToCartArgs = {
  game: Game;
  userId: string;
};

export type RemoveFromCartArgs = {
  gameId: number;
  userId: string;
};

export type ToggleCartItemForCartProps = {
  className?: string;
  game: Game;
};

export type ToggleCartItemForItemProps = ToggleCartItemForCartProps;
