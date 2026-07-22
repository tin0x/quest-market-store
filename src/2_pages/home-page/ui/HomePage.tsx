import React from 'react';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';
import HeroWidget from '@widgets/hero-widget/ui/HeroWidget.tsx';
import SliderWidget from '@widgets/slider-widget/ui/SliderWidget.tsx';
import GameOfferList from '@entities/game/ui/game-offer/game-offer-list/GameOfferList.tsx';
import Container from '@shared/ui/container/Container.tsx';
import CategoryNavigationWidget from '@widgets/category-navigation-widget/ui/CategoryNavigationWidget.tsx';

const HomePage: React.FC = () => {
  useToggleTitle('Home');

  return (
    <div className="flex flex-col gap-20">
      <HeroWidget />
      <SliderWidget ordering="-released" subtitle="Released" />
      <SliderWidget ordering="-rating" subtitle="Rating" />
      <SliderWidget ordering="-metacritic" subtitle="Best Metacritic Score" />
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
