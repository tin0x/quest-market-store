export type ToastProps = {
  type: 'success' | 'failed';
  title: string;
  message?: string;
  isActive: boolean;
};
