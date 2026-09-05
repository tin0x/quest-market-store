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
import { Logout } from '@features/logout';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import ArrowIcon from '@shared/assets/icons/arrow-left.svg?react';

const Layout: React.FC = () => {
  const { isAuth } = useAuth();
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
          <div className="flex w-full flex-col gap-9 px-5 py-10">
            <button
              className="flex w-max items-center gap-3 p-2 text-[22px] md:hidden"
              onClick={() => setShowDrawer(false)}
            >
              <ArrowIcon className="h-5 w-5" />
              <span className="font-bold">Close</span>
            </button>
            <SearchByName className="sm:hidden" />
            <NavigationWidget className="flex-col gap-10" showAdditionalLinks />
            {isAuth ? <Logout /> : <UserMenuWidget className="flex-col" />}
          </div>
        </SideDrawer>
      </HeaderWidget>
      <main className="py-5 lg:py-15">
        <Outlet />
      </main>
      <FooterWidget>
        <div className="flex flex-col gap-10 md:flex-row md:gap-3">
          <ApplicationDescription
            className="flex-1 items-center border-b-2 border-b-transparent text-center md:items-start md:border-r-2 md:border-b-transparent md:pr-5 md:text-left"
            logoSlot={<Logo pathTo="/">Quest Market</Logo>}
          >
            Quest Market — Level up your gaming experience. We bring you the hottest games without breaking the bank.
            Instant activation, reliable support, and constant deals waiting for you. Get the game you want, pay less,
            and start playing today!
          </ApplicationDescription>
          <HelpList className="hidden flex-1 flex-col items-center justify-center gap-10 md:flex md:flex-row md:justify-start md:gap-20 md:pl-5" />
        </div>
      </FooterWidget>
    </div>
  );
};

export default Layout;
