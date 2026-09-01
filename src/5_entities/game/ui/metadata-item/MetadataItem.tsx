import React from 'react';
import type { MetadataItemProps } from '@entities/game/types.ts';

const MetadataItem: React.FC<MetadataItemProps> = ({ subtitle, value }) => {
  return (
    <div className="flex items-center justify-between gap-10 py-6 text-xl">
      <span className="text-text-secondary">{subtitle}</span>
      <span className="text-right">{value}</span>
    </div>
  );
};

export default MetadataItem;
