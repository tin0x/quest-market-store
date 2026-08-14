import React from 'react';
import useFetchProfileInfo from '@widgets/my-account-widget/model/useFetchProfileInfo.ts';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import MyAccountSkeleton from '@shared/ui/skeletons/my-account-skeleton/MyAccountSkeleton.tsx';
import formatDate from '@shared/lib/utils/formatDate.ts';

const MyAccountWidget: React.FC = () => {
  const { user, isLoading, isError, refetch } = useFetchProfileInfo();

  if (isLoading) {
    return <MyAccountSkeleton />;
  }

  if (isError) {
    return <QueryPlaceholder type="error" onClick={refetch} />;
  }

  return (
    <div className="flex flex-col gap-2 text-[18px]">
      <p className="text-text-secondary font-bold">
        Full Name: <span className="text-text-primary font-normal">{user?.fullName}</span>
      </p>
      <p className="text-text-secondary font-bold">
        Email: <span className="text-text-primary font-normal">{user?.email}</span>
      </p>
      <p className="text-text-secondary font-bold">
        Account creation time:{' '}
        <span className="text-text-primary font-normal">
          {user?.createdAt ? formatDate(user.createdAt) : 'unknown'}
        </span>
      </p>
    </div>
  );
};

export default MyAccountWidget;
