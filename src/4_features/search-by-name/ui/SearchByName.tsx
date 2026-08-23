import React from 'react';
import Input from '@shared/ui/input/Input.tsx';
import SearchIcon from '@shared/assets/icons/search.svg?react';
import { useSearchByName } from '@features/search-by-name/model/useSearchByName.ts';
import Dropdown from '@shared/ui/dropdown/Dropdown.tsx';
import { cn } from '@shared/lib/utils/cn.ts';
import Loader from '@shared/ui/loader/Loader.tsx';
import QueryPlaceholder from '@shared/ui/query-placeholder/QueryPlaceholder.tsx';
import { Link } from 'react-router-dom';

const SearchByName: React.FC = () => {
  const { searchResult, isLoading, isError, isEmpty, isOpen, name, handleChangeInput, handleClear } = useSearchByName();

  const renderContent = () => {
    if (isLoading) return <Loader />;
    if (isEmpty) return <QueryPlaceholder type="emptyData" />;
    if (isError) return <QueryPlaceholder type="error" />;

    return (
      <ul className="flex flex-col">
        {searchResult.map((item) => (
          <li key={item.id}>
            <Link
              className="block overflow-hidden px-2 py-5 text-xl font-bold text-ellipsis hover:bg-white hover:text-black"
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
    <div>
      <Input
        clearOnEscape
        className="text-[18px]"
        Icon={SearchIcon}
        value={name}
        placeholder="Search store"
        onChange={handleChangeInput}
      />
      <Dropdown
        className={cn('top-100% left-0 flex min-h-105.5 max-w-full flex-col justify-center overflow-hidden p-10')}
        isOpen={isOpen}
      >
        {renderContent()}
      </Dropdown>
    </div>
  );
};

export default SearchByName;
