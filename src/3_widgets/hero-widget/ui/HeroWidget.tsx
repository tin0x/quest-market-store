import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import Slider from '@shared/ui/slider/Slider.tsx';
import { useGetTrendingGames } from '@widgets/hero-widget/model/useGetTrendingGames.ts';
import Button from '@shared/ui/button/Button.tsx';
import HeroSkeleton from '@shared/ui/skeletons/hero-skeleton/HeroSkeleton.tsx';
import Autoplay from 'embla-carousel-autoplay';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { Link } from 'react-router-dom';
import Image from '@shared/ui/image/Image.tsx';
import { BuyItemNow } from '@features/buy-item-now';

const HeroWidget: React.FC = () => {
  const { games, isLoading, isError, isEmpty, selectedSlide, refetch, handleSelectSlideIndex } = useGetTrendingGames();

  const renderContent = () => {
    if (isLoading) return <HeroSkeleton />;
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;
    if (isEmpty) return <QueryPlaceholder type="emptyData" />;

    return (
      <Slider
        className="h-full"
        onSelectSlide={handleSelectSlideIndex}
        options={{ loop: true }}
        plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
      >
        {games.map((game) => (
          <li
            className="flex min-w-0 flex-[0_0_100%] cursor-grab justify-between gap-8 px-20 py-10 active:cursor-grabbing"
            key={game.id}
          >
            <Link to={`game/${game.id}`} className="flex-1 overflow-hidden rounded-md">
              <Image
                className="object-top transition-transform duration-400 hover:scale-110"
                source={games[selectedSlide]?.cover}
                type="game"
                alt={games[selectedSlide]?.name}
              />
            </Link>
            <div className="flex flex-1 flex-col justify-between">
              <Link className="text-[40px] font-bold uppercase" to={`/game/${game.id}`}>
                {game.name}
              </Link>
              <div className="bg-grey-200/10 rounded-sm p-2 text-justify backdrop-blur-xl">
                <p className="line-clamp-8 text-[22px] select-none">{game.summary}</p>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-end text-[25px] font-bold">$50.99</span>
                <BuyItemNow
                  product={{
                    title: games[selectedSlide].name,
                    poster: games[selectedSlide]?.cover || '',
                    summary: games[selectedSlide]?.summary,
                    price: 50.99,
                    gameId: games[selectedSlide].id,
                  }}
                />
                <Button className="border-white text-xl" variant="blur" text="Add to Wishlist" />
              </div>
            </div>
          </li>
        ))}
      </Slider>
    );
  };

  return (
    <section
      className="h-175 mask-[linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] bg-cover bg-center bg-no-repeat transition-all"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${games[selectedSlide]?.cover})`,
      }}
    >
      <Container>{renderContent()}</Container>
    </section>
  );
};

export default HeroWidget;
