import type { PostgrestError } from '@supabase/supabase-js';
import type { ApiError } from '@shared/api/error/types.ts';
import { appErrorMessages } from '@shared/api/error/constants.ts';
import { userErrorMessages } from '@entities/user';

const mapProfileError = (error: PostgrestError): ApiError => {
  switch (error.code) {
    case '23505':
      return {
        status: 409,
        data: {
          code: 'USER_ALREADY_EXISTS',
          message: userErrorMessages.USER_ALREADY_EXISTS,
        },
      };

    case '23502':
      return {
        status: 400,
        data: {
          code: 'INVALID_DATA',
          message: appErrorMessages.INVALID_DATA,
        },
      };

    default:
      return {
        status: 500,
        data: {
          code: 'UNKNOWN_ERROR',
          message: appErrorMessages.UNKNOWN_ERROR,
        },
      };
  }
};

export default mapProfileError;
