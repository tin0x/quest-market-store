import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const HeroSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <div className="relative flex h-full w-full gap-10 overflow-hidden py-8">
        <div className="flex-1">
          <Skeleton width="100%" height="100%" />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <Skeleton width="50%" height={40} />
          <Skeleton count={4.5} height={40} />
          <div className="flex flex-col gap-1">
            <div className="flex justify-end">
              <div className="w-1/5">
                <Skeleton height={40} />
              </div>
            </div>
            <Skeleton width="100%" height={50} />
            <Skeleton width="100%" height={50} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default HeroSkeleton;
