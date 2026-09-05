import React, { useCallback } from 'react';
import { useFetchUserInfo } from '@widgets/user-menu-widget/model/useFetchUserInfo.ts';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import UserMenuSkeleton from '@shared/ui/skeletons/user-menu-skeleton/UserMenuSkeleton.tsx';
import { UserProfile } from '@entities/user';
import { ToggleCartItemForItem } from '@features/toggle-cart-item';
import { RedirectToForm } from '@features/redirect-to-form';
import { Logout } from '@features/logout';
import type { Game } from '@entities/game';
import { useFetchGameCart, UserCart } from '@entities/cart';
import { cn } from '@shared/lib/utils/cn.ts';
import type { UserMenuWidgetProps } from '@widgets/user-menu-widget/types.ts';

const UserMenuWidget: React.FC<UserMenuWidgetProps> = ({ className }) => {
  const { session } = useAuth();
  const { user, isLoading, refetch } = useFetchUserInfo();
  const { games } = useFetchGameCart();

  const renderRemoveButton = useCallback((game: Game) => <ToggleCartItemForItem game={game} />, []);

  const renderContent = () => {
    if (!session) return <RedirectToForm classLogin="hidden xl:block" />;
    if (isLoading) return <UserMenuSkeleton />;
    if (!user) return <QueryPlaceholder type="error" onClick={refetch} />;

    return (
      <>
        <UserCart cartList={games} renderAction={renderRemoveButton} />
        <UserProfile email={user.email} name={user.fullName} actions={<Logout />} />
      </>
    );
  };

  return <div className={cn('flex items-center gap-7', className)}>{renderContent()}</div>;
};

export default UserMenuWidget;
