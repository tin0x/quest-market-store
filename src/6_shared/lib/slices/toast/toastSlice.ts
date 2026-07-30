import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type ToastSliceType = {
  type: 'success' | 'failed';
  title: 'Failed' | 'Success';
  message?: string;
  isActive: boolean;
};

export type ToastSliceArgs = Omit<ToastSliceType, 'isActive'>;

const initialState: ToastSliceType = {
  type: 'success',
  title: 'Success',
  isActive: false,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<ToastSliceArgs>) => {
      const { type, title, message } = action.payload;
      state.title = title;
      state.message = message;
      state.type = type;
      state.isActive = true;
    },
    hideToast: (state) => {
      state.isActive = false;
    },
  },
});

export default toastSlice.reducer;
export const { showToast, hideToast } = toastSlice.actions;
