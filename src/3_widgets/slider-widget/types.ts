export type OrderingGames = '-released' | '-rating' | '-metacritic';

export type SliderWidgetProps = {
  ordering: OrderingGames;
  subtitle: string;
};
