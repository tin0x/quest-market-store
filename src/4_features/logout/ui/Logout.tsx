import React from 'react';
import Button from '@shared/ui/button/Button.tsx';
import useLogout from '@features/logout/model/useLogout.ts';

const Logout: React.FC = () => {
  const { onLogout } = useLogout();

  return <Button className="border-ra p-2" text="Logout" onClick={onLogout} />;
};

export default Logout;
