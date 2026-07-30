import type { AuthError } from '@supabase/supabase-js';
import type { ApiError } from '@shared/api/error/types';
import { errorMessages } from '@shared/api/error/constants';

const mapAuthError = (error: AuthError): ApiError => {
  switch (error.code) {
    case 'invalid_credentials':
      return {
        status: 401,
        data: {
          code: 'INVALID_CREDENTIALS',
          message: errorMessages.INVALID_CREDENTIALS,
        },
      };

    case 'user_already_exists':
      return {
        status: 409,
        data: {
          code: 'USER_ALREADY_EXISTS',
          message: 'User already exists',
        },
      };

    default:
      return {
        status: 500,
        data: {
          code: 'UNKNOWN_ERROR',
          message: errorMessages.UNKNOWN_ERROR,
        },
      };
  }
};

export default mapAuthError;
