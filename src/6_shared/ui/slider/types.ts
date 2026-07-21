import React from 'react';
import type { EmblaOptionsType } from 'embla-carousel';
import type { AutoplayType } from 'embla-carousel-autoplay';

export type SlideProps = {
  className?: string;
  children: React.ReactNode;
  onSelectSlide?: (slideIndex: number) => void;
  options?: EmblaOptionsType;
  plugins?: AutoplayType[];
};
