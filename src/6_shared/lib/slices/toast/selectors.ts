import type { RootState } from '@app/store/store.ts';

export const getToastState = (state: RootState) => state.toast;
