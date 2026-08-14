import React, { type SVGProps } from 'react';

export type PlaceholderKeys = 'error' | 'errorBoundary' | 'invalidPath' | 'emptyData';
export type PlaceholderValues = {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
  buttonText?: string;
};

export type QueryPlaceholderProps = {
  customMessage?: string;
  type: PlaceholderKeys;
  onClick?: () => void;
};
