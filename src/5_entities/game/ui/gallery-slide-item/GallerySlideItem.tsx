import React from 'react';
import Image from '@shared/ui/image/Image.tsx';
import { cn } from '@shared/lib/utils/cn.ts';
import type { GallerySlideItemProps } from '@entities/game/ui/gallery-slide-item/types.ts';
import PlayIcon from '@shared/assets/icons/play.svg?react';

const GallerySlideItem: React.FC<GallerySlideItemProps> = ({ className, src, activeSlide, isVideo }) => {
  return (
    <div
      className={cn(
        'relative aspect-video cursor-pointer rounded-md opacity-50 transition-opacity hover:opacity-100',
        {
          ['opacity-100']: activeSlide,
        },
        className,
      )}
    >
      <Image source={src} alt="slide-item" type="game" />
      {isVideo && (
        <div className="rounded-circle absolute top-1/2 left-1/2 -translate-1/2 bg-black/50">
          <PlayIcon className="text-text-primary h-15 w-15 p-4" />
        </div>
      )}
    </div>
  );
};

export default GallerySlideItem;
