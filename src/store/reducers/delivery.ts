import { createSlice } from '@reduxjs/toolkit';

type DeliveryState = {
  isOpen: boolean;
};

const initialState: DeliveryState = {
  isOpen: false,
};

const deliverySlice = createSlice({
  name: 'delivery',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = deliverySlice.actions;
export default deliverySlice.reducer;
