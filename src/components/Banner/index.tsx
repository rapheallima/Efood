import { ContainerPerfil, Image, SubTitle, Title } from './styles';

import banner from '../../assets/images/banner.png';

const Banner = () => (
  <Image style={{ backgroundImage: `url(${banner})` }}>
    <ContainerPerfil>
      <SubTitle>Italiana</SubTitle>
      <Title>La Dolce Vita Trattori</Title>
    </ContainerPerfil>
  </Image>
);

export default Banner;
