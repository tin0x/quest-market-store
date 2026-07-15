import React from 'react';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';
import HeroWidget from '@widgets/hero-widget/ui/HeroWidget.tsx';

const HomePage: React.FC = () => {
  useToggleTitle('Home');

  return (
    <>
      <HeroWidget />
    </>
  );
};

export default HomePage;
