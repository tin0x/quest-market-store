import { useRegisterMutation } from '@features/register/api/authApi.ts';
import type { RegisterForm } from '@features/register/schemas/RegisterSchema.ts';
import { useNavigate } from 'react-router-dom';
import type { UseFormSetError } from 'react-hook-form';
import type { ApiError } from '@shared/api/error/types.ts';

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

      setError('root.server', {
        message: apiError.data.message,
      });
    }
  };

  return { isLoading, onSubmit };
};
