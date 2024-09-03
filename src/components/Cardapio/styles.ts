import styled from 'styled-components';

import { CardProps } from '../Foods/styles';
import { breakpoints, cores } from '../../styles';

export const Container = styled.section<CardProps>`
  width: 100%;
  height: 100%;
  display: flex;
  padding: ${({ $background }) => ($background === 'white' ? '24px' : '16px')};
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul<CardProps>`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ $background }) => ($background === 'white' ? '48px 80px' : '32px')};

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  @media (max-width: ${breakpoints.tablet}) {
    max-width: 61%;
  }
`;

export const ModalContent = styled.div<{ background: 'white' | 'orange' }>`
  background: ${cores.laranja};
  position: relative;
  padding: 32px;
  width: 1024px;
  height: 344px;
  overflow: auto;
  display: flex;

  > p {
    color: ${cores.branca};
    padding-left: 24px;
    line-height: 22px;

    > a {
      background-color: ${cores.bege};
      color: ${cores.laranja};
      font-family: Roboto;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      padding: 4px;
      cursor: pointer;
      transition:
        background-color 0.2s ease,
        transform 0.2s ease;
    }

    a:active {
      background-color: ${cores.laranja};
      color: ${cores.bege};
      transform: translateY(2px);
    }
  }

  > img {
    width: 280px;
    height: 280px;
  }

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    align-items: center;

    > p {
      padding-left: 0;
      text-align: center;
      margin-top: 16px;
    }

    > img {
      width: 100%;
      height: auto;
      margin-bottom: 16px;
    }
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${cores.branca};
`;
