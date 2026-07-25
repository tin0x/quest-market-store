import { z } from 'zod';

export const RegisterSchema = z.object({
  fullName: z
    .string()
    .min(3, 'Full name must be at least 3 characters long.')
    .max(50, 'Full name must not exceed 50 characters.')
    .regex(/^[a-z ]+$/i, 'Full name may contain only Latin letters and spaces.'),
  email: z.string().email('Please enter a valid email address.'),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters long.')
    .regex(/[a-z]/i, 'Password must contain at least one letter.')
    .regex(/\d/, 'Password must contain at least one number.')
    .regex(/[@$!%*?]/, 'Password must contain at least one special character (@$!%*?).'),
  terms: z.boolean().refine((value) => value === true, {
    message: 'You must accept the Terms and Privacy Policy',
  }),
});

export type RegisterForm = z.infer<typeof RegisterSchema>;
