import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Restaurante } from '../components/pages/Home';

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
  }),
});

export const { useGetHomeQuery, useGetPratosQuery } = api;

export default api;
