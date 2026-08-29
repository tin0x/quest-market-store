import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { GameListWidget } from '@widgets/game-list-widget';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';
import { GameFilteringWidget } from '@widgets/game-filtering-widget';

const BrowsePage: React.FC = () => {
  useToggleTitle('Browse');

  return (
    <div className="h-full">
      <Container className="flex flex-col gap-6">
        <h1 className="text-[32px] font-bold">Browse Games</h1>
        <div className="flex justify-between gap-6">
          <GameListWidget className="flex-3" />
          <GameFilteringWidget className="flex-1" />
        </div>
      </Container>
    </div>
  );
};

export default BrowsePage;
