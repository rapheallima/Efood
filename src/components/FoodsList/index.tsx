import Foods from '../Foods';
import { Container, List } from './styles';

import Prato from '../../models/Pratos';

export type Props = {
  pratos: Prato[];
  background: 'white' | 'orange';
};

const FoodsList = ({ pratos, background }: Props) => (
  <Container background={background}>
    <List background={background}>
      {pratos.map((prato) => (
        <Foods
          key={prato.id}
          tags={prato.tags}
          image={prato.image}
          nota={prato.nota}
          name={prato.name}
          description={prato.description}
          btnText={prato.btn}
          btnType="link"
          background={background}
        />
      ))}
    </List>
  </Container>
);

export default FoodsList;
