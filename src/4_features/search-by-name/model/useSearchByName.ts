import React, { useState } from 'react';
import { useDebounce } from '@shared/hooks/api/useDebounce.ts';
import { useSearchGameByNameQuery } from '@features/search-by-name/api/gameApi.ts';
import { skipToken } from '@reduxjs/toolkit/query';

export const useSearchByName = () => {
  const [name, setName] = useState('');
  const debouncedValue = useDebounce(name, 600);

  const trimmedName = name.trim();
  const isOpen = trimmedName.length >= 3;
  const isTyping = trimmedName !== debouncedValue.trim();
  const queryArg = isOpen && !isTyping ? { str: debouncedValue } : skipToken;

  const { data: searchResult, isLoading, isFetching, isError } = useSearchGameByNameQuery(queryArg);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.replace(/\s+/g, ' ').trimStart();
    setName(value);
  };

  const handleClear = () => {
    setName('');
  };

  const showLoader = isTyping || isLoading || isFetching;

  return {
    searchResult: searchResult || [],
    isEmpty: !showLoader && searchResult?.length === 0,
    isLoading: showLoader,
    isError,
    isOpen,
    name,
    handleClear,
    handleChangeInput,
  };
};
