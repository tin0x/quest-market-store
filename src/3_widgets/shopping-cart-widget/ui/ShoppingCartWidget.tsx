import React, { useCallback } from 'react';
import ShoppingCartList from '@entities/cart/ui/shopping-cart/ShoppingCartList.tsx';
import { ToggleCartItemForItem } from '@features/toggle-cart-item';
import { useFetchGameCart } from '@entities/cart';
import type { Game } from '@entities/game';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import type { ShoppingCartWidgetProps } from '@widgets/shopping-cart-widget/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const ShoppingCartWidget: React.FC<ShoppingCartWidgetProps> = ({ className }) => {
  const { games, isEmpty, isLoading, isError, refetch } = useFetchGameCart();

  const renderAction = useCallback((game: Game) => <ToggleCartItemForItem game={game} />, []);

  const renderContent = () => {
    if (isLoading) return <p>Loading...</p>;
    if (isEmpty) return <QueryPlaceholder type="emptyData" />;
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

    return (
      <>
        <div className="mb-6 flex flex-col gap-2.5">
          <h1 className="text-[42px] font-bold">Shopping Cart</h1>
          <p className="text-text-secondary text-[22px]">{`You have ${games.length} items in your cart`}</p>
        </div>
        <ShoppingCartList cartList={games} renderAction={renderAction} />
      </>
    );
  };

  return <section className={cn(className)}>{renderContent()}</section>;
};

export default ShoppingCartWidget;
