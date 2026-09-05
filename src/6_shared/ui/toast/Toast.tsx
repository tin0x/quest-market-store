import React from 'react';
import type { ToastProps } from '@shared/ui/toast/types.ts';
import SuccessIcon from '@shared/assets/icons/success.svg?react';
import FailedIcon from '@shared/assets/icons/failed.svg?react';
import { cn } from '@shared/lib/utils/cn.ts';

const Toast: React.FC<ToastProps> = ({ type, title, message, isActive }) => {
  const icons = {
    success: <SuccessIcon className="h-10 w-10 shrink-0 text-green-400" />,
    failed: <FailedIcon className="h-10 w-10 shrink-0 text-red-600" />,
  };
  return (
    <div
      className={cn(
        'bg-gradient-card fixed top-4 right-4 left-4 z-100 translate-y-full rounded-md px-6 py-4 opacity-0 transition-all duration-400 sm:top-auto sm:right-5 sm:bottom-5 sm:left-auto sm:w-90 lg:right-20 lg:bottom-10',
        {
          'translate-y-0 opacity-100': isActive,
          'shadow-[inset_0_0_20px_rgba(239,68,68,0.5)]': type === 'failed',
          'shadow-[inset_0px_0px_30px_rgba(34,197,94,0.5)]': type === 'success',
        },
      )}
    >
      <div className="flex items-center gap-6">
        {icons[type]}
        <div className="flex flex-col gap-1">
          <span className="text-text-primary text-xl font-bold">{title}</span>
          <p className="text-text-secondary text-[18px]">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
