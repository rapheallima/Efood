import { Lista } from '../../../styles';
import { useGetPratosQuery } from '../../../services/api';
import Cardapio from '../../Cardapio';
import Banner from '../../Banner';
import { useParams } from 'react-router-dom';

const Perfil = () => {
  const { id } = useParams<{ id: string }>();
  const { data: restaurantes } = useGetPratosQuery(id || '');

  if (restaurantes) {
    return (
      <>
        <Lista>
          <Banner prato={restaurantes} />
          <Cardapio background="orange" pratos={restaurantes.cardapio} />
        </Lista>
      </>
    );
  }

  return <h4>Carregando...</h4>;
};

export default Perfil;
