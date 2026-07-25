import { useLoginMutation } from '@features/auth/login/api/authApi.ts';
import type { LoginForm } from '@features/auth/login/schemas/LoginSchemas.ts';
import { useNavigate } from 'react-router-dom';
import type { UseFormSetError } from 'react-hook-form';
import type { ApiError } from '@features/auth/types.ts';

export const useLogin = (setError: UseFormSetError<LoginForm>) => {
  const [loginUser, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: LoginForm) => {
    try {
      const result = await loginUser(data).unwrap();
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
