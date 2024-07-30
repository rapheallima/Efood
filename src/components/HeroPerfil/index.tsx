import { FundoHero, Header, StyledLink } from './styles';
import logo from '../../assets/images/logo.png';

type Props = {
  background: 'white' | 'orange';
};

const Hero = ({ background }: Props) => {
  return (
    <>
      <Header background={background}>
        <FundoHero background={background}>
          <StyledLink to="/">Restaurantes</StyledLink>
          <img src={logo} alt="efood" />
          <p>0 - produto(s) no carrinho</p>
        </FundoHero>
      </Header>
    </>
  );
};

export default Hero;
