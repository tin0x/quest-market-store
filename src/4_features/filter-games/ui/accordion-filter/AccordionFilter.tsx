import React from 'react';
import Accordion from '@shared/ui/accordion/Accordion.tsx';
import CheckboxButton from '@shared/ui/checkbox-button/CheckboxButton.tsx';
import RadioButton from '@shared/ui/radio-button/RadioButton.tsx';
import type { AccordionFilterProps } from '@features/filter-games/types.ts';

const AccordionFilter: React.FC<AccordionFilterProps> = ({
  title,
  filterType,
  group,
  filterFields,
  selectedValues,
  onChange,
}) => {
  const topSlot = <span>{title}</span>;
  const innerSlot = (
    <ul className="flex flex-col gap-4">
      {filterFields.map((filter) =>
        filterType === 'checkbox' ? (
          <CheckboxButton
            value={filter.value}
            name={filter.name}
            group={group}
            filterType={filterType}
            selectedValues={selectedValues}
            onChange={onChange}
          />
        ) : (
          <RadioButton
            value={filter.value}
            name={filter.name}
            group={group}
            filterType={filterType}
            currentParam={selectedValues[0]}
            onChange={onChange}
          />
        ),
      )}
    </ul>
  );

  return (
    <Accordion className="bg-primary text-text-secondary px-2 py-6 text-xl" topSlot={topSlot} innerSlot={innerSlot} />
  );
};

export default AccordionFilter;
