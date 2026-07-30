import React, { useEffect } from 'react';
import Toast from '@shared/ui/toast/Toast.tsx';
import { useAppSelector } from '@shared/hooks/redux/useAppSelector.ts';
import { getToastState } from '@shared/lib/slices/toast/selectors.ts';
import { useAppDispatch } from '@shared/hooks/redux/useAppDispatch.ts';
import { hideToast } from '@shared/lib/slices/toast/toastSlice.ts';

const ToastWidget: React.FC = () => {
  const toastState = useAppSelector(getToastState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!toastState.isActive) return;

    const timerId = setTimeout(() => {
      dispatch(hideToast());
    }, 3000);

    return () => clearTimeout(timerId);
  }, [toastState.isActive, dispatch]);

  return <Toast {...toastState} />;
};

export default ToastWidget;
