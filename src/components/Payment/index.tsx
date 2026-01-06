import {
  Overlay,
  CartContainer,
  Sidebar,
  ButtonContainer,
  Row,
  OverlayConfirm,
} from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../store';
import { close } from '../../store/reducers/payment';
import { open as openDelivery } from '../../store/reducers/delivery';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePurchaseMutation } from '../../services/api';
import { useState } from 'react';

const Payment = () => {
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);

  const { items } = useSelector((state: RootReducer) => state.cart);
  const { isOpen } = useSelector((state: RootReducer) => state.payment);

  const dispatch = useDispatch();
  const [purchase] = usePurchaseMutation();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getTotalPrice = () => {
    return items.reduce((acc, item) => acc + item.preco, 0);
  };

  const closePayment = () => {
    setConfirmationOpen(false);
    dispatch(close());
  };

  const goToDelivery = () => {
    dispatch(close());
    setConfirmationOpen(false);
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
        .length(16, 'O cartão precisa ter exatamente 16 caracteres')
        .required('O campo é obrigatório'),

      validate: Yup.string()
        .length(3, 'O CVV precisa ter exatamente 3 caracteres')
        .required('O campo é obrigatório'),

      expiresMonth: Yup.number()
        .min(1, 'O mês deve ser entre 1 e 12')
        .max(12, 'O mês deve ser entre 1 e 12')
        .required('O campo é obrigatório'),

      expiresYear: Yup.number()
        .min(new Date().getFullYear(), 'O ano deve ser o atual ou posterior')
        .max(
          new Date().getFullYear() + 20,
          'O ano não pode ser mais de 20 anos à frente',
        )
        .required('O campo é obrigatório'),
    }),

    onSubmit: async () => {
      try {
        const response = await purchase();

        if (response?.data?.orderId) {
          setOrderId(response.data.orderId);
          setConfirmationOpen(true);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  const getErrorMessage = (fieldName: string, message?: string) => {
    const touched = fieldName in form.touched;
    const invalid = fieldName in form.errors;

    if (touched && invalid) return message;
    return '';
  };

  return (
    <>
      <form onSubmit={form.handleSubmit}>
        <CartContainer className={isOpen ? 'is-open' : ''}>
          <Overlay onClick={closePayment} />
          <Sidebar>
            <h2>Pagamento - Valor a pagar {formatPrice(getTotalPrice())}</h2>

            <Row>
              <div>
                <label htmlFor="nameCard">Nome no cartão</label>
                <input
                  id="nameCard"
                  name="nameCard"
                  type="text"
                  value={form.values.nameCard}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('nameCard', form.errors.nameCard)}
                </small>
              </div>
            </Row>

            <Row>
              <div>
                <label htmlFor="numberCard">Número do cartão</label>
                <input
                  id="numberCard"
                  name="numberCard"
                  type="text"
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
                  id="validate"
                  name="validate"
                  type="text"
                  value={form.values.validate}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('validate', form.errors.validate)}
                </small>
              </div>
            </Row>

            <Row>
              <div>
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <input
                  id="expiresMonth"
                  name="expiresMonth"
                  type="text"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage('expiresMonth', form.errors.expiresMonth)}
                </small>
              </div>

              <div>
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <input
                  id="expiresYear"
                  name="expiresYear"
                  type="text"
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
              <ButtonContainer size="big" type="submit">
                Finalizar pagamento
              </ButtonContainer>
            </Row>

            <Row>
              <ButtonContainer size="big" type="button" onClick={goToDelivery}>
                Voltar para a edição de endereço
              </ButtonContainer>
            </Row>
          </Sidebar>
        </CartContainer>
      </form>

      {isConfirmationOpen && (
        <CartContainer className="is-open">
          <OverlayConfirm onClick={closePayment} />
          <Sidebar>
            <h2>Pedido realizado - #{orderId}</h2>
            <p>
              Seu pedido foi realizado com sucesso e já está sendo preparado.
              <br />
              <br />
              Em breve ele será entregue no endereço informado.
              <br />
              <br />
              Obrigado por comprar conosco!
            </p>
            <ButtonContainer size="big" type="button" onClick={closePayment}>
              Concluir
            </ButtonContainer>
          </Sidebar>
        </CartContainer>
      )}
    </>
  );
};

export default Payment;
