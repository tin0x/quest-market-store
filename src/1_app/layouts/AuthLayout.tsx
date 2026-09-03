import React from 'react';
import { Outlet } from 'react-router-dom';
import useScrollToTop from '@shared/hooks/ui/useScrollToTop.ts';

const AuthLayout: React.FC = () => {
  useScrollToTop();

  return (
    <div className="h-dvh">
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
