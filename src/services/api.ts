// src/services/api.ts (mock simplificado)
import { Restaurante } from '../components/pages/Home';
import { restaurantes } from '../mocks/restauramtes';

// Mock para a Home
export const useGetHomeQuery = () => ({
  data: restaurantes as unknown as Restaurante[],
  isLoading: false,
  error: null,
});

// Mock para detalhes de restaurante
export const useGetPratosQuery = (id: string) => ({
  data: restaurantes.find((r) => r.id.toString() === id) as
    | Restaurante
    | undefined,
  isLoading: false,
  error: null,
});

// Mock para simular um checkout
export const usePurchaseMutation = () => {
  // Retorna uma função async como se fosse RTK Query
  const purchase = async (_payload: any) => {
    // Retorna a mesma estrutura que você espera
    return { data: { orderId: Math.floor(Math.random() * 1000) } };
  };

  return [purchase]; // retorna em array para manter compatibilidade
};
