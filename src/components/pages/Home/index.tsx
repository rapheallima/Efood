import { Lista } from '../../../styles';
import FoodsList from '../../FoodsList';

import { useEffect, useState } from 'react';

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
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res));
  }, []);

  return (
    <>
      <Lista>
        <FoodsList background="white" pratos={restaurantes} />
      </Lista>
    </>
  );
};

export default Home;
