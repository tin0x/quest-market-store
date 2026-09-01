export type GameMetaDataWidgetProps = {
  gameMetadata: {
    subtitle: string;
    value: string;
  }[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};
