import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import type { UpdateProfileArgs } from '@features/update-personal-information/types.ts';
import { mapAuthError, mapProfileError } from '@entities/user';

const userApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation<void, UpdateProfileArgs>({
      async queryFn({ patch, email, userId }) {
        if (email) {
          const { error: authError } = await supabase.auth.updateUser({
            email,
          });

          if (authError) {
            return {
              error: mapAuthError(authError),
            };
          }
        }

        const profileUpdate = {
          ...(patch?.fullName !== undefined && {
            full_name: patch.fullName,
          }),

          ...(patch?.email !== undefined && {
            email: patch.email,
          }),
        };

        if (profileUpdate && Object.keys(profileUpdate).length > 0) {
          const { error: profileError } = await supabase.from('profiles').update(profileUpdate).eq('id', userId);

          if (profileError) {
            return {
              error: mapProfileError(profileError),
            };
          }
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

export const { useUpdateProfileMutation } = userApi;
