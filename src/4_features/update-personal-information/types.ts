import type { User } from '@entities/user';

export type UpdatePersonalInformationProps = {
  profileInfo: User;
};

export type UpdateEmailArgs = {
  email: string;
};

export type UpdateProfileInfoArgs = {
  fullName: string;
  userId: string;
};
