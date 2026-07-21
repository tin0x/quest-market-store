import React from 'react';

export type ImageProps = {
  className?: string;
  type: 'game' | 'article';
  source: string | null;
  alt: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;
