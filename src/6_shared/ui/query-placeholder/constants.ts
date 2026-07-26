import EmptyDataIcon from '@shared/assets/icons/empty-data-stub.svg?react';
import ErrorIcon from '@shared/assets/icons/error-stub.svg?react';
import InvalidPathIcon from '@shared/assets/icons/invalid-path-stub.svg?react';
import ErrorBoundaryIcon from '@shared/assets/icons/gamepad.svg?react';
import type { PlaceholderKeys, PlaceholderValues } from '@shared/ui/query-placeholder/types.ts';

export const placeholders: Record<PlaceholderKeys, PlaceholderValues> = {
  error: {
    Icon: ErrorIcon,
    text: 'Failed to retrieve data. Please try again!',
    buttonText: 'Retry',
  },
  errorBoundary: {
    Icon: ErrorBoundaryIcon,
    text: "Oops, an unexpected error occurred. We're already working on it!",
    buttonText: 'Go to the homepage',
  },
  invalidPath: {
    Icon: InvalidPathIcon,
    text: 'This path does not exist! Check the URL or go to the homepage.',
    buttonText: 'Go to the homepage',
  },
  emptyData: {
    Icon: EmptyDataIcon,
    text: 'Data not available!',
  },
};
