import { useEffect, useState } from 'react';
import { Lista } from '../../../styles';

import { Restaurante } from '../Home';
import { useParams } from 'react-router-dom';
import Cardapio from '../../Cardapio';
import Banner from '../../Banner';

const Perfil = () => {
  const { id } = useParams();

  const [restaurante, setRestaurante] = useState<Restaurante | null>(null);

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
      .catch((error) => {
        console.error('Erro ao buscar o restaurante:', error);
      });
  }, [id]);

  if (!restaurante) {
    return <h3>Carregando...</h3>;
  }

  return (
    <>
      <Lista>
        <Banner prato={restaurante} />
        <Cardapio background="orange" pratos={restaurante.cardapio} />
      </Lista>
    </>
  );
};

export default Perfil;
