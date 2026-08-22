import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Card from '@shared/ui/card/Card.tsx';

const ShoppingCartSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
        <div className="w-1/2">
          <Skeleton height={30} count={1.5} />
        </div>
        <div className="flex justify-between gap-12">
          <Card className="flex-2 px-10 py-7.5" variant="surface">
            <ul className="flex flex-col gap-10">
              {Array.from({ length: 2 }).map((_, i) => (
                <li key={i}>
                  <div className="flex gap-4">
                    <div className="aspect-square w-50 rounded-md">
                      <Skeleton className="h-full w-full" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between py-2">
                      <div className="flex items-center justify-between">
                        <div className="h-8 w-80">
                          <Skeleton className="h-full w-full" />
                        </div>
                        <div className="h-8 w-10">
                          <Skeleton className="h-full w-full" />
                        </div>
                      </div>
                      <div className="flex justify-end gap-2">
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
          <Card className="sticky top-5 flex flex-1 flex-col gap-6 self-start p-5" variant="surface">
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
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default ShoppingCartSkeleton;
