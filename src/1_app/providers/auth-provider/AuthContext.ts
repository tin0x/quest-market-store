import { createContext } from 'react';
import type { Session, User } from '@supabase/supabase-js';

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isAuth: boolean;
};

const AuthContext = createContext<AuthContextType | null>(null);

export default AuthContext;
