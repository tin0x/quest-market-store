import React, { useCallback, useEffect, useState } from 'react';
import type { SlideProps } from '@shared/ui/slider/types.ts';
import Button from '@shared/ui/button/Button.tsx';
import IconArrowLeft from '@shared/assets/icons/arrow-left.svg?react';
import IconArrowRight from '@shared/assets/icons/arrow-right.svg?react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import { cn } from '@shared/lib/utils/cn.ts';

const Slider: React.FC<SlideProps> = ({ className, children, onSelectSlide, options, plugins }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
  const [isDisabledPrev, setIsDisabledPrev] = useState(true);
  const [isDisabledNext, setIsDisabledNext] = useState(false);

  const update = useCallback(
    (api: EmblaCarouselType) => {
      setIsDisabledPrev(!api.canScrollPrev());
      setIsDisabledNext(!api.canScrollNext());

      onSelectSlide?.(api.selectedScrollSnap());
    },
    [onSelectSlide],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTimeout(() => {
      update(emblaApi);
    }, 0);

    emblaApi.on('select', update);
    emblaApi.on('reInit', update);

    return () => {
      emblaApi.off('select', update);
      emblaApi.off('reInit', update);
    };
  }, [emblaApi, update]);

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
