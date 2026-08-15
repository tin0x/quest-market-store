import React from 'react';
import { useGetUserQuery } from '@entities/user';
import { UpdatePersonalInformation } from '@features/update-personal-information';
import { useNavigate } from 'react-router-dom';
import { showToast } from '@shared/lib/slices/toast/toastSlice.ts';
import { appErrorMessages } from '@shared/api/error/constants.ts';

const PersonalInformationWidget: React.FC = () => {
  const { data, isLoading, isError } = useGetUserQuery();
  const navigate = useNavigate();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || isError) {
    showToast({
      type: 'failed',
      title: 'Failed',
      message: appErrorMessages.UNAUTHORIZED,
    });
    navigate('/login');
    return;
  }

  return <UpdatePersonalInformation profileInfo={data} />;
};

export default PersonalInformationWidget;
