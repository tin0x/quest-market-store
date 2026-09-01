import React from 'react';
import Slider from '@shared/ui/slider/Slider.tsx';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const GallerySliderSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <div className="aspect-video w-full rounded-md">
        <Skeleton className="h-full w-full" />
      </div>
      <Slider hasNavigation={false} options={{ dragFree: true }}>
        {Array.from({ length: 4 }).map((_, index) => (
          <li
            key={index}
            className="ml-5 min-w-0 flex-[0_0_calc(25%-0.75rem)] cursor-grab first:ml-0 active:cursor-grabbing"
          >
            <Skeleton className="aspect-video w-full" />
          </li>
        ))}
      </Slider>
    </SkeletonTheme>
  );
};

export default GallerySliderSkeleton;
