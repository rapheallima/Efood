import { FundoHero, Header, StyledLink } from './styles';
import logo from '../../assets/images/logo.png';

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
          <StyledLink to="/">Restaurantes</StyledLink>
          <img src={logo} alt="efood" />
          <a onClick={openCart}>{items.length} - produto(s) no carrinho</a>
        </FundoHero>
      </Header>
    </>
  );
};

export default Hero;
