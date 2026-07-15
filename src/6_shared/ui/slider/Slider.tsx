import React, { useCallback, useEffect, useState } from 'react';
import type { SlideProps } from '@shared/ui/slider/types.ts';
import Button from '@shared/ui/button/Button.tsx';
import IconArrowLeft from '@shared/assets/icons/arrow-left.svg?react';
import IconArrowRight from '@shared/assets/icons/arrow-right.svg?react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import { cn } from '@shared/lib/utils/cn.ts';
import Autoplay from 'embla-carousel-autoplay';

const Slider: React.FC<SlideProps> = ({ className, children, onSelectSlide }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: true })]);
  const [isDisabledPrev, setIsDisabledPrev] = useState(true);
  const [isDisabledNext, setIsDisabledNext] = useState(true);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setIsDisabledPrev(!api?.canScrollPrev());
    setIsDisabledNext(!api?.canScrollNext());
  }, []);

  const onSelectIndex = useCallback(() => {
    onSelectSlide(emblaApi?.selectedScrollSnap() || 0);
  }, [emblaApi, onSelectSlide]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on('init', onSelect);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelectIndex);

    return () => {
      emblaApi.off('init', onSelect);
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelectIndex);
    };
  }, [emblaApi, onSelect, onSelectIndex, onSelectSlide]);

  return (
    <div className={cn('relative w-full', className)}>
      <div className="h-full w-full overflow-hidden" ref={emblaRef}>
        <ul className="flex h-full touch-pan-y touch-pinch-zoom">{children}</ul>
      </div>
      <Button
        className="absolute top-1/2 left-0 h-50 w-15 -translate-y-1/2 disabled:hidden"
        iconStyles="h-10 w-10"
        disabled={isDisabledPrev}
        onClick={() => emblaApi?.scrollPrev()}
        variant="blur"
        Icon={IconArrowLeft}
      />
      <Button
        className="absolute top-1/2 right-0 h-50 w-16.25 -translate-y-1/2 disabled:hidden"
        iconStyles="h-10 w-10"
        disabled={isDisabledNext}
        onClick={() => emblaApi?.scrollNext()}
        variant="blur"
        Icon={IconArrowRight}
      />
    </div>
  );
};

export default Slider;
