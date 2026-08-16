import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const PersonalInformationSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <div className="flex w-full flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Skeleton className="w-full" height={24} count={0.3} />
          <Skeleton className="w-full" height={44} />
        </div>

        <div className="flex flex-col gap-2">
          <Skeleton className="w-full" height={24} count={0.3} />
          <Skeleton className="w-full" height={44} />
        </div>
        <div className="mt-auto">
          <Skeleton className="w-full" height={44} />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default PersonalInformationSkeleton;
