import React from 'react';
import { NavLink } from 'react-router-dom';
import { navigationlinks } from '@widgets/navigation-widget/constants.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const NavigationWidget: React.FC = () => {
  return (
    <nav>
      <ul className="gap flex items-center">
        {navigationlinks.map((link) => (
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
