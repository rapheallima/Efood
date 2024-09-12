import {
  Overlay,
  CartContainer, // Reutilize este estilo ou crie um novo, se preferir
  Sidebar,
  ButtonContainer,
  Row,
} from './styles'; // Reutilize ou crie novos estilos conforme necessário

import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { close } from '../../store/reducers/delivery';
import { open as openCart } from '../../store/reducers/cart';
import { open as openPayment } from '../../store/reducers/payment';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Delivery = () => {
  const { isOpen } = useSelector((state: RootReducer) => state.delivery);
  const dispatch = useDispatch();

  const closeDelivery = () => {
    dispatch(close());
  };

  const goToPayment = () => {
    dispatch(openPayment());
  };

  const goToCart = () => {
    dispatch(close());
    dispatch(openCart());
  };

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      address: Yup.string()
        .min(5, 'O endereço precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      city: Yup.string()
        .min(5, 'O nome da cidade precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cep: Yup.string()
        .min(8, 'O CEP precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.number()
        .min(1, 'O número precisa ter pelo menos 1 caracteres')
        .required('O campo é obrigatório'),
      complement: Yup.string().min(
        5,
        'O complemento precisa ter pelo menos 5 caracteres',
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const getErrorMessage = (fieldName: string, message?: string) => {
    const touch = fieldName in form.touched;
    const invalid = fieldName in form.errors;

    if (touch && invalid) return message;
    return '';
  };

  return (
    <form onSubmit={form.handleSubmit}>
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeDelivery} />
        <Sidebar>
          <h2>Entrega</h2>
          <Row>
            <div>
              <label htmlFor="fullName">Quem irá receber</label>
              <input
                className="input"
                id="fullName"
                type="text"
                name="fullName"
                value={form.values.fullName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('fullName', form.errors.fullName)}</small>
            </div>
          </Row>
          <Row>
            <div>
              <label htmlFor="address">Endereço</label>
              <input
                className="input"
                id="address"
                type="text"
                name="address"
                value={form.values.address}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('address', form.errors.address)}</small>
            </div>
          </Row>
          <Row>
            <div>
              <label htmlFor="city">Cidade</label>
              <input
                className="input"
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('city', form.errors.city)}</small>
            </div>
          </Row>
          <Row>
            <div className="space">
              <label htmlFor="cep">CEP</label>
              <input
                className="CepNum"
                id="cep"
                type="text"
                name="cep"
                value={form.values.cep}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMessage('cep', form.errors.cep)}</small>
            </div>
            <div>
              <label htmlFor="number">Número</label>
              <input
                className="CepNum"
                id="number"
                type="number"
                name="number"
                value={form.values.number}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                inputMode="numeric"
              />
              <small>{getErrorMessage('number', form.errors.number)}</small>
            </div>
          </Row>
          <Row>
            <div className="complement">
              <label htmlFor="complement">Complemento (Opcional)</label>
              <input
                className="input"
                id="complement"
                type="text"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>
                {getErrorMessage('complement', form.errors.complement)}
              </small>
            </div>
          </Row>
          {/* Inputs e labels */}
          <ButtonContainer
            size="big"
            title="Continuar com o pagamento"
            type="submit"
            onClick={() => {
              closeDelivery();
              goToPayment();
            }}
            disabled={!form.isValid || !form.touched}
          >
            Continuar com o pagamento
          </ButtonContainer>
          <ButtonContainer
            size="big"
            title="Voltar ao carrinho"
            type="button"
            onClick={goToCart}
          >
            Voltar para o carrinho
          </ButtonContainer>
        </Sidebar>
      </CartContainer>
    </form>
  );
};

export default Delivery;
