import React from 'react';
import { accountNavigationVariant } from '@widgets/account-navigation-widget/constants.ts';
import Tab from '@shared/ui/tab/Tab.tsx';
import type { AccountNavigationWidgetProps } from '@widgets/account-navigation-widget/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const AccountNavigationWidget: React.FC<AccountNavigationWidgetProps> = ({ className }) => {
  return (
    <div className={cn(className)}>
      <ul className={cn('flex flex-col overflow-hidden rounded-md', className)}>
        {accountNavigationVariant.map((variant) => (
          <li key={variant.title}>
            <Tab pathTo={variant.pathTo} title={variant.title} description={variant.description} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountNavigationWidget;
