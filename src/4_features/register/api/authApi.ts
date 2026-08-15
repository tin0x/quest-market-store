import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import type { RegisterArgs, RegisterResponse } from '@features/register/types.ts';
import mapAuthError from '@features/auth/mappers/mapAuthError.ts';

export const authApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterArgs>({
      async queryFn({ email, password, fullName }) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
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

export const { useRegisterMutation } = authApi;
