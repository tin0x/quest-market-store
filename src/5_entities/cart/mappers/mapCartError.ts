import type { PostgrestError } from '@supabase/supabase-js';
import type { ApiError } from '@entities/cart/types.ts';
import { cartErrorMessages } from '@entities/cart/constants.ts';
import { appErrorMessages } from '@shared/api/error/constants.ts';

const mapCartError = (error: PostgrestError): ApiError => {
  switch (error.code) {
    case '23505':
      return {
        status: 409,
        data: {
          code: 'CART_ITEM_EXISTS',
          message: cartErrorMessages.CART_ITEM_EXISTS,
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

export default mapCartError;
