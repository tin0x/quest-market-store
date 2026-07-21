import React from 'react';
import Container from '@shared/ui/container/Container.tsx';
import Slider from '@shared/ui/slider/Slider.tsx';
import { useFetchGamesSlides } from '@widgets/slider-widget/model/useFetchGamesSlides.ts';
import type { SliderWidgetProps } from '@widgets/slider-widget/types.ts';
import SlideItem from '@entities/game/ui/slide-item/SlideItem.tsx';
import Title from '@shared/ui/title/Title.tsx';
import Button from '@shared/ui/button/Button.tsx';

const SliderWidget: React.FC<SliderWidgetProps> = ({ ordering, subtitle }) => {
  const { slides, isLoading, isEmpty, isError } = useFetchGamesSlides(ordering);

  if (isLoading) return <span>Loading...</span>;
  if (isError || isEmpty) return;

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-8">
          <Title className="text-[32px]" type="secondary">
            {subtitle}
          </Title>
          <Slider options={{ dragFree: true }}>
            {slides?.map((slide) => (
              <li className="h-100` ml-10 max-w-125 min-w-0 flex-[0_0_auto] first:ml-0" key={slide.id}>
                <SlideItem
                  name={slide.name}
                  image={slide.cover}
                  alt={slide.name}
                  actionSlot={<Button text="Pre-Order" type="button" variant="accent" />}
                />
              </li>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default SliderWidget;
