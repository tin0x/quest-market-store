import React, { useEffect, useState } from 'react';
import { supabase } from '@shared/api/supabase.ts';
import AuthContext from './AuthContext';
import type { Session } from '@supabase/supabase-js';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setIsLoading(false);
    };

    getSession();

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; // Spinner
  }

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
