import {
  FundoHero,
  LinkCart,
  LinkItem,
  Links,
  LogoImg,
  TextHero,
} from './styles';
import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/cart.svg';
import { Link } from 'react-router-dom';

type Props = {
  background: 'white' | 'orange';
};

const Hero = ({ background }: Props) => {
  const isHome = background === 'white';
  const isPerfil = background === 'orange';

  return (
    <>
      <FundoHero background={background}>
        {isHome && (
          <TextHero>
            Viva experiências gastronômicas no conforto da sua casa
          </TextHero>
        )}
        <LogoImg src={logo} alt="efood" />
        {isPerfil && (
          <>
            <nav>
              <Links>
                <LinkItem>
                  <Link to="/">Restaurantes</Link>
                </LinkItem>
              </Links>
            </nav>
            <LinkCart href="">
              0 - produto(s)
              <img src={cart} alt="cart" />
            </LinkCart>
          </>
        )}
      </FundoHero>
    </>
  );
};

export default Hero;
