import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import Title from '@shared/ui/title/Title.tsx';
import GameCategoriesList from '@entities/game/ui/game-category/games-categories-list/GameCategoriesList.tsx';

const CategoryNavigationWidget: React.FC = () => {
  return (
    <section>
      <Container className="flex flex-col gap-15">
        <Title className="text-[32px]" type="secondary">
          Categories
        </Title>
        <GameCategoriesList />
      </Container>
    </section>
  );
};

export default CategoryNavigationWidget;
