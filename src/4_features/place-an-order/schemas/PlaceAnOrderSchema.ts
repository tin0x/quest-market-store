import { z } from 'zod';

export const PlaceAnOrderSchema = z.object({
  cardHolderName: z
    .string()
    .regex(/^[a-z\s]+$/i, "The owner's name must contain only Latin letters.")
    .min(3, "The owner's name must contain only Latin letters."),
  cardNumber: z.string().refine((value) => {
    const formattedValue = value.replaceAll('-', '');
    if (formattedValue.length !== 16) return false;

    const isVisa = /^4\d{15}$/.test(formattedValue);
    const isMastercard = /^5[1-5]\d{14}$/.test(formattedValue) || /^2[2-7]\d{14}$/.test(formattedValue);

    return isVisa || isMastercard;
  }, 'A bank card must have 16 digits.'),
  expiryDate: z.string().refine((value) => {
    if (!value || !value.includes('/')) return false;

    const [monthStr, yearStr] = value.split('/');
    const month = Number(monthStr);
    const year = Number(yearStr);

    if (isNaN(month) || isNaN(year)) return false;

    const currentYear = new Date().getUTCFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;

    if (month < 1 || month > 12) return false;
    if (year < currentYear) return false;
    if (year === currentYear && month < currentMonth) return false;

    return true;
  }, 'Invalid card expiration date'),
  cvv: z.string().refine((value) => {
    const formattedValue = value.replaceAll('-', '');
    return /^\d{3}$/.test(formattedValue);
  }, 'The CVV must contain 3 digits.'),
});

export type PlaceAnOrderForm = z.infer<typeof PlaceAnOrderSchema>;
