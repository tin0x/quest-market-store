import type { User } from '@entities/user';

export type UpdatePersonalInformationProps = {
  profileInfo: User;
};

export type UpdateProfileArgs = {
  patch?: Omit<User, 'createdAt' | 'id'>;
  email?: string;
  userId: string;
};
