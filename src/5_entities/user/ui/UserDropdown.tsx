import React from 'react';
import Dropdown from '@shared/ui/dropdown/Dropdown.tsx';
import type { UserDropdownProps } from '@entities/user/types.ts';
import { userLinks } from '@entities/user/constants.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import Button from '@shared/ui/button/Button.tsx';

const UserDropdown: React.FC<UserDropdownProps> = ({ name, email, isOpen, actions }) => {
  return (
    <Dropdown className="absolute top-full right-0 w-80 rounded-sm" isOpen={isOpen}>
      <div className="flex flex-col gap-4 overflow-hidden">
        <div className="text-text-secondary flex flex-col gap-1 font-bold">
          <span className={cn('overflow-hidden text-ellipsis', 'hover:animate-scroll hover:w-max')}>{name}</span>
          <span className={cn('overflow-hidden text-ellipsis', 'hover:animate-scroll hover:w-max')}>{email}</span>
        </div>
        <ul className="flex flex-col gap-4">
          {userLinks.map((link) => (
            <li key={link.name}>
              <Button className="block py-2 text-center text-[18px]" asLink pathTo={link.path} text={link.name} />
            </li>
          ))}
        </ul>
        {actions}
      </div>
    </Dropdown>
  );
};

export default UserDropdown;
