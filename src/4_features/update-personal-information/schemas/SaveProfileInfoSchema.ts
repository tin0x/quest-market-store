import { z } from 'zod';

export const SaveProfileInfoSchema = z.object({
  fullName: z
    .string()
    .min(3, 'Full name must be at least 3 characters long.')
    .max(50, 'Full name must not exceed 50 characters.')
    .regex(/^[a-z ]+$/i, 'Full name may contain only Latin letters and spaces.'),

  email: z.string().email('Please enter a valid email address.'),
});

export type SaveProfileInfoForm = z.infer<typeof SaveProfileInfoSchema>;
