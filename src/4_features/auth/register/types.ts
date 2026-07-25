import type { AuthResponse } from '@supabase/supabase-js';

export type RegisterResponse = AuthResponse['data'];

export type RegisterArgs = {
  fullName: string;
  email: string;
  password: string;
};

export type ApiError = {
  status: number;
  data: {
    message: string;
  };
};
