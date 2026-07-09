import React from 'react';
import { Outlet } from 'react-router-dom';
import HeaderWidget from '../../3_widgets/header-widget/ui/HeaderWidget.tsx';
import FooterWidget from '../../3_widgets/footer-widget/ui/FooterWidget.tsx';

const Layout: React.FC = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr_auto]">
      <HeaderWidget></HeaderWidget>
      <main>
        <Outlet />
      </main>
      <FooterWidget></FooterWidget>
    </div>
  );
};

export default Layout;
