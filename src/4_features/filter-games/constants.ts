import type { FiltersTemplateType } from '@features/filter-games/types.ts';

export const filtersTemplate: FiltersTemplateType = [
  {
    title: 'Sort by',
    param: 'sort',
    type: 'radio',
    fields: [
      { name: 'Highest Rating', value: 'rating desc' },
      { name: 'Newest', value: 'first_release_date desc' },
      { name: 'Most Hyped', value: 'hypes desc' },
    ],
  },
  {
    title: 'Genres',
    param: 'genres',
    type: 'checkbox',
    fields: [
      { name: 'Shooter', value: 5 },
      { name: 'RPG', value: 12 },
      { name: 'Fighting', value: 4 },
      { name: 'Racing', value: 10 },
      { name: 'RTS', value: 11 },
      { name: 'Simulator', value: 13 },
      { name: 'Platform', value: 8 },
      { name: 'Puzzle', value: 9 },
    ],
  },
  {
    title: 'Platforms',
    param: 'platforms',
    type: 'checkbox',
    fields: [
      { name: 'PC (Microsoft Windows)', value: 6 },
      { name: 'PlayStation 5', value: 167 },
      { name: 'Xbox Series X|S', value: 169 },
      { name: 'Nintendo Switch 2', value: 508 },
    ],
  },
];
