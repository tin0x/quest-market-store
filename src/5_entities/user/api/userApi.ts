import { supabaseApi } from '@shared/api/supabase/supabaseApi.ts';
import { supabase } from '@shared/api/supabase/supabase.ts';
import { UserSchema } from '@entities/user/schemas/UserSchema.ts';
import { parseResponse } from '@shared/lib/utils/parseResponse.ts';
import { mapUser } from '@entities/user/mappers/mapUser.ts';
import type { User } from '@entities/user/types.ts';

const userApi = supabaseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      async queryFn() {
        const { data, error } = await supabase.from('profiles').select('*').single();

        if (error) {
          return {
            error: {
              status: 'SUPABASE_ERROR',
              data: error,
            },
          };
        }

        const result = parseResponse(UserSchema, data);

        if ('error' in result) {
          return result;
        }

        return {
          data: mapUser(result.data),
        };
      },
      providesTags: [
        {
          type: 'User',
          id: 'ID',
        },
      ],
    }),
  }),
});

export const { useGetUserQuery } = userApi;
