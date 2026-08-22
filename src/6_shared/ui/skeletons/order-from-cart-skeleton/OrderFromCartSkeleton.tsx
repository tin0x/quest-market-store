import React from 'react';
import Card from '@shared/ui/card/Card.tsx';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const OrderFromCartSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <Card className="sticky top-5 flex w-full flex-1 flex-col gap-6 self-start p-5" variant="surface">
        <Skeleton count={0.5} height={30} />
        <div className="flex flex-col gap-6">
          <div className="flex justify-between gap-2">
            <div className="w-1/3">
              <Skeleton height={20} />
            </div>
            <div className="w-1/3">
              <Skeleton height={20} />
            </div>
          </div>
          <div className="flex justify-between gap-2">
            <div className="w-1/3">
              <Skeleton height={20} />
            </div>
            <div className="w-1/3">
              <Skeleton height={20} />
            </div>
          </div>
          <div>
            <div className="flex justify-between gap-2 py-6">
              <div className="w-1/3">
                <Skeleton height={30} />
              </div>
              <div className="w-1/3">
                <Skeleton height={30} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4">
          <div className="w-full">
            <Skeleton height={30} />
          </div>
          <div className="w-full">
            <Skeleton height={30} />
          </div>
        </div>
      </Card>
    </SkeletonTheme>
  );
};

export default OrderFromCartSkeleton;
