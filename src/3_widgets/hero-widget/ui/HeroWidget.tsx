import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import Slider from '@shared/ui/slider/Slider.tsx';
import { useGetTrendingGames } from '@widgets/hero-widget/model/useGetTrendingGames.ts';
import Button from '@shared/ui/button/Button.tsx';

const HeroWidget: React.FC = () => {
  const { games, isEmpty, selectedSlide, handleSelectSlideIndex } = useGetTrendingGames();

  if (!games || isEmpty) return;

  return (
    <section
      className="h-full max-h-175 mask-[linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] bg-cover bg-no-repeat transition-all"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${games[selectedSlide]?.cover})`,
      }}
    >
      <Container>
        <Slider className="h-full" onSelectSlide={handleSelectSlideIndex}>
          {games.map((game) => (
            <li className="flex h-full min-w-0 flex-[0_0_100%] justify-between px-20 py-10" key={game.id}>
              <div className="max-w-90">
                <span className="text-[60px] font-bold uppercase">{game.name}</span>
              </div>
              <div className="flex flex-col gap-2 self-end">
                <Button className="text-xl" variant="accent" asLink pathTo="/cart" text="Buy Now" />
                <Button className="text-xl" variant="transparent" text="Add to Wishlist" />
              </div>
            </li>
          ))}
        </Slider>
      </Container>
    </section>
  );
};

export default HeroWidget;
