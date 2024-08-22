import { ContainerPerfil, Image, SubTitle, Title } from './styles';
import { Restaurante } from '../pages/Home';

import banner from '../../assets/images/banner.png';

export type Props = {
  prato: Restaurante;
};

const Banner = ({ prato }: Props) => (
  <Image style={{ backgroundImage: `url(${banner})` }}>
    <ContainerPerfil>
      <SubTitle>{prato.tipo}</SubTitle>
      <Title>{prato.titulo}</Title>
    </ContainerPerfil>
  </Image>
);

export default Banner;
