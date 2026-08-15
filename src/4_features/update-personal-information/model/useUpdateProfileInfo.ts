import useAuth from '@app/providers/auth-provider/useAuth.ts';
import { useUpdateProfileMutation } from '@features/update-personal-information/api/userApi.ts';
import { useNavigate } from 'react-router-dom';
import { showToast } from '@shared/lib/slices/toast/toastSlice.ts';
import { appErrorMessages } from '@shared/api/error/constants.ts';
import type { ApiError } from '@shared/api/error/types.ts';
import type { UseFormSetError } from 'react-hook-form';
import type { SaveProfileInfoForm } from '@features/update-personal-information/schemas/SaveProfileInfoSchema.ts';

const useUpdateProfileInfo = (setError: UseFormSetError<SaveProfileInfoForm>) => {
  const { session } = useAuth();
  const [updateProfileInfo, { isLoading: isLoadingProfileInfo }] = useUpdateProfileMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: SaveProfileInfoForm) => {
    if (!session) {
      showToast({
        type: 'failed',
        title: 'Failed',
        message: appErrorMessages.UNAUTHORIZED,
      });
      navigate('/login');
      return;
    }

    try {
      await updateProfileInfo({ patch: data, email: data.email, userId: session.user.id }).unwrap();
    } catch (error) {
      const apiError = error as ApiError;
      setError('root.server', {
        message: apiError.data.message,
      });
    }
  };

  return {
    isLoadingButton: isLoadingProfileInfo,
    onSubmit,
  };
};

export default useUpdateProfileInfo;
