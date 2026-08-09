import type { AuthResponse } from '@supabase/supabase-js';

export type LoginResponse = AuthResponse['data'];
export type LoginArgs = {
  email: string;
  password: string;
};