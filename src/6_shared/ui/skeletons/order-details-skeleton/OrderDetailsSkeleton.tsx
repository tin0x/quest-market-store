import React from 'react';
import Card from '@shared/ui/card/Card.tsx';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const OrderDetailsSkeleton: React.FC = () => {
  return (
    <Card className="w-full" variant="secondary">
      <ul className="flex h-full flex-col gap-6">
        <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
          {Array.from({ length: 3 }).map((_, i) => (
            <li className="flex" key={i}>
              <Card className="h-32 w-full">
                <Skeleton className="h-full w-full" />
              </Card>
            </li>
          ))}
        </SkeletonTheme>
      </ul>
    </Card>
  );
};

export default OrderDetailsSkeleton;
