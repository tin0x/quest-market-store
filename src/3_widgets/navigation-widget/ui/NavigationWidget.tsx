import React from 'react';
import { NavLink } from 'react-router-dom';
import { additionalLinks, navigationLinks } from '@widgets/navigation-widget/constants.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import type { NavigationWidgetProps } from '@widgets/navigation-widget/types.ts';

const NavigationWidget: React.FC<NavigationWidgetProps> = ({ className, showAdditionalLinks }) => {
  return (
    <nav>
      <ul className={cn('gap flex items-center', className)}>
        {navigationLinks.map((link) => (
          <li key={link.title}>
            <NavLink
              className={({ isActive }) =>
                cn('text-text-secondary hover:text-text-primary p-6 text-[20px] font-bold', {
                  'text-text-primary': isActive,
                })
              }
              to={link.path}
            >
              {link.title}
            </NavLink>
          </li>
        ))}
        {showAdditionalLinks &&
          additionalLinks.map((link) => (
            <li key={link.title}>
              <NavLink
                className={({ isActive }) =>
                  cn('text-text-secondary hover:text-text-primary p-6 text-[20px] font-bold', {
                    'text-text-primary': isActive,
                  })
                }
                to={link.path}
              >
                {link.title}
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NavigationWidget;
