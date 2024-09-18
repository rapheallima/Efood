import { Car, FundoHero, Header, StyledLink } from './styles';
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
          <div>
            <StyledLink to="/">Restaurantes</StyledLink>
          </div>
          <div>
            <img src={logo} alt="efood" />
          </div>
          <div>
            <Car onClick={openCart}>
              {items.length}- produto(s)<span> no carrinho</span>
            </Car>
          </div>
        </FundoHero>
      </Header>
    </>
  );
};

export default Hero;
