import type { UserResponseDTO } from '@entities/user/schemas/UserSchema.ts';
import type { User } from '@entities/user/types.ts';

export const mapUser = (dto: UserResponseDTO): User => ({
  id: dto.id,
  fullName: dto.full_name,
  email: dto.email,
  createdAt: dto.created_at,
});
