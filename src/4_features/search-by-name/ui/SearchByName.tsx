import React from 'react';
import Input from '@shared/ui/input/Input.tsx';
import SearchIcon from '@shared/assets/icons/search.svg?react';
import { useSearchByName } from '@features/search-by-name/model/useSearchByName.ts';

const SearchByName: React.FC = () => {
  const { name, handleChangeInput } = useSearchByName();
  return <Input Icon={SearchIcon} value={name} onChange={handleChangeInput} />;
};

export default SearchByName;
