import React, { useCallback } from 'react';
import { useFetchUserInfo } from '@widgets/user-menu-widget/model/useFetchUserInfo.ts';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { useFetchProductCart } from '@widgets/user-menu-widget/model/useFetchProductCart.ts';
import type { Product } from '@widgets/user-menu-widget/types.ts';
import UserMenuSkeleton from '@shared/ui/skeletons/user-menu-skeleton/UserMenuSkeleton.tsx';
import { UserProfile } from '@entities/user';
import { UserCart } from '@entities/cart';
import { ToggleCartItemForItem } from '@features/toggle-cart-item';
import { RedirectToForm } from '@features/redirect-to-form';
import { Logout } from '@features/logout';

const UserMenuWidget: React.FC = () => {
  const { session } = useAuth();
  const { user, isLoading, refetch } = useFetchUserInfo(session);
  const { products } = useFetchProductCart(session);

  const renderRemoveButton = useCallback((product: Product) => <ToggleCartItemForItem product={product} />, []);

  const renderContent = () => {
    if (!session) return <RedirectToForm />;
    if (isLoading) return <UserMenuSkeleton />;
    if (!user) return <QueryPlaceholder type="error" onClick={refetch} />;

    return (
      <>
        <UserCart orders={products} renderAction={renderRemoveButton} />
        <UserProfile email={user.email} name={user.fullName} actions={<Logout />} />
      </>
    );
  };

  return <div className="flex items-center gap-7">{renderContent()}</div>;
};

export default UserMenuWidget;
