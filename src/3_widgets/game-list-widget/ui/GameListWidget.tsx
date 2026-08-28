import React, { useEffect, useRef, useState } from 'react';
import GameProductList from '@entities/game/ui/game-product/game-product-list/GameProductList.tsx';
import useFetchGameListWithFilters from '@widgets/game-list-widget/model/useFetchGameListWithFilters.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import Loader from '@shared/ui/loader/Loader.tsx';
import GameListSkeleton from '@shared/ui/skeletons/game-list-skeleton/GameListSkeleton.tsx';
import { cn } from '@shared/lib/utils/cn.ts';
import type { GameListWidgetProps } from '@widgets/game-list-widget/types.ts';
import { useSearchParams } from 'react-router-dom';

const GameListWidget: React.FC<GameListWidgetProps> = ({ className }) => {
  const [searchParams] = useSearchParams();
  const searchParamsString = searchParams.toString();
  const [offset, setOffset] = useState(0);
  const limit = 30;

  const [prevSearchParamsString, setPrevSearchParamsString] = useState(searchParamsString);

  if (prevSearchParamsString !== searchParamsString) {
    setPrevSearchParamsString(searchParamsString);
    setOffset(0);
  }

  const { gameList, hasMore, isLoading, isFetching, isError } = useFetchGameListWithFilters(limit, offset);

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const isFetchingRef = useRef(isFetching);

  useEffect(() => {
    isFetchingRef.current = isFetching;
  }, [isFetching]);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        if (isFetchingRef.current) return;
        if (!hasMore) return;
        setOffset((prev) => prev + limit);
      },
      { rootMargin: '0px 0px 800px 0px' },
    );

    observer.observe(loader);

    return () => observer.unobserve(loader);
  }, [isLoading, isFetching, hasMore]);

  const renderContent = () => {
    if (isLoading || (isFetching && offset === 0)) return <GameListSkeleton />;
    if (!gameList?.length) return <QueryPlaceholder type="emptyData" />;
    if (isError) return <QueryPlaceholder type="error" />;
    return (
      <>
        <GameProductList gameList={gameList} />
        <div className="flex justify-center" ref={loaderRef}>
          {isFetching && <Loader className="relative top-0 left-0 h-60 w-60 translate-0" />}
        </div>
      </>
    );
  };

  return <section className={cn('flex flex-col gap-2', className)}>{renderContent()}</section>;
};

export default GameListWidget;
