import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import { useFetchGamesSlides } from '@widgets/slider-widget/model/useFetchGamesSlides.ts';
import type { SliderWidgetProps } from '@widgets/slider-widget/types.ts';
import SliderSkeleton from '@shared/ui/skeletons/slider-skeleton/SliderSkeleton.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import Title from '@shared/ui/title/Title';
import SlideItem from '@entities/game/ui/slide-item/SlideItem.tsx';
import PlacePreOrder from '@features/place-pre-order/ui/PlacePreOrder.tsx';
import Slider from '@shared/ui/slider/Slider';

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
                  actionSlot={<PlacePreOrder id={slide.id} />}
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
