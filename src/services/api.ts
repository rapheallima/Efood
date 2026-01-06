import { Restaurante } from '../components/pages/Home';
import { restaurantes } from '../mocks/restauramtes';

export const useGetHomeQuery = () => ({
  data: restaurantes as unknown as Restaurante[],
  isLoading: false,
  error: null,
});
