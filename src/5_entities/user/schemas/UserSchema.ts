import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  full_name: z.string(),
  email: z.string(),
  created_at: z.string(),
});

export type UserResponseDTO = z.infer<typeof UserSchema>;
