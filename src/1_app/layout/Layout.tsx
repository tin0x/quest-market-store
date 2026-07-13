import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderWidget from '@widgets/header-widget/ui/HeaderWidget.tsx';
import FooterWidget from '@widgets//footer-widget/ui/FooterWidget.tsx';

const Layout: React.FC = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <HeaderWidget>...</HeaderWidget>
      <main>
        <Outlet />
      </main>
      <FooterWidget>...</FooterWidget>
    </div>
  );
};

export default Layout;
