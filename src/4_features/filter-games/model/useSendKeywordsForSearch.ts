import React, { useEffect, useState } from 'react';
import { useDebounce } from '@shared/hooks/api/useDebounce.ts';
import { useSearchParams } from 'react-router-dom';

const useSendKeywordsForSearch = () => {
  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 800);
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams((prev) => {
      const params = new URLSearchParams(prev);

      if (debouncedValue.trim()) {
        params.set('search', debouncedValue.trimEnd());
      } else {
        params.delete('search');
      }

      return params;
    });
  }, [debouncedValue, setSearchParams]);

  const handleSendKeywordsForSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
      .replace(/[^a-z0-9-:\s]/gi, '')
      .replace(/\s+/g, ' ')
      .trimStart();
    setValue(value);
  };

  const handleClearInput = () => {
    setValue('');
  };

  return { value, handleSendKeywordsForSearch, handleClearInput };
};

export default useSendKeywordsForSearch;
