import React from 'react';
import Input from '@shared/ui/input/Input.tsx';
import SearchIcon from '@shared/assets/icons/search.svg?react';
import { useSearchByName } from '@features/search-by-name/model/useSearchByName.ts';
import Dropdown from '@shared/ui/dropdown/Dropdown.tsx';
import { cn } from '@shared/lib/utils/cn.ts';
import Loader from '@shared/ui/loader/Loader.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { Link } from 'react-router-dom';
import type { SearchByNameProps } from '@features/search-by-name/types.ts';

const SearchByName: React.FC<SearchByNameProps> = ({ className }) => {
  const { searchResult, isLoading, isError, isEmpty, isOpen, name, handleChangeInput, handleClear } = useSearchByName();

  const renderContent = () => {
    if (isLoading) return <Loader className="relative top-0 left-0 mx-auto translate-0" />;
    if (isEmpty) return <QueryPlaceholder type="emptyData" />;
    if (isError) return <QueryPlaceholder type="error" />;

    return (
      <ul className="flex flex-col">
        {searchResult.map((item) => (
          <li key={item.id}>
            <Link
              className="block overflow-hidden px-2 py-5 text-[18px] font-bold text-ellipsis hover:bg-white hover:text-black"
              onClick={() => handleClear()}
              to={`/game/${item.gameId}`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className={cn('relative', className)}>
      <Input
        className="py-5 pr-6 pl-14"
        Icon={SearchIcon}
        value={name}
        placeholder="Search store"
        onChange={handleChangeInput}
      />
      <Dropdown
        className={cn('top-100% left-0 flex max-w-full flex-col justify-center overflow-hidden')}
        isOpen={isOpen}
      >
        {renderContent()}
      </Dropdown>
    </div>
  );
};

export default SearchByName;
