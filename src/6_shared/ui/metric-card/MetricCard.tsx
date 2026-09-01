import React from 'react';
import type { MetricCardProps } from '@shared/ui/metric-card/types.ts';

const MetricCard: React.FC<MetricCardProps> = ({ subtitle, value }) => {
  return (
    <div className="bg-card flex flex-col gap-5 rounded-md px-2.5 py-12 text-center font-bold">
      <span className="text-[50px] text-[#66E0FF]">{value}</span>
      <span className="text-text-secondary text-xl">{subtitle}</span>
    </div>
  );
};

export default MetricCard;
