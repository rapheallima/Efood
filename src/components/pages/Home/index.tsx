import { Lista } from '../../../styles';
import FoodsList from '../../FoodsList';
import { useGetHomeQuery } from '../../../services/api';

export type CardapioItem = {
  foto: string;
  preco: number;
  id: string;
  nome: string;
  descricao: string;
  porcao: string;
};

export type Restaurante = {
  id: string;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: string;
  descricao: string;
  capa: string;
  cardapio: CardapioItem[];
};

const Home = () => {
  const { data: onHome } = useGetHomeQuery();

  if (onHome) {
    return (
      <>
        <Lista>
          <FoodsList background="white" pratos={onHome || []} />
        </Lista>
      </>
    );
  }

  return <h4>Carregando...</h4>;
};

export default Home;
