import React from 'react';
import { accountNavigationVariant } from '@widgets/account-navigation-widget/constants.ts';
import Tab from '@shared/ui/tab/Tab.tsx';

const AccountNavigationWidget: React.FC = () => {
  return (
    <ul className="flex flex-col overflow-hidden rounded-md">
      {accountNavigationVariant.map((variant) => (
        <li key={variant.title}>
          <Tab pathTo={variant.pathTo} title={variant.title} description={variant.description} />
        </li>
      ))}
    </ul>
  );
};

export default AccountNavigationWidget;
