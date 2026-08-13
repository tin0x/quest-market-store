import React from 'react';

export type ImageProps = {
  className?: string;
  type: 'game' | 'article';
  source?: string;
  alt: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;
