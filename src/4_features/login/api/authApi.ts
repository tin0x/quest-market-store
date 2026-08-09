import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import type { LoginArgs, LoginResponse } from '@features/login/types.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import mapAuthError from '@features/auth/mappers/mapAuthError.ts';

export const authApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginArgs>({
      async queryFn({ email, password }) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          return {
            error: mapAuthError(error),
          };
        }

        return {
          data,
        };
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
