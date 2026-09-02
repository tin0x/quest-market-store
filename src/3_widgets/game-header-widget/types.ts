import type { Game } from '@entities/game';

export type GameHeaderWidgetProps = {
  className?: string;
  isLoading: boolean;
  isError: boolean;
  isReleased: boolean;
  refetch: () => void;
  game: Game | null;
};
