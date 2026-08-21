import React from 'react';
import type { InformationStatusOperationProps } from '@shared/ui/information-status-operation/types.ts';
import SuccessIcon from '@shared/assets/icons/success.svg?react';
import FailedIcon from '@shared/assets/icons/failed.svg?react';

const InformationStatusOperation: React.FC<InformationStatusOperationProps> = ({ type, title, message }) => {
  const Icon = type === 'success' ? SuccessIcon : FailedIcon;

  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <Icon className="h-30 w-30 text-green-400" />
      <div className="flex flex-col gap-1">
        <h1 className="text-[36px] font-bold">{title}</h1>
        <p className="text-text-secondary text-[24px]">{message}</p>
      </div>
    </div>
  );
};

export default InformationStatusOperation;
