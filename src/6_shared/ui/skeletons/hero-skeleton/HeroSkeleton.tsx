import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const HeroSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <div className="bg-primary relative h-full w-full overflow-hidden">
        <ul className="flex h-full">
          {Array.from({ length: 1 }).map((_, i) => (
            <li key={i} className="flex h-full w-full shrink-0 items-start justify-between p-20">
              <div className="mb-10 w-2/5">
                <Skeleton className="mb-2" height={40} count={2.5} width="100%" borderRadius={9999} />
              </div>
              <div className="flex w-1/4 flex-col gap-3 self-end">
                <Skeleton height={20} width="60px" />
                <div className="w-full">
                  <Skeleton height={45} borderRadius={9999} />
                </div>
                <div className="w-full">
                  <Skeleton height={45} borderRadius={9999} />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Skeleton className="absolute top-1/2 left-5 h-16 w-16 -translate-y-1/2 rounded-full" circle={true} />
        <Skeleton className="absolute top-1/2 right-5 h-16 w-16 -translate-y-1/2 rounded-full" circle={true} />
      </div>
    </SkeletonTheme>
  );
};

export default HeroSkeleton;
