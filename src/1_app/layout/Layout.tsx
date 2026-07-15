import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderWidget from '@widgets/header-widget/ui/HeaderWidget.tsx';
import FooterWidget from '@widgets//footer-widget/ui/FooterWidget.tsx';
import Logo from '@shared/ui/logo/Logo.tsx';
import SearchByName from '@features/search-by-name/ui/SearchByName.tsx';
import NavigationWidget from '@widgets/navigation-widget/NavigationWidget.tsx';
import AuthButtons from '@features/auth/auth-buttons/AuthButtons.tsx';
import ApplicationDescription from '@shared/ui/application-description/ApplicationDescription.tsx';
import HelpList from '@shared/ui/help/HelpList.tsx';

const Layout: React.FC = () => {
  return (
    <div className="grid flex-1 grid-cols-1 grid-rows-[auto_1fr_auto]">
      <HeaderWidget>
        <Logo pathTo="/">Quest Market</Logo>
        <SearchByName />
        <NavigationWidget />
        <AuthButtons />
      </HeaderWidget>
      <main className="py-5">
        <Outlet />
      </main>
      <FooterWidget>
        <div className="flex gap-3">
          <ApplicationDescription className="flex-1 border-r-2 pr-5" logoSlot={<Logo pathTo="/">Quest Market</Logo>}>
            Quest Market — Level up your gaming experience. We bring you the hottest PC games without breaking the bank.
            Instant activation, reliable support, and constant deals waiting for you. Get the game you want, pay less,
            and start playing today!
          </ApplicationDescription>
          <HelpList className="flex-1 pl-5" />
        </div>
      </FooterWidget>
    </div>
  );
};

export default Layout;
