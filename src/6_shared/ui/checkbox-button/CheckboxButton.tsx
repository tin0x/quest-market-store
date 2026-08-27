import React from 'react';
import type { CheckboxButtonProps } from '@shared/ui/checkbox-button/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';
import CheckmarkIcon from '@shared/assets/icons/checkmark.svg?react';

const CheckboxButton: React.FC<CheckboxButtonProps> = ({
  name,
  group,
  value,
  selectedValues,
  filterType,
  onChange,
}) => {
  return (
    <div>
      <input
        className="peer sr-only"
        type="checkbox"
        value={value}
        id={`${group}-${value}`}
        onChange={() => onChange(group, value, filterType)}
        checked={selectedValues.includes(value.toString())}
      />
      <label
        className={cn(
          'bg-card-secondary text-text-secondary flex cursor-pointer items-center justify-between rounded-md p-4 peer-checked:bg-white peer-checked:font-bold peer-checked:text-black hover:bg-white hover:font-bold hover:text-black',
        )}
        htmlFor={`${group}-${value}`}
      >
        {name}
        <CheckmarkIcon
          className={cn('h-5 w-5 text-black opacity-0', { 'opacity-100': selectedValues?.includes(value.toString()) })}
        />
      </label>
    </div>
  );
};

export default CheckboxButton;
