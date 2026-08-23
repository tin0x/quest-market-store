import React from 'react';
import { placeholders } from '@shared/ui/query-placeholder/constants.ts';
import Button from '@shared/ui/button/Button.tsx';
import type { QueryPlaceholderProps } from '@shared/ui/query-placeholder/types.ts';

const QueryPlaceholder: React.FC<QueryPlaceholderProps> = ({ customMessage, type, onClick }) => {
  const placeholder = placeholders[type];
  const text = customMessage ? customMessage : placeholder?.text;
  const shouldShowButton = type !== 'emptyData' && placeholder?.buttonText && onClick;
  const buttonText = placeholder?.buttonText;

  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <placeholder.Icon className="h-40 w-40" />
      <p className="text-center text-[20px] font-bold">{text}</p>
      {shouldShowButton && <Button className="text-[18px]" onClick={onClick} variant="dark" text={buttonText} />}
    </div>
  );
};

export default QueryPlaceholder;
