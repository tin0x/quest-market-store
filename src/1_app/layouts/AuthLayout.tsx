import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout: React.FC = () => {
  return (
    <div className="h-dvh">
      <main className="h-full">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
