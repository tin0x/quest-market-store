import React from 'react';
import type { MetricCardProps } from '@shared/ui/metric-card/types.ts';

const MetricCard: React.FC<MetricCardProps> = ({ subtitle, value }) => {
  return (
    <div className="bg-card flex h-full flex-col justify-center gap-5 rounded-md px-2.5 py-12 text-center font-bold">
      <span className="text-[40px] text-[#66E0FF] lg:text-[50px]">{value}</span>
      <span className="text-text-secondary text-xl">{subtitle}</span>
    </div>
  );
};

export default MetricCard;
