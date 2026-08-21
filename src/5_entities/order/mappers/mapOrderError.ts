import type { PostgrestError } from '@supabase/supabase-js';
import type { ApiError } from '@entities/order/types.ts';
import { appErrorMessages } from '@shared/api/error/constants.ts';
import { orderErrorMessages } from '@entities/order/constants.ts';

const mapOrderError = (error: PostgrestError): ApiError => {
  switch (error.code) {
    case '23505':
      return {
        status: 409,
        data: {
          code: 'ORDER_ITEM_EXISTS',
          message: orderErrorMessages.ORDER_ITEM_EXISTS,
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

export default mapOrderError;
