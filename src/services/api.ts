import { Restaurante } from '../components/pages/Home';
import { restaurantes } from '../mocks/restauramtes';

export const useGetHomeQuery = () => ({
  data: restaurantes as unknown as Restaurante[],
  isLoading: false,
  error: null,
});

export const useGetPratosQuery = (id: string) => {
  const restaurante = restaurantes.find((r) => String(r.id) === id);

  return {
    data: restaurante as unknown as Restaurante,
    isLoading: false,
    error: null,
  };
};

export const usePurchaseMutation = () => {
  return [
    async () => {
      return { data: { orderId: 1 } };
    },
    { isLoading: false, isSuccess: true, error: null },
  ] as const;
};

const api = {};
export default api;
