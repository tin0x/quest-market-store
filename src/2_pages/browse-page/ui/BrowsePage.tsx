import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { GameListWidget } from '@widgets/game-list-widget';

const BrowsePage: React.FC = () => {
  return (
    <div className="h-full">
      <Container className="flex flex-col gap-6">
        <h1 className="text-[32px] font-bold">Browse Games</h1>
        <GameListWidget />
      </Container>
    </div>
  );
};

export default BrowsePage;
