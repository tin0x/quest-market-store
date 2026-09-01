import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const FeatureShowcaseSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <ul className="flex justify-between border-b-4 border-cyan-900/50">
        {Array.from({ length: 3 }).map((_, i) => (
          <li className="w-full px-10 pb-2" key={i}>
            <Skeleton className="w-full rounded-md" height={30} />
          </li>
        ))}
      </ul>
      <div>
        <ul className="flex flex-col gap-5">
          {Array.from({ length: 1 }).map((_, i) => (
            <li key={i}>
              <Skeleton count={4.5} />
            </li>
          ))}
        </ul>
      </div>
    </SkeletonTheme>
  );
};

export default FeatureShowcaseSkeleton;
