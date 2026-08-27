import React from 'react';
import { AccordionFilter, KeywordsInput, useSendKeywordsForSearch } from '@features/filter-games';
import type { GameFilteringWidgetProps } from '@widgets/game-filtering-widget/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import { filtersTemplate } from '@features/filter-games/constants.ts';
import useManageParams from '@widgets/game-filtering-widget/model/useManageParams.ts';

const GameFilteringWidget: React.FC<GameFilteringWidgetProps> = ({ className }) => {
  const { value, handleSendKeywordsForSearch, handleClearInput } = useSendKeywordsForSearch();
  const { selectedValues, handleChangeFilter, handleResetFilter } = useManageParams(handleClearInput);

  return (
    <section className={cn('h-full', className)}>
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-between">
          <span className="text-[26px]">{`Filters (${selectedValues.length ?? 0})`}</span>
          <button className="text-text-link cursor-pointer text-[18px] font-bold" onClick={handleResetFilter}>
            reset
          </button>
        </div>
        <KeywordsInput value={value} onChange={handleSendKeywordsForSearch} />
        <ul>
          {filtersTemplate.map((filterWrapper) => (
            <li key={filterWrapper.title}>
              <AccordionFilter
                title={filterWrapper.title}
                filterType={filterWrapper.type}
                group={filterWrapper.param}
                filterFields={filterWrapper.fields}
                selectedValues={selectedValues}
                onChange={handleChangeFilter}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default GameFilteringWidget;
