import React from 'react';
import { useToggleTitle } from '@shared/hooks/router/useToggleTitle.ts';
import { Outlet } from 'react-router-dom';
import { AccountNavigationWidget } from '@widgets/account-navigation-widget';
import Container from '@shared/ui/container/Container.tsx';
import Card from '@shared/ui/card/Card.tsx';

const ProfilePage: React.FC = () => {
  useToggleTitle('Profile');

  return (
    <section className="flex h-full items-center">
      <Container className="flex h-auto flex-col justify-between gap-11 xl:flex-row">
        <AccountNavigationWidget className="top-5 min-w-0 xl:sticky xl:w-79.25" />
        <Card className="flex flex-1 px-2 py-8 sm:px-4 xl:px-9 xl:py-9" variant="primary">
          <Outlet />
        </Card>
      </Container>
    </section>
  );
};

export default ProfilePage;
