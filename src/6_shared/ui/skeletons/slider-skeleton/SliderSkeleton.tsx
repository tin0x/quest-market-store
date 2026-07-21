import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const SliderSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-8">
      <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
        <Skeleton height="32px" count={0.2} />
        <ul>
          <li className="flex h-90 min-w-0 flex-[0_0_100%] gap-10">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                className="bg-gradient-card flex h-full min-w-0 flex-1 flex-col justify-between rounded-lg p-6"
                key={i}
              >
                <Skeleton className="aspect-video w-full" />
                <div className="flex justify-between gap-10">
                  <div className="flex-1">
                    <Skeleton count={1.5} />
                  </div>
                  <div className="shrink-0 self-end">
                    <Skeleton width={80} height={32} />
                  </div>
                </div>
              </div>
            ))}
          </li>
        </ul>
      </SkeletonTheme>
    </div>
  );
};

export default SliderSkeleton;
