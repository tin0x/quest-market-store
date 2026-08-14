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
      <Container className="flex h-auto justify-between gap-11">
        <AccountNavigationWidget className={'sticky top-5'} />
        <Card className="flex w-full flex-1 p-9" variant="primary">
          <Outlet />
        </Card>
      </Container>
    </section>
  );
};

export default ProfilePage;
