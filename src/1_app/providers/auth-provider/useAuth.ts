import { useContext } from 'react';
import AuthContext from '@app/providers/auth-provider/AuthContext.ts';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used inside a AuthProvider');
  }

  return context;
};

export default useAuth;
