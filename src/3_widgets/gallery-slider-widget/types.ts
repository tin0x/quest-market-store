export type GallerySliderWidgetProps = {
  cover?: string;
  videoId: string | null;
  screenshots: string[];
  isLoading: boolean;
  isError: boolean;
  refetch: () => void;
};
