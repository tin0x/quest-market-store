import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import { mapAuthError } from '@entities/user';

const authApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.mutation<void, void>({
      async queryFn() {
        const { error } = await supabase.auth.signOut();

        if (error) {
          return {
            error: mapAuthError(error),
          };
        }

        return {
          data: undefined,
        };
      },
    }),
  }),
});

export const { useLogoutMutation } = authApi;
