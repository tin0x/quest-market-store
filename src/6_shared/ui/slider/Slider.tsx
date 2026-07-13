import React, { useCallback, useEffect, useState } from 'react';
import type { SlideProps } from '@shared/ui/slider/types.ts';
import Button from '@shared/ui/button/Button.tsx';
import IconArrowLeft from '@shared/assets/icons/arrow-left.svg?react';
import IconArrowRight from '@shared/assets/icons/arrow-right.svg?react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';

const Slider: React.FC<SlideProps> = ({ children }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [isDisabledPrev, setIsDisabledPrev] = useState(true);
  const [isDisabledNext, setIsDisabledNext] = useState(true);

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setIsDisabledPrev(!api?.canScrollPrev());
    setIsDisabledNext(!api?.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    setTimeout(() => onSelect(emblaApi), 0);

    emblaApi.on('reInit', onSelect).on('select', onSelect);

    return () => {
      emblaApi.off('reInit', onSelect);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      <div className="h-full w-full overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">{children}</div>
      </div>
      <Button
        className="absolute top-1/2 -translate-y-1/2 disabled:hidden"
        disabled={isDisabledPrev}
        onClick={() => emblaApi?.scrollPrev()}
        variant="blur"
        Icon={IconArrowLeft}
      />
      <Button
        className="absolute top-1/2 -translate-y-1/2 disabled:hidden"
        disabled={isDisabledNext}
        onClick={() => emblaApi?.scrollNext()}
        variant="blur"
        Icon={IconArrowRight}
      />
    </div>
  );
};

export default Slider;
