import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Restaurante } from '../components/pages/Home';

type Product = {
  id: number;
  price: number;
};

type PurchasePayload = {
  products: Product[];
  delivery: {
    receiver: string;
    address: {
      description: string;
      city: string;
      zipCode: string;
      number: number;
      complement: string;
    };
  };
  payment: {
    card: {
      name: string;
      number: string;
      code: number;
      expires: {
        month: number;
        year: number;
      };
    };
  };
};

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood',
  }),
  endpoints: (builder) => ({
    getHome: builder.query<Restaurante[], void>({
      query: () => 'restaurantes',
    }),
    getPratos: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetHomeQuery, useGetPratosQuery, usePurchaseMutation } = api;

export default api;
