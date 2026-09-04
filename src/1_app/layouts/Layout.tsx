import React, { useState } from 'react';
import Logo from '@shared/ui/logo/Logo.tsx';
import { SearchByName } from '@features/search-by-name';
import { UserMenuWidget } from '@widgets/user-menu-widget';
import { NavigationWidget } from '@widgets/navigation-widget';
import { HeaderWidget } from '@widgets/header-widget';
import useScrollToTop from '@shared/hooks/ui/useScrollToTop.ts';
import Burger from '@shared/ui/burger/Burger.tsx';
import SideDrawer from '@shared/ui/side-drawer/SideDrawer.tsx';
import { Outlet } from 'react-router-dom';
import ApplicationDescription from '@shared/ui/application-description/ApplicationDescription.tsx';
import { FooterWidget } from '@widgets/footer-widget';
import HelpList from '@shared/ui/help/HelpList.tsx';

const Layout: React.FC = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  useScrollToTop();

  return (
    <div className="grid flex-1 grid-cols-1 grid-rows-[auto_1fr_auto]">
      <HeaderWidget>
        <Logo textClass="hidden lg:block" pathTo="/">
          Quest Market
        </Logo>
        <SearchByName className="hidden min-w-75 flex-1 sm:block" />
        <div className="hidden items-center gap-10 lg:flex">
          <NavigationWidget />
          <UserMenuWidget />
        </div>
        <Burger className="lg:hidden" onClick={() => setShowDrawer((prev) => !prev)} />
        <SideDrawer
          drawerClass="w-full overflow-hidden md:w-1/2"
          isOpen={showDrawer}
          onClose={() => setShowDrawer(false)}
        >
          <div className="flex w-full flex-col gap-10 px-5 py-10">
            <SearchByName className="sm:hidden" />
            <NavigationWidget className="flex-col gap-10" showAdditionalLinks />
          </div>
        </SideDrawer>
      </HeaderWidget>
      <main className="py-8 lg:py-15">
        <Outlet />
      </main>
      <FooterWidget>
        <div className="flex h-full flex-col gap-10 md:flex-row md:gap-3">
          <ApplicationDescription
            className="flex-1 items-center border-b-2 text-center md:items-start md:border-r-2 md:border-b-transparent md:pr-5 md:text-left"
            logoSlot={<Logo pathTo="/">Quest Market</Logo>}
          >
            Quest Market — Level up your gaming experience. We bring you the hottest games without breaking the bank.
            Instant activation, reliable support, and constant deals waiting for you. Get the game you want, pay less,
            and start playing today!
          </ApplicationDescription>
          <HelpList className="flex flex-1 flex-col items-center gap-10 md:flex-row md:gap-20 md:pl-5" />
        </div>
      </FooterWidget>
    </div>
  );
};

export default Layout;
