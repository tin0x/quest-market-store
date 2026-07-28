import React, { useState } from 'react';
import UserDropdown from '@entities/user/ui/UserDropdown.tsx';
import type { UserProfileProps } from '@entities/user/types.ts';
import Button from '@shared/ui/button/Button.tsx';
import UserIcon from '@shared/assets/icons/user-stub.svg?react';

const UserProfile: React.FC<UserProfileProps> = ({ name, email, actions }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <Button
        className="text-text-primary h-12 w-12 bg-transparent"
        onMouseDown={(e) => e.stopPropagation()}
        onClick={() => setShowDropdown((prev) => !prev)}
        Icon={UserIcon}
      />
      <UserDropdown
        isOpen={showDropdown}
        onClose={() => setShowDropdown(false)}
        email={email}
        name={name}
        actions={actions}
      />
    </div>
  );
};

export default UserProfile;
