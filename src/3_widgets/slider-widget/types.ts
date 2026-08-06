export type OrderingType = 'topRated' | 'popular' | 'mostReviewed' | 'newest' | 'anticipated' | 'trending' | 'classics';

export type SliderWidgetProps = {
  ordering: OrderingType;
  subtitle: string;
};
