import type { PostgrestError } from '@supabase/supabase-js';
import { wishlistErrorMessages } from '@entities/wishlist/constants.ts';
import { appErrorMessages } from '@shared/api/error/constants.ts';
import type { ApiError } from '@entities/wishlist/types.ts';

const mapWishlistError = (error: PostgrestError): ApiError => {
  switch (error.code) {
    case '23505':
      return {
        status: 409,
        data: {
          code: 'FAVORITE_ITEM_EXISTS',
          message: wishlistErrorMessages.FAVORITE_ITEM_EXISTS,
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

export default mapWishlistError;
