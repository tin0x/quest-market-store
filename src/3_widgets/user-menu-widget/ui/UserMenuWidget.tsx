import React, { useCallback } from 'react';
import UserProfile from '@entities/user/ui/UserProfile.tsx';
import { useFetchUserInfo } from '@widgets/user-menu-widget/model/useFetchUserInfo.ts';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import RedirectToForm from '@features/auth/redirect-to-form/ui/RedirectToForm.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import Logout from '@features/auth/logout/ui/Logout.tsx';
import UserCart from '@entities/cart/ui/UserCart.tsx';
import { useFetchProductCart } from '@widgets/user-menu-widget/model/useFetchProductCart.ts';
import ToggleCartItemForItem from '@features/toggle-cart-item/ui/ToggleCartItemForItem.tsx';
import type { Product } from '@widgets/user-menu-widget/types.ts';

const UserMenuWidget: React.FC = () => {
  const { session } = useAuth();
  const { user, isLoading, refetch } = useFetchUserInfo(session);
  const { products } = useFetchProductCart(session);

  const renderRemoveButton = useCallback((product: Product) => <ToggleCartItemForItem product={product} />, []);

  const renderContent = () => {
    if (!session) return <RedirectToForm />;
    if (isLoading) return <span>Loading...</span>;
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
