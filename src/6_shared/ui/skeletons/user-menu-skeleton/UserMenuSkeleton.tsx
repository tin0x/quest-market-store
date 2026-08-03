import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const UserMenuSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <div className="flex gap-7">
        <div className="h-12 w-12">
          <Skeleton className="h-full w-full" circle />
        </div>
        <div className="h-12 w-12">
          <Skeleton className="h-full w-full" circle />
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default UserMenuSkeleton;
