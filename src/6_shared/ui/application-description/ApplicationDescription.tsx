import React from 'react';
import type { ApplicationDescriptionProps } from '@shared/ui/application-description/types.ts';
import { cn } from '@shared/lib/utils/cn.ts';

const ApplicationDescription: React.FC<ApplicationDescriptionProps> = ({ className, logoSlot, children }) => {
  return (
    <div className={cn('flex flex-col gap-10', className)}>
      {logoSlot}
      <p className="text-lg">{children}</p>
    </div>
  );
};

export default ApplicationDescription;
