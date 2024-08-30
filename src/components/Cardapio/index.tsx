import { useState } from 'react';
import Foods from '../Foods';
import { Container, List, Modal, ModalContent, CloseButton } from './styles';
import { CardapioItem } from '../pages/Home';
import { useDispatch } from 'react-redux';

import { add } from '../../store/reducers/cart';

export type Props = {
  pratos: CardapioItem[];
  background: 'white' | 'orange';
};

const Cardapio = ({ pratos, background }: Props) => {
  const [selectedPrato, setSelectedPrato] = useState<CardapioItem | null>(null);

  const handleShowModal = (item: CardapioItem) => {
    setSelectedPrato(item);
  };

  const handleCloseModal = () => {
    setSelectedPrato(null);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  };

  const dispatch = useDispatch();

  const createRestauranteFromItem = (item: CardapioItem): CardapioItem => ({
    foto: item.foto,
    preco: item.preco,
    id: item.id,
    nome: item.nome,
    descricao: item.descricao,
    porcao: item.porcao,
  });

  const addToCart = (item: CardapioItem) => {
    const restauranteItem = createRestauranteFromItem(item);
    dispatch(add(restauranteItem));
  };

  return (
    <Container $background={background}>
      <List $background={background}>
        {pratos.map((item) => (
          <Foods
            key={item.id}
            image={item.foto}
            name={item.nome}
            description={item.descricao}
            id={item.id}
            btnType="button"
            background={background}
            onClick={() => handleShowModal(item)}
            tags={[]}
            tipo={item.porcao}
            nota={formatPrice(item.preco)}
            btnText="Mais detalhes"
          />
        ))}
      </List>
      {selectedPrato && (
        <Modal>
          <ModalContent background={background}>
            <CloseButton onClick={handleCloseModal}>X</CloseButton>
            <img src={selectedPrato.foto} alt="Enlarged view" />
            <p>
              <h2>{selectedPrato.nome}</h2>
              <br />
              {selectedPrato.descricao} <br />
              <br />
              Serve {selectedPrato.porcao}
              <br />
              <br />
              <a onClick={() => addToCart(selectedPrato)}>
                Adicionar ao carrinho - {formatPrice(selectedPrato.preco)}
              </a>
            </p>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Cardapio;
