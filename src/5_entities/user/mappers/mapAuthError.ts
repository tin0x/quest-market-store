import type { AuthError } from '@supabase/supabase-js';
import type { ApiError } from '@shared/api/error/types.ts';
import { appErrorMessages } from '@shared/api/error/constants.ts';
import { userErrorMessages } from '@entities/user';

const mapAuthError = (error: AuthError): ApiError => {
  switch (error.code) {
    case 'invalid_credentials':
      return {
        status: 401,
        data: {
          code: 'INVALID_CREDENTIALS',
          message: appErrorMessages.INVALID_CREDENTIALS,
        },
      };

    case 'over_email_send_rate_limit':
      return {
        status: 429,
        data: {
          code: 'OVER_EMAIL_SENT_RATE_LIMIT',
          message: userErrorMessages.OVER_EMAIL_SENT_RATE_LIMIT,
        },
      };

    case 'email_address_invalid':
      return {
        status: 400,
        data: {
          code: 'EMAIL_ADDRESS_INVALID',
          message: userErrorMessages.EMAIL_ADDRESS_INVALID,
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
          message: appErrorMessages.UNKNOWN_ERROR,
        },
      };
  }
};

export default mapAuthError;
