import React, { useState } from 'react';
import Foods from '../Foods';
import { Container, List, Modal, ModalContent, CloseButton } from './styles';
import { CardapioItem } from '../pages/Home';

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
              <span>
                Adicionar ao carrinho - {formatPrice(selectedPrato.preco)}
              </span>
            </p>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Cardapio;
