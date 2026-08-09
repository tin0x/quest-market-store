import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import type { RegisterArgs, RegisterResponse } from '@features/register/types.ts';
import mapAuthError from '@features/auth/mappers/mapAuthError.ts';
import mapProfileError from '@features/auth/mappers/mapProfileError.ts';

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
            error: mapAuthError(error),
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
            error: mapProfileError(ProfileError),
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
