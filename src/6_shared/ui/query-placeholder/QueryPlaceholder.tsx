import React from 'react';
import { placeholders } from '@shared/ui/query-placeholder/constants.ts';
import Button from '@shared/ui/button/Button.tsx';
import type { QueryPlaceholderProps } from '@shared/ui/query-placeholder/types.ts';

const QueryPlaceholder: React.FC<QueryPlaceholderProps> = ({ type, onClick }) => {
  const IconStub = placeholders[type]?.Icon;
  const text = placeholders[type]?.text;
  const buttonText = type !== 'emptyData' && placeholders[type]?.buttonText;

  return (
    <div className="flex flex-col items-center gap-6">
      <IconStub className="h-40 w-40" />
      <p className="text-center text-[20px] font-bold">{text}</p>
      {buttonText && <Button className="text-[18px]" onClick={onClick} variant="dark" text={buttonText} />}
    </div>
  );
};

export default QueryPlaceholder;
