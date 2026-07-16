import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import Slider from '@shared/ui/slider/Slider.tsx';
import { useGetTrendingGames } from '@widgets/hero-widget/model/useGetTrendingGames.ts';
import Button from '@shared/ui/button/Button.tsx';
import HeroSkeleton from '@shared/ui/skeletons/hero-skeleton/HeroSkeleton.tsx';

const HeroWidget: React.FC = () => {
  const { games, isLoading, isEmpty, selectedSlide, handleSelectSlideIndex } = useGetTrendingGames();

  const renderContent = () => {
    if (isLoading) return <HeroSkeleton />;
    if (!games || isEmpty) return;

    return (
      <Slider className="h-full" onSelectSlide={handleSelectSlideIndex}>
        {games.map((game) => (
          <li className="flex h-full min-w-0 flex-[0_0_100%] justify-between px-20 py-10" key={game.id}>
            <div className="max-w-1/2">
              <span className="text-[40px] font-bold uppercase">{game.name}</span>
            </div>
            <div className="flex flex-col gap-2 self-end">
              <span className="text-end text-xl font-bold">$50.99</span>
              <Button className="text-xl" variant="accent" asLink pathTo="/cart" text="Buy Now" />
              <Button className="text-xl" variant="transparent" text="Add to Wishlist" />
            </div>
          </li>
        ))}
      </Slider>
    );
  };

  return (
    <section
      className="h-full max-h-175 mask-[linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] bg-cover bg-no-repeat transition-all"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${games[selectedSlide]?.cover})`,
      }}
    >
      <Container>{renderContent()}</Container>
    </section>
  );
};

export default HeroWidget;
