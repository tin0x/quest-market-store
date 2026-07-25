import { useRegisterMutation } from '@features/auth/register/api/authApi.ts';
import type { RegisterForm } from '@features/auth/register/schemas/RegisterSchema.ts';
import { useNavigate } from 'react-router-dom';
import type { UseFormSetError } from 'react-hook-form';
import type { ApiError } from '@features/auth/register/types.ts';

export const useRegister = (setError: UseFormSetError<RegisterForm>) => {
  const [registerUser, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: RegisterForm) => {
    try {
      const result = await registerUser(data).unwrap();
      if (result.session) {
        navigate('/');
      }
    } catch (error) {
      const apiError = error as ApiError;

      if (apiError.data.message === 'User already registered') {
        setError('root.server', {
          message: 'User already registered',
        });
      }
    }
  };

  return { isLoading, onSubmit };
};
