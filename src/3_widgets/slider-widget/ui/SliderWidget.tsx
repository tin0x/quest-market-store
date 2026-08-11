import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { useFetchGamesSlides } from '@widgets/slider-widget/model/useFetchGamesSlides.ts';
import type { SliderWidgetProps } from '@widgets/slider-widget/types.ts';
import SliderSkeleton from '@shared/ui/skeletons/slider-skeleton/SliderSkeleton.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import Title from '@shared/ui/title/Title';
import Slider from '@shared/ui/slider/Slider';
import { ToggleProductStatusWishlist } from '@features/toggle-product-status-wishlist/';
import { ToggleCartItemForCard } from '@features/toggle-cart-item';
import { SlideItem } from '@entities/game';

const SliderWidget: React.FC<SliderWidgetProps> = ({ ordering, subtitle }) => {
  const { slides, isLoading, isEmpty, isError, refetch } = useFetchGamesSlides(ordering);

  const renderContent = () => {
    if (isLoading) return <SliderSkeleton />;
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;
    if (isEmpty) return <QueryPlaceholder type="emptyData" />;

    return (
      <div className="flex flex-col gap-8">
        <Title className="text-[32px]" type="secondary">
          {subtitle}
        </Title>
        <Slider options={{ dragFree: true }}>
          {slides?.map((slideGroup, i) => (
            <li
              className="ml-10 flex h-90 min-w-0 flex-[0_0_100%] cursor-grab gap-10 first:ml-0 active:cursor-grabbing"
              key={i}
            >
              {slideGroup.map((slide) => (
                <SlideItem
                  key={slide.id}
                  id={slide.id}
                  name={slide.name}
                  image={slide.cover}
                  alt={slide.name}
                  favoriteSlot={
                    <ToggleProductStatusWishlist
                      type="iconButton"
                      product={{
                        title: slide.name,
                        poster: slide.cover || '',
                        price: 50.99,
                        gameId: slide.id,
                        summary: slide.summary,
                      }}
                    />
                  }
                  purchaseSlot={
                    <ToggleCartItemForCard
                      product={{
                        title: slide.name,
                        poster: slide.cover || '',
                        price: 50.99,
                        gameId: slide.id,
                        summary: slide.summary,
                      }}
                    />
                  }
                />
              ))}
            </li>
          ))}
        </Slider>
      </div>
    );
  };

  return (
    <section>
      <Container>{renderContent()}</Container>
    </section>
  );
};

export default SliderWidget;
