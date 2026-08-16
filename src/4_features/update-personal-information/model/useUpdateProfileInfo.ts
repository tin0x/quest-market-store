import useAuth from '@app/providers/auth-provider/useAuth.ts';
import { useNavigate } from 'react-router-dom';
import { showToast } from '@shared/lib/slices/toast/toastSlice.ts';
import { appErrorMessages } from '@shared/api/error/constants.ts';
import type { ApiError } from '@shared/api/error/types.ts';
import type { FieldNamesMarkedBoolean, UseFormSetError } from 'react-hook-form';
import type { SaveProfileInfoForm } from '@features/update-personal-information/schemas/SaveProfileInfoSchema.ts';
import { useAppDispatch } from '@shared/hooks/redux/useAppDispatch.ts';
import {
  useUpdateEmailMutation,
  useUpdateProfileInfoMutation,
} from '@features/update-personal-information/api/userApi.ts';
import { userSuccessMessages } from '@entities/user';

const useUpdateProfileInfo = (
  setError: UseFormSetError<SaveProfileInfoForm>,
  dirtyFields: FieldNamesMarkedBoolean<SaveProfileInfoForm>,
) => {
  const { session } = useAuth();
  const [updateEmail, { isLoading: isLoadingEmail }] = useUpdateEmailMutation();
  const [updateProfileInfo, { isLoading: isLoadingProfileInfo }] = useUpdateProfileInfoMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (data: SaveProfileInfoForm) => {
    if (!session) {
      dispatch(
        showToast({
          type: 'failed',
          title: 'Failed',
          message: appErrorMessages.UNAUTHORIZED,
        }),
      );
      navigate('/login');
      return;
    }

    try {
      if (dirtyFields.email) {
        await updateEmail({ email: data.email }).unwrap();
        dispatch(
          showToast({
            type: 'success',
            title: 'Success',
            message: 'To confirm the change, open the message sent to your current email address.',
          }),
        );
      }

      if (dirtyFields.fullName) {
        await updateProfileInfo({ fullName: data.fullName, userId: session.user.id });
        dispatch(
          showToast({
            type: 'success',
            title: 'Success',
            message: userSuccessMessages.DATA_UPDATED,
          }),
        );
      }
    } catch (error) {
      const apiError = error as ApiError;
      setError('root.server', {
        message: apiError.data.message,
      });
    }
  };

  return {
    isLoadingButton: isLoadingEmail || isLoadingProfileInfo,
    onSubmit,
  };
};

export default useUpdateProfileInfo;
