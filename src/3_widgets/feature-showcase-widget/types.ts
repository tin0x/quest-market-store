export type FeatureShowcaseWidgetProps = {
  storyline:
    | {
        text: string;
      }[]
    | [];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};
