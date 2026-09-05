import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Card from '@shared/ui/card/Card.tsx';

const OrderSummarySkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
        <div className="w-1/4">
          <Skeleton height={30} />
        </div>
        <Card className="flex-2 px-10 py-7.5" variant="surface">
          <ul className="flex flex-col gap-10">
            {Array.from({ length: 1 }).map((_, i) => (
              <li key={i}>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <div className="aspect-video w-full rounded-md sm:w-50">
                    <Skeleton className="h-full w-full" />
                  </div>
                  <div className="flex flex-1 flex-col justify-between py-2">
                    <div className="flex items-center justify-between">
                      <div className="h-8 w-80">
                        <Skeleton className="h-full w-full" />
                      </div>
                    </div>
                    <div className="flex justify-between gap-2">
                      <div className="min-w-20">
                        <Skeleton className="h-full w-full" />
                      </div>
                      <div className="min-w-20">
                        <Skeleton className="h-full w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </SkeletonTheme>
    </div>
  );
};

export default OrderSummarySkeleton;
