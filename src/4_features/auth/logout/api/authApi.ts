import { supabaseApi } from '@shared/api/supabaseApi.ts';
import { supabase } from '@shared/api/supabase.ts';

const authApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    logout: builder.mutation<void, void>({
      async queryFn() {
        const { error } = await supabase.auth.signOut();

        if (error) {
          return {
            error: {
              status: error.status,
              data: {
                message: error.message,
              },
            },
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
