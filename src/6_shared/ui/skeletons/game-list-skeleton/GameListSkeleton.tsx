import React from 'react';
import Card from '@shared/ui/card/Card.tsx';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const GameListSkeleton: React.FC = () => {
  return (
    <ul className="grid grid-cols-3 items-stretch gap-x-7 gap-y-10">
      <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
        {Array.from({ length: 6 }).map((_, i) => (
          <li key={i}>
            <Card className="h-full overflow-hidden" variant="surface">
              <div className="h-87.5 w-full">
                <Skeleton className="h-full" />
              </div>
              <div className="px-4 py-6 text-[18px]">
                <Skeleton height={20} count={1.5} />
              </div>
            </Card>
          </li>
        ))}
      </SkeletonTheme>
    </ul>
  );
};

export default GameListSkeleton;
