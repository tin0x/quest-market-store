import React, { useState } from 'react';
import { stubs } from '@shared/ui/image/constants.ts';
import type { ImageProps } from '@shared/ui/image/types.ts';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { cn } from '@shared/lib/utils/cn.ts';

const Image: React.FC<ImageProps> = ({ className, type, source, alt, ...rest }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const currentImage = hasError || !source ? stubs[type] : source;

  return (
    <div className="relative h-full w-full">
      {isLoading && (
        <SkeletonTheme baseColor="var(--skeleton-base)" highlightColor="var(--skeleton-highlight)">
          <div className="absolute inset-0 z-50 h-full w-full rounded-md">
            <Skeleton className="h-full w-full rounded-md" />
          </div>
        </SkeletonTheme>
      )}
      <img
        className={cn('h-full w-full rounded-md object-cover', className)}
        key={source}
        src={currentImage}
        alt={alt}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          if (currentImage !== stubs[type]) {
            setHasError(true);
            setIsLoading(false);
          }
        }}
        {...rest}
      />
    </div>
  );
};

export default Image;
