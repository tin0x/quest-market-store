import React, { useState } from 'react';
import { useDebounce } from '@shared/hooks/api/useDebounce.ts';

export const useSearchByName = () => {
  const [name, setName] = useState('');
  const debouncedValue = useDebounce(name, 600);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.replace(/\s+/g, ' ').trimStart();
    setName(value);
  };

  return { name, handleChangeInput };
};
