import React, { useEffect } from 'react';
import { useGetUserQuery, userErrorMessages } from '@entities/user';
import { Navigate } from 'react-router-dom';
import { showToast } from '@shared/lib/slices/toast/toastSlice.ts';
import { useAppDispatch } from '@shared/hooks/redux/useAppDispatch.ts';
import PersonalInformationSkeleton from '@shared/ui/skeletons/personal-information-skeleton/PersonalInformationSkeleton.tsx';
import { UpdatePersonalInformation } from '@features/update-personal-information';

const PersonalInformationWidget: React.FC = () => {
  const { data, isLoading, isError } = useGetUserQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && (!data || isError)) {
      dispatch(
        showToast({
          type: 'failed',
          title: 'Failed',
          message: userErrorMessages.UNAUTHORIZED,
        }),
      );
    }
  }, [data, isError, isLoading, dispatch]);

  if (isLoading) {
    return <PersonalInformationSkeleton />;
  }

  if (!data || isError) {
    return <Navigate to="/login" replace />;
  }

  return <UpdatePersonalInformation profileInfo={data} />;
};

export default PersonalInformationWidget;
