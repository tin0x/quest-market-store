import React from 'react';

export type SlideProps = {
  className?: string;
  children: React.ReactNode;
  onSelectSlide: (slideIndex: number) => void;
};
