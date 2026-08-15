import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const WishlistSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
      <ul className="flex flex-1 flex-col">
        {Array.from({ length: 1 }, (_, i) => (
          <li key={i}>
            <div className="flex gap-4">
              <div className="aspect-square w-50 rounded-md">
                <Skeleton className="h-full w-full" />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="w-80">
                    <Skeleton className="h-full w-full" />
                  </div>
                  <div className="w-20">
                    <Skeleton className="h-full w-full" />
                  </div>
                </div>
                <div className="flex justify-end gap-2">
                  <div className="min-w-57.5">
                    <Skeleton className="h-full w-full" />
                  </div>
                  <div className="min-w-57.5">
                    <Skeleton className="h-full w-full" />
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </SkeletonTheme>
  );
};

export default WishlistSkeleton;

// <li className={cn('border-b py-9 first:pt-0 last:border-none last:pb-0')} key={wishlistItem.id}>
//   <WishlistItem
//     wishlistItem={wishlistItem}
//     actionSlots={{
//       renderRemove: actions.renderRemove(wishlistItem),
//       renderAdd: actions.renderAdd(wishlistItem),
//     }}
//   />
// </li>
