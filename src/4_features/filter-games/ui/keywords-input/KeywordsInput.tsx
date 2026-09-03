import React from 'react';
import Input from '@shared/ui/input/Input.tsx';
import SearchIcon from '@shared/assets/icons/search.svg?react';
import type { KeywordsInputProps } from '@features/filter-games/types.ts';

const KeywordsInput: React.FC<KeywordsInputProps> = ({ value, onChange }) => {
  return (
    <Input
      className="rounded-sm py-4 pr-6 pl-14 text-[18px]"
      Icon={SearchIcon}
      value={value}
      placeholder="Keywords"
      onChange={onChange}
    />
  );
};

export default KeywordsInput;
