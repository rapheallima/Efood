import { configureStore } from '@reduxjs/toolkit';

import cart from './reducers/cart';
import delivery from './reducers/delivery';
import payment from './reducers/payment';

export const store = configureStore({
  reducer: {
    cart: cart,
    delivery: delivery,
    payment: payment,
  },
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
