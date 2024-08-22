import Foods from '../Foods';
import { Container, List } from './styles';
import { Restaurante } from '../pages/Home';

export type Props = {
  pratos: Restaurante[];
  background: 'white' | 'orange';
};

const FoodsList = ({ pratos, background }: Props) => {
  return (
    <Container $background={background}>
      <List $background={background}>
        {pratos.map((prato) => (
          <Foods
            key={prato.id}
            image={prato.capa}
            name={prato.titulo}
            description={prato.descricao}
            id={prato.id}
            btnType="link"
            background={background}
            tags={[prato.destacado]}
            tipo={prato.tipo}
            nota={prato.avaliacao}
            btnText={'Saiba mais'}
          />
        ))}
      </List>
    </Container>
  );
};

export default FoodsList;
