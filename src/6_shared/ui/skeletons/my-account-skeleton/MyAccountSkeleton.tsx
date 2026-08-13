import Card from '@shared/ui/card/Card';
import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const MyAccountSkeleton: React.FC = () => {
  return (
    <Card className="flex w-full flex-col p-9">
      <SkeletonTheme baseColor="var(--skeleton-base-secondary)" highlightColor="var(--skeleton-highlight)">
        <div className="w-1/2">
          <Skeleton count={6} />
        </div>
      </SkeletonTheme>
    </Card>
  );
};

export default MyAccountSkeleton;
