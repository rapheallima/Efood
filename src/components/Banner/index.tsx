import { Image, SubTitle, Title } from './styles';

import banner from '../../assets/images/banner.png';

const Banner = () => (
  <Image style={{ backgroundImage: `url(${banner})` }}>
    <SubTitle>Italiana</SubTitle>
    <Title>La Dolce Vita Trattori</Title>
  </Image>
);

export default Banner;
