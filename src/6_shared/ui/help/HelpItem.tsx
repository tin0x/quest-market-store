import React from 'react';
import { Link } from 'react-router-dom';
import type { HelpItemProps } from '@shared/ui/help/types.ts';

const HelpItem: React.FC<HelpItemProps> = ({ title, links }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="text-xl font-bold">{title}</h4>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.name}>
            <Link className="hover:text-text-secondary text-lg" to={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HelpItem;
