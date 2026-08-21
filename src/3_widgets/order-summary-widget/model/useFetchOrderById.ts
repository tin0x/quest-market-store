import { useGetOrderByIdQuery } from '@entities/order/api/orderApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';
import { useParams } from 'react-router-dom';

const useFetchOrderById = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetOrderByIdQuery(id ? { orderId: id } : skipToken);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useFetchOrderById;
