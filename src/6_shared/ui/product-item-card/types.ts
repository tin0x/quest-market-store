import React from 'react';

export type ProductItemCardProps = {
  item: {
    gameId: number;
    title: string;
    poster: string;
    price: number;
  };
  actionSlot?: React.ReactNode;
  showAmount?: boolean;
};
