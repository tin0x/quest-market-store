import React from 'react';
import { cn } from '@shared/lib/utils/cn.ts';
import CheckmarkIcon from '@shared/assets/icons/checkmark.svg?react';
import Input from '@shared/ui/input/Input.tsx';
import type { CheckboxProps } from '@shared/ui/checkbox/types.ts';

const Checkbox: React.FC<CheckboxProps> = ({ text }) => {
  return (
    <label className="group cursor-pointer">
      <Input className="sr-only" id="license" type="checkbox" />
      <div className="flex items-center gap-3">
        <span
          className={cn(
            'group-has-checked:bg-input-secondary block h-8 w-8 rounded-sm border group-has-focus:outline-2 peer-focus-visible:ring-2',
          )}
        >
          <CheckmarkIcon className="hidden h-full w-full p-2 group-has-checked:block" />
        </span>
        {text && <span className="font-semibold text-[18]">I agree with the Terms and Privacy policy</span>}
      </div>
    </label>
  );
};

export default Checkbox;
