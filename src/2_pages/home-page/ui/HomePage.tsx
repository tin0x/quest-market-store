import React from 'react';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';
import GameOfferList from '@entities/game/ui/game-offer/game-offer-list/GameOfferList.tsx';
import Container from '@shared/ui/container/Container.tsx';
import { SliderWidget } from '@widgets/slider-widget';
import { HeroWidget } from '@widgets/hero-widget';
import { CategoryNavigationWidget } from '@widgets/category-navigation-widget';

const HomePage: React.FC = () => {
  useToggleTitle('Home');

  return (
    <div className="flex flex-col gap-10">
      <HeroWidget />
      <SliderWidget ordering="anticipated" subtitle="Anticipated" />
      <SliderWidget ordering="mostReviewed" subtitle="Most Reviewed" />
      <SliderWidget ordering="classics" subtitle="Classics" />
      <article>
        <Container>
          <GameOfferList />
        </Container>
      </article>
      <CategoryNavigationWidget />
    </div>
  );
};

export default HomePage;
