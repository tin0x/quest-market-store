import { z } from 'zod';
import type { ParseError, ParseSuccess } from '@entities/user/types.ts';

export const parseResponse = <T>(schema: z.ZodSchema<T>, data: unknown): ParseSuccess<T> | ParseError => {
  const result = schema.safeParse(data);

  if (!result.success) {
    return {
      error: {
        status: 'VALIDATION_ERROR',
        data: result.error,
      },
    };
  }

  return {
    data: result.data,
  };
};
