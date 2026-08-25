import React, { useEffect, useRef, useState } from 'react';
import GameProductList from '@entities/game/ui/game-product/game-product-list/GameProductList.tsx';
import useFetchGameListWithFilters from '@widgets/game-list-widget/model/useFetchGameListWithFilters.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import Loader from '@shared/ui/loader/Loader.tsx';
import GameListSkeleton from '@shared/ui/skeletons/game-list-skeleton/GameListSkeleton.tsx';

const GameListWidget: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const limit = 30;

  const { gameList, isLoading, isFetching, isError } = useFetchGameListWithFilters(limit, offset);

  const loaderRef = useRef<HTMLDivElement | null>(null);
  const isFetchingRef = useRef(isFetching);

  useEffect(() => {
    isFetchingRef.current = isFetching;
  }, [isFetching]);

  useEffect(() => {
    const loader = loaderRef.current;
    if (!loader) return;

    const observer = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      if (isFetchingRef.current) return;
      setOffset((prev) => prev + limit);
    });

    observer.observe(loader);

    return () => observer.unobserve(loader);
  }, [isLoading]);

  const renderContent = () => {
    if (isLoading) return <GameListSkeleton />;
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

  return <section className="flex flex-col gap-2">{renderContent()}</section>;
};

export default GameListWidget;
