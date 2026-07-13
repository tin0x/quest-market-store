import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderWidget from '@widgets/header-widget/ui/HeaderWidget.tsx';
import FooterWidget from '@widgets//footer-widget/ui/FooterWidget.tsx';
import Logo from '@shared/ui/logo/Logo.tsx';
import SearchByName from '@features/search-by-name/ui/SearchByName.tsx';
import NavigationWidget from '@widgets/navigation-widget/NavigationWidget.tsx';
import AuthButtons from '@features/auth/auth-buttons/AuthButtons.tsx';

const Layout: React.FC = () => {
  return (
    <div className="grid flex-1 grid-cols-1 grid-rows-[auto_1fr_auto]">
      <HeaderWidget>
        <Logo pathTo="/">Quest Market</Logo>
        <SearchByName />
        <NavigationWidget />
        <AuthButtons />
      </HeaderWidget>
      <main>
        <Outlet />
      </main>
      <FooterWidget>...</FooterWidget>
    </div>
  );
};

export default Layout;
