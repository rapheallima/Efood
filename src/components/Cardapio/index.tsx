import React, { useState } from 'react';
import Foods from '../Foods';
import { Container, List, Modal, ModalContent, CloseButton } from './styles';
import { CardapioItem } from '../pages/Home';

export type Props = {
  pratos: CardapioItem[];
  background: 'white' | 'orange';
};

const Cardapio = ({ pratos, background }: Props) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedPrato, setSelectedPrato] = useState<CardapioItem | null>(null);

  const handleImageClick = (image: string, item: CardapioItem) => {
    setSelectedImage(image);
    setSelectedPrato(item);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
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
            onClick={() => handleImageClick(item.foto, item)}
            tags={[]}
            tipo={item.porcao}
            nota={formatPrice(item.preco)}
            btnText="Adicionar ao carrinho"
          />
        ))}
      </List>
      {selectedImage && selectedPrato && (
        <Modal>
          <ModalContent background={background}>
            <CloseButton onClick={handleCloseModal}>X</CloseButton>
            <img src={selectedImage} alt="Enlarged view" />
            <p>
              <h2>{selectedPrato.nome}</h2>
              <br />
              {selectedPrato.descricao} <br />
              <br />
              Serve {selectedPrato.porcao}
              <br />
              <br />
              <span>
                Adicionar ao carrinhho - {formatPrice(selectedPrato.preco)}
              </span>
            </p>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default Cardapio;
