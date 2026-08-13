import React from 'react';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';
import { Outlet } from 'react-router-dom';
import { AccountNavigationWidget } from '@widgets/account-navigation-widget';
import Container from '@shared/ui/container/Container.tsx';

const ProfilePage: React.FC = () => {
  useToggleTitle('Profile');

  return (
    <section className="flex h-full items-center">
      <Container className="flex h-auto justify-between gap-11">
        <AccountNavigationWidget />
        <div className="flex flex-1">
          <Outlet />
        </div>
      </Container>
    </section>
  );
};

export default ProfilePage;
