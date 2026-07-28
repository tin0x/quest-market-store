import { supabaseApi } from '@shared/api/supabaseApi.ts';
import { supabase } from '@shared/api/supabase.ts';
import type { RegisterArgs, RegisterResponse } from '@features/auth/register/types.ts';

export const authApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterArgs>({
      async queryFn({ email, password, fullName }) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) {
          return {
            error: {
              status: error.status ?? 400,
              data: {
                message: 'User already registered',
              },
            },
          };
        }

        const user = data.user;

        if (!user) {
          return {
            error: new Error('User was not created'),
          };
        }

        const { error: ProfileError } = await supabase.from('profiles').insert({
          id: user.id,
          full_name: fullName,
          email: email,
        });

        if (ProfileError) {
          return {
            error: ProfileError,
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
