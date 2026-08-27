import React from 'react';
import { cn } from '@shared/lib/utils/cn.ts';
import type { RadioButtonProps } from '@shared/ui/radio-button/types.ts';
import CheckmarkIcon from '@shared/assets/icons/checkmark.svg?react';

const RadioButton: React.FC<RadioButtonProps> = ({ name, group, value, currentParam, filterType, onChange }) => {
  return (
    <div>
      <input
        className="peer sr-only"
        onChange={() => onChange(group, value, filterType)}
        type="radio"
        name={group}
        id={`${group}-${value}`}
        value={value}
        checked={currentParam === value}
      />
      <label
        className={cn(
          'bg-card-secondary text-text-secondary flex cursor-pointer items-center justify-between rounded-md p-4 transition-colors ease-in-out peer-checked:bg-white peer-checked:font-bold peer-checked:text-black peer-focus:bg-white peer-focus:font-bold peer-focus:text-black hover:bg-white hover:font-bold hover:text-black',
        )}
        htmlFor={`${group}-${value}`}
      >
        {name}
        <CheckmarkIcon
          className={cn('h-5 w-5 text-black opacity-0', { 'opacity-100': currentParam?.includes(value.toString()) })}
        />
      </label>
    </div>
  );
};

export default RadioButton;
