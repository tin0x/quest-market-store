import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const GameHeaderSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <div className="hidden aspect-video w-full lg:block">
        <Skeleton className="h-full w-full" />
      </div>
      <div className="text-text-primary line-clamp-6 hidden text-justify text-[20px] lg:block">
        <Skeleton count={5.5} />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex-1 overflow-hidden rounded-md">
          <Skeleton className="h-full w-full px-5 py-3" />
        </div>
        <div className="flex-1 overflow-hidden rounded-md">
          <Skeleton className="h-full w-full px-5 py-3" />
        </div>
        <div className="flex-1 overflow-hidden rounded-md">
          <Skeleton className="h-full w-full px-5 py-3" />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default GameHeaderSkeleton;
