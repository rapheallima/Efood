import { configureStore } from '@reduxjs/toolkit';

import api from '../services/api';

import cart from './reducers/cart';
import delivery from './reducers/delivery';
import payment from './reducers/payment';

export const store = configureStore({
  reducer: {
    cart: cart,
    delivery: delivery,
    payment: payment,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootReducer = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
