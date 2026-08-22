import { useGetOrderListQuery } from '@entities/order/api/orderApi.ts';
import useAuth from '@app/providers/auth-provider/useAuth.ts';
import { skipToken } from '@reduxjs/toolkit/query';

const useFetchOrderDetailsList = () => {
  const { session } = useAuth();
  const { data, isLoading, isError, refetch } = useGetOrderListQuery(session ? { userId: session.user.id } : skipToken);

  return {
    orderDetailsList: data || [],
    isEmpty: data?.length === 0,
    isLoading,
    isError,
    refetch,
  };
};

export default useFetchOrderDetailsList;
