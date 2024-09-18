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
  const [orderId, setOrderId] = useState(null);
  const { items } = useSelector((state: RootReducer) => state.cart);
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco);
    }, 0);
  };

  const { isOpen } = useSelector((state: RootReducer) => state.payment);
  const dispatch = useDispatch();
  const [purchase] = usePurchaseMutation();

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

    onSubmit: async (values) => {
      try {
        const response = await purchase({
          payment: {
            card: {
              name: values.nameCard,
              number: values.numberCard,
              code: Number(values.validate),
              expires: {
                month: Number(values.expiresMonth),
                year: Number(values.expiresYear),
              },
            },
          },
          delivery: {
            receiver: '',
            address: {
              description: '',
              city: '',
              zipCode: '',
              number: 0,
              complement: '',
            },
          },
          products: [
            {
              id: 1,
              price: 10,
            },
          ],
        }).unwrap();

        if (response.orderId) {
          setOrderId(response.orderId);
          setConfirmationOpen(true);
        }
      } catch (error) {
        console.error(error);
      }
    },
  });

  const getErrorMessage = (fieldName: string, message?: string) => {
    const touch = fieldName in form.touched;
    const invalid = fieldName in form.errors;

    if (touch && invalid) return message;
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
                  className="NameCard"
                  id="nameCard"
                  type="text"
                  name="nameCard"
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
                <small>
                  {getErrorMessage('validate', form.errors.validate)}
                </small>
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
      </form>

      {isConfirmationOpen && (
        <CartContainer className="is-open">
          <OverlayConfirm onClick={closePayment} />
          <Sidebar>
            <h2>Pedido realizado - {orderId}</h2>
            <p>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.
              <br /> <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras.
              <br /> <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição.
              <br /> <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite!
            </p>
            <ButtonContainer
              size="big"
              title="Concluir"
              type="button"
              onClick={closePayment}
            >
              Concluir
            </ButtonContainer>
          </Sidebar>
        </CartContainer>
      )}
    </>
  );
};

export default Payment;
