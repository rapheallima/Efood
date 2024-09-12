import {
  Overlay,
  CartContainer, // Reutilize este estilo ou crie um novo, se preferir
  Sidebar,
  ButtonContainer,
  Row,
} from './styles'; // Reutilize ou crie novos estilos conforme necessário

import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { close } from '../../store/reducers/payment';
import { open as openDelivery } from '../../store/reducers/delivery';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Payment = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const { items } = useSelector((state: RootReducer) => state.cart);

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco);
    }, 0);
  };

  const { isOpen } = useSelector((state: RootReducer) => state.payment);
  const dispatch = useDispatch();

  const closePayment = () => {
    dispatch(close());
  };

  const goToDelivery = () => {
    dispatch(close());
    dispatch(openDelivery());
  };

  const form = useFormik({
    initialValues: {
      nameCard: '',
      numberCard: '',
      validate: '',
      expiresMonth: '',
      expiresYear: '',
    },
    validationSchema: Yup.object({
      nameCard: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      numberCard: Yup.string()
        .min(16, 'O cartão precisa ter pelo menos 16 caracteres')
        .required('O campo é obrigatório'),
      validate: Yup.string()
        .min(3, 'O CVV precisa ter pelo menos 3 caracteres')
        .required('O campo é obrigatório'),
      expiresMonth: Yup.string()
        .min(8, 'O CEP precisa ter pelo menos 8 caracteres')
        .required('O campo é obrigatório'),
      expiresYear: Yup.string()
        .min(8, 'O número precisa ter pelo menos 1 caracteres')
        .required('O campo é obrigatório'),
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
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closePayment} />
      <Sidebar>
        {/* Aqui você vai adicionar os inputs e labels para o formulário de entrega */}
        <h2>Pagamento - Valor a pagar {formatPrice(getTotalPrice())}</h2>
        <Row>
          <div>
            <label htmlFor="nameCard">Nome no cartão</label>
            <input
              className="NameCard"
              id="nameCard"
              type="text"
              name="nameCard"
              value={form.values.nameCard}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('nameCard', form.errors.nameCard)}</small>
          </div>
        </Row>
        <Row>
          <div className="spaceCard">
            <label htmlFor="numberCard">Número do cartão</label>
            <input
              className="NumCard"
              id="numberCard"
              type="text"
              name="numberCard"
              value={form.values.numberCard}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('numberCard', form.errors.numberCard)}
            </small>
          </div>
          <div>
            <label htmlFor="validate">CVV</label>
            <input
              className="CVV"
              id="validate"
              type="text"
              name="validate"
              value={form.values.validate}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>{getErrorMessage('validate', form.errors.validate)}</small>
          </div>
        </Row>
        <Row>
          <div className="space">
            <label htmlFor="expiresMonth">Mês de vencimento</label>
            <input
              className="Month"
              id="expiresMonth"
              type="text"
              name="expiresMonth"
              value={form.values.expiresMonth}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
            </small>
          </div>
          <div className="Validate">
            <label htmlFor="expiresYear">Ano de vencimento</label>
            <input
              className="Year"
              id="expiresYear"
              type="text"
              name="expiresYear"
              value={form.values.expiresYear}
              onChange={form.handleChange}
              onBlur={form.handleBlur}
            />
            <small>
              {getErrorMessage('expiresYear', form.errors.expiresYear)}
            </small>
          </div>
        </Row>
        <Row>
          <ButtonContainer
            size="big"
            title="Continuar com o pagamento"
            type="submit"
          >
            Finalizar pagamento
          </ButtonContainer>
        </Row>
        <Row>
          <ButtonContainer
            size="big"
            title="Voltar ao carrinho"
            type="button"
            onClick={goToDelivery}
          >
            Voltar para a edição de endereço
          </ButtonContainer>
        </Row>
      </Sidebar>
    </CartContainer>
  );
};

export default Payment;
