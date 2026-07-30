import React, { useEffect, useState } from 'react';
import { supabase } from '@shared/api/supabase/supabase.ts';
import type { Session } from '@supabase/supabase-js';
import Loader from '@shared/ui/loader/Loader.tsx';
import AuthContext from './AuthContext';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        return <Loader />;
      }
    }, 150);

    const initAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setIsLoading(false);
      clearInterval(timer);
    };

    void initAuth();

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });

    return () => {
      listener.subscription.unsubscribe();
      clearTimeout(timer);
    };
  }, [isLoading]);

  return (
    <AuthContext.Provider
      value={{
        session,
        user: session?.user ?? null,
        isAuth: !!session,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
