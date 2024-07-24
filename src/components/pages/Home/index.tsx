import Prato from '../../../models/Pratos';
import { Lista } from '../../../styles';
import FoodsList from '../../FoodsList';

import sushi from '../../../assets/images/sushi.png';
import trattoria from '../../../assets/images/trattoria.png';

const home: Prato[] = [
  {
    id: 1,
    tags: ['Destaque da semana', 'Japonesa'],
    image: sushi,
    nota: '4.9',
    name: 'Hioki Sushi',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    btn: 'Saiba mais',
  },
  {
    id: 2,
    tags: ['Italiana'],
    image: trattoria,
    nota: '4.6',
    name: 'La Dolce Vita Trattoria',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    btn: 'Saiba mais',
  },
];

const Home = () => (
  <>
    <Lista>
      <FoodsList pratos={home} background="white" />
      <FoodsList pratos={home} background="white" />
      <FoodsList pratos={home} background="white" />
    </Lista>
  </>
);

export default Home;
