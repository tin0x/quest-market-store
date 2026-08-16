import React, { useEffect } from 'react';
import { useGetUserQuery } from '@entities/user';
import { UpdatePersonalInformation } from '@features/update-personal-information';
import { Navigate } from 'react-router-dom';
import { showToast } from '@shared/lib/slices/toast/toastSlice.ts';
import { appErrorMessages } from '@shared/api/error/constants.ts';
import { useAppDispatch } from '@shared/hooks/redux/useAppDispatch.ts';

const PersonalInformationWidget: React.FC = () => {
  const { data, isLoading, isError } = useGetUserQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isLoading && (!data || isError)) {
      dispatch(
        showToast({
          type: 'failed',
          title: 'Failed',
          message: appErrorMessages.UNAUTHORIZED,
        }),
      );
    }
  }, [data, isError, isLoading, dispatch]);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || isError) {
    return <Navigate to="/login" replace />;
  }

  return <UpdatePersonalInformation profileInfo={data} />;
};

export default PersonalInformationWidget;
