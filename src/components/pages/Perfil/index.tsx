import Prato from '../../../models/Pratos';
import { Lista } from '../../../styles';
import FoodsList from '../../FoodsList';

import pizza from '../../../assets/images/pizza.png';

const perfil: Prato[] = [
  {
    id: 1,
    tags: [],
    image: pizza,
    nota: '',
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    btn: 'Adicionar ao carrinho',
  },
  {
    id: 2,
    tags: [],
    image: pizza,
    nota: '',
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    btn: 'Adicionar ao carrinho',
  },
  {
    id: 3,
    tags: [],
    image: pizza,
    nota: '',
    name: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    btn: 'Adicionar ao carrinho',
  },
];

const Perfil = () => (
  <>
    <Lista>
      <FoodsList pratos={perfil} background="orange" />
      <FoodsList pratos={perfil} background="orange" />
    </Lista>
  </>
);

export default Perfil;
