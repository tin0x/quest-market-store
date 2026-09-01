import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const GameMetadataSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <ul className="flex flex-col">
        {Array.from({ length: 4 }).map((_, i) => (
          <li className="border-t last:border-b" key={i}>
            <div className="flex items-center justify-between gap-10 py-6 text-xl">
              <div className="w-1/3">
                <Skeleton className="w-full" height={20} />
              </div>
              <div className="w-1/3">
                <Skeleton className="w-full" height={20} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SkeletonTheme>
  );
};

export default GameMetadataSkeleton;
