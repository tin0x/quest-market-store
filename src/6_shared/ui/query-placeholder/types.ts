import React, { type SVGProps } from 'react';

export type PlaceholderKeys = 'error' | 'invalidPath' | 'emptyData';
export type PlaceholderValues = {
  Icon: React.FC<SVGProps<SVGSVGElement>>;
  text: string;
  buttonText?: string;
};

export type QueryPlaceholderProps = {
  type: PlaceholderKeys;
  onClick?: () => void;
};