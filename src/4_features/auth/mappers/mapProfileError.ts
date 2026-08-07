import type { PostgrestError } from '@supabase/supabase-js';
import type { ApiError } from '@shared/api/error/types';
import { appErrorMessages } from '@shared/api/error/constants.ts';

const mapProfileError = (error: PostgrestError): ApiError => {
  switch (error.code) {
    case '23505':
      return {
        status: 409,
        data: {
          code: 'USER_ALREADY_EXISTS',
          message: 'Profile already exists',
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
