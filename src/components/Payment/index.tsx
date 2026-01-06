import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducer } from '../../store';
import { close } from '../../store/reducers/payment';
import { open as openDelivery } from '../../store/reducers/delivery';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { usePurchaseMutation } from '../../services/api';

import {
  Overlay,
  CartContainer,
  Sidebar,
  ButtonContainer,
  Row,
  OverlayConfirm,
} from './styles';

const Payment = () => {
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);
  const [orderId, setOrderId] = useState<number | null>(null);
  const { items } = useSelector((state: RootReducer) => state.cart);
  const { isOpen } = useSelector((state: RootReducer) => state.payment);
  const dispatch = useDispatch();
  const [purchase] = usePurchaseMutation();

  const formatPrice = (price: number) =>
    new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);

  const getTotalPrice = () => items.reduce((acc, val) => acc + val.preco, 0);

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
      nameCard: Yup.string().min(5).required(),
      numberCard: Yup.string().length(16).required(),
      validate: Yup.string().length(3).required(),
      expiresMonth: Yup.number().min(1).max(12).required(),
      expiresYear: Yup.number()
        .min(new Date().getFullYear())
        .max(new Date().getFullYear() + 20)
        .required(),
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
          products: items.map((item) => ({ id: item.id, price: item.preco })),
        });

        setOrderId(response.data.orderId);
        setConfirmationOpen(true);
      } catch (error) {
        console.error(error);
      }
    },
  });

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
                  type="text"
                  {...form.getFieldProps('nameCard')}
                />
              </div>
            </Row>

            <Row>
              <div>
                <label htmlFor="numberCard">Número do cartão</label>
                <input
                  id="numberCard"
                  type="text"
                  {...form.getFieldProps('numberCard')}
                />
              </div>
              <div>
                <label htmlFor="validate">CVV</label>
                <input
                  id="validate"
                  type="text"
                  {...form.getFieldProps('validate')}
                />
              </div>
            </Row>

            <Row>
              <div>
                <label htmlFor="expiresMonth">Mês</label>
                <input
                  id="expiresMonth"
                  type="text"
                  {...form.getFieldProps('expiresMonth')}
                />
              </div>
              <div>
                <label htmlFor="expiresYear">Ano</label>
                <input
                  id="expiresYear"
                  type="text"
                  {...form.getFieldProps('expiresYear')}
                />
              </div>
            </Row>

            <Row>
              <ButtonContainer type="submit">
                Finalizar pagamento
              </ButtonContainer>
            </Row>
            <Row>
              <ButtonContainer type="button" onClick={goToDelivery}>
                Voltar para endereço
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
            <p>Seu pedido está em processamento!</p>
            <ButtonContainer type="button" onClick={closePayment}>
              Concluir
            </ButtonContainer>
          </Sidebar>
        </CartContainer>
      )}
    </>
  );
};

export default Payment;
