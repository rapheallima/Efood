import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png';

import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  ButtonContainer,
  ContainerLi,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { close, remove } from '../../store/reducers/cart';
import { open as openDelivery } from '../../store/reducers/delivery';

const Cart = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const { isOpen, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco);
    }, 0);
  };

  const removePrato = (id: string) => {
    dispatch(remove(id));
  };

  const goToDelivery = () => {
    dispatch(openDelivery());
  };

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <ContainerLi key={item.id}>
              <img src={item.foto} alt="Pizza" />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
                <a onClick={() => removePrato(item.id)}>
                  <img className="lixeira" src={lixeira} alt="Lixeira" />
                </a>
              </div>
            </ContainerLi>
          ))}
        </ul>
        <Prices>
          Valor total <span>{formatPrice(getTotalPrice())}</span>
        </Prices>
        <ButtonContainer
          size="big"
          title="Clique aqui para continuar com a compra"
          type="button"
          onClick={goToDelivery}
        >
          Continuar com a entrega
        </ButtonContainer>
      </Sidebar>
    </CartContainer>
  );
};

export default Cart;
