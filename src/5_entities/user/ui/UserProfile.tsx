import React, { useRef, useState } from 'react';
import UserDropdown from '@entities/user/ui/UserDropdown.tsx';
import type { UserProfileProps } from '@entities/user/types.ts';
import Button from '@shared/ui/button/Button.tsx';
import UserIcon from '@shared/assets/icons/user-stub.svg?react';
import { useClickOutside } from '@shared/hooks/ui/useClickOutside.ts';

const UserProfile: React.FC<UserProfileProps> = ({ name, email, actions }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(dropdownRef, () => setShowDropdown(false));

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        className="text-text-primary h-12 w-12 bg-transparent"
        onClick={() => {
          setShowDropdown((prev) => !prev);
        }}
        Icon={UserIcon}
      />
      <UserDropdown isOpen={showDropdown} email={email} name={name} actions={actions} />
    </div>
  );
};

export default UserProfile;
