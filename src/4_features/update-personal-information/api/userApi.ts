import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import type { UpdateEmailArgs, UpdateProfileInfoArgs } from '@features/update-personal-information/types.ts';
import { mapAuthError, mapProfileError } from '@entities/user';

const userApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateEmail: builder.mutation<void, UpdateEmailArgs>({
      async queryFn({ email }) {
        const { error: authError } = await supabase.auth.updateUser({
          email,
        });

        if (authError) {
          return {
            error: mapAuthError(authError),
          };
        }

        return {
          data: undefined,
        };
      },
    }),
    updateProfileInfo: builder.mutation<void, UpdateProfileInfoArgs>({
      async queryFn({ fullName, userId }) {
        const { error: profileError } = await supabase
          .from('profiles')
          .update({ full_name: fullName })
          .eq('id', userId);

        if (profileError) {
          return {
            error: mapProfileError(profileError),
          };
        }

        return {
          data: undefined,
        };
      },
      invalidatesTags: [
        {
          type: 'User',
          id: 'ID',
        },
      ],
    }),
  }),
});

export const { useUpdateEmailMutation, useUpdateProfileInfoMutation } = userApi;
