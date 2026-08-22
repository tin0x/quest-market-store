import React, { useCallback } from 'react';
import { ToggleCartItemForItem } from '@features/toggle-cart-item';
import { OrderFromCart, ShoppingCartList, useFetchGameCart } from '@entities/cart';
import type { Game } from '@entities/game';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import type { ShoppingCartWidgetProps } from '@widgets/shopping-cart-widget/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import ShoppingCartSkeleton from '@shared/ui/skeletons/shopping-cart-skeleton/ShoppingCartSkeleton.tsx';

const ShoppingCartWidget: React.FC<ShoppingCartWidgetProps> = ({ className }) => {
  const { games, isEmpty, isLoading, isError, refetch } = useFetchGameCart();

  const renderAction = useCallback((game: Game) => <ToggleCartItemForItem game={game} />, []);

  const renderContent = () => {
    if (isLoading) return <ShoppingCartSkeleton />;
    if (isEmpty) return <QueryPlaceholder type="emptyData" />;
    if (isError) return <QueryPlaceholder type="error" onClick={refetch} />;

    return (
      <>
        <div className="mb-6 flex flex-col gap-2.5">
          <h1 className="text-[42px] font-bold">Shopping Cart</h1>
          <p className="text-text-secondary text-[22px]">{`You have ${games.length} items in your cart`}</p>
        </div>
        <div className="flex justify-between gap-12">
          <ShoppingCartList className="flex-2" cartList={games} renderAction={renderAction} />
          <OrderFromCart className="flex-1 self-start" cartList={games} isContinueShopping />
        </div>
      </>
    );
  };

  return <section className={cn(className, 'w-full')}>{renderContent()}</section>;
};

export default ShoppingCartWidget;
