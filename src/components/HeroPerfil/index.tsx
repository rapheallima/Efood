import { Car, FundoHero, Header, StyledLink, Hamburguer } from './styles';
import logo from '../../assets/images/logo.png';
import cart from '../../assets/images/carrinho.svg';

import { open } from '../../store/reducers/cart';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';

type Props = {
  background: 'white' | 'orange';
};

const Hero = ({ background }: Props) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);

  const openCart = () => {
    dispatch(open());
  };

  return (
    <>
      <Header $background={background}>
        <FundoHero $background={background}>
          <Hamburguer>
            <span />
            <span />
            <span />
          </Hamburguer>
          <StyledLink to="/">Restaurantes</StyledLink>
          <img src={logo} alt="efood" />
          <Car onClick={openCart}>
            {items.length}- produto(s)<span> no carrinho</span>
          </Car>
        </FundoHero>
      </Header>
    </>
  );
};

export default Hero;
