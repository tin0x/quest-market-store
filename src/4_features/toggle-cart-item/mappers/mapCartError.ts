import type { PostgrestError } from '@supabase/supabase-js';
import type { ApiError } from '@shared/api/error/types.ts';
import { errorMessages } from '@shared/api/error/constants.ts';

const mapCartError = (error: PostgrestError): ApiError => {
  switch (error.code) {
    case '23505':
      return {
        status: 409,
        data: {
          code: 'CART_ITEM_EXISTS',
          message: errorMessages.CART_ITEM_EXISTS,
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

export default mapCartError;
