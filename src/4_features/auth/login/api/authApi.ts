import { supabaseApi } from '@shared/api/supabaseApi.ts';
import type { LoginArgs, LoginResponse } from '@features/auth/login/types.ts';
import { supabase } from '@shared/api/supabase.ts';

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
            error: {
              status: error.status || 400,
              data: {
                message: error.message,
              },
            },
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
